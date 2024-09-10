import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const coinIds = searchParams.get("ids") || "Missing Ids";
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        x_cg_demo_api_key: process.env.NEXT_PUBLIC_COIN_GECKO_API_KEY,
        "Access-Control-Allow-Origin": "*",
      } as HeadersInit,
    });

    if (!res.ok) {
      return NextResponse.json({
        error: `Failed to fetch data: ${res.statusText}`,
        status: res.status,
      });
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}
