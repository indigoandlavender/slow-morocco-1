"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";

interface Journey {
  id: string;
  title: string;
  slug: string;
  heroImage: string;
  tagline: string;
  description: string;
  duration: number;
  price: number;
  cities: string;
  highlights: string[];
  accessibilityNotes: string[];
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  bio: string;
  image: string;
}

interface Settings {
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  founderNoteTitle: string;
  founderNoteBody: string;
  whatsappUrl: string;
  whatsappNumber: string;
  contactEmail: string;
  requirements: { title: string; description: string }[];
  promises: { title: string; description: string }[];
}

// Fallback data in case API fails
const fallbackExperiences: Journey[] = [
  {
    id: "gentle-1",
    title: "Marrakech & The Sea",
    slug: "marrakech-and-the-sea",
    duration: 7,
    tagline: "Gardens, galleries, and the Atlantic breeze",
    description: "Gardens at golden hour. Long lunches with ocean views. Two beautiful bases, one unhurried drive between them.",
    heroImage: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800",
    price: 2400,
    cities: "Marrakech, Essaouira",
    highlights: [],
    accessibilityNotes: [],
  },
  {
    id: "gentle-2",
    title: "Atlantic Coast",
    slug: "atlantic-coast",
    duration: 8,
    tagline: "Casablanca to Essaouira by the sea",
    description: "Follow the coastline from Casablanca to Essaouira. Art deco cities, Portuguese forts, fishing harbours at sunset.",
    heroImage: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800",
    price: 2900,
    cities: "Casablanca, Rabat, El Jadida, Essaouira",
    highlights: [],
    accessibilityNotes: [],
  },
  {
    id: "gentle-3",
    title: "Imperial Cities",
    slug: "imperial-ease",
    duration: 9,
    tagline: "Three cities, no mountain passes",
    description: "Marrakech, Fes, and the blue town — connected by a short flight so you see more and sit in cars less.",
    heroImage: "https://images.unsplash.com/photo-1548017062-669f3c7af7cc?w=800",
    price: 3200,
    cities: "Marrakech, Fes, Chefchaouen",
    highlights: [],
    accessibilityNotes: [],
  },
  {
    id: "gentle-4",
    title: "Desert Light",
    slug: "desert-edge",
    duration: 7,
    tagline: "Kasbahs without the dunes",
    description: "Rose-gold kasbahs and palm groves at the edge of the Sahara. The drama of the desert, without the discomfort.",
    heroImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800",
    price: 2200,
    cities: "Marrakech, Skoura, Ouarzazate",
    highlights: [],
    accessibilityNotes: [],
  },
];

const fallbackTeam: TeamMember[] = [
  {
    id: "team-1",
    name: "Hassan",
    role: "Lead Guide",
    quote: "The best part of my job is watching someone fall in love with my country.",
    bio: "Born in the Sahara, trained in hospitality. Patient, attentive, speaks four languages.",
    image: "/team/Hassan.jpg",
  },
  {
    id: "team-2",
    name: "Youssef",
    role: "Driver-Guide",
    quote: "Every road tells a story. I know them all.",
    bio: "Knows every route, every shortcut, every safe stopping point. Your comfort is his priority.",
    image: "/team/Youssef.jpg",
  },
  {
    id: "team-3",
    name: "Mohammed",
    role: "Mountain Guide",
    quote: "The mountains taught me patience. I'll share that with you.",
    bio: "Atlas native. Expert on accessible viewpoints and gentle trails.",
    image: "/team/Mohammed.jpg",
  },
];

const fallbackSettings: Settings = {
  heroTitle: "Built for you. Not adapted.",
  heroSubtitle: "Other companies retrofit their tours when you ask. We started with a blank page and designed these journeys around how you actually travel.",
  heroTagline: "A Slow Morocco Collection",
  founderNoteTitle: "Why I built this",
  founderNoteBody: "I've been running tours in Morocco for fifteen years. I've watched countless travellers be told \"yes, we can accommodate you\" — and then be treated as an afterthought. Squeezed into standard itineraries. Given the room no one else wanted. Made to feel like a problem to be solved.\n\nThat's not accommodation. That's tolerance.\n\nSo I built something different. These journeys weren't adapted from our regular tours — they were designed from scratch for travellers who need a different pace. Every hotel, every route, every timing decision was made with you as the primary guest, not the exception.\n\nYou've earned the right to travel beautifully. Let us show you what that looks like.",
  whatsappUrl: "https://wa.me/212618070450?text=Hello%2C%20I%27d%20like%20to%20talk%20about%20travelling%20to%20Morocco",
  whatsappNumber: "+212 6 18 07 04 50",
  contactEmail: "hello@slowmorocco.com",
  requirements: [
    { title: "Travel insurance", description: "Travel insurance that covers medical evacuation. Non-negotiable." },
    { title: "Doctor's clearance", description: "A doctor's note confirming you're fit for this type of travel. We provide the form." },
    { title: "Honest conversation", description: "Honest conversation about what you need. The more we know, the better we can deliver." },
  ],
  promises: [
    { title: "Medical care within reach", description: "Medical care within reach — every route stays within one hour of a clinic." },
    { title: "A dedicated team", description: "A dedicated team — driver-guide throughout, plus a helper if you want one." },
    { title: "Complete honesty", description: "Complete honesty — we'll tell you what's possible and what isn't. No surprises." },
  ],
};

