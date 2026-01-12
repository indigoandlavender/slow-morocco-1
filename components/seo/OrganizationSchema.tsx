export default function OrganizationSchema() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://slowmorocco.com/#organization",
    name: "Slow Morocco",
    alternateName: "Slow Morocco Travel",
    url: "https://slowmorocco.com",
    logo: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/drstfu5yr/image/upload/v1735000000/slow-morocco-og.jpg",
      width: 1200,
      height: 630,
    },
    image: "https://res.cloudinary.com/drstfu5yr/image/upload/v1735000000/slow-morocco-og.jpg",
    description:
      "Slow Morocco is a Moroccan Cultural Authority in Transformative Travel, crafting intentional private journeys that connect travellers with the authentic soul of Morocco.",
    slogan: "Transformative Travel Through Morocco",
    foundingLocation: {
      "@type": "Place",
      name: "Marrakech, Morocco",
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    email: "hello@slowmorocco.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marrakech",
      addressCountry: "MA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@slowmorocco.com",
      availableLanguage: ["English", "French", "Arabic"],
    },
    sameAs: [],
    knowsAbout: [
      "Transformative Travel",
      "Moroccan Cultural Authority",
      "Morocco Private Tours",
      "Luxury Morocco Travel",
      "Sahara Desert Experiences",
      "Atlas Mountains Trekking",
      "Moroccan Culture and Heritage",
      "Authentic Moroccan Experiences",
    ],
    keywords:
      "Transformative Travel, Moroccan Cultural Authority, Morocco private journeys, intentional travel Morocco, authentic Moroccan experiences",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
