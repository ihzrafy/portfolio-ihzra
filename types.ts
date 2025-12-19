
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  images?: string[]; // Added for project gallery
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  role: string;
  description: string;
  projects: Project[];
  logo?: string; // Added for company logo
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
