export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');
    if (!url) return new Response("Missing URL", { status: 400 });

    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Response(blob, { 
            headers: { "Content-Type": response.headers.get("Content-Type") || "image/jpeg" } 
        });
    } catch (e) {
        return new Response("Failed to fetch image", { status: 500 });
    }
}
