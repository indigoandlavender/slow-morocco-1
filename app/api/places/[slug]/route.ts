import { NextResponse } from "next/server";
import { getSheetData } from "@/lib/sheets";

export const revalidate = 60;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const placesData = await getSheetData("places");
    
    const place = placesData.find((p: any) => p.slug === slug);
    
    if (!place) {
      return NextResponse.json(
        { success: false, error: "Place not found" },
        { status: 404 }
      );
    }

    // Get place images if available
    let images: any[] = [];
    try {
      const imagesData = await getSheetData("place_images");
      images = imagesData
        .filter((img: any) => img.place_slug === slug)
        .map((img: any) => ({
          url: img.image_url || img.url || "",
          caption: img.caption || "",
          order: parseInt(img.order) || 0,
        }))
        .sort((a: any, b: any) => a.order - b.order);
    } catch (e) {
      console.warn("Could not fetch place_images");
    }

    return NextResponse.json({
      success: true,
      place: {
        slug: place.slug || "",
        title: place.title || "",
        destination: place.destination || "",
        category: place.category || "",
        address: place.address || "",
        openingHours: place.opening_hours || "",
        fees: place.fees || "",
        notes: place.notes || "",
        heroImage: place.heroImage || "",
        heroCaption: place.heroCaption || "",
        excerpt: place.excerpt || "",
        body: place.body || "",
        sources: place.sources || "",
        tags: place.tags || "",
        images,
      },
    });
  } catch (error: any) {
    console.error("GET /api/places/[slug] error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
