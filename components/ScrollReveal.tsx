"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** 動畫延遲 ms（用於交錯效果） */
  delay?: number;
  /** 動畫方向 */
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("sr-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const dirClass =
    direction === "left"
      ? "sr--left"
      : direction === "right"
        ? "sr--right"
        : direction === "none"
          ? "sr--fade"
          : "";

  return (
    <div ref={ref} className={`sr ${dirClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
