import React, { useEffect, useRef, useState } from "react";
import { registerMotionElement } from "./motionObserver";

// Initialize progressive enhancement class on HTML element
if (typeof document !== "undefined") {
  document.documentElement.classList.add("js-motion");
}

// ----------------------------------------------------------------------
// 01. EDITORIAL TEXT REVEAL
// ----------------------------------------------------------------------
interface RevealTextProps {
  children?: React.ReactNode;
  lines?: string[];
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  underline?: boolean;
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  lines,
  as: Tag = "div",
  className = "",
  style = {},
  delay = 0,
  stagger = 110,
  underline = false,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    return registerMotionElement(el, {
      callback: () => {
        if (delay > 0) {
          setTimeout(() => setRevealed(true), delay);
        } else {
          setRevealed(true);
        }
      },
    });
  }, [delay]);

  // If specific lines are passed, render line-by-line masked reveals
  if (lines && lines.length > 0) {
    return (
      <Tag
        ref={containerRef as any}
        className={`relative ${underline ? "inline-block" : ""} ${className} ${
          revealed ? "is-revealed" : ""
        }`}
        style={style}
      >
        {lines.map((line, idx) => (
          <span key={idx} className="editorial-mask block">
            <span
              className="editorial-line"
              style={{
                transitionDelay: `${idx * stagger}ms`,
              }}
            >
              {line}
            </span>
          </span>
        ))}
        {underline && (
          <svg
            className="curved-underline absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-[7px] sm:h-[9px] overflow-visible pointer-events-none text-[#FFC21C]"
            viewBox="0 0 100 8"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M2 5.5C28 2 72 2 98 5.5"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              className="curved-underline-path"
            />
          </svg>
        )}
      </Tag>
    );
  }

  // Otherwise wrap children as a single phrase/line mask
  return (
    <Tag
      ref={containerRef as any}
      className={`relative ${underline ? "inline-block" : ""} ${className} ${
        revealed ? "is-revealed" : ""
      }`}
      style={style}
    >
      <span className="editorial-mask block">
        <span className="editorial-line">{children}</span>
      </span>
      {underline && (
        <svg
          className="curved-underline absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-[7px] sm:h-[9px] overflow-visible pointer-events-none text-[#FFC21C]"
          viewBox="0 0 100 8"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M2 5.5C28 2 72 2 98 5.5"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="curved-underline-path"
          />
        </svg>
      )}
    </Tag>
  );
};

// ----------------------------------------------------------------------
// 01b. EYEBROW REVEAL (Signature SUPRABIZ Pill Badge)
// ----------------------------------------------------------------------
interface RevealEyebrowProps {
  label?: string;
  text?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
  dotColor?: string;
  delay?: number;
  dark?: boolean;
}

export const RevealEyebrow: React.FC<RevealEyebrowProps> = ({
  label,
  text,
  textColor,
  className = "",
  style = {},
  dotColor,
  delay = 0,
  dark = false,
}) => {
  const displayText = label || text || "";
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: NodeJS.Timeout | null = null;
    const doReveal = () => {
      setRevealed(true);
      el.classList.add("is-revealed");
    };

    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight + 120 && rect.bottom > -120) {
      if (delay > 0) {
        timeoutId = setTimeout(doReveal, Math.min(delay, 200));
      } else {
        doReveal();
      }
      return () => {
        if (timeoutId) clearTimeout(timeoutId);
      };
    }

    const cleanup = registerMotionElement(el, {
      callback: () => {
        if (delay > 0) {
          timeoutId = setTimeout(doReveal, Math.min(delay, 200));
        } else {
          doReveal();
        }
      },
    });

    const safetyTimer = setTimeout(doReveal, 1000);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      clearTimeout(safetyTimer);
      cleanup();
    };
  }, [delay]);

  const isDark =
    dark ||
    Boolean(
      textColor &&
        (textColor.includes("255") ||
          textColor.includes("#FAFBF7") ||
          textColor.includes("#fff") ||
          textColor.includes("white"))
    );

  const resolvedDotColor = dotColor || (isDark ? "#FFC21C" : "#08703A");
  const resolvedTextColor = textColor || (isDark ? "rgba(255, 255, 255, 0.9)" : "#075C31");

  return (
    <div
      ref={ref}
      className={`eyebrow-pill inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-transform duration-200 hover:scale-[1.02] ${className} ${
        revealed ? "is-revealed" : ""
      }`}
      style={{
        background: isDark ? "rgba(255, 255, 255, 0.09)" : "#E8F4EC",
        border: isDark
          ? "1px solid rgba(255, 255, 255, 0.14)"
          : "1px solid rgba(8, 112, 58, 0.15)",
        ...style,
      }}
    >
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{
          backgroundColor: resolvedDotColor,
        }}
      />
      <span
        className="text-[10.5px] sm:text-[12px] font-bold tracking-[0.12em] uppercase whitespace-nowrap"
        style={{
          color: resolvedTextColor,
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {displayText}
      </span>
    </div>
  );
};