export default function GentleLandingPage() {
  const [experiences, setExperiences] = useState<Journey[]>(fallbackExperiences);
  const [team, setTeam] = useState<TeamMember[]>(fallbackTeam);
  const [settings, setSettings] = useState<Settings>(fallbackSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/gentle-journeys")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          if (data.journeys?.length > 0) setExperiences(data.journeys);
          if (data.team?.length > 0) setTeam(data.team);
          if (data.settings) setSettings({ ...fallbackSettings, ...data.settings });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load gentle journeys:", err);
        setLoading(false);
      });
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Format WhatsApp number for display
  const formatPhoneNumber = (num: string) => {
    const cleaned = num.replace(/\D/g, "");
    if (cleaned.startsWith("212")) {
      return `+212 ${cleaned.slice(3, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8, 10)} ${cleaned.slice(10)}`.trim();
    }
    return num;
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1a1a1a] min-h-screen">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#1a1a1a]/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-serif text-sm tracking-[0.12em] text-[#1a1a1a]">
              S L O W &nbsp; M O R O C C O
            </span>
            <a
              href={settings.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase bg-[#1a1a1a] text-white px-5 py-2.5 hover:bg-[#333] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Let's Talk</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.4em] uppercase text-[#1a1a1a]/40 mb-6">
                {settings.heroTagline}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
                {settings.heroTitle.split(".")[0]}.<br />
                <span className="text-[#1a1a1a]/40">{settings.heroTitle.split(".")[1]?.trim() || "Not adapted."}</span>
              </h1>
              <p className="text-xl text-[#1a1a1a]/60 leading-relaxed mb-6 max-w-lg">
                {settings.heroSubtitle}
              </p>
              <p className="text-[#1a1a1a]/50 mb-10 max-w-lg">
                For travellers who've stopped rushing — by choice or by circumstance. Either way, you deserve better than being squeezed into someone else's itinerary.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={settings.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 text-sm tracking-[0.1em] uppercase hover:bg-[#333] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start a Conversation
                </a>
                <button
                  onClick={() => scrollToSection("experiences")}
                  className="inline-flex items-center justify-center gap-2 border border-[#1a1a1a]/20 px-8 py-4 text-sm tracking-[0.1em] uppercase hover:bg-[#1a1a1a]/5 transition-colors"
                >
                  See the Journeys
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] relative">
                <Image
                  src={experiences[0]?.heroImage || "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200"}
                  alt="Morocco"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-lg max-w-[280px]">
                <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                  "The first tour operator to build journeys specifically for travellers like us — not just say they can accommodate us."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              The difference is in the design
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Anyone can say "we'll accommodate your needs." We did something different: we sat down and asked, "What would travel look like if we designed it for comfort from the very beginning?"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 border border-white/10">
              <div className="text-4xl font-serif text-white/20 mb-4">01</div>
              <h3 className="text-lg mb-3">Pace, not speed</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Afternoons are free. Mornings are gentle. The itinerary serves you — you don't serve it.
              </p>
            </div>
            <div className="text-center p-8 border border-white/10">
              <div className="text-4xl font-serif text-white/20 mb-4">02</div>
              <h3 className="text-lg mb-3">Comfort, not compromise</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Ground floors. Lifts. Walk-in showers. We know which places actually work — because we've tested them.
              </p>
            </div>
            <div className="text-center p-8 border border-white/10">
              <div className="text-4xl font-serif text-white/20 mb-4">03</div>
              <h3 className="text-lg mb-3">Care, not checkbox</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                A driver who understands. A helper if you want one. Medical care always within reach. Real support, not a call center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-4">
              Four Journeys
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Morocco, the way it should feel
            </h2>
            <p className="text-[#1a1a1a]/60 leading-relaxed">
              Each route designed for beauty and comfort. Shorter drives. Longer stays. Time to breathe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="group">
                <div className="relative aspect-[16/10] mb-6 overflow-hidden">
                  <Image
                    src={exp.heroImage}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/40 mb-2">
                  {exp.duration} Days
                </p>
                <h3 className="font-serif text-2xl mb-3">{exp.title}</h3>
                <p className="text-[#1a1a1a]/60 leading-relaxed">{exp.tagline || exp.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#1a1a1a]/50 mb-6">
              Each journey can be adjusted to your needs. Let's talk about what works for you.
            </p>
            <a
              href={settings.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors border-b border-[#1a1a1a]/20 pb-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tell us what you're looking for</span>
            </a>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-[3/4] bg-[#1a1a1a]/10 flex items-center justify-center">
                {team[0]?.image ? (
                  <Image
                    src={team[0].image}
                    alt={team[0].name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-6xl text-[#1a1a1a]/20 font-serif">J</span>
                )}
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-6">
                A Note from the Founder
              </p>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
                {settings.founderNoteTitle}
              </h2>
              <div className="space-y-4 text-[#1a1a1a]/60 leading-relaxed">
                {settings.founderNoteBody.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 font-serif text-lg">
                — {team[0]?.name || "Jacqueline"}
              </p>
              <p className="text-sm text-[#1a1a1a]/40">
                {team[0]?.role || "Founder"}, Slow Morocco · Marrakech
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-4">
              Your Team
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              The people who'll be with you
            </h2>
            <p className="text-[#1a1a1a]/60">
              Small team. Big commitment. We don't hand you off.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#1a1a1a]/5 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-3xl text-[#1a1a1a]/20 font-serif">{member.name[0]}</span>
                  )}
                </div>
                <h3 className="font-serif text-xl mb-1">{member.name}</h3>
                <p className="text-xs tracking-[0.15em] uppercase text-[#1a1a1a]/40 mb-4">{member.role}</p>
                <p className="text-sm text-[#1a1a1a]/50 italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
              Getting Started
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Simple. No pressure.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-serif text-white/10 mb-4">1</div>
              <h3 className="text-lg mb-2">We talk</h3>
              <p className="text-white/50 text-sm">
                WhatsApp, email, or phone. Tell us about you, who you're travelling with, what matters.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-white/10 mb-4">2</div>
              <h3 className="text-lg mb-2">We design</h3>
              <p className="text-white/50 text-sm">
                A journey shaped around your pace, your interests, your needs. Not a template.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-white/10 mb-4">3</div>
              <h3 className="text-lg mb-2">You decide</h3>
              <p className="text-white/50 text-sm">
                No deposit until you're ready. Take your time. Ask every question.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-white/10 mb-4">4</div>
              <h3 className="text-lg mb-2">We're there</h3>
              <p className="text-white/50 text-sm">
                From airport to airport, you're never alone. We handle everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Requirements */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-xl mb-4">What we ask of you</h3>
                <ul className="space-y-3 text-[#1a1a1a]/60 text-sm">
                  {settings.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#1a1a1a]/30">→</span>
                      <span><strong className="text-[#1a1a1a]/80">{req.title}</strong> — {req.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-4">What we promise you</h3>
                <ul className="space-y-3 text-[#1a1a1a]/60 text-sm">
                  {settings.promises.map((promise, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#1a1a1a]/30">→</span>
                      <span><strong className="text-[#1a1a1a]/80">{promise.title}</strong> — {promise.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Let's talk about your trip
            </h2>
            <p className="text-[#1a1a1a]/60 mb-10 leading-relaxed">
              No forms. No automated responses. Just a conversation with someone who can actually help you.
            </p>
            <a
              href={settings.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 text-sm tracking-[0.1em] uppercase hover:bg-[#333] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Start a Conversation
            </a>
            <p className="mt-6 text-sm text-[#1a1a1a]/40">
              Or email <a href={`mailto:${settings.contactEmail}`} className="underline hover:text-[#1a1a1a]/60">{settings.contactEmail}</a> if you prefer
            </p>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-[#1a1a1a]/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="font-serif text-sm tracking-[0.12em] text-[#1a1a1a]/60">
                S L O W &nbsp; M O R O C C O
              </span>
              <span className="text-[#1a1a1a]/20">|</span>
              <span className="text-sm text-[#1a1a1a]/40">Marrakech</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {formatPhoneNumber(settings.whatsappNumber)}
              </a>
              <a
                href={`mailto:${settings.contactEmail}`}
                className="flex items-center gap-2 text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-[#1a1a1a]/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#1a1a1a]/30">
              © {new Date().getFullYear()} Slow Morocco. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#1a1a1a]/30">
              <Link href="/privacy" className="hover:text-[#1a1a1a]/50 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[#1a1a1a]/50 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button - Mobile Only */}
      <a
        href={settings.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors md:hidden"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
