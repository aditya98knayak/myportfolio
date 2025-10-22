export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  highlights: string[];
}

export interface ContactInfo {
  label: string;
  value: string;
  href: string;
}
