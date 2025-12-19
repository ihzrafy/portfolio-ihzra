
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  role: string;
  description: string;
  projects: Project[];
}

export interface Education {
  institution: string;
  location: string;
  period: string;
  degree: string;
  grade?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
