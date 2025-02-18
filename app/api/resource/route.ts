import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const fileID = request.nextUrl.searchParams.get("id");
  if (!fileID) {
    return NextResponse.json({ error: "Image ID is required" }, { status: 400 });
  }

  try {
    const s3Url = `https://ge.iitm.ac.in${fileID}`;
    const s3Response = await fetch(s3Url);
    if (!s3Response.ok) {
      return NextResponse.json({ error: "Failed to fetch image" }, { status: s3Response.status });
    }

    const arrayBuffer = await s3Response.arrayBuffer();
    const contentType = s3Response.headers.get("Content-Type") || "application/octet-stream";

    return new NextResponse(arrayBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error processing file:", error);
    return NextResponse.json({ error: "Error processing file" }, { status: 500 });
  }
}

export const revalidate = 31536000; // Cache for 1 year (in seconds)
