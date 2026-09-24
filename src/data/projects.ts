export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  category: 'featured' | 'secondary';
  priority: number;
  featured: boolean;
  visualizationType:
    | 'security-core'
    | 'ai-engine'
    | 'threat-radar'
    | 'threat-network'
    | 'monitoring-grid'
    | 'default';
  technologies: string[];
  githubUrl: string;
  demoUrl?: string | null;
  pipelineImageUrl?: string | null;
  pipelineLabel?: string;
  homepageUrl?: string | null;
  language?: string;
  topics?: string[];
  updatedAt: string;
}

export const featuredProjects: Project[] = [
  // --------------------------------------------------
  // 1. DebugVision
  // --------------------------------------------------
  {
    id: 'debugvision',
    name: 'DebugVision',
    slug: 'debugvision',
    description:
      'An AI-powered VS Code extension that helps developers understand compiler errors, analyze code issues, and get context-aware debugging assistance.',
    longDescription:
      'DebugVision is a developer-focused VS Code extension designed to make debugging easier through AI-assisted error analysis and contextual code understanding.',
    category: 'featured',
    priority: 1,
    featured: true,
    visualizationType: 'ai-engine',
    technologies: [
      'TypeScript',
      'VS Code Extension',
      'Node.js',
      'LLMs',
      'REST APIs',
      'AI',
    ],
    githubUrl: 'https://github.com/manjugowda-l/Debug_Vision',
    demoUrl: 'https://youtu.be/vT51XqezIaE',
    language: 'TypeScript',
    topics: [
      'AI',
      'VS Code',
      'Developer Tools',
      'Debugging',
    ],
    updatedAt: '2026-09-24',
  },

  // --------------------------------------------------
  // 2. AI Learning Intelligence System
  // --------------------------------------------------
  {
    id: 'ai-learning-intelligence',
    name: 'AI Learning Intelligence System',
    slug: 'ai-learning-intelligence',
    description:
      'A browser extension and backend system that tracks learning activity across educational platforms and turns study behavior into structured learning insights.',
    longDescription:
      'The AI Learning Intelligence System captures learning activity through a browser extension, stores raw events, and processes them into useful learning analytics such as topic detection, summaries, quizzes, flashcards, and progress insights.',
    category: 'featured',
    priority: 2,
    featured: true,
    visualizationType: 'monitoring-grid',
    technologies: [
      'JavaScript',
      'Node.js',
      'MongoDB',
      'REST APIs',
      'Browser Extension',
      'AI',
      'Express.js',
    ],
    githubUrl:
      'https://github.com/manjugowda-l/ai-learning-intelligence-system',
    demoUrl: 'https://youtu.be/NZyQOrWVJKU',
    language: 'JavaScript',
    topics: [
      'AI',
      'Browser Extension',
      'Learning Analytics',
      'MongoDB',
      'Node.js',
    ],
    updatedAt: '2026-09-24',
  },

  // --------------------------------------------------
  // 3. CI/CD Pipeline Automation
  // --------------------------------------------------
  {
    id: 'cicd-pipeline',
    name: 'CI/CD Pipeline Automation',
    slug: 'cicd-pipeline',
    description:
      'An automated CI/CD workflow integrating GitHub, Jenkins, Maven, SonarQube, Docker, Kubernetes, and Argo CD for continuous integration and deployment.',
    longDescription:
      'A DevOps-focused project demonstrating an automated software delivery pipeline from source code and build validation to containerization and Kubernetes deployment.',
    category: 'featured',
    priority: 3,
    featured: true,
    visualizationType: 'security-core',
    technologies: [
      'GitHub',
      'Jenkins',
      'Maven',
      'SonarQube',
      'Docker',
      'Kubernetes',
      'Argo CD',
    ],
    githubUrl: 'https://github.com/manjugowda-l/CICD',
    demoUrl: null,
    pipelineImageUrl: '/CICD.jpeg',
    pipelineLabel: 'Pipeline Flow',
    language: 'YAML',
    topics: [
      'CI/CD',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'Argo CD',
      'DevOps',
    ],
    updatedAt: '2026-09-24',
  },
];

export const secondaryProjects: Project[] = [];
export function getProjectBySlug(slug: string): Project | undefined {
  return [...featuredProjects, ...secondaryProjects].find(
    (project) => project.slug === slug
  );
}