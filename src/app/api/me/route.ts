import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.FIREBERRY_API_TOKEN;
  const userId = process.env.FIREBERRY_USER_ID;

  if (!token || !userId) {
    return NextResponse.json(
      { error: "Missing Fireberry credentials" },
      { status: 500 }
    );
  }

  const res = await fetch(
    `https://app.fireberry.com/api/v2/record/9/${userId}/getrecord`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: res.json },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json({
    name: data.firstname || "משתמשת"
  });
}
