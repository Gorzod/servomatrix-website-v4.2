"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

/**
 * Site-wide Framer Motion provider.
 *
 * - LazyMotion + domAnimation: loads only the animation/gesture feature set
 *   (~5kb) instead of the full motion bundle (~34kb), keeping this static
 *   B2B site fast.
 * - strict: forces use of the lightweight `m` component everywhere (a build-time
 *   guard against accidentally importing the heavy `motion` component).
 * - MotionConfig reducedMotion="user": automatically disables transform-based
 *   motion for visitors with prefers-reduced-motion, while leaving gentle
 *   opacity fades intact. Accessibility handled centrally.
 */
export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
