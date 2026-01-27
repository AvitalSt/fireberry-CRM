import { NextResponse } from "next/server";

const FIREBERRY_BASE_URL = "https://app.fireberry.com/api/v2";

export async function GET() {
  try {
    const res = await fetch(`${FIREBERRY_BASE_URL}/user/info`, {
      credentials: "include",
    });

    if (!res.ok) {
      console.warn("Fireberry /user/info returned", res.status);
      return NextResponse.json({ name: "משתמשת" });
    }

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({ name: data.fullName || "משתמשת" });
    }
  } catch (err) {
    console.error("Fireberry /user/info request failed:", err);
    return NextResponse.json({ name: "משתמשת" });
  }
}
