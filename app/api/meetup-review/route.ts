import { z } from 'zod';

export const runtime = 'nodejs';
const schema = z.object({
  submissionId: z.string().uuid(),
  eventDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
    const date = new Date(value);
    return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }),
  rating: z.number().int().min(1).max(5),
  nickname: z.string().trim().max(40),
  review: z.string().trim().min(1).max(1000),
  consent: z.literal(true),
  website: z.string().max(0),
});

export async function POST(request: Request) {
  const reply = (error: string, status: number) => Response.json({ ok: false, error }, { status });
  const origin = request.headers.get('origin');
  try {
    // CloudFront forwards the request to info.ddakji.kr without the viewer Host.
    // Accept the exact public site origins as well as same-origin previews/local use.
    const publicOrigins = new Set(['https://ddakji.kr', 'https://www.ddakji.kr']);
    if (!origin || (!publicOrigins.has(origin) && new URL(origin).host !== request.headers.get('host'))) {
      return reply('forbidden', 403);
    }
  } catch { return reply('forbidden', 403); }
  if (!request.headers.get('content-type')?.startsWith('application/json')) return reply('invalid', 415);
  const endpoint = process.env.MEETUP_REVIEW_SCRIPT_URL;
  const secret = process.env.MEETUP_REVIEW_SECRET;
  if (!endpoint || !secret || secret.length < 32) return reply('unavailable', 503);
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint)) return reply('unavailable', 503);
  try {
    const raw = await request.text();
    if (raw.length > 12000) return reply('invalid', 413);
    const result = schema.safeParse(JSON.parse(raw));
    if (!result.success) return reply('invalid', 400);
    const response = await fetch(endpoint, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...result.data, secret }),
      signal: AbortSignal.timeout(20000), cache: 'no-store',
    });
    if (!response.ok) return reply('save_failed', 502);
    const saved = await response.json();
    if (saved.ok !== true) return reply('save_failed', 502);
    return Response.json({ ok: true });
  } catch {
    return reply('save_failed', 502);
  }
}
