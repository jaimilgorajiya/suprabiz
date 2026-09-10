import React, { useEffect, useState, useRef, Fragment } from "react";
import aboutTeamImg from "@/imports/suprabiz-about-team.jpg";
import aboutStrategyImg from "@/imports/suprabiz-about-strategy.jpg";
import {
  RevealText,
  RevealEyebrow,
  RevealImage,
  RevealLine,
  RevealDirectional,
  StaggerGroup,
  StaggerItem,
  RevealNumberSequence,
} from "../motion/MotionComponents";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const duration = 1800;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3.5);
      setCount(Math.round(ease * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [hasStarted, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  useEffect(() => {
    document.title = "About SUPRABIZ | Branding & Digital Marketing Agency";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn about SUPRABIZ, a branding and digital marketing agency helping businesses build memorable brands, meaningful digital experiences and sustainable growth."
      );
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <main className="w-full bg-[#FBFCF8]">
      {/* ─── 1. About Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative pt-8 sm:pt-14 lg:pt-20 pb-12 sm:pb-18 lg:pb-24 px-4 sm:px-8 lg:px-10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #FBFCF8 0%, #F6F9F5 60%, #F8FAF6 100%)",
        }}
      >
        {/* Soft Background Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 40%, rgba(21, 148, 71, 0.08) 0%, rgba(255, 194, 28, 0.035) 45%, transparent 70%)",
          }}
        />

        {/* Faint Dot Matrix */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(rgba(7, 92, 49, 0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-[1380px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start">
              {/* Eyebrow */}
              <div className="mb-5 sm:mb-8">
                <RevealEyebrow
                  label="ABOUT SUPRABIZ"
                  dotColor="#FFC21C"
                  delay={0}
                />
              </div>

              {/* Headline with Mask Reveal */}
              <h1
                className="text-[38px] xs:text-[44px] sm:text-[54px] md:text-[62px] lg:text-[66px] xl:text-[72px] font-extrabold tracking-[-0.04em] leading-[1.04] sm:leading-[1.02] mb-5 sm:mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText as="span" delay={100} className="block" style={{ color: "#15241B" }}>
                  We Don't Just
                </RevealText>
                <RevealText as="span" delay={190} className="block" style={{ color: "#15241B" }}>
                  Market Brands.
                </RevealText>
                <RevealText as="span" delay={280} className="block mt-1 sm:mt-1.5" style={{ color: "#08703A" }}>
                  We Build Them to{" "}
                  <span className="relative inline-block">
                    Matter.
                    {/* Refined subtle underline accent */}
                    <svg
                      className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-[5px] overflow-visible pointer-events-none"
                      viewBox="0 0 100 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 3.5 C30 1.5, 70 1.5, 98 3.5"
                        stroke="#FFC21C"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </RevealText>
              </h1>

              {/* Description */}
              <RevealDirectional direction="up" delay={320}>
                <p
                  className="text-[15.5px] sm:text-[18px] md:text-[19px] max-w-[580px] leading-[1.65] mb-7 sm:mb-10"
                  style={{ color: "#667069", fontFamily: "Inter, sans-serif" }}
                >
                  SUPRABIZ is a creative branding and digital marketing agency helping ambitious
                  businesses build stronger identities, meaningful digital experiences and sustainable growth.
                </p>
              </RevealDirectional>

              {/* CTA */}
              <RevealDirectional direction="up" delay={420} className="w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <a
                    href="/services"
                    onClick={(e) => handleNav("/services", e)}
                    className="btn-premium btn-premium-sweep group inline-flex items-center justify-center gap-2.5 h-[50px] sm:h-[54px] px-7 sm:px-8 rounded-full font-[650] text-[15px] sm:text-[16px] cursor-pointer w-full sm:w-auto shadow-sm"
                    style={{
                      background: "#FFC21C",
                      color: "#15241B",
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    <span>Explore Our Services</span>
                    <span className="btn-arrow-icon">
                      →
                    </span>
                  </a>

                  <a
                    href="/contact"
                    onClick={(e) => handleNav("/contact", e)}
                    className="btn-premium inline-flex items-center justify-center h-[50px] sm:h-[54px] px-7 sm:px-8 rounded-full font-semibold text-[15px] sm:text-[16px] cursor-pointer w-full sm:w-auto"
                    style={{
                      background: "transparent",
                      border: "1.5px solid #08703A",
                      color: "#08703A",
                      fontFamily: "Manrope, sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#08703A";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#08703A";
                    }}
                  >
                    Start a Conversation
                  </a>
                </div>
              </RevealDirectional>
            </div>

            {/* Right Hero Image */}
            <div className="w-full flex justify-center lg:justify-end">
              <RevealImage direction="left" delay={500} className="w-full max-w-[540px] rounded-[20px] sm:rounded-[28px]">
                <div
                  className="relative w-full rounded-[20px] sm:rounded-[28px] overflow-hidden"
                  style={{
                    border: "1px solid rgba(8, 112, 58, 0.08)",
                    boxShadow: "0 24px 60px rgba(20, 55, 35, 0.10)",
                    background: "#FFFFFF",
                    aspectRatio: "4 / 4.5",
                  }}
                >
                  <img
                    src={aboutTeamImg}
                    alt="SUPRABIZ creative team working on digital marketing and brand strategy"
                    className="w-full h-full object-cover object-center block"
                    loading="eager"
                  />

                  {/* Subtle Inner Highlight */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-[28px]"
                    style={{ boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.6)" }}
                  />

                  {/* Editorial Label Overlay */}
                  <div className="absolute top-5 left-5 z-10">
                    <span
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase backdrop-blur-md"
                      style={{
                        background: "rgba(255, 255, 255, 0.94)",
                        color: "#075C31",
                        border: "1px solid rgba(8, 112, 58, 0.12)",
                        boxShadow: "0 4px 14px rgba(20, 55, 35, 0.08)",
                        fontFamily: "Manrope, sans-serif",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FFC21C" }} />
                      STRATEGY • CREATIVE • DIGITAL
                    </span>
                  </div>
                </div>
              </RevealImage>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Brand Story / Who We Are ────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-10 bg-white border-y border-[rgba(8,112,58,0.06)]">
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-12 lg:gap-16 items-start">
            {/* Left 38% */}
            <RevealDirectional direction="left">
              <div className="mb-4">
                <RevealEyebrow label="WHO WE ARE" dotColor="#08703A" />
              </div>
              <h2
                className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.1]"
                style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText as="span" lines={["Ideas are easy.", "Building brands people", "remember is the real work."]} />
              </h2>
            </RevealDirectional>

            {/* Right 62% */}
            <RevealDirectional direction="up" delay={200} className="flex flex-col gap-6">
              <p
                className="text-[18px] sm:text-[20px] leading-[1.7] font-normal"
                style={{ color: "#4A554E", fontFamily: "Inter, sans-serif" }}
              >
                SUPRABIZ brings strategy, creativity and digital execution together to help
                businesses build meaningful brands that stand out in crowded markets.
              </p>
              <p
                className="text-[16px] sm:text-[18px] leading-[1.7] font-normal"
                style={{ color: "#667069", fontFamily: "Inter, sans-serif" }}
              >
                From defining how a brand looks, speaks and connects to crafting high-performing
                campaigns that reach the right audience, our approach connects disciplined creative
                thinking with measurable digital growth.
              </p>

              {/* Highlighted Pull Quote */}
              <div
                className="mt-4 p-6 sm:p-7 rounded-2xl border-l-4"
                style={{
                  background: "#F8FAF6",
                  borderLeftColor: "#08703A",
                  borderTop: "1px solid rgba(8, 112, 58, 0.08)",
                  borderRight: "1px solid rgba(8, 112, 58, 0.08)",
                  borderBottom: "1px solid rgba(8, 112, 58, 0.08)",
                }}
              >
                <p
                  className="text-[18px] sm:text-[21px] font-bold leading-[1.45] italic"
                  style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
                >
                  "Great marketing gets attention. Great branding makes people remember."
                </p>
              </div>
            </RevealDirectional>
          </div>
        </div>
      </section>

      {/* ─── 3. Credibility / Numbers Strip ─────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-6 sm:px-8 lg:px-10"
        style={{ background: "#F4F8F5", borderBottom: "1px solid rgba(8, 112, 58, 0.08)" }}
      >
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(8,112,58,0.12)]">
            {/* Stat 1 */}
            <div className="py-6 md:py-2 px-4 sm:px-6 md:px-8 text-center flex flex-col items-center justify-center">
              <div
                className="text-[48px] sm:text-[56px] lg:text-[62px] font-extrabold leading-none mb-2.5"
                style={{ color: "#08703A", fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
              >
                <AnimatedCounter target={50} suffix="+" />
              </div>
              <div
                className="text-[14px] sm:text-[15px] font-bold tracking-wide uppercase"
                style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
              >
                Brands Built
              </div>
              <div
                className="text-[13px] font-medium mt-1 text-[#667069]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Across diverse industry verticals
              </div>
            </div>

            {/* Stat 2 */}
            <div className="py-6 md:py-2 px-4 sm:px-6 md:px-8 text-center flex flex-col items-center justify-center">
              <div
                className="text-[48px] sm:text-[56px] lg:text-[62px] font-extrabold leading-none mb-2.5"
                style={{ color: "#08703A", fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
              >
                <AnimatedCounter target={100} suffix="+" />
              </div>
              <div
                className="text-[14px] sm:text-[15px] font-bold tracking-wide uppercase"
                style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
              >
                Projects
              </div>
              <div
                className="text-[13px] font-medium mt-1 text-[#667069]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Executed with creative precision
              </div>
            </div>

            {/* Stat 3 */}
            <div className="py-6 md:py-2 px-4 sm:px-6 md:px-8 text-center flex flex-col items-center justify-center">
              <div
                className="text-[48px] sm:text-[56px] lg:text-[62px] font-extrabold leading-none mb-2.5"
                style={{ color: "#08703A", fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
              >
                <AnimatedCounter target={95} suffix="%" />
              </div>
              <div
                className="text-[14px] sm:text-[15px] font-bold tracking-wide uppercase"
                style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
              >
                Satisfaction
              </div>
              <div
                className="text-[13px] font-medium mt-1 text-[#667069]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Long-term client partnerships
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Mission + Vision ────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-[1380px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center justify-center mb-3">
              <RevealEyebrow label="OUR PURPOSE" dotColor="#FFC21C" />
            </div>
            <h2
              className="text-[32px] sm:text-[40px] font-extrabold tracking-[-0.03em]"
              style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
            >
              <RevealText as="span" lines={["Guiding Every Decision", "We Make"]} />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Mission Card */}
            <RevealDirectional direction="left">
              <div
                className="relative p-8 sm:p-10 lg:p-12 rounded-[24px] overflow-hidden flex flex-col justify-between h-full"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(8, 112, 58, 0.12)",
                  boxShadow: "0 10px 30px rgba(20, 55, 35, 0.04)",
                }}
              >
                {/* Top Animated Accent Line */}
                <RevealLine className="h-[2px] w-full bg-[#08703A]/20 absolute top-0 left-0" direction="left" />

                {/* Faint Watermark */}
                <div
                  className="absolute top-4 right-6 text-[100px] lg:text-[120px] font-black leading-none pointer-events-none select-none opacity-[0.05]"
                  style={{ color: "#075C31", fontFamily: "Manrope, sans-serif" }}
                >
                  01
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-1 rounded-full" style={{ background: "#FFC21C" }} />
                    <span
                      className="text-[12px] font-bold tracking-[0.16em] uppercase"
                      style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                    >
                      OUR MISSION
                    </span>
                  </div>
                  <h3
                    className="text-[24px] sm:text-[28px] font-bold leading-[1.3] mb-5"
                    style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
                  >
                    Build brands that communicate clearly, connect meaningfully and grow confidently.
                  </h3>
                </div>

                <p
                  className="text-[15px] sm:text-[16px] leading-[1.65]"
                  style={{ color: "#667069", fontFamily: "Inter, sans-serif" }}
                >
                  We exist to cut through digital noise by crafting authentic identities, sharp strategy,
                  and conversion-driven campaigns that deliver real, lasting business impact.
                </p>
              </div>
            </RevealDirectional>

            {/* Vision Card */}
            <RevealDirectional direction="right" delay={100}>
              <div
                className="relative p-8 sm:p-10 lg:p-12 rounded-[24px] overflow-hidden flex flex-col justify-between h-full"
                style={{
                  background: "#F5F9F6",
                  border: "1px solid rgba(8, 112, 58, 0.14)",
                  boxShadow: "0 10px 30px rgba(20, 55, 35, 0.04)",
                }}
              >
                {/* Top Animated Accent Line */}
                <RevealLine className="h-[2px] w-full bg-[#159447]/25 absolute top-0 left-0" direction="left" delay={120} />

                {/* Faint Watermark */}
                <div
                  className="absolute top-4 right-6 text-[100px] lg:text-[120px] font-black leading-none pointer-events-none select-none opacity-[0.06]"
                  style={{ color: "#075C31", fontFamily: "Manrope, sans-serif" }}
                >
                  02
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-1 rounded-full" style={{ background: "#159447" }} />
                    <span
                      className="text-[12px] font-bold tracking-[0.16em] uppercase"
                      style={{ color: "#075C31", fontFamily: "Manrope, sans-serif" }}
                    >
                      OUR VISION
                    </span>
                  </div>
                  <h3
                    className="text-[24px] sm:text-[28px] font-bold leading-[1.3] mb-5"
                    style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
                  >
                    Become the premier growth partner for businesses ready to build a lasting legacy.
                  </h3>
                </div>

                <p
                  className="text-[15px] sm:text-[16px] leading-[1.65]"
                  style={{ color: "#667069", fontFamily: "Inter, sans-serif" }}
                >
                  To redefine how modern companies scale by establishing a standard where creativity and
                  analytical rigor work seamlessly together to generate sustained digital momentum.
                </p>
              </div>
            </RevealDirectional>
          </div>
        </div>
      </section>

      {/* ─── 5. What We Believe / Core Values (Editorial Redesign) ───────────── */}
      <section
        className="pt-[90px] sm:pt-[100px] lg:pt-[110px] pb-[100px] sm:pb-[110px] lg:pb-[120px] px-6 sm:px-8 lg:px-10 relative overflow-hidden"
        style={{
          background: "#FCFDFB",
          borderTop: "1px solid rgba(8, 112, 58, 0.08)",
          borderBottom: "1px solid rgba(8, 112, 58, 0.08)",
        }}
      >
        <div className="max-w-[1380px] mx-auto relative z-10">
          {/* Section Header: 65% / 35% Editorial Split */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 sm:gap-10 lg:gap-16 items-end pb-12 sm:pb-14 border-b border-[rgba(8,112,58,0.10)] mb-2">
            {/* Left 65% */}
            <div>
              {/* Clean Eyebrow */}
              <RevealEyebrow text="WHAT DRIVES US" textColor="#08703A" dotColor="#FFC21C" className="mb-4" />

              {/* Headline */}
              <h2
                className="text-[38px] sm:text-[48px] md:text-[54px] lg:text-[58px] font-bold tracking-[-0.035em] leading-[1.05]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText delay={80}>
                  <span className="block" style={{ color: "#15241B" }}>
                    Strategy First.
                  </span>
                </RevealText>
                <RevealText delay={160}>
                  <span className="block" style={{ color: "#08703A" }}>
                    Creativity With Purpose.
                  </span>
                </RevealText>
              </h2>
            </div>

            {/* Right 35%: Supporting Paragraph */}
            <div className="lg:pb-1">
              <RevealDirectional direction="right" delay={180}>
                <p
                  className="text-[15px] sm:text-[16px] leading-[1.7] text-[#69736C]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We reject superficial trends and generic templates. Every principle here directly guides
                  how we position, build, and scale meaningful brands.
                </p>
              </RevealDirectional>
            </div>
          </div>

          {/* Editorial Principle Rows (No Cards, No Boxes) */}
          <StaggerGroup delay={120} stagger={100} className="divide-y divide-[rgba(8,112,58,0.10)] border-b border-[rgba(8,112,58,0.10)]">
            {[
              {
                num: "01",
                category: "CORE VALUE",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                title: "Integrity",
                desc: "Doing the right thing at all times. We hold ourselves to unwavering honesty, direct transparency, and ethical accountability across every decision and campaign.",
                keywords: ["Honesty", "Transparency", "Ethical Rigor"],
                isFeatured: true,
              },
              {
                num: "02",
                category: "CORE VALUE",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
                title: "Intensity",
                desc: "Going above and beyond. We bring relentless focus, tireless energy, and uncompromising commitment to our clients' growth and brand legacy.",
                keywords: ["Above & Beyond", "Relentless Drive", "High Performance"],
                isFeatured: false,
              },
              {
                num: "03",
                category: "CORE VALUE",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                ),
                title: "Intellect",
                desc: "Challenge the status quo. We think critically, question default assumptions, and synthesize deep strategic insight to craft breakthrough solutions.",
                keywords: ["Critical Thinking", "Status Quo", "Strategic Insight"],
                isFeatured: false,
              },
            ].map((item) => (
              <StaggerItem
                key={item.num}
                className="group relative py-7 sm:py-8 lg:py-10 px-3 sm:px-4 lg:px-6 transition-all duration-250 hover:bg-gradient-to-r hover:from-[rgba(8,112,58,0.035)] hover:to-transparent"
              >
                {/* Subtle Restrained 3px Left Accent Indicator */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-250 origin-center bg-[#08703A]"
                />

                {/* Desktop Grid Layout: [NUMBER] [ICON + CATEGORY/TITLE] [DESCRIPTION] [KEYWORDS / ARROW] */}
                <div className="hidden lg:grid grid-cols-[70px_350px_1fr_220px] items-start gap-8 xl:gap-12">
                  {/* 1. Oversized Number */}
                  <div>
                    <span
                      className="text-[48px] xl:text-[54px] font-bold tracking-[-0.04em] leading-none select-none text-[#08703A]/35 group-hover:text-[#08703A] transition-colors duration-250 block pt-1"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {item.num}
                    </span>
                  </div>

                  {/* 2. Icon + Category + Title */}
                  <div className="pt-1 flex items-start gap-3.5">
                    <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-2xl flex items-center justify-center bg-[#E8F4EC] text-[#08703A] group-hover:bg-[#08703A] group-hover:text-white group-hover:scale-105 transition-all duration-250 shrink-0 border border-[#08703A]/12 shadow-sm mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#08703A]"
                          style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                          {item.category}
                        </span>
                        {item.isFeatured && (
                          <span className="text-[9.5px] font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#FFC21C]/20 text-[#8B6500] uppercase">
                            Core
                          </span>
                        )}
                      </div>
                      <h3
                        className="text-[23px] xl:text-[25px] font-bold tracking-[-0.02em] leading-[1.25] text-[#15241B] group-hover:text-[#08703A] transition-colors duration-250"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* 3. Description */}
                  <div className="pt-1.5 max-w-[460px]">
                    <p
                      className="text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5A665E]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* 4. Keyword / Capability Area */}
                  <div className="pt-2 pl-6 border-l border-[rgba(8,112,58,0.12)]">
                    <div
                      className="flex flex-col gap-1.5 text-[12px] text-[#6E7B73]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.keywords.map((kw) => (
                        <div key={kw} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#08703A]/50 flex-shrink-0" />
                          <span>{kw}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tablet Layout (768px - 1023px) */}
                <div className="hidden md:grid lg:hidden grid-cols-[60px_280px_1fr] items-start gap-6">
                  {/* Number */}
                  <div>
                    <span
                      className="text-[44px] font-bold tracking-[-0.04em] leading-none text-[#08703A]/35 group-hover:text-[#08703A] transition-colors duration-250 block pt-1"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {item.num}
                    </span>
                  </div>

                  {/* Icon + Title & Category */}
                  <div className="pt-1 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#E8F4EC] text-[#08703A] group-hover:bg-[#08703A] group-hover:text-white transition-all shrink-0 border border-[#08703A]/12 shadow-sm mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#08703A]"
                          style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                          {item.category}
                        </span>
                        {item.isFeatured && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#FFC21C]/20 text-[#8B6500] uppercase">
                            Core
                          </span>
                        )}
                      </div>
                      <h3
                        className="text-[21px] font-bold tracking-[-0.02em] leading-[1.2] text-[#15241B]"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description & Keywords */}
                  <div className="space-y-3 pt-1.5">
                    <p
                      className="text-[14px] leading-[1.65] text-[#5A665E]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#6E7B73]">
                      {item.keywords.map((kw) => (
                        <span key={kw} className="inline-flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#08703A]/40" />
                          <span>{kw}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Layout (< 768px) */}
                <div className="block md:hidden py-1.5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#E8F4EC] text-[#08703A] border border-[#08703A]/12 shrink-0 shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span
                            className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#08703A]"
                            style={{ fontFamily: "Manrope, sans-serif" }}
                          >
                            {item.category}
                          </span>
                          {item.isFeatured && (
                            <span className="text-[8.5px] font-extrabold px-1.5 py-0.5 rounded bg-[#FFC21C]/20 text-[#8B6500] uppercase">
                              Core
                            </span>
                          )}
                        </div>
                        <h3
                          className="text-[20px] font-bold tracking-[-0.02em] leading-tight text-[#15241B]"
                          style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <span
                      className="text-[32px] font-bold tracking-[-0.04em] leading-none text-[#08703A]/30"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {item.num}
                    </span>
                  </div>

                  <p
                    className="text-[14px] leading-[1.65] text-[#5A665E] mb-3.5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-2.5 border-t border-[rgba(8,112,58,0.08)] text-[11.5px] text-[#6E7B73]">
                    {item.keywords.map((kw) => (
                      <span key={kw} className="inline-flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#08703A]/40" />
                        <span>{kw}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ─── 6. Why Choose SUPRABIZ ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-[100px] px-6 sm:px-8 lg:px-10 bg-[#FFFFFF] relative overflow-hidden">
        {/* Subtle green radial glow behind the image */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full pointer-events-none blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(8, 112, 58, 0.025) 0%, rgba(8, 112, 58, 0) 70%)",
          }}
        />

        <div className="max-w-[1380px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Desktop Left: Premium Agency Image */}
            <div className="hidden lg:block">
              <RevealImage direction="right" className="rounded-[28px] overflow-hidden">
                <div
                  className="relative rounded-[28px] overflow-hidden h-[520px]"
                  style={{
                    border: "1px solid rgba(8, 112, 58, 0.08)",
                    boxShadow: "0 24px 60px rgba(20, 55, 35, 0.08)",
                  }}
                >
                  <img
                    src={aboutStrategyImg}
                    alt="SUPRABIZ strategic brand planning and digital marketing methodology"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />

                  {/* Subtle Editorial Label Capsule */}
                  <div
                    className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-full pointer-events-none"
                    style={{
                      background: "rgba(255, 255, 255, 0.92)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(8, 112, 58, 0.12)",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#FFC21C" }} />
                    <span
                      className="text-[9.5px] font-bold tracking-[0.12em] uppercase"
                      style={{ color: "#075C31", fontFamily: "Manrope, sans-serif" }}
                    >
                      BRAND • DIGITAL • GROWTH
                    </span>
                  </div>
                </div>
              </RevealImage>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start">
              {/* Eyebrow */}
              <RevealEyebrow text="WHY SUPRABIZ" textColor="#08703A" dotColor="#FFC21C" className="mb-3.5" />

              {/* Two-Tone Headline */}
              <h2
                className="text-[34px] sm:text-[44px] lg:text-[clamp(44px,4vw,56px)] font-bold tracking-[-0.035em] leading-[1.05]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText delay={80}>
                  <span className="block" style={{ color: "#15241B" }}>
                    Creative Thinking.
                  </span>
                </RevealText>
                <RevealText delay={160}>
                  <span className="block" style={{ color: "#08703A" }}>
                    Strategic Execution.
                  </span>
                </RevealText>
              </h2>

              {/* Description */}
              <RevealDirectional direction="up" delay={200}>
                <p
                  className="text-[17px] sm:text-[18px] leading-[1.65] mt-6 mb-7 sm:mb-8 max-w-[620px]"
                  style={{ color: "#69736C", fontFamily: "Inter, sans-serif" }}
                >
                  We do not view branding and digital performance as siloed disciplines. We integrate
                  compelling brand storytelling directly into high-performing advertising, search engine
                  visibility, and conversion mechanics.
                </p>
              </RevealDirectional>

              {/* Mobile-Only Image (between Description and Benefits) */}
              <div className="block lg:hidden w-full my-6">
                <RevealImage direction="up" delay={100} className="rounded-[24px]">
                  <div
                    className="relative rounded-[24px] overflow-hidden h-[340px] sm:h-[420px]"
                    style={{
                      border: "1px solid rgba(8, 112, 58, 0.08)",
                      boxShadow: "0 20px 48px rgba(20, 55, 35, 0.08)",
                    }}
                  >
                    <img
                      src={aboutStrategyImg}
                      alt="SUPRABIZ strategic brand planning and digital marketing methodology"
                      className="w-full h-full object-cover block"
                      loading="lazy"
                    />
                    <div
                      className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full pointer-events-none"
                      style={{
                        background: "rgba(255, 255, 255, 0.92)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(8, 112, 58, 0.12)",
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#FFC21C" }} />
                      <span
                        className="text-[9px] font-bold tracking-[0.12em] uppercase"
                        style={{ color: "#075C31", fontFamily: "Manrope, sans-serif" }}
                      >
                        BRAND • DIGITAL • GROWTH
                      </span>
                    </div>
                  </div>
                </RevealImage>
              </div>

              {/* 2x2 Editorial Benefit Grid (no cards, subtle separators) */}
              <StaggerGroup delay={240} stagger={70} className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-12 w-full">
                {[
                  {
                    title: "Strategy-Led Thinking",
                    desc: "Rooted in audience insight and positioning.",
                  },
                  {
                    title: "Creative Brand Execution",
                    desc: "Distinctive design that commands market attention.",
                  },
                  {
                    title: "Digital-First Approach",
                    desc: "Engineered specifically for modern web & social channels.",
                  },
                  {
                    title: "Growth-Focused Solutions",
                    desc: "Focused on measurable conversions and client ROI.",
                  },
                ].map((item, idx) => (
                  <StaggerItem
                    key={item.title}
                    className={`group py-[22px] pb-[24px] transition-colors ${
                      idx !== 0 ? "border-t border-[rgba(8,112,58,0.10)]" : ""
                    } ${
                      idx === 1 ? "sm:border-t-0" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Subtle Check Circle */}
                      <div
                        className="w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-[1.06]"
                        style={{ background: "#08703A", color: "#FFFFFF" }}
                      >
                        <svg
                          className="w-2.5 h-2.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>

                      {/* Benefit Title & Description */}
                      <div className="flex-1 min-w-0">
                        <div
                          className="text-[16px] sm:text-[17px] font-bold tracking-[-0.01em] transition-colors duration-200 group-hover:text-[#08703A] flex items-center gap-1.5"
                          style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
                        >
                          <span>{item.title}</span>
                          <span className="inline-block w-0 group-hover:w-2 h-[2px] bg-[#FFC21C] transition-all duration-200 rounded-full" />
                        </div>
                        <p
                          className="text-[13px] sm:text-[14px] leading-[1.55] mt-1.5"
                          style={{ color: "#7A827D", fontFamily: "Inter, sans-serif" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. Our Approach / Process ──────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-10 bg-[#F5F9F6]">
        <div className="max-w-[1380px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
            <div className="flex justify-center">
              <RevealEyebrow text="HOW WE WORK" textColor="#08703A" dotColor="#FFC21C" className="mb-3" />
            </div>
            <h2
              className="text-[30px] sm:text-[42px] font-extrabold tracking-[-0.03em]"
              style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
            >
              <RevealText delay={80}>From Idea to Impact</RevealText>
            </h2>
            <RevealDirectional direction="up" delay={160}>
              <p
                className="text-[15px] sm:text-[16px] mt-2.5 sm:mt-3"
                style={{ color: "#667069", fontFamily: "Inter, sans-serif" }}
              >
                A structured 4-step framework designed to deliver predictability and creative excellence.
              </p>
            </RevealDirectional>
          </div>

          {/* Connected Steps Grid */}
          <StaggerGroup delay={200} stagger={90} className="relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Understand the business model, target audience, competitive landscape, and core growth goals.",
              },
              {
                step: "02",
                title: "Strategize",
                desc: "Build the strategic positioning, creative direction, channel selection, and digital rollout roadmap.",
              },
              {
                step: "03",
                title: "Create",
                desc: "Turn strategic ideas into memorable branding, dynamic content, high-converting ads, and digital assets.",
              },
              {
                step: "04",
                title: "Grow",
                desc: "Launch campaigns, measure performance, iterate quickly, and continuously scale client success.",
              },
            ].map((st, i) => (
              <Fragment key={st.step}>
                <StaggerItem
                  className="relative flex flex-col items-center text-center group py-2 md:py-0"
                >
                  {/* Desktop Connecting Line Segment between Step i and Step i+1 */}
                  {i < 3 && (
                    <RevealLine
                      direction="left"
                      delay={100 + i * 100}
                      className="hidden md:block absolute top-[27px] left-1/2 w-[calc(100%+32px)] h-[2px] z-0 pointer-events-none bg-[#08703A]/20"
                    />
                  )}

                  {/* Step Circle */}
                  <div
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-extrabold text-[16px] sm:text-[17px] mb-4 sm:mb-5 transition-all duration-200 group-hover:scale-110 relative z-10 mx-auto"
                    style={{
                      background: "#08703A",
                      color: "#FFFFFF",
                      border: "2px solid #08703A",
                      boxShadow: "0 6px 18px rgba(8, 112, 58, 0.14)",
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    {st.step}
                  </div>
                  <h3
                    className="text-[19px] sm:text-[20px] font-bold mb-2 transition-colors duration-200 group-hover:text-[#08703A]"
                    style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
                  >
                    {st.title}
                  </h3>
                  <p
                    className="text-[14px] leading-[1.6] max-w-[280px] mx-auto"
                    style={{ color: "#667069", fontFamily: "Inter, sans-serif" }}
                  >
                    {st.desc}
                  </p>
                </StaggerItem>

                {/* Mobile Vertical Connecting Line between steps */}
                {i < 3 && (
                  <div className="flex md:hidden justify-center items-center py-1">
                    <div className="w-[2px] h-6 bg-[#08703A]/25 rounded-full" />
                  </div>
                )}
              </Fragment>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ─── 8. Final CTA ───────────────────────────────────────────────────────── */}
      <section
        className="relative pt-14 sm:pt-[80px] pb-14 sm:pb-[90px] px-4 sm:px-8 lg:px-10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #075C31 0%, #086B39 55%, #075C31 100%)",
        }}
      >
        {/* Subtle Radial Glow Behind Headline */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.07), transparent 48%)",
          }}
        />

        {/* Faint Micro-Grid Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-[850px] mx-auto relative z-10 text-center flex flex-col items-center">
          {/* Eyebrow Pill */}
          <RevealEyebrow text="START YOUR PROJECT" textColor="rgba(255, 255, 255, 0.85)" dotColor="#FFC21C" className="mb-5 sm:mb-6" />

          {/* Headline with Editorial Underline on 'Remember.' */}
          <h2
            className="text-[34px] xs:text-[40px] sm:text-[48px] md:text-[56px] lg:text-[clamp(52px,5vw,68px)] font-bold text-white tracking-[-0.04em] leading-[1.05] sm:leading-[1.03] max-w-[800px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            <RevealText delay={80}>
              <span className="block">Let's Build Something</span>
            </RevealText>
            <RevealText delay={180}>
              <span className="block">
                People{" "}
                <span className="relative inline-block">
                  Remember.
                  <svg
                    className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-[6px] sm:h-[8px] text-[#FFC21C]"
                    viewBox="0 0 100 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 5.5C28 2 72 2 98 5.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </RevealText>
          </h2>

          {/* Description */}
          <RevealDirectional direction="up" delay={260}>
            <p
              className="text-[15.5px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-[620px] mt-4 sm:mt-[26px] mb-7 sm:mb-9"
              style={{ color: "rgba(255, 255, 255, 0.68)", fontFamily: "Inter, sans-serif" }}
            >
              Whether you're building a brand from scratch or ready to scale an existing one, let's
              create something meaningful and measurable together.
            </p>
          </RevealDirectional>

          {/* Buttons */}
          <RevealDirectional direction="up" delay={340} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="/contact"
                onClick={(e) => handleNav("/contact", e)}
                className="btn-premium btn-premium-sweep group inline-flex items-center justify-center gap-2.5 h-[50px] sm:h-[54px] px-7 sm:px-8 rounded-full font-[650] text-[15px] sm:text-[16px] cursor-pointer w-full sm:w-auto shadow-sm"
                style={{
                  background: "#FFC21C",
                  color: "#15241B",
                  fontFamily: "Manrope, sans-serif",
                  boxShadow: "0 12px 30px rgba(255, 194, 28, 0.16)",
                }}
              >
                <span>Start a Conversation</span>
                <span className="btn-arrow-icon">
                  →
                </span>
              </a>

              <a
                href="/services"
                onClick={(e) => handleNav("/services", e)}
                className="btn-premium inline-flex items-center justify-center h-[50px] sm:h-[54px] px-7 sm:px-8 rounded-full font-[600] text-[15px] sm:text-[16px] cursor-pointer text-white w-full sm:w-auto"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.32)",
                  fontFamily: "Manrope, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.32)";
                }}
              >
                Explore Our Services
              </a>
            </div>
          </RevealDirectional>
        </div>
      </section>
    </main>
  );
}
