export type FilterCategory = 'All' | 'Web Design' | 'Branding' | 'Development' | 'Digital Experience';

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  client: string;
  year: string;
  category: 'Web Design' | 'Branding' | 'Development' | 'Digital Experience';
  services: string[];
  summary: string;
  challenge: string;
  strategy: string;
  designProcess: string;
  solution: string;
  deliverables: string[];
  results: {
    metric: string;
    label: string;
  }[];
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
    aspectRatio?: 'wide' | 'tall' | 'square';
  }[];
  featured: boolean;
  accentColor?: string;
}

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  shortDesc: string;
  detailedExplanation: string;
  deliverables: string[];
  technologies: string[];
  highlight: string;
  visualPreview: {
    image: string;
    tag: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  highlightMetric?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  discipline: string;
  bio: string;
  image: string;
  experienceYears: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  serviceRequired: string[];
  budget: string;
  projectDetails: string;
}
