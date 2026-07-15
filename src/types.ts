export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  type: 'android' | 'ai' | 'web';
  featured: boolean;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  companyDetail?: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  cgpa: string;
}

export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  category: 'languages' | 'android' | 'web' | 'tools' | 'concepts';
  iconName?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  previewUrl?: string;
  bullets?: string[];
}
