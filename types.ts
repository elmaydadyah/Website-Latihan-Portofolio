
export interface Project {
  id: string;
  slug: string;
  title: string;
  code: string;
  date: string;
  client: string;
  image: string;
  description?: string;
  scope?: string;
  collaborators?: string[];
  extraImages?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  description: string;
  year: string;
}

export interface Award {
  id: string;
  organization: string;
  year: string;
  details: string[];
}

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  link?: string;
}
