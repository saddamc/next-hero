
export async function GET() {
    return Response.json({
        currentTime: new Date().toLocaleTimeString()
    })
}

export async function fetchTime() {
    const servers = [
      process.env.NEXT_PUBLIC_TIME, // Primary URL (Vercel)
      'http://localhost:3000/time'  // Fallback URL (local)
    ];
}