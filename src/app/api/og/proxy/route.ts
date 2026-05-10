export const runtime = 'edge';
import { ImageResponse } from 'next/og';
import { baseURL, person } from "@/resources";

export async function GET(request: Request) {
    let url = new URL(request.url);
    const title = url.searchParams.get('title') || person.name;

    return new ImageResponse(
        (
            <div style={{ display: 'flex', background: 'black', width: '100%', height: '100%', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <h1>{title}</h1>
            </div>
        ),
        { width: 1200, height: 630 }
    );
}
