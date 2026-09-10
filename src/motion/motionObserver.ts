/**
 * SUPRABIZ Premium Motion System - Global Shared Observer
 * 
 * High-performance singleton IntersectionObserver.
 * Triggers once per element (once: true).
 * Hardware-accelerated, zero layout thrashing.
 */

type InViewCallback = (entry: IntersectionObserverEntry) => void;

interface ObserverRegistration {
  element: HTMLElement;
  callback?: InViewCallback;
  className?: string;
}

let sharedObserver: IntersectionObserver | null = null;
const registeredElements = new Map<HTMLElement, ObserverRegistration>();

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const registration = registeredElements.get(target);

            // Add the activated animation class
            const activeClass = registration?.className || "is-revealed";
            target.classList.add(activeClass);

            // Trigger optional callback
            if (registration?.callback) {
              registration.callback(entry);
            }

            // Unobserve to run strictly once (once: true)
            sharedObserver?.unobserve(target);
            registeredElements.delete(target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "120px 0px 120px 0px",
      }
    );
  }

  return sharedObserver;
}

/**
 * Register an element for one-time on-scroll entrance
 */
export function registerMotionElement(
  element: HTMLElement | null,
  options?: {
    className?: string;
    callback?: InViewCallback;
    immediate?: boolean;
  }
): () => void {
  if (!element || typeof window === "undefined") {
    return () => {};
  }

  const activeClass = options?.className || "is-revealed";

  // Check reduced motion preference or explicit immediate flag
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || options?.immediate) {
    element.classList.add(activeClass);
    if (options?.callback) {
      options.callback({
        target: element,
        isIntersecting: true,
      } as unknown as IntersectionObserverEntry);
    }
    return () => {};
  }

  // Check if element is ALREADY in or near viewport on mount (e.g. Hero elements)
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top < windowHeight + 120 && rect.bottom > -120) {
    element.classList.add(activeClass);
    if (options?.callback) {
      options.callback({
        target: element,
        isIntersecting: true,
      } as unknown as IntersectionObserverEntry);
    }
    return () => {};
  }

  const observer = getSharedObserver();
  if (!observer) {
    element.classList.add(activeClass);
    if (options?.callback) {
      options.callback({
        target: element,
        isIntersecting: true,
      } as unknown as IntersectionObserverEntry);
    }
    return () => {};
  }

  registeredElements.set(element, {
    element,
    callback: options?.callback,
    className: activeClass,
  });

  observer.observe(element);

  // Safety fallback: ensure element is never trapped in unrevealed state
  const safetyTimer = setTimeout(() => {
    if (!element.classList.contains(activeClass)) {
      element.classList.add(activeClass);
      if (options?.callback) {
        options.callback({
          target: element,
          isIntersecting: true,
        } as unknown as IntersectionObserverEntry);
      }
      observer.unobserve(element);
      registeredElements.delete(element);
    }
  }, 1200);

  return () => {
    clearTimeout(safetyTimer);
    observer.unobserve(element);
    registeredElements.delete(element);
  };
}

/**
 * React Hook for Motion InView
 */
import { useEffect, useRef, useState } from "react";

export function useMotionReveal<T extends HTMLElement = HTMLDivElement>(
  options?: {
    className?: string;
    delay?: number;
    immediate?: boolean;
  }
) {
  const ref = useRef<T | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return registerMotionElement(el, {
      className: options?.className || "is-revealed",
      immediate: options?.immediate,
      callback: () => {
        if (options?.delay) {
          setTimeout(() => setIsRevealed(true), options.delay);
        } else {
          setIsRevealed(true);
        }
      },
    });
  }, [options?.className, options?.delay, options?.immediate]);

  return { ref, isRevealed };
}
