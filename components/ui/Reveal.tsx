"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  id?: string;
  style?: CSSProperties;
}

export function Reveal({ children, className = "", as: Tag = "div", delay = 0, id, style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    const fallback = window.setTimeout(() => el.classList.add("in"), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`reveal ${className}`}
      style={{ ...style, ...(delay ? { transitionDelay: `${delay}ms` } : {}) }}
    >
      {children}
    </Tag>
  );
}
