import { getCollection } from 'astro:content';

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  github?: string;
  demo?: string;
  featured: boolean;
  body: string;
}

export async function getAllProjects(): Promise<Project[]> {
  const entries = await getCollection('projects');
  return entries
    .map((e) => ({
      slug: e.id.replace(/\.md$/, ''),
      ...e.data,
      body: e.body,
    }))
    .sort((a, b) => Number(b.year) - Number(a.year));
}

export async function getProject(slug: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}
