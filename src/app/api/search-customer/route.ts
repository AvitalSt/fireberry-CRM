import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const token = process.env.FIREBERRY_API_TOKEN;

    if (!token) {
      return NextResponse.json({ error: "Missing Token" }, { status: 500 });
    }
    console.log("My Token:", token)

    const body = {
      objecttype: 2,
      page_size: 50,
      page_number: 1,
      fields: "accountname,telephone1,emailaddress1",
      query: `(accountname start-with '${text}')`,
    };

    const res = await fetch("https://api.powerlink.co.il/api/query", {
      method: "POST",
      headers: {
        "token": token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "API Error" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}