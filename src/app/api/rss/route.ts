export const runtime = 'edge';

export async function GET() {
  return new Response("RSS Feed is disabled on Edge. Check back later!", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
