import type { APIRoute } from 'astro';
import { createDailyLog } from '../../lib/neon';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const auth = request.headers.get('authorization');
  const expected = import.meta.env.ADMIN_PASSWORD;

  if (!expected || auth !== `Bearer ${expected}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const body = await request.json();
    const { slug, title, content, tags } = body;

    if (!slug || !title || !content) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const log = await createDailyLog(slug, title, content, tags || []);
    return new Response(JSON.stringify(log), { status: 201 });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500 });
  }
};
