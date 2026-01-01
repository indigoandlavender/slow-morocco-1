import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journeys",
  description: "Explore our curated Morocco journeys — from Sahara desert expeditions to Atlas Mountain treks, Imperial Cities tours to coastal escapes. Private, customizable itineraries designed around what matters to you.",
  openGraph: {
    title: "Morocco Journeys | Slow Morocco",
    description: "Explore our curated Morocco journeys — from Sahara desert expeditions to Atlas Mountain treks.",
    url: "https://slowmorocco.com/journeys",
  },
  alternates: {
    canonical: "https://slowmorocco.com/journeys",
  },
};

export default function JourneysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
