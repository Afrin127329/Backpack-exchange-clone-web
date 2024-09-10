import { NextRequest, NextResponse } from "next/server";
// Create a simple in-memory cache (can be expanded or replaced with Redis or other solutions)
let cache: { [key: string]: { data: any; timestamp: number } } = {};
const CACHE_DURATION = 60 * 1000; // Cache for 1 minute
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const coinId = searchParams.get("coinId") || "No Id";
  const days = searchParams.get("days") || 7;

  if (!coinId || !days) {
    return new Response("Missing parameters", { status: 400 });
  }

  const cacheKey = `${coinId}-${days}`;
  const currentTime = new Date().getTime();

  // Check if the response is already cached and not expired
  if (
    cache[cacheKey] &&
    currentTime - cache[cacheKey].timestamp < CACHE_DURATION
  ) {
    return NextResponse.json(cache[cacheKey].data);
  }

  try {
    // Construct the CoinGecko API URL
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;

    // Fetch data from CoinGecko API
    const apiRes = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        x_cg_demo_api_key: process.env.NEXT_PUBLIC_COIN_GECKO_API_KEY, // Replace this with an actual key if needed
      } as HeadersInit,
    });

    // Check if the response is OK
    if (!apiRes.ok) {
      return NextResponse.json({
        error: `Failed to fetch data: ${apiRes.statusText}`,
      });
    }

    // Parse the result
    const data = await apiRes.json();
    // const data = { message: `${coinId}! has ${days} days` };

    // Cache the result with a timestamp
    cache[cacheKey] = {
      data,
      timestamp: currentTime,
    };

    // Send data back to the client
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}
