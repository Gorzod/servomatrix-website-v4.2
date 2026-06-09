/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — emit a self-contained `out/` of HTML/CSS/JS.
  // Deployed to Cloudflare Pages (no SSR runtime, no OpenNext/Workers).
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  // No next/image in use; keep this so static export never needs an image server.
  images: { unoptimized: true },
  // Emit /path/index.html so clean URLs resolve on static hosts.
  trailingSlash: true,
};

export default nextConfig;
