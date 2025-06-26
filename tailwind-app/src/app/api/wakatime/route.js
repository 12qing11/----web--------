export async function GET() {
  try {
    const response = await fetch('https://wakatime.com/api/v1/users/current/all_time_since_today', {
      headers: {
        Authorization: `Bearer ${process.env.WAKATIME_API_KEY}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      return Response.json(
        { 
          error: errorData.error || 'WakaTime API请求失败',
          status: response.status 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { 
        error: '服务器连接失败',
        details: error.message 
      },
      { status: 500 }
    );
  }
}