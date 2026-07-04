const fs = require('fs');
const path = require('path');

const projectNames = [
  "@SelangkahMulai",
  "@CafeMargin.id",
  "@LifeMargin.co",
  "Live Margin Dashboard",
  "DataPulse Dashboard",
  "N2ND. Xolvon.ai",
  "CafeMargin SaaS MVP",
  "AttentionBoost, Content Journal cabang N2ND",
  "Vixual - VisualPop! By @projectxolvon",
  "Xclip.ai by @Projectxolvon",
  "Template Prompt One-Click Life/Margin",
  "Mulai.ai Materi Kuliah Web & Study Journal",
  "Data-Driven Attention Alert System",
  "Defense Narration System",
  "Cyber Defense System",
  "KontenMargin",
  "XFarming | Content Farming",
  "UMKMBoost",
  "Upcoming"
];

function getMediaForProject(index) {
  if (index === 19) return []; // Upcoming
  const dirPath = path.join(__dirname, `public/images/projects/P${index}`);
  if (!fs.existsSync(dirPath)) return [];
  
  const files = fs.readdirSync(dirPath);
  return files.map(file => {
    const ext = path.extname(file).toLowerCase();
    const type = ext === '.mp4' || ext === '.webm' ? 'video' : 'image';
    return {
      url: `/images/projects/P${index}/${file}`,
      type
    };
  });
}

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const projects = projectNames.map((name, i) => {
  const index = i + 1;
  const id = toSlug(name);
  const media = getMediaForProject(index);
  
  // Create fallback media if none found
  if (media.length === 0) {
    media.push({
      url: `https://placehold.co/600x400/6B21A8/ffffff?text=${encodeURIComponent(name)}`,
      type: 'image'
    });
  }

  return `  {
    id: '${id}',
    title: '${name.replace(/'/g, "\\'")}',
    category: ProjectCategory.DATA_INTELLIGENCE,
    shortDescription: 'Solution from ProjectXolvon addressing industry needs through Human-AI collaboration.',
    longDescription: 'This project demonstrates Xolvon\\'s commitment to creating effective digital solutions. Combining robust human oversight with machine scale, it addresses key operational challenges effectively.',
    features: [
      'Data-driven problem solving approach',
      'Human-AI operational synergy',
      'Scalable architecture design',
      'Focus on practical business outcomes'
    ],
    media: ${JSON.stringify(media, null, 6).replace(/}/g, '    }').replace(/]/g, '  ]')},
    ctaText: 'View Details',
    ctaLink: '#',
    tags: ['AI', 'Data', 'Operations'],
    launchNumber: ${index},
    status: ${index === 19 ? 'ProjectStatus.PRE_MVP' : 'ProjectStatus.ALPHA'}
  }`;
});

const content = `/**
 * Project data for Xolvon Comprehensive Marketplace Website
 * Contains all 19 ProjectXolvon alpha launch projects
 */

import type { Project } from '../types/project';
import { ProjectCategory, ProjectStatus } from '../types/project';

export const projects: Project[] = [
${projects.join(',\n')}
];

/**
 * Get project by ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category);
};

/**
 * Get projects by status
 */
export const getProjectsByStatus = (status: ProjectStatus): Project[] => {
  return projects.filter(project => project.status === status);
};

/**
 * Get projects by launch number range
 */
export const getProjectsByLaunchRange = (min: number, max: number): Project[] => {
  return projects.filter(project => project.launchNumber >= min && project.launchNumber <= max);
};

/**
 * Search projects by keyword
 */
export const searchProjects = (keyword: string): Project[] => {
  const lowerKeyword = keyword.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowerKeyword) ||
    project.shortDescription.toLowerCase().includes(lowerKeyword) ||
    project.longDescription.toLowerCase().includes(lowerKeyword) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
};
`;

fs.writeFileSync(path.join(__dirname, 'src/data/projects.ts'), content);
console.log('Successfully generated projects.ts');
