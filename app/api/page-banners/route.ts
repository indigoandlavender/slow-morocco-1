import { NextResponse } from "next/server";
import { google } from "googleapis";

const SHEET_ID = process.env.GOOGLE_SHEET_ID || "1pXP4zRis6vqPFNPEAj0jLe3JU9QpN_isImwY6-wtt04";

function getAuth() {
  const credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (!credentials) {
    throw new Error("Google credentials not configured");
  }
  const parsed = JSON.parse(credentials);
  return new google.auth.GoogleAuth({
    credentials: parsed,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
}

function convertGoogleDriveUrl(url: string | undefined): string {
  if (!url) return "";
  
  // Handle Google Drive file links
  const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch) {
    return `https://drive.google.com/uc?export=view&id=${driveMatch[1]}`;
  }
  
  // Handle direct Google Drive export links
  if (url.includes("drive.google.com") && url.includes("id=")) {
    return url;
  }
  
  return url;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "Page_Banners!A:F",
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) {
      return NextResponse.json({ banners: [], banner: null });
    }

    const headers = rows[0].map((h: string) => h.toLowerCase().replace(/\s+/g, "_"));
    const banners = rows.slice(1).map((row: any[]) => {
      const banner: any = {};
      headers.forEach((header: string, index: number) => {
        banner[header] = row[index] || "";
      });
      
      // Convert image URL
      if (banner.hero_image_url) {
        banner.hero_image_url = convertGoogleDriveUrl(banner.hero_image_url);
      }
      
      return banner;
    });

    // If slug provided, return single banner
    if (slug) {
      const banner = banners.find((b: any) => b.page_slug === slug);
      return NextResponse.json({ banner: banner || null });
    }

    return NextResponse.json({ banners });
  } catch (error) {
    console.error("Page Banners API error:", error);
    return NextResponse.json({ error: "Failed to fetch page banners", banners: [], banner: null }, { status: 500 });
  }
}
