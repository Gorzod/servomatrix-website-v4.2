import { site } from "@/lib/site";
import { solutions } from "@/lib/solutions";
import { projects } from "@/lib/projects";
import { resources } from "@/lib/resources";
import { industries } from "@/lib/industries";

export default function sitemap() {
  const now = new Date();
  const make = (path, priority, freq) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  });

  const staticRoutes = [
    make("/", 1.0, "monthly"),
    make("/solutions", 0.9, "monthly"),
    make("/capabilities", 0.8, "monthly"),
    make("/services", 0.8, "monthly"),
    make("/industries", 0.8, "monthly"),
    make("/projects", 0.8, "monthly"),
    make("/resources", 0.8, "monthly"),
    make("/process", 0.6, "yearly"),
    make("/about", 0.6, "yearly"),
    make("/contact", 0.7, "yearly"),
    make("/privacy", 0.3, "yearly"),
  ];

  const dynamic = [
    ...solutions.map((s) => make(`/solutions/${s.slug}`, 0.7, "monthly")),
    ...industries.map((i) => make(`/industries/${i.slug}`, 0.6, "monthly")),
    ...projects.map((p) => make(`/projects/${p.slug}`, 0.6, "monthly")),
    ...resources.map((r) => make(`/resources/${r.slug}`, 0.6, "monthly")),
  ];

  return [...staticRoutes, ...dynamic];
}
