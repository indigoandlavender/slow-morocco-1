// components/StorySchema.tsx
// Add this component to your story/[slug]/page.tsx

interface StorySchemaProps {
  title: string;
  slug: string;
  excerpt: string;
  heroImage: string;
  category: string;
  datePublished?: string; // ISO format: "2025-12-31"
  dateModified?: string;  // ISO format: "2025-12-31"
}

export default function StorySchema({
  title,
  slug,
  excerpt,
  heroImage,
  category,
  datePublished = "2025-01-01",
  dateModified,
}: StorySchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": excerpt,
    "image": heroImage,
    "author": {
      "@type": "Person",
      "name": "Jacqueline Ng",
      "url": "https://slowmorocco.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Slow Morocco",
      "url": "https://slowmorocco.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://slowmorocco.com/apple-touch-icon.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://slowmorocco.com/stories/${slug}`
    },
    "articleSection": category,
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Slow Morocco",
      "url": "https://slowmorocco.com"
    },
    "about": {
      "@type": "Place",
      "name": "Morocco"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
