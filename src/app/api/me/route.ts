import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token = process.env.FIREBERRY_API_TOKEN;
    const url = "https://api.fireberry.com/api/v2/user/info";

    if (!token) {
      console.error("Missing FIREBERRY_API_TOKEN in environment variables");
    }
    
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": token || "",
      },
    });

    if (!res.ok) {
      throw new Error(`Fireberry returned ${res.status}`);
    }

    const data = await res.json();

    const fullName = data.fullName || "משתמשת";
    const firstName = fullName.split(" ")[0];

    return NextResponse.json({ name: firstName });
  } catch (error) {
    console.error("Server Route Error:", error);
    return NextResponse.json({ name: "אביטל" }, { status: 500 });
  }
}
