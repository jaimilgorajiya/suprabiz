import React, { useState, useEffect, useRef, Fragment } from "react";
import heroImg from "@/imports/suprabiz-services-digital-agency.jpg";
import brandingImg from "@/imports/suprabiz-branding-service.jpg";
import socialImg from "@/imports/suprabiz-social-media-marketing.jpg";
import webDesignImg from "@/imports/suprabiz-web-design-service.jpg";
import {
  RevealText,
  RevealEyebrow,
  RevealImage,
  RevealLine,
  RevealDirectional,
  StaggerGroup,
  StaggerItem,
} from "../motion/MotionComponents";

interface ServicesPageProps {
  onNavigate?: (path: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const quickNavRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Digital Marketing & Branding Services | SUPRABIZ";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore SUPRABIZ services including branding, social media marketing, SEO, web design, performance marketing and integrated digital marketing."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const handleNav = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `/services#${id}`);
    }
  };

  const quickNavItems = [
    { num: "01", name: "Branding", id: "branding" },
    { num: "02", name: "Social Media", id: "social-media" },
    { num: "03", name: "SEO", id: "seo" },
    { num: "04", name: "Web Design", id: "web-design" },
    { num: "05", name: "Performance", id: "performance-marketing" },
    { num: "06", name: "Digital Marketing", id: "digital-marketing" },
  ];

  return (
    <main className="w-full overflow-hidden bg-white selection:bg-[#08703A] selection:text-white">
      {/* ─── 01. Services Hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left: Content */}
            <div className="flex flex-col items-start">
              {/* Eyebrow */}
              <RevealEyebrow text="WHAT WE DO" textColor="#08703A" dotColor="#FFC21C" className="mb-4" />

              {/* H1 Headline */}
              <h1
                className="text-[44px] sm:text-[56px] md:text-[68px] lg:text-[clamp(56px,5vw,78px)] font-bold tracking-[-0.045em] leading-[1.0] mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText delay={80}>
                  <span className="block" style={{ color: "#15241B" }}>
                    Strategy, Creativity &amp;
                  </span>
                </RevealText>
                <RevealText delay={170}>
                  <span className="block" style={{ color: "#08703A" }}>
                    Digital Growth.
                  </span>
                </RevealText>
                <RevealText delay={260}>
                  <span className="block" style={{ color: "#159447" }}>
                    Under One Roof.
                  </span>
                </RevealText>
              </h1>

              {/* Description */}
              <RevealDirectional direction="up" delay={320}>
                <p
                  className="text-[17px] sm:text-[18px] leading-[1.65] max-w-[620px] mb-8 sm:mb-9"
                  style={{ color: "#69736C", fontFamily: "Inter, sans-serif" }}
                >
                  From building memorable brand identities to creating digital campaigns that drive
                  meaningful growth, SUPRABIZ brings strategy, creativity and performance together.
                </p>
              </RevealDirectional>

              {/* CTAs */}
              <RevealDirectional direction="up" delay={420} className="w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={(e) => scrollToSection("branding", e)}
                    className="btn-premium btn-premium-sweep inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-full font-bold text-[15px] cursor-pointer text-white shadow-sm"
                    style={{
                      background: "#08703A",
                      boxShadow: "0 10px 25px rgba(8, 112, 58, 0.20)",
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    <span>Explore Our Services</span>
                    <span className="text-[16px] transition-transform duration-250 group-hover:translate-y-1">↓</span>
                  </button>

                  <a
                    href="/contact"
                    onClick={(e) => handleNav("/contact", e)}
                    className="btn-premium inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-full font-bold text-[15px] cursor-pointer"
                    style={{
                      background: "transparent",
                      color: "#15241B",
                      border: "1.5px solid rgba(8, 112, 58, 0.20)",
                      fontFamily: "Manrope, sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#F4F8F5";
                      e.currentTarget.style.borderColor = "#08703A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "rgba(8, 112, 58, 0.20)";
                    }}
                  >
                    <span>Start a Conversation</span>
                    <span className="btn-arrow-icon">→</span>
                  </a>
                </div>
              </RevealDirectional>
            </div>

            {/* Right: Studio Imagery */}
            <div className="relative">
              <RevealImage direction="left" delay={500} className="rounded-[28px] sm:rounded-[32px] overflow-hidden">
                <div
                  className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[4/4.2] sm:aspect-[4/3.8] lg:aspect-[4/4.2] w-full"
                  style={{
                    border: "1px solid rgba(8, 112, 58, 0.08)",
                    boxShadow: "0 30px 70px rgba(20, 55, 35, 0.10)",
                  }}
                >
                  <img
                    src={heroImg}
                    alt="SUPRABIZ multidisciplinary creative and digital agency workspace"
                    className="w-full h-full object-cover block"
                    loading="eager"
                  />

                  {/* Editorial Capsule Badge */}
                  <div
                    className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-full pointer-events-none"
                    style={{
                      background: "rgba(255, 255, 255, 0.94)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(8, 112, 58, 0.12)",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#FFC21C" }} />
                    <span
                      className="text-[9.5px] font-bold tracking-[0.14em] uppercase"
                      style={{ color: "#075C31", fontFamily: "Manrope, sans-serif" }}
                    >
                      BRAND • SOCIAL • SEARCH • DIGITAL
                    </span>
                  </div>
                </div>
              </RevealImage>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. Service Quick Navigation Strip ─────────────────────────────────── */}
      <nav
        ref={quickNavRef}
        id="services-nav"
        aria-label="Capabilities Quick Jump"
        className="static md:sticky md:top-[80px] z-30 w-full bg-white/95 backdrop-blur-md border-y border-[rgba(8,112,58,0.08)] py-3 px-4 sm:px-8 lg:px-10"
      >
        <div className="max-w-[1380px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#08703A]" />
            <span
              className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#69736C]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              EXPLORE CAPABILITIES
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-x-4 sm:gap-x-8 gap-y-2">
            {quickNavItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(item.id, e)}
                className="group inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-150 cursor-pointer"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <span className="text-[11px] font-bold text-[#8C9890] group-hover:text-[#FFC21C] transition-colors duration-150">
                  {item.num}
                </span>
                <span className="text-[#15241B] group-hover:text-[#08703A] transition-colors duration-150">
                  {item.name}
                </span>
                {idx < quickNavItems.length - 1 && (
                  <span className="hidden lg:inline-block ml-4 text-[rgba(8,112,58,0.15)] select-none">
                    /
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── 03. Service 01: BRANDING (Text Left, Visual Right) ────────────────── */}
      <section
        id="branding"
        className="scroll-mt-28 py-14 sm:py-20 lg:py-[110px] px-4 sm:px-8 lg:px-10 bg-white"
      >
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Text (Order 1 on mobile, Order 1 on desktop) */}
            <RevealDirectional direction="left" delay={60} className="order-1 flex flex-col items-start">
              {/* Number & Eyebrow */}
              <div className="flex items-baseline gap-3 mb-2">
                <div className="overflow-hidden">
                  <span
                    className="num-digit text-[48px] sm:text-[64px] font-semibold leading-none select-none block"
                    style={{ color: "rgba(8, 112, 58, 0.20)", fontFamily: "Manrope, sans-serif" }}
                  >
                    01
                  </span>
                </div>
                <RevealEyebrow text="BRANDING" textColor="#08703A" dotColor="#FFC21C" />
              </div>

              {/* Title */}
              <h2
                className="text-[34px] sm:text-[42px] lg:text-[clamp(42px,4vw,56px)] font-bold tracking-[-0.035em] leading-[1.06] text-[#15241B] mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText delay={80}>Build a Brand People Recognize and Remember.</RevealText>
              </h2>

              {/* Description */}
              <RevealDirectional direction="up" delay={160}>
                <p
                  className="text-[16px] sm:text-[17.5px] leading-[1.7] text-[#69736C] mb-8 max-w-[580px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Strong brands are built through clarity, consistency and meaningful creative direction.
                  We shape identities that communicate who you are, what you stand for and why your
                  audience should care.
                </p>
              </RevealDirectional>

              {/* Capabilities (Clean 2x2 list, no cards) */}
              <StaggerGroup delay={200} stagger={60} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 w-full mb-8 pt-4 border-t border-[rgba(8,112,58,0.10)]">
                {[
                  "Brand Strategy",
                  "Visual Identity",
                  "Brand Guidelines",
                  "Creative Direction",
                ].map((cap) => (
                  <StaggerItem key={cap} className="flex items-center gap-2.5">
                    <div
                      className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "#08703A", color: "#FFFFFF" }}
                    >
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {cap}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {/* Text CTA */}
              <RevealDirectional direction="up" delay={260}>
                <a
                  href="/contact"
                  onClick={(e) => handleNav("/contact", e)}
                  className="group inline-flex items-center gap-2 text-[14.5px] font-bold cursor-pointer transition-all duration-200"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Explore Branding</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </RevealDirectional>
            </RevealDirectional>

            {/* Visual (Order 2 on mobile, Order 2 on desktop) */}
            <div className="order-2">
              <RevealImage direction="left" delay={180} className="rounded-[26px] overflow-hidden">
                <div
                  className="relative rounded-[26px] overflow-hidden h-[360px] sm:h-[460px] lg:h-[500px]"
                  style={{
                    border: "1px solid rgba(8, 112, 58, 0.08)",
                    boxShadow: "0 24px 60px rgba(20, 55, 35, 0.08)",
                  }}
                >
                  <img
                    src={brandingImg}
                    alt="Brand identity strategy and creative design workspace"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
              </RevealImage>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04. Service 02: SOCIAL MEDIA MARKETING (Visual Left, Text Right) ──── */}
      <section
        id="social-media"
        className="scroll-mt-28 py-14 sm:py-20 lg:py-[110px] px-4 sm:px-8 lg:px-10 bg-[#F8FAF6] border-y border-[rgba(8,112,58,0.06)]"
      >
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Visual (Order 2 on mobile, Order 1 on desktop) */}
            <div className="order-2 lg:order-1">
              <RevealImage direction="right" delay={100} className="rounded-[26px] overflow-hidden">
                <div
                  className="relative rounded-[26px] overflow-hidden h-[300px] xs:h-[360px] sm:h-[460px] lg:h-[500px]"
                  style={{
                    border: "1px solid rgba(8, 112, 58, 0.08)",
                    boxShadow: "0 24px 60px rgba(20, 55, 35, 0.08)",
                  }}
                >
                  <img
                    src={socialImg}
                    alt="Social media campaign planning and content creation"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
              </RevealImage>
            </div>

            {/* Text (Order 1 on mobile, Order 2 on desktop) */}
            <RevealDirectional direction="right" delay={160} className="order-1 lg:order-2 flex flex-col items-start">
              {/* Number & Eyebrow */}
              <div className="flex items-baseline gap-3 mb-2">
                <div className="overflow-hidden">
                  <span
                    className="num-digit text-[42px] sm:text-[64px] font-semibold leading-none select-none block"
                    style={{ color: "rgba(8, 112, 58, 0.20)", fontFamily: "Manrope, sans-serif" }}
                  >
                    02
                  </span>
                </div>
                <RevealEyebrow text="SOCIAL MEDIA MARKETING" textColor="#08703A" dotColor="#FFC21C" />
              </div>

              {/* Title */}
              <h2
                className="text-[30px] xs:text-[36px] sm:text-[42px] lg:text-[clamp(42px,4vw,56px)] font-bold tracking-[-0.035em] leading-[1.06] text-[#15241B] mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText delay={80}>Turn Attention Into Meaningful Connection.</RevealText>
              </h2>

              {/* Description */}
              <RevealDirectional direction="up" delay={160}>
                <p
                  className="text-[15.5px] sm:text-[17.5px] leading-[1.7] text-[#69736C] mb-8 max-w-[580px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We create social strategies and content designed to make brands more relevant,
                  consistent and engaging across the channels where their audiences spend time.
                </p>
              </RevealDirectional>

              {/* Capabilities (Clean 2x2 list) */}
              <StaggerGroup delay={200} stagger={60} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 w-full mb-8 pt-4 border-t border-[rgba(8,112,58,0.10)]">
                {[
                  "Social Strategy",
                  "Content Planning",
                  "Creative Campaigns",
                  "Community Growth",
                ].map((cap) => (
                  <StaggerItem key={cap} className="flex items-center gap-2.5">
                    <div
                      className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "#08703A", color: "#FFFFFF" }}
                    >
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {cap}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {/* Text CTA */}
              <RevealDirectional direction="up" delay={260}>
                <a
                  href="/contact"
                  onClick={(e) => handleNav("/contact", e)}
                  className="group inline-flex items-center gap-2 text-[14.5px] font-bold cursor-pointer transition-all duration-200"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Explore Social Media</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </RevealDirectional>
            </RevealDirectional>
          </div>
        </div>
      </section>

      {/* ─── 05. Service 03: SEO (Text Left, Custom Visual Right) ──────────────── */}
      <section
        id="seo"
        className="scroll-mt-28 py-14 sm:py-20 lg:py-[110px] px-4 sm:px-8 lg:px-10 bg-white"
      >
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Text (Order 1 on mobile, Order 1 on desktop) */}
            <RevealDirectional direction="left" delay={60} className="order-1 flex flex-col items-start">
              {/* Number & Eyebrow */}
              <div className="flex items-baseline gap-3 mb-2">
                <div className="overflow-hidden">
                  <span
                    className="num-digit text-[48px] sm:text-[64px] font-semibold leading-none select-none block"
                    style={{ color: "rgba(8, 112, 58, 0.20)", fontFamily: "Manrope, sans-serif" }}
                  >
                    03
                  </span>
                </div>
                <RevealEyebrow text="SEO" textColor="#08703A" dotColor="#FFC21C" />
              </div>

              {/* Title */}
              <h2
                className="text-[34px] sm:text-[42px] lg:text-[clamp(42px,4vw,56px)] font-bold tracking-[-0.035em] leading-[1.06] text-[#15241B] mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText delay={80}>Be Found When It Matters Most.</RevealText>
              </h2>

              {/* Description */}
              <RevealDirectional direction="up" delay={160}>
                <p
                  className="text-[16px] sm:text-[17.5px] leading-[1.7] text-[#69736C] mb-8 max-w-[580px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We build search strategies designed to improve visibility, strengthen relevance and
                  connect your business with people actively searching for what you offer.
                </p>
              </RevealDirectional>

              {/* Capabilities (Clean 2x2 list) */}
              <StaggerGroup delay={200} stagger={60} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 w-full mb-8 pt-4 border-t border-[rgba(8,112,58,0.10)]">
                {[
                  "Keyword Strategy",
                  "On-Page SEO",
                  "Technical SEO",
                  "Content Optimization",
                ].map((cap) => (
                  <StaggerItem key={cap} className="flex items-center gap-2.5">
                    <div
                      className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "#08703A", color: "#FFFFFF" }}
                    >
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {cap}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {/* Text CTA */}
              <RevealDirectional direction="up" delay={260}>
                <a
                  href="/contact"
                  onClick={(e) => handleNav("/contact", e)}
                  className="group inline-flex items-center gap-2 text-[14.5px] font-bold cursor-pointer transition-all duration-200"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Explore SEO</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </RevealDirectional>
            </RevealDirectional>

            {/* Visual (Custom SEO Performance Interface - Lightweight HTML/CSS) */}
            <RevealDirectional direction="right" delay={160} className="order-2">
              <div
                className="relative rounded-[26px] p-6 sm:p-8 bg-[#F4F8F5] border border-[rgba(8,112,58,0.12)] flex flex-col justify-between"
                style={{
                  boxShadow: "0 24px 60px rgba(20, 55, 35, 0.07)",
                  minHeight: "440px",
                }}
              >
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-5 border-b border-[rgba(8,112,58,0.10)]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#08703A]" />
                    <span className="text-[13px] font-bold text-[#15241B]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Search Visibility Framework
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-[#08703A] border border-[rgba(8,112,58,0.12)]">
                    Organic Indexing
                  </span>
                </div>

                {/* Relative Metric Pillars */}
                <StaggerGroup delay={240} stagger={80} className="grid grid-cols-3 gap-3 my-6">
                  <StaggerItem className="p-4 rounded-xl bg-white border border-[rgba(8,112,58,0.08)]">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#69736C]">
                      Visibility
                    </div>
                    <div className="text-[20px] font-extrabold text-[#08703A] mt-1 flex items-center gap-1">
                      <span>Strong</span>
                      <span className="text-[#FFC21C] text-sm">↗</span>
                    </div>
                    <div className="w-full bg-[#EAF2EC] h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#08703A] h-full w-[85%] rounded-full" />
                    </div>
                  </StaggerItem>

                  <StaggerItem className="p-4 rounded-xl bg-white border border-[rgba(8,112,58,0.08)]">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#69736C]">
                      Keywords
                    </div>
                    <div className="text-[20px] font-extrabold text-[#15241B] mt-1 flex items-center gap-1">
                      <span>Mapped</span>
                      <span className="text-[#08703A] text-sm">✓</span>
                    </div>
                    <div className="w-full bg-[#EAF2EC] h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#FFC21C] h-full w-[72%] rounded-full" />
                    </div>
                  </StaggerItem>

                  <StaggerItem className="p-4 rounded-xl bg-white border border-[rgba(8,112,58,0.08)]">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#69736C]">
                      Reach
                    </div>
                    <div className="text-[20px] font-extrabold text-[#08703A] mt-1 flex items-center gap-1">
                      <span>Scaling</span>
                      <span className="text-[#08703A] text-sm">↗</span>
                    </div>
                    <div className="w-full bg-[#EAF2EC] h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#08703A] h-full w-[90%] rounded-full" />
                    </div>
                  </StaggerItem>
                </StaggerGroup>

                {/* Stylized Search Trajectory Chart */}
                <div className="p-5 rounded-2xl bg-white border border-[rgba(8,112,58,0.08)]">
                  <div className="flex items-center justify-between mb-3 text-[12px] font-bold text-[#15241B]">
                    <span>Organic Search Trend</span>
                    <span className="text-[11px] text-[#08703A] font-medium">Continuous Growth</span>
                  </div>
                  {/* Visual SVG Line */}
                  <div className="w-full h-[110px] relative">
                    <svg
                      className="w-full h-full overflow-visible"
                      viewBox="0 0 300 100"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <defs>
                        <linearGradient id="seoGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#08703A" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#08703A" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,85 C50,78 90,65 140,50 C190,35 240,25 300,10 L300,100 L0,100 Z"
                        fill="url(#seoGrad)"
                      />
                      <path
                        d="M0,85 C50,78 90,65 140,50 C190,35 240,25 300,10"
                        stroke="#08703A"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="140" cy="50" r="4" fill="#FFC21C" stroke="#08703A" strokeWidth="2" />
                      <circle cx="300" cy="10" r="4.5" fill="#08703A" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-[10.5px] font-bold text-[#8C9890] mt-2 border-t border-[rgba(8,112,58,0.06)] pt-2 uppercase">
                    <span>Discovery</span>
                    <span>Optimization</span>
                    <span>Authority</span>
                    <span>Conversion</span>
                  </div>
                </div>
              </div>
            </RevealDirectional>
          </div>
        </div>
      </section>

      {/* ─── 06. Service 04: WEB DESIGN (Visual Left, Text Right) ──────────────── */}
      <section
        id="web-design"
        className="scroll-mt-28 py-14 sm:py-20 lg:py-[110px] px-4 sm:px-8 lg:px-10 bg-[#F4F8F5] border-y border-[rgba(8,112,58,0.06)]"
      >
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Visual (Order 2 on mobile, Order 1 on desktop) */}
            <div className="order-2 lg:order-1">
              <RevealImage direction="right" delay={100} className="rounded-[26px] overflow-hidden">
                <div
                  className="relative rounded-[26px] overflow-hidden h-[300px] xs:h-[360px] sm:h-[460px] lg:h-[500px]"
                  style={{
                    border: "1px solid rgba(8, 112, 58, 0.08)",
                    boxShadow: "0 24px 60px rgba(20, 55, 35, 0.08)",
                  }}
                >
                  <img
                    src={webDesignImg}
                    alt="Responsive website design displayed across digital devices"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
              </RevealImage>
            </div>

            {/* Text (Order 1 on mobile, Order 2 on desktop) */}
            <RevealDirectional direction="right" delay={160} className="order-1 lg:order-2 flex flex-col items-start">
              {/* Number & Eyebrow */}
              <div className="flex items-baseline gap-3 mb-2">
                <div className="overflow-hidden">
                  <span
                    className="num-digit text-[42px] sm:text-[64px] font-semibold leading-none select-none block"
                    style={{ color: "rgba(8, 112, 58, 0.20)", fontFamily: "Manrope, sans-serif" }}
                  >
                    04
                  </span>
                </div>
                <RevealEyebrow text="WEB DESIGN" textColor="#08703A" dotColor="#FFC21C" />
              </div>

              {/* Title */}
              <h2
                className="text-[30px] xs:text-[36px] sm:text-[42px] lg:text-[clamp(42px,4vw,56px)] font-bold tracking-[-0.035em] leading-[1.06] text-[#15241B] mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText delay={80}>Digital Experiences Built to Convert.</RevealText>
              </h2>

              {/* Description */}
              <RevealDirectional direction="up" delay={160}>
                <p
                  className="text-[15.5px] sm:text-[17.5px] leading-[1.7] text-[#69736C] mb-8 max-w-[580px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We design modern, responsive websites that combine strong visual identity with
                  intuitive experiences and clear paths to action.
                </p>
              </RevealDirectional>

              {/* Capabilities (Clean 2x2 list) */}
              <StaggerGroup delay={200} stagger={60} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 w-full mb-8 pt-4 border-t border-[rgba(8,112,58,0.10)]">
                {[
                  "UI/UX Design",
                  "Responsive Websites",
                  "Landing Pages",
                  "Conversion-Focused Design",
                ].map((cap) => (
                  <StaggerItem key={cap} className="flex items-center gap-2.5">
                    <div
                      className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "#08703A", color: "#FFFFFF" }}
                    >
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {cap}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {/* Text CTA */}
              <RevealDirectional direction="up" delay={260}>
                <a
                  href="/contact"
                  onClick={(e) => handleNav("/contact", e)}
                  className="group inline-flex items-center gap-2 text-[14.5px] font-bold cursor-pointer transition-all duration-200"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Explore Web Design</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </RevealDirectional>
            </RevealDirectional>
          </div>
        </div>
      </section>

      {/* ─── 07. Service 05: PERFORMANCE MARKETING (Text Left, Custom Visual) ─── */}
      <section
        id="performance-marketing"
        className="scroll-mt-28 py-14 sm:py-20 lg:py-[110px] px-4 sm:px-8 lg:px-10 bg-white"
      >
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Text (Order 1 on mobile, Order 1 on desktop) */}
            <RevealDirectional direction="left" delay={60} className="order-1 flex flex-col items-start">
              {/* Number & Eyebrow */}
              <div className="flex items-baseline gap-3 mb-2">
                <div className="overflow-hidden">
                  <span
                    className="num-digit text-[42px] sm:text-[64px] font-semibold leading-none select-none block"
                    style={{ color: "rgba(8, 112, 58, 0.20)", fontFamily: "Manrope, sans-serif" }}
                  >
                    05
                  </span>
                </div>
                <RevealEyebrow text="PERFORMANCE MARKETING" textColor="#08703A" dotColor="#FFC21C" />
              </div>

              {/* Title */}
              <h2
                className="text-[34px] sm:text-[42px] lg:text-[clamp(42px,4vw,56px)] font-bold tracking-[-0.035em] leading-[1.06] text-[#15241B] mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText delay={80}>Campaigns Built Around Outcomes.</RevealText>
              </h2>

              {/* Description */}
              <RevealDirectional direction="up" delay={160}>
                <p
                  className="text-[16px] sm:text-[17.5px] leading-[1.7] text-[#69736C] mb-8 max-w-[580px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We combine strategy, creative execution and continuous optimization to build paid
                  campaigns focused on meaningful business outcomes rather than vanity metrics.
                </p>
              </RevealDirectional>

              {/* Capabilities (Clean 2x2 list) */}
              <StaggerGroup delay={200} stagger={60} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 w-full mb-8 pt-4 border-t border-[rgba(8,112,58,0.10)]">
                {[
                  "Paid Advertising",
                  "Campaign Strategy",
                  "Conversion Optimization",
                  "Performance Analysis",
                ].map((cap) => (
                  <StaggerItem key={cap} className="flex items-center gap-2.5">
                    <div
                      className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "#08703A", color: "#FFFFFF" }}
                    >
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {cap}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {/* Text CTA */}
              <RevealDirectional direction="up" delay={260}>
                <a
                  href="/contact"
                  onClick={(e) => handleNav("/contact", e)}
                  className="group inline-flex items-center gap-2 text-[14.5px] font-bold cursor-pointer transition-all duration-200"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Explore Performance Marketing</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </RevealDirectional>
            </RevealDirectional>

            {/* Custom Visual: Performance Marketing Campaign Architecture */}
            <RevealDirectional direction="right" delay={160} className="order-2">
              <div
                className="relative rounded-[26px] p-6 sm:p-8 bg-[#F8FAF6] border border-[rgba(8,112,58,0.10)] flex flex-col justify-between"
                style={{
                  boxShadow: "0 24px 60px rgba(20, 55, 35, 0.07)",
                  minHeight: "440px",
                }}
              >
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-5 border-b border-[rgba(8,112,58,0.10)]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#08703A]" />
                    <span className="text-[13px] font-bold text-[#15241B]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Performance Architecture
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-[#08703A] border border-[rgba(8,112,58,0.12)]">
                    Cross-Channel Funnel
                  </span>
                </div>

                {/* Conversion Flow Blocks */}
                <StaggerGroup delay={240} stagger={80} className="space-y-3.5 my-6">
                  {/* Stage 1: Audience & Targeting */}
                  <StaggerItem className="p-4 rounded-xl bg-white border border-[rgba(8,112,58,0.08)] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase text-[#69736C]">Stage 1 · Audience Ingestion</div>
                      <div className="text-[14px] font-bold text-[#15241B] mt-0.5">High-Intent Keyword &amp; Lookalike Targeting</div>
                    </div>
                    <span className="text-[12px] font-bold text-[#08703A] bg-[#EAF2EC] px-2.5 py-1 rounded-full">
                      Broad Reach
                    </span>
                  </StaggerItem>

                  {/* Stage 2: Creative Testing */}
                  <StaggerItem className="p-4 rounded-xl bg-white border border-[rgba(8,112,58,0.08)] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase text-[#69736C]">Stage 2 · Creative Iteration</div>
                      <div className="text-[14px] font-bold text-[#15241B] mt-0.5">Dynamic Copy, Motion &amp; Offer Variations</div>
                    </div>
                    <span className="text-[12px] font-bold text-[#15241B] bg-[#FFC21C]/25 px-2.5 py-1 rounded-full">
                      Testing Grid
                    </span>
                  </StaggerItem>

                  {/* Stage 3: Conversion Optimization */}
                  <StaggerItem className="p-4 rounded-xl bg-white border border-[rgba(8,112,58,0.08)] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase text-[#69736C]">Stage 3 · Frictionless Action</div>
                      <div className="text-[14px] font-bold text-[#15241B] mt-0.5">Landing Experience &amp; Tracking Calibration</div>
                    </div>
                    <span className="text-[12px] font-bold text-white bg-[#08703A] px-2.5 py-1 rounded-full">
                      Direct ROI
                    </span>
                  </StaggerItem>
                </StaggerGroup>

                {/* Channel Allocation Distribution Bar */}
                <div className="p-4 rounded-xl bg-white border border-[rgba(8,112,58,0.08)]">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase text-[#69736C] mb-2">
                    <span>Channel Allocation Model</span>
                    <span className="text-[#08703A]">Balanced Distribution</span>
                  </div>
                  <div className="w-full h-3 rounded-full overflow-hidden flex">
                    <div className="bg-[#08703A] h-full w-[45%]" title="Search & High Intent" />
                    <div className="bg-[#FFC21C] h-full w-[35%]" title="Social & Paid Media" />
                    <div className="bg-[#159447] h-full w-[20%]" title="Retargeting & Retention" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#69736C] mt-2">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#08703A]" /> Search Engine Ads
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#FFC21C]" /> Paid Social
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#159447]" /> Retargeting
                    </span>
                  </div>
                </div>
              </div>
            </RevealDirectional>
          </div>
        </div>
      </section>

      {/* ─── 08. Service 06: DIGITAL MARKETING (Visual Left, Text Right) ───────── */}
      <section
        id="digital-marketing"
        className="scroll-mt-28 py-14 sm:py-20 lg:py-[110px] px-4 sm:px-8 lg:px-10 bg-[#F8FAF6] border-y border-[rgba(8,112,58,0.06)]"
      >
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Visual (Editorial Ecosystem Diagram - Brand connected to channels) */}
            <RevealDirectional direction="left" delay={100} className="order-2 lg:order-1">
              <div
                className="relative rounded-[26px] p-4 xs:p-6 sm:p-8 bg-white border border-[rgba(8,112,58,0.12)] flex flex-col items-center justify-center overflow-hidden"
                style={{
                  boxShadow: "0 24px 60px rgba(20, 55, 35, 0.08)",
                  minHeight: "380px",
                }}
              >
                {/* Ecosystem Header */}
                <div className="w-full flex items-center justify-between pb-4 border-b border-[rgba(8,112,58,0.08)] mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                    <span className="text-[12px] font-bold text-[#15241B]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Integrated Ecosystem Model
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#69736C]">
                    Holistic Alignment
                  </span>
                </div>

                {/* Ecosystem Visualization */}
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center my-2">
                  {/* Subtle connecting concentric rings */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-[rgba(8,112,58,0.15)] pointer-events-none" />
                  <div className="absolute inset-8 rounded-full border border-[rgba(8,112,58,0.08)] pointer-events-none" />

                  {/* Central Core: BRAND */}
                  <div
                    className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center text-center shadow-lg"
                    style={{
                      background: "#08703A",
                      color: "#FFFFFF",
                      border: "3px solid #FFFFFF",
                      boxShadow: "0 10px 30px rgba(8, 112, 58, 0.30)",
                    }}
                  >
                    <span className="text-[9px] sm:text-[10px] tracking-widest uppercase opacity-75 font-semibold">CORE</span>
                    <span className="text-[13px] sm:text-[14px] font-extrabold tracking-wider" style={{ fontFamily: "Manrope, sans-serif" }}>
                      BRAND
                    </span>
                  </div>

                  {/* Satellite Nodes */}
                  {/* Top: SEARCH */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#F4F8F5] border border-[rgba(8,112,58,0.20)] shadow-sm text-[11px] sm:text-[12px] font-bold text-[#15241B]">
                    SEARCH
                  </div>

                  {/* Right-Top: SOCIAL */}
                  <div className="absolute top-14 sm:top-16 right-0 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#F4F8F5] border border-[rgba(8,112,58,0.20)] shadow-sm text-[11px] sm:text-[12px] font-bold text-[#15241B]">
                    SOCIAL
                  </div>

                  {/* Right-Bottom: CONTENT */}
                  <div className="absolute bottom-14 sm:bottom-16 right-0 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#F4F8F5] border border-[rgba(8,112,58,0.20)] shadow-sm text-[11px] sm:text-[12px] font-bold text-[#15241B]">
                    CONTENT
                  </div>

                  {/* Left-Bottom: PAID MEDIA */}
                  <div className="absolute bottom-14 sm:bottom-16 left-0 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#F4F8F5] border border-[rgba(8,112,58,0.20)] shadow-sm text-[11px] sm:text-[12px] font-bold text-[#15241B]">
                    PAID ADS
                  </div>

                  {/* Left-Top: WEB DESIGN */}
                  <div className="absolute top-14 sm:top-16 left-0 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#F4F8F5] border border-[rgba(8,112,58,0.20)] shadow-sm text-[11px] sm:text-[12px] font-bold text-[#15241B]">
                    WEB
                  </div>

                  {/* Bottom Anchor: SUSTAINABLE GROWTH */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#FFC21C] text-[#15241B] shadow-sm text-[11px] sm:text-[12px] font-extrabold flex items-center gap-1.5">
                    <span>GROWTH</span>
                    <span>↗</span>
                  </div>
                </div>

                <div className="w-full text-center text-[11px] sm:text-[11.5px] text-[#69736C] pt-3 sm:pt-4 mt-2 border-t border-[rgba(8,112,58,0.06)]">
                  Every touchpoint feeds into one synchronized growth engine.
                </div>
              </div>
            </RevealDirectional>

            {/* Text (Order 1 on mobile, Order 2 on desktop) */}
            <RevealDirectional direction="right" delay={160} className="order-1 lg:order-2 flex flex-col items-start">
              {/* Number & Eyebrow */}
              <div className="flex items-baseline gap-3 mb-2">
                <div className="overflow-hidden">
                  <span
                    className="num-digit text-[42px] sm:text-[64px] font-semibold leading-none select-none block"
                    style={{ color: "rgba(8, 112, 58, 0.20)", fontFamily: "Manrope, sans-serif" }}
                  >
                    06
                  </span>
                </div>
                <RevealEyebrow text="DIGITAL MARKETING" textColor="#08703A" dotColor="#FFC21C" />
              </div>

              {/* Title */}
              <h2
                className="text-[30px] xs:text-[36px] sm:text-[42px] lg:text-[clamp(42px,4vw,56px)] font-bold tracking-[-0.035em] leading-[1.06] text-[#15241B] mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <RevealText delay={80}>Everything Works Better When It Works Together.</RevealText>
              </h2>

              {/* Description */}
              <RevealDirectional direction="up" delay={160}>
                <p
                  className="text-[15.5px] sm:text-[17.5px] leading-[1.7] text-[#69736C] mb-8 max-w-[580px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Our integrated digital marketing approach connects content, search, social, paid
                  campaigns and digital experiences into one clear growth strategy.
                </p>
              </RevealDirectional>

              {/* Capabilities (Clean 2x2 list) */}
              <StaggerGroup delay={200} stagger={60} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 w-full mb-8 pt-4 border-t border-[rgba(8,112,58,0.10)]">
                {[
                  "Digital Strategy",
                  "Content Marketing",
                  "Search & Social",
                  "Integrated Campaigns",
                ].map((cap) => (
                  <StaggerItem key={cap} className="flex items-center gap-2.5">
                    <div
                      className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "#08703A", color: "#FFFFFF" }}
                    >
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {cap}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              {/* Text CTA */}
              <RevealDirectional direction="up" delay={260}>
                <a
                  href="/contact"
                  onClick={(e) => handleNav("/contact", e)}
                  className="group inline-flex items-center gap-2 text-[14.5px] font-bold cursor-pointer transition-all duration-200"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Explore Digital Marketing</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </RevealDirectional>
            </RevealDirectional>
          </div>
        </div>
      </section>

      {/* ─── 09. Section: How We Work (Our Approach) ───────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-[1380px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="flex justify-center">
              <RevealEyebrow text="OUR APPROACH" textColor="#08703A" dotColor="#FFC21C" className="mb-3" />
            </div>
            <h2
              className="text-[30px] sm:text-[42px] md:text-[52px] font-bold tracking-[-0.035em] leading-[1.08]"
              style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
            >
              <RevealText delay={80}>
                <span className="block">One Strategy.</span>
              </RevealText>
              <RevealText delay={160}>
                <span className="block">Built Around Your Goals.</span>
              </RevealText>
            </h2>
          </div>

          {/* Editorial Horizontal / Vertical Timeline Grid */}
          <StaggerGroup delay={200} stagger={90} className="relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                num: "01",
                title: "Discover",
                desc: "Understand your brand, audience, market and objectives.",
              },
              {
                num: "02",
                title: "Strategize",
                desc: "Build the positioning, channels and creative direction.",
              },
              {
                num: "03",
                title: "Create",
                desc: "Turn strategy into campaigns, content and digital experiences.",
              },
              {
                num: "04",
                title: "Optimize",
                desc: "Measure, learn and continuously improve.",
              },
            ].map((step, idx) => (
              <Fragment key={step.num}>
                <StaggerItem className="relative flex flex-col items-center text-center group py-2 md:py-0">
                  {/* Desktop Connecting Line Segment between Step i and Step i+1 */}
                  {idx < 3 && (
                    <RevealLine
                      direction="left"
                      delay={100 + idx * 100}
                      className="hidden md:block absolute top-[27px] left-1/2 w-[calc(100%+32px)] h-[2px] z-0 pointer-events-none bg-[#08703A]/20"
                    />
                  )}

                  {/* Step Circle Badge */}
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
                    {step.num}
                  </div>

                  {/* Step Title */}
                  <h3
                    className="text-[19px] sm:text-[20px] font-bold mb-2 transition-colors duration-200 group-hover:text-[#08703A] text-[#15241B]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p
                    className="text-[13.5px] sm:text-[14px] leading-[1.6] max-w-[280px] mx-auto text-[#667069]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </StaggerItem>

                {/* Mobile Vertical Connector Line between Step i and Step i+1 */}
                {idx < 3 && (
                  <div className="flex md:hidden justify-center items-center py-2">
                    <div className="w-[2px] h-6 bg-[#08703A]/25 rounded-full" />
                  </div>
                )}
              </Fragment>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ─── 09.5 Section: FAQs ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-10 bg-[#FAFBF9] border-t border-[rgba(8,112,58,0.08)]">
        <div className="max-w-[880px] mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex justify-center">
              <RevealEyebrow text="FAQS" textColor="#08703A" dotColor="#FFC21C" className="mb-3.5" />
            </div>
            <h2
              className="text-[30px] sm:text-[42px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.1]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              <RevealText delay={80}>Frequently Asked Questions</RevealText>
            </h2>
            <RevealDirectional direction="up" delay={160}>
              <p
                className="text-[15px] sm:text-[16px] text-[#69736C] max-w-lg mx-auto mt-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Clear answers to common questions about our core marketing services.
              </p>
            </RevealDirectional>
          </div>

          <StaggerGroup delay={200} stagger={60} className="divide-y divide-[rgba(8,112,58,0.10)] bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-[rgba(8,112,58,0.12)] shadow-[0_12px_36px_rgba(20,55,35,0.04)]">
            {[
              {
                q: "What is SEO?",
                a: "SEO (Search Engine Optimization) is the process of optimizing your website's technical infrastructure, content relevance, and digital authority to rank high on search engines like Google. A strong SEO strategy drives steady, high-intent organic traffic to your brand without relying on paid advertising clicks.",
              },
              {
                q: "What is Performance Marketing?",
                a: "Performance Marketing is a results-driven advertising methodology where campaigns across platforms like Meta (Instagram & Facebook), Google Ads, and LinkedIn are continuously optimized for specific commercial actions — such as qualified leads, sales, and conversions — ensuring every rupee spent delivers measurable ROI.",
              },
              {
                q: "How do you integrate branding with performance marketing?",
                a: "We believe performance without branding creates expensive, forgettable ads, while branding without performance lacks accountability. We combine distinct visual identities with data-driven conversion funnels to ensure your brand both inspires trust and drives commercial returns.",
              },
              {
                q: "How quickly can we expect results from our campaigns?",
                a: "Performance marketing campaigns often yield initial conversion data within the first 1 to 2 weeks of optimization. SEO, on the other hand, is a compounding investment where noticeable ranking improvements and sustainable traffic gains typically build over 3 to 6 months.",
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <StaggerItem key={faq.q} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span
                      className={`text-[16px] sm:text-[17.5px] font-bold transition-colors ${
                        isOpen ? "text-[#08703A]" : "text-[#15241B] group-hover:text-[#08703A]"
                      }`}
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-all duration-200 ${
                        isOpen
                          ? "bg-[#08703A] text-white rotate-45"
                          : "bg-[#F2F7F4] text-[#08703A] group-hover:bg-[#E8F4EC]"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p
                      className="mt-3 text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#55645A] pr-6"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {faq.a}
                    </p>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ─── 10. Final CTA ─────────────────────────────────────────────────────── */}
      <section
        className="relative pt-14 sm:pt-[80px] pb-14 sm:pb-[90px] px-4 sm:px-8 lg:px-10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #075C31 0%, #086B39 55%, #075C31 100%)",
        }}
      >
        {/* Subtle Radial Glow */}
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
          <RevealEyebrow text="LET'S GROW" textColor="rgba(255, 255, 255, 0.85)" dotColor="#FFC21C" className="mb-5 sm:mb-6" />

          {/* Headline */}
          <h2
            className="text-[34px] xs:text-[40px] sm:text-[48px] md:text-[56px] lg:text-[clamp(50px,5vw,66px)] font-bold text-white tracking-[-0.04em] leading-[1.05] sm:leading-[1.03] max-w-[800px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            <RevealText delay={80}>
              <span className="block">Not Sure Which Service</span>
            </RevealText>
            <RevealText delay={170}>
              <span className="block">Your Brand Needs?</span>
            </RevealText>
          </h2>

          {/* Description */}
          <RevealDirectional direction="up" delay={260}>
            <p
              className="text-[15.5px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-[620px] mt-4 sm:mt-[26px] mb-7 sm:mb-9"
              style={{ color: "rgba(255, 255, 255, 0.68)", fontFamily: "Inter, sans-serif" }}
            >
              Tell us where you are and where you want to go. We'll help identify the right mix of
              strategy, creativity and digital execution.
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
                <span>Let's Talk</span>
                <span className="btn-arrow-icon">
                  →
                </span>
              </a>

              <a
                href="/contact"
                onClick={(e) => handleNav("/contact", e)}
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
                Schedule a Call
              </a>
            </div>
          </RevealDirectional>
        </div>
      </section>
    </main>
  );
}
