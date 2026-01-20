"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Settings {
  hero_image_url?: string;
  hero_title?: string;
  hero_subtitle?: string;
  featured_image_1?: string;
  featured_image_2?: string;
}

interface Journey {
  slug: string;
  title: string;
  description?: string;
  heroImage?: string;
  duration?: string;
  destinations?: string;
}

interface Story {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  heroImage?: string;
  mood?: string;
}

export default function HomePage() {
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [settings, setSettings] = useState<Settings>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/journeys").then((r) => r.json()),
      fetch("/api/settings").then((r) => r.json()),
      fetch("/api/stories").then((r) => r.json()),
    ])
      .then(([journeysData, settingsData, storiesData]) => {
        setJourneys(journeysData.journeys?.slice(0, 4) || []);
        setSettings(settingsData.settings || {});
        const allStories = storiesData.stories || [];
        setStories(allStories.filter((s: Story) => s.heroImage).slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const heroImage = settings.hero_image_url;

  return (
    <div className="bg-background min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════
          HERO: Split-screen with text left, image right
          ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left: Text content */}
        <div className="lg:w-1/2 flex items-center justify-center px-8 md:px-16 lg:px-20 py-32 lg:py-0 order-2 lg:order-1">
          <div className="max-w-md">
            <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-6">
              Cultural Journeys
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              Morocco moves<br />at its own pace
            </h1>
            <p className="text-foreground/60 leading-relaxed mb-10 text-sm">
              Private routes through ancient medinas, across high atlas passes, 
              into desert silence. Every journey shaped around what matters to you.
            </p>
            <Link
              href="/plan-your-trip"
              className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase group"
            >
              <span className="border-b border-foreground pb-1 group-hover:border-foreground/50 transition-colors">
                Begin your journey
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right: Full-bleed image */}
        <div className="lg:w-1/2 h-[60vh] lg:h-screen relative order-1 lg:order-2">
          {heroImage ? (
            <Image
              src={heroImage}
              alt="Morocco"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-[#d4cdc4]" />
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATEMENT: Large typography section
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-8">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-foreground/80">
              We don't do bucket lists. We build routes that let Morocco reveal 
              itself—<span className="italic">slowly</span>, on its own terms, 
              through the people and places that make it unforgettable.
            </h2>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          JOURNEYS: Stacked asymmetric layout (not carousel)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f5f2ed]">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-4">
                Journeys
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                Routes worth taking
              </h2>
            </div>
            <Link
              href="/journeys"
              className="mt-6 md:mt-0 text-xs tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors"
            >
              View all journeys →
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-6 h-6 border border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
            </div>
          ) : (
            <div className="space-y-16 md:space-y-24">
              {journeys.slice(0, 3).map((journey, index) => (
                <Link
                  key={journey.slug}
                  href={`/journeys/${journey.slug}`}
                  className="group block"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                    {/* Image */}
                    <div className="w-full md:w-3/5 relative">
                      <div className="aspect-[4/3] relative overflow-hidden bg-[#d4cdc4]">
                        {journey.heroImage && (
                          <Image
                            src={journey.heroImage}
                            alt={journey.title}
                            fill
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                          />
                        )}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="w-full md:w-2/5">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-4">
                        {journey.duration || "Multi-day journey"}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-foreground/70 transition-colors">
                        {journey.title}
                      </h3>
                      <p className="text-sm text-foreground/60 leading-relaxed mb-6 line-clamp-3">
                        {journey.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase">
                        <span className="border-b border-foreground/30 pb-0.5 group-hover:border-foreground transition-colors">
                          Explore
                        </span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FULL-BLEED IMAGE BREAK
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[50vh] md:h-[70vh]">
        {settings.featured_image_1 ? (
          <Image
            src={settings.featured_image_1}
            alt="Morocco landscape"
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[#8B7355]" />
        )}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white text-center px-8 max-w-3xl leading-relaxed italic">
            "Travel is the only thing you buy that makes you richer"
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STORIES: Magazine grid layout
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-4">
                The Edit
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                Stories worth knowing
              </h2>
            </div>
            <Link
              href="/stories"
              className="mt-6 md:mt-0 text-xs tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors"
            >
              All stories →
            </Link>
          </div>

          {stories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <Link
                  key={story.slug}
                  href={`/story/${story.slug}`}
                  className="group"
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-[#d4cdc4] mb-5">
                    {story.heroImage && (
                      <Image
                        src={story.heroImage}
                        alt={story.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    )}
                  </div>
                  {story.mood && (
                    <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-2">
                      {story.mood}
                    </p>
                  )}
                  <h3 className="font-serif text-xl mb-2 group-hover:text-foreground/70 transition-colors">
                    {story.title}
                  </h3>
                  {story.excerpt && (
                    <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2">
                      {story.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground/40 italic">Stories coming soon...</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HOW IT WORKS: Horizontal timeline
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#1a1916] text-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              The Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-serif text-lg">
                  1
                </span>
                <div className="hidden md:block flex-1 h-px bg-white/10 ml-4" />
              </div>
              <h3 className="font-serif text-xl mb-3">You reach out</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Tell us what's calling you. A journey that caught your eye. A question. 
                A sense that something here is yours.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-serif text-lg">
                  2
                </span>
                <div className="hidden md:block flex-1 h-px bg-white/10 ml-4" />
              </div>
              <h3 className="font-serif text-xl mb-3">We shape it</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                We build the route around what matters to you. Add days. Remove cities. 
                Stay longer where something pulls you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-serif text-lg">
                  3
                </span>
              </div>
              <h3 className="font-serif text-xl mb-3">You go</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Deposit secures your dates. Balance due 60 days before. 
                Then you pack light and show up.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 md:mt-20">
            <Link
              href="/plan-your-trip"
              className="inline-block bg-white text-[#1a1916] px-10 py-4 text-xs tracking-[0.15em] uppercase hover:bg-white/90 transition-colors"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA: Simple, editorial
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container mx-auto px-8 md:px-16 lg:px-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to go slowly?
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
            No forms. No packages. Just a conversation about what you're hoping to find.
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
