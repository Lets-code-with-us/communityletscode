export interface Project {
  name: string;
  description: string;
  link: string;
  technologies: string[];
  image?: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  rating?: string;
  link: string;
}

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  image: string;
  bio: string;
  resumeLink: string;
  skills: string[];
  languages: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  codingProfiles: CodingProfile[];
  achievements: string[];
  social: {
    github: string;
    linkedin: string;
    website: string;
    twitter?: string;
  };
}