// ----------------------------------------------------------------------
// 02. MASKED IMAGE REVEAL (Curtain + Inner Scale + Brand Wipe)
// ----------------------------------------------------------------------
interface RevealImageProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  brandWipe?: boolean;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export const RevealImage: React.FC<RevealImageProps> = ({
  children,
  direction = "left",
  brandWipe = false,
  className = "",
  style = {},
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: NodeJS.Timeout | null = null;

    const doReveal = () => {
      setRevealed(true);
      el.classList.add("is-revealed");
    };

    // 1. Check if already in viewport on mount (e.g. Hero images, fold content)
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const inViewNow = rect.top < windowHeight + 120 && rect.bottom > -120;

    if (inViewNow) {
      if (delay > 0) {
        timeoutId = setTimeout(doReveal, Math.min(delay, 200));
      } else {
        doReveal();
      }
      return () => {
        if (timeoutId) clearTimeout(timeoutId);
      };
    }

    // 2. Otherwise register for scroll observation
    const cleanup = registerMotionElement(el, {
      callback: () => {
        if (delay > 0) {
          timeoutId = setTimeout(doReveal, Math.min(delay, 200));
        } else {
          doReveal();
        }
      },
    });

    // 3. Guaranteed safety fallback: ensure image is NEVER stuck hidden
    const safetyTimer = setTimeout(doReveal, 1200);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      clearTimeout(safetyTimer);
      cleanup();
    };
  }, [delay]);

  const dirClass =
    direction === "right"
      ? "curtain-reveal-right"
      : direction === "up"
      ? "curtain-reveal-up"
      : "curtain-reveal-left";

  return (
    <div
      ref={ref}
      className={`curtain-reveal ${dirClass} ${
        brandWipe ? "brand-wipe-container" : ""
      } ${className} ${revealed ? "is-revealed" : ""}`}
      style={style}
    >
      {brandWipe && <div className="brand-wipe-panel" />}
      <div className="curtain-inner-image w-full h-full">{children}</div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 03. ACCENT LINE DRAW
// ----------------------------------------------------------------------
interface RevealLineProps {
  className?: string;
  direction?: "left" | "right";
  style?: React.CSSProperties;
  color?: string;
  delay?: number;
}

export const RevealLine: React.FC<RevealLineProps> = ({
  className = "",
  direction = "left",
  style = {},
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return registerMotionElement(el, {
      callback: () => {
        if (delay > 0) {
          setTimeout(() => setRevealed(true), delay);
        } else {
          setRevealed(true);
        }
      },
    });
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`line-draw ${direction === "right" ? "line-draw-right" : ""} ${className} ${
        revealed ? "is-revealed" : ""
      }`}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
      }}
    />
  );
};

// ----------------------------------------------------------------------
// 04. DIRECTIONAL CONTENT REVEAL
// ----------------------------------------------------------------------
interface RevealDirectionalProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export const RevealDirectional: React.FC<RevealDirectionalProps> = ({
  children,
  direction = "up",
  className = "",
  style = {},
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return registerMotionElement(el, {
      callback: () => {
        if (delay > 0) {
          setTimeout(() => setRevealed(true), delay);
        } else {
          setRevealed(true);
        }
      },
    });
  }, [delay]);

  const dirClass =
    direction === "left"
      ? "dir-reveal-left"
      : direction === "right"
      ? "dir-reveal-right"
      : "dir-reveal-up";

  return (
    <div
      ref={ref}
      className={`${dirClass} ${className} ${revealed ? "is-revealed" : ""}`}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ----------------------------------------------------------------------
// 05. STAGGERED LIST ASSEMBLY
// ----------------------------------------------------------------------
interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className = "",
  style = {},
  delay = 0,
  stagger = 70,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return registerMotionElement(el, {
      callback: () => {
        if (delay > 0) {
          setTimeout(() => setRevealed(true), delay);
        } else {
          setRevealed(true);
        }
      },
    });
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`stagger-group ${className} ${revealed ? "is-revealed" : ""}`}
      style={style}
    >
      {children}
    </div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  index?: number;
  staggerMs?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  index = 0,
  staggerMs = 70,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`stagger-item ${className}`}
      style={{
        ...style,
        transitionDelay: `${index * staggerMs}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ----------------------------------------------------------------------
// 06. NUMBER / LABEL SEQUENCE
// ----------------------------------------------------------------------
interface RevealNumberSequenceProps {
  number: string;
  label?: string;
  headline?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export const RevealNumberSequence: React.FC<RevealNumberSequenceProps> = ({
  number,
  label,
  headline,
  className = "",
  style = {},
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return registerMotionElement(el, {
      callback: () => {
        if (delay > 0) {
          setTimeout(() => setRevealed(true), delay);
        } else {
          setRevealed(true);
        }
      },
    });
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} ${revealed ? "is-revealed" : ""}`}
      style={style}
    >
      <div className="num-mask">
        <span className="num-digit">{number}</span>
      </div>
      {label && (
        <div
          className="editorial-mask ml-3"
          style={{
            transitionDelay: "80ms",
          }}
        >
          <span className="editorial-line">{label}</span>
        </div>
      )}
      {headline && (
        <div
          className="editorial-mask block mt-1"
          style={{
            transitionDelay: "160ms",
          }}
        >
          <span className="editorial-line">{headline}</span>
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------------------------
// 07. GLOBAL COMPACT HEADER HOOK
// ----------------------------------------------------------------------
export function useCompactHeader(threshold = 50) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsCompact(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isCompact;
}
