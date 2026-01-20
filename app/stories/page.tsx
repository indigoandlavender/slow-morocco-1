"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Story {
  slug: string;
  title: string;
  subtitle?: string;
  mood?: string;
  heroImage?: string;
  excerpt?: string;
}

function StoriesContent() {
  const searchParams = useSearchParams();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "fierce", label: "Fierce" },
    { id: "tender", label: "Tender" },
    { id: "sacred", label: "Sacred" },
    { id: "golden", label: "Golden" },
  ];

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then((data) => {
        setStories(data.stories || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredStories =
    activeFilter === "all"
      ? stories
      : stories.filter((s) =>
          s.mood?.toLowerCase() === activeFilter.toLowerCase()
        );

  const featuredStory = filteredStories[0];
  const remainingStories = filteredStories.slice(1);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-6">
              The Edit
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Stories worth knowing
            </h1>
            <p className="text-foreground/60 leading-relaxed text-sm max-w-xl">
              The history, craft, and culture that make Morocco make sense.
              Understanding its layers transforms a trip into a revelation.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-20 md:top-24 bg-background z-40">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-[11px] tracking-[0.15em] uppercase whitespace-nowrap pb-1 transition-colors ${
                  activeFilter === filter.id
                    ? "text-foreground border-b border-foreground"
                    : "text-foreground/40 hover:text-foreground/70"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-6 h-6 border border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
            </div>
          ) : filteredStories.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground/50 mb-4">No stories match this filter.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="text-sm underline text-foreground/60 hover:text-foreground transition-colors"
              >
                View all stories
              </button>
            </div>
          ) : (
            <>
              {/* Featured Story - Large */}
              {featuredStory && (
                <Link
                  href={`/story/${featuredStory.slug}`}
                  className="group block mb-20 md:mb-28"
                >
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="w-full md:w-2/3">
                      <div className="aspect-[16/10] relative overflow-hidden bg-[#d4cdc4]">
                        {featuredStory.heroImage && (
                          <Image
                            src={featuredStory.heroImage}
                            alt={featuredStory.title}
                            fill
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                          />
                        )}
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col justify-center">
                      {featuredStory.mood && (
                        <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-4">
                          {featuredStory.mood}
                        </p>
                      )}
                      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 group-hover:text-foreground/70 transition-colors">
                        {featuredStory.title}
                      </h2>
                      {featuredStory.excerpt && (
                        <p className="text-sm text-foreground/60 leading-relaxed line-clamp-3">
                          {featuredStory.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              )}

              {/* Grid of remaining stories */}
              {remainingStories.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {remainingStories.map((story) => (
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
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-28 bg-[#f5f2ed]">
        <div className="container mx-auto px-8 md:px-16 lg:px-20 text-center max-w-2xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-4">
            Stay Curious
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Get stories in your inbox
          </h2>
          <p className="text-foreground/60 mb-10 text-sm">
            New stories, cultural insights, and journey inspiration. No spam, just depth.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-foreground px-10 py-4 text-xs tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Subscribe
          </Link>
        </div>
      </section>
    </div>
  );
}

function StoriesLoading() {
  return (
    <div className="bg-background min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-6">
              The Edit
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Stories worth knowing
            </h1>
          </div>
        </div>
      </section>
      <div className="flex justify-center py-24">
        <div className="w-6 h-6 border border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
      </div>
    </div>
  );
}

export default function StoriesPage() {
  return (
    <Suspense fallback={<StoriesLoading />}>
      <StoriesContent />
    </Suspense>
  );
}
