const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix imports
  content = content.replace(/import\s*\{\s*([a-zA-Z0-9_,\s]+)\s*\}\s*from\s*'(\.\.?\/types\/[^']+)'/g, "import type { $1 } from '$2'");
  content = content.replace(/import\s*\{\s*([a-zA-Z0-9_,\s]+)\s*\}\s*from\s*'react'/g, (match, p1) => {
    if (p1.includes('HTMLAttributes') || p1.includes('ButtonHTMLAttributes') || p1.includes('ImgHTMLAttributes') || p1.includes('ReactNode') || p1.includes('ErrorInfo')) {
      return `import type { ${p1} } from 'react'`;
    }
    return match;
  });
  
  // Also we can just replace 'ReactNode' and 'ErrorInfo' specifically
  content = content.replace(/import\s*\{\s*(.*?)(ReactNode|ErrorInfo)(.*?)\s*\}\s*from\s*'react'/g, "import type { $1$2$3 } from 'react'");

  // Fix Instagram icon missing
  content = content.replace(/import\s*\{\s*Instagram\s*\}\s*from\s*'lucide-react';/g, `const Instagram = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);`);

  fs.writeFileSync(file, content);
});

console.log('Fixed types in ' + files.length + ' files.');
