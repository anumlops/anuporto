import { neon } from '@neondatabase/serverless';

const sql = neon(import.meta.env.DATABASE_URL);

export interface DailyLog {
  id: string;
  slug: string;
  title: string;
  content: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  published: boolean;
}

export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  long_desc: string;
  tech_stack: string[];
  repo_url: string;
  demo_url: string;
  featured: boolean;
  created_at: string;
}

export async function getDailyLogs(): Promise<DailyLog[]> {
  const rows = await sql`SELECT * FROM daily_logs WHERE published = true ORDER BY created_at DESC`;
  return rows as DailyLog[];
}

export async function getDailyLog(slug: string): Promise<DailyLog | null> {
  const rows = await sql`SELECT * FROM daily_logs WHERE slug = ${slug} AND published = true LIMIT 1`;
  return (rows as DailyLog[])[0] ?? null;
}

export async function createDailyLog(slug: string, title: string, content: string, tags: string[]): Promise<DailyLog> {
  const rows = await sql`
    INSERT INTO daily_logs (slug, title, content, tags)
    VALUES (${slug}, ${title}, ${content}, ${tags})
    RETURNING *
  `;
  return (rows as DailyLog[])[0];
}

export async function getTools(): Promise<Tool[]> {
  const rows = await sql`SELECT * FROM tools ORDER BY featured DESC, created_at DESC`;
  return rows as Tool[];
}

export async function getTool(slug: string): Promise<Tool | null> {
  const rows = await sql`SELECT * FROM tools WHERE slug = ${slug} LIMIT 1`;
  return (rows as Tool[])[0] ?? null;
}
