import {
  Code,
  Monitor,
  Server,
  Database,
  Cloud,
  Wrench,
} from 'lucide-react';

export interface Skill {
  name: string;
  projects: string[];
}

export interface SkillCategory {
  category: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: Code,
    color: '#00bfff',
    skills: [
      { name: 'Java', projects: [] },
      { name: 'JavaScript', projects: [] },
      { name: 'Python', projects: [] },
    ],
  },

  {
    category: 'Frontend Development',
    icon: Monitor,
    color: '#8a2be2',
    skills: [
      { name: 'HTML', projects: [] },
      { name: 'CSS', projects: [] },
      { name: 'JavaScript', projects: [] },
      { name: 'React', projects: [] },
    ],
  },

  {
    category: 'Backend & APIs',
    icon: Server,
    color: '#ff6b6b',
    skills: [
      { name: 'Node.js', projects: [] },
      { name: 'Express.js', projects: [] },
      { name: 'REST APIs', projects: [] },
      { name: 'CRUD Operations', projects: [] },
    ],
  },

  {
    category: 'Databases',
    icon: Database,
    color: '#f59e0b',
    skills: [
      { name: 'MongoDB', projects: [] },
      { name: 'MySQL', projects: [] },
      { name: 'SQL', projects: [] },
    ],
  },

  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    color: '#ec4899',
    skills: [
      { name: 'AWS', projects: [] },
      { name: 'Docker', projects: [] },
      { name: 'Kubernetes', projects: [] },
      { name: 'Jenkins', projects: [] },
      { name: 'CI/CD', projects: [] },
      { name: 'Linux', projects: [] },
    ],
  },

  {
    category: 'Core CS & Tools',
    icon: Wrench,
    color: '#50c878',
    skills: [
      { name: 'Data Structures & Algorithms', projects: [] },
      { name: 'OOP', projects: [] },
      { name: 'DBMS', projects: [] },
      { name: 'Operating Systems', projects: [] },
      { name: 'Computer Networks', projects: [] },
      { name: 'Git', projects: [] },
      { name: 'GitHub', projects: [] },
    ],
  },
];