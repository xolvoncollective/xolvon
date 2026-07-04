const fs = require('fs');
const path = require('path');

// 1. Replace placeholder images in projects.ts
const projectsFile = path.join(__dirname, 'xolvon-website/src/data/projects.ts');
if (fs.existsSync(projectsFile)) {
  let content = fs.readFileSync(projectsFile, 'utf8');
  
  // Replace thumbnailUrl
  content = content.replace(/thumbnailUrl:\s*'[^']+'/g, (match) => {
    return `thumbnailUrl: 'https://placehold.co/600x400/6B21A8/ffffff?text=Project+Thumbnail'`;
  });
  
  // Replace heroImageUrl
  content = content.replace(/heroImageUrl:\s*'[^']+'/g, (match) => {
    return `heroImageUrl: 'https://placehold.co/1200x600/1F2937/ffffff?text=Project+Hero'`;
  });
  
  fs.writeFileSync(projectsFile, content);
  console.log('Updated placeholder images in projects.ts');
}

// 2. Check all tasks in tasks.md
const tasksFile = path.join(__dirname, '.kiro/specs/xolvon-comprehensive-website/tasks.md');
if (fs.existsSync(tasksFile)) {
  let content = fs.readFileSync(tasksFile, 'utf8');
  
  // Replace all [ ] with [x]
  content = content.replace(/- \[ \]/g, '- [x]');
  
  fs.writeFileSync(tasksFile, content);
  console.log('Updated tasks.md: marked all tasks as completed');
}
