"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { nav, primaryCta } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Body scroll lock + ESC to close + basic focus handling
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      const onKey = (e) => {
        if (e.key === "Escape") {
          setOpen(false);
          toggleRef.current?.focus();
        }
      };
      document.addEventListener("keydown", onKey);
      const first = drawerRef.current?.querySelector("a, button");
      first?.focus();
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        scrolled
          ? "border-b border-line/80 bg-ink/70 backdrop-blur-xl backdrop-saturate-150 shadow-elev-1"
          : "border-b border-transparent bg-gradient-to-b from-ink/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="servomatrix home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative text-sm tracking-tight transition-colors duration-200 ${active ? "text-fg" : "text-fg-dim hover:text-fg"}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-signal to-signal/40 transition-all duration-300 ease-premium ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={primaryCta.href}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-signal px-4 py-2 text-sm font-medium text-ink shadow-elev-1 transition-all duration-300 ease-premium hover:-translate-y-[2px] hover:shadow-signal-glow"
          >
            <span className="absolute inset-0 bg-signal-sheen opacity-60 transition-opacity duration-300 group-hover:opacity-90" aria-hidden="true" />
            <span className="relative z-10 inline-flex items-center gap-2">
              {primaryCta.label}
              <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>

        <button
          ref={toggleRef}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-fg lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 block h-px w-5 bg-current transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`lg:hidden overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 ${open ? "max-h-[85vh]" : "max-h-0"}`}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b border-line py-3.5 text-base transition-colors ${isActive(item.href) ? "text-fg" : "text-fg-dim hover:text-fg"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={primaryCta.href} className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-signal px-4 py-3 text-sm font-medium text-ink">
            {primaryCta.label} <span aria-hidden="true">&rarr;</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
