"use client";

import { m } from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1];

/**
 * Scroll-reveal primitive, now powered by Framer Motion.
 *
 * Drop-in compatible with the previous API (children, as, delay, className),
 * so every page upgrades without changes:
 *   - whileInView one-shot entrance: fade + rise + blur-in, premium easing.
 *   - optional `lift`: spring-physics hover used by elevated cards.
 *
 * Reduced-motion is handled globally by <MotionConfig reducedMotion="user">,
 * which strips the transform/blur and keeps a soft opacity fade.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  lift = false,
  className = "",
  ...rest
}) {
  const Tag = m[as] || m.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: delay / 1000 }}
      {...(lift
        ? {
            whileHover: {
              y: -6,
              transition: { type: "spring", stiffness: 320, damping: 22 },
            },
          }
        : {})}
      {...rest}
    >
      {children}
    </Tag>
  );
}
