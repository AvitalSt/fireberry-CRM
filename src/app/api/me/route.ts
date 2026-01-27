import { fireberryLinks } from "@/config/fireberryLinks";
import { NextResponse } from "next/server";

export async function GET() {
  const TOKEN_ID = process.env.FIREBERRY_API_TOKEN || "";
  
  try {
    const res = await fetch(fireberryLinks.userInfo, {
      headers: {
        tokenid: TOKEN_ID,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error(`Fireberry API Error: ${res.status}`);
      return NextResponse.json({ name: "" });
    }

    const data = await res.json();
    return NextResponse.json({ name: data.fullName || "" });
  } catch (err) {
    console.error("Connection Error:", err);
    return NextResponse.json({ name: "" });
  }
}
