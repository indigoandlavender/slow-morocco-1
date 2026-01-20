import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getSheetData, convertDriveUrl } from "@/lib/sheets";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "About Us | Slow Morocco",
  description:
    "We don't sell tours. We solve a problem. Twenty years in Morocco taught us what guidebooks can't.",
  openGraph: {
    title: "About Slow Morocco",
    description:
      "We don't sell tours. We solve a problem. Twenty years in Morocco taught us what guidebooks can't.",
    url: "https://slowmorocco.com/about",
  },
  alternates: {
    canonical: "https://slowmorocco.com/about",
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface TeamMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  bio: string;
  image: string;
}

async function getAboutContent() {
  try {
    const settingsData = await getSheetData("Website_Settings");
    const settings: { [key: string]: string } = {};
    settingsData.forEach((row: any) => {
      if (row.Key) settings[row.Key] = row.Value || "";
    });

    const teamData = await getSheetData("Website_Team");
    const team = teamData
      .filter((t: any) => {
        const pub = String(t.Published || "").toLowerCase().trim();
        return pub === "true" || pub === "yes" || pub === "1";
      })
      .sort(
        (a: any, b: any) =>
          (parseInt(a.Order) || 99) - (parseInt(b.Order) || 99)
      )
      .map((t: any) => ({
        id: t.Team_ID || "",
        name: t.Name || "",
        role: t.Role || "",
        quote: t.Quote || "",
        bio: t.Bio || "",
        image: t.Image_URL
          ? t.Image_URL.startsWith("/")
            ? t.Image_URL
            : convertDriveUrl(t.Image_URL)
          : "",
      }));

    return {
      settings,
      team: team as TeamMember[],
    };
  } catch (error) {
    console.error("Error fetching about content:", error);
    return { settings: {}, team: [] };
  }
}

export default async function AboutPage() {
  const { settings, team } = await getAboutContent();

  return (
    <div className="bg-background min-h-screen">
      {/* Immersive Hero Banner */}
      <PageBanner
        slug="about"
        fallback={{
          title: "We don't sell tours. We solve a problem.",
          subtitle: "Twenty years in Morocco taught us what guidebooks can't: which doors open, which people know, and why that matters.",
          label: "About Us",
        }}
      />

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-8">
              Our Philosophy
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-foreground/80 mb-8">
              "Morocco rewards slowness. The longer you stay in one place, the
              more layers reveal themselves—the hidden courtyards, the
              conversations, the rhythms that tourists never see."
            </blockquote>
            <p className="text-foreground/40 text-sm">
              — The Slow Morocco Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-[#f5f2ed]">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-6">
                What We Do
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Private journeys, built around you
              </h2>
              <div className="space-y-4 text-sm text-foreground/60 leading-relaxed">
                <p>
                  Every journey we create is private and fully customizable. You
                  travel only with your group, on routes shaped around what
                  matters to you.
                </p>
                <p>
                  We don't run group tours. We don't have fixed departures. We
                  build each route from scratch, drawing on twenty years of
                  relationships with guides, hosts, and craftspeople across
                  Morocco.
                </p>
                <p>
                  The result: access to places and people that most travelers
                  never find.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] relative bg-[#d4cdc4]">
              {settings.about_image_2 ? (
                <Image
                  src={settings.about_image_2}
                  alt="Morocco journey"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-[#c4bdb4]" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {team.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-8 md:px-16 lg:px-20">
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-4">
                The Team
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                The people behind the journeys
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {team.map((member) => (
                <div key={member.id} className="text-center">
                  <div className="aspect-square relative mb-6 bg-[#d4cdc4] overflow-hidden">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#c4bdb4]" />
                    )}
                  </div>
                  <h3 className="font-serif text-xl mb-1">{member.name}</h3>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-foreground/40 mb-4">
                    {member.role}
                  </p>
                  {member.quote && (
                    <p className="text-sm text-foreground/60 italic leading-relaxed">
                      "{member.quote}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#1a1916] text-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-4">
              Our Values
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              What we believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Depth over breadth</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Better to know one place well than to check boxes across ten.
                We'd rather you leave Morocco understanding something than just
                having seen it.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">People over places</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                The most memorable moments come from connections—with guides who
                share their knowledge, artisans who share their craft, hosts who
                share their homes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Slowness over speed</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Morocco rewards patience. The longer you stay in one place, the
                more it reveals. We build routes that give you time to discover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container mx-auto px-8 md:px-16 lg:px-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to start the conversation?
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
            Tell us what you're hoping to find in Morocco. We'll build a route
            around it.
          </p>
          <Link
            href="/plan-your-trip"
            className="inline-block border border-foreground px-10 py-4 text-xs tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Plan your trip
          </Link>
        </div>
      </section>
    </div>
  );
}
