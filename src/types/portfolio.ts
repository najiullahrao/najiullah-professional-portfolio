export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Path to icon or icon name from a library
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Tools' | 'Databases' | 'DevOps';
}

export interface Project {
  title: string;
  description: string;
  image: string; // Path to project screenshot
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  headline: string;
  avatar: string; // Path to avatar image
  aboutMe: string[]; // Array of paragraphs
  contactEmail: string;
  socialLinks: SocialLink[];
  skills: Skill[];
  projects: Project[];
  robotAnimationPath: string;
}


