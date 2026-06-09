"use client";

import { m } from "framer-motion";

/**
 * Per-route template — remounts on navigation, giving each page a subtle,
 * premium entrance. Opacity-led (with a small rise) so it never creates a
 * containing block that could affect fixed/absolute layout. Reduced-motion
 * users get the opacity fade only, via the global MotionConfig.
 */
export default function Template({ children }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
