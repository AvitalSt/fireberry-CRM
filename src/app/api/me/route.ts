import { NextResponse } from "next/server";

const FIREBERRY_BASE_URL = "https://app.fireberry.com/api/v2";

export async function GET() {
  const TOKEN_ID = process.env.FIREBERRY_API_TOKEN ||'';
  try {
    const res = await fetch(`${FIREBERRY_BASE_URL}/user/info`, {
      headers: {
        tokenid: TOKEN_ID,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.warn("Fireberry /user/info returned", res.status);
      return NextResponse.json({ name: "משתמשת" });
    }

    const data = await res.json();
    return NextResponse.json({ name: data.fullName || "משתמשת" });
  } catch (err) {
    console.error("Fireberry /user/info request failed:", err);
    return NextResponse.json({ name: "משתמשת" });
  }
}
