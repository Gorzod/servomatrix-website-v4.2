import { site } from "./site";

// Per-route metadata builder. Keeps titles, descriptions and canonicals consistent.
export function pageMeta({ title, description, path = "/", ogTitle, ogDescription }) {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: path === "/" ? "/" : path },
    openGraph: {
      type: "website",
      url,
      siteName: "servomatrix",
      title: ogTitle || `${title} · servomatrix`,
      description: ogDescription || description,
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: "servomatrix" }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || title,
      description: ogDescription || description,
      images: ["/og.svg"],
    },
  };
}

// Breadcrumb JSON-LD
export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: it.href ? `${site.url}${it.href}` : undefined,
    })),
  };
}

// Service JSON-LD for solution pages
export function serviceLd({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "Organization", name: "servomatrix", url: site.url },
    areaServed: ["Middle East", "Africa"],
    url: `${site.url}${path}`,
  };
}

// Article JSON-LD for resource pages
export function articleLd({ headline, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: { "@type": "Organization", name: "servomatrix" },
    publisher: { "@type": "Organization", name: "servomatrix", url: site.url },
    mainEntityOfPage: `${site.url}${path}`,
  };
}

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
