import React, { useEffect, useState } from "react";
import brandingImg from "@/imports/suprabiz-branding-service.jpg";
import socialImg from "@/imports/suprabiz-social-media-marketing.jpg";
import webDesignImg from "@/imports/suprabiz-web-design-service.jpg";
import agencyOverviewImg from "@/imports/suprabiz-services-digital-agency.jpg";
import brandHeroImg from "@/imports/suprabiz-hero-brand.jpg";
import strategyImg from "@/imports/suprabiz-about-strategy.jpg";
import digitalMarketingHeroImg from "@/imports/suprabiz-hero-digital-marketing.jpg";

export type WorkCategory =
  | "All Work"
  | "Branding"
  | "Social Media"
  | "Web Design"
  | "Campaigns"
  | "Digital Marketing";

export interface ProjectItem {
  id: string;
  num: string;
  category: WorkCategory;
  categoryLabel: string;
  title: string;
  description: string;
  scope: string[];
  image?: string;
  isCustomVisual?: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "project-01",
    num: "01",
    category: "Branding",
    categoryLabel: "Branding",
    title: "Brand Identity System",
    description:
      "A comprehensive visual identity, typographic hierarchy, and brand guidelines built for long-term recognition.",
    scope: ["Identity System", "Typography Sheet", "Collateral Design"],
    image: brandingImg,
  },
  {
    id: "project-02",
    num: "02",
    category: "Social Media",
    categoryLabel: "Social Media",
    title: "Social Campaign Direction",
    description:
      "Cross-channel creative direction, visual storytelling, and content systems crafted for audience engagement.",
    scope: ["Content Strategy", "Motion & Reels", "Audience Engagement"],
    image: socialImg,
  },
  {
    id: "project-03",
    num: "03",
    category: "Web Design",
    categoryLabel: "Web Design",
    title: "Conversion-Focused Website",
    description:
      "A responsive digital experience engineered with clear information architecture and brand-aligned interactions.",
    scope: ["Responsive UX/UI", "Design System", "Interaction Design"],
    image: webDesignImg,
  },
  {
    id: "project-04",
    num: "04",
    category: "Campaigns",
    categoryLabel: "Campaigns",
    title: "Performance Campaign Creative",
    description:
      "Multi-format advertising assets and conversion funnels aligned with high-intent audience queries.",
    scope: ["Funnel Architecture", "Creative Variations", "Intent Targeting"],
    isCustomVisual: true,
  },
  {
    id: "project-05",
    num: "05",
    category: "Digital Marketing",
    categoryLabel: "Digital Marketing",
    title: "Digital Launch System",
    description:
      "An integrated digital presence unifying search visibility, social reach, and measurable customer acquisition.",
    scope: ["Search & Social", "Omnichannel Launch", "Lead Capture"],
    image: digitalMarketingHeroImg,
  },
  {
    id: "project-06",
    num: "06",
    category: "Social Media",
    categoryLabel: "Social Media / Branding",
    title: "Content & Visual Strategy",
    description:
      "A sustainable brand content engine built to maintain aesthetic consistency and build brand loyalty across platforms.",
    scope: ["Visual Guidelines", "Content Calendar", "Creative Direction"],
    image: brandHeroImg,
  },
];

interface OurWorkPageProps {
  onNavigate?: (path: string) => void;
}

export default function OurWorkPage({ onNavigate }: OurWorkPageProps) {
  useEffect(() => {
    document.title = "Our Work | Branding & Digital Projects | SUPRA BIZ";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Explore selected SUPRA BIZ work across branding, social media, web design, campaigns and digital marketing."
    );
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

  const scrollToElement = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full bg-[#FBFCF8]">
      {/* ─── 01. Section: Our Work Hero ─────────────────────────────────────────── */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-10 overflow-hidden bg-white border-b border-[#08703A]/[0.06]">
        {/* Soft Radial Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 85% 35%, rgba(21, 148, 71, 0.08) 0%, rgba(255, 194, 28, 0.035) 45%, transparent 70%)",
          }}
        />

        {/* Subtle Dot Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(7, 92, 49, 0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-[1380px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8F4EC] border border-[#08703A]/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                <span
                  className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#08703A]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  OUR PORTFOLIO
                </span>
              </div>

              {/* Headline H1 */}
              <h1
                className="text-[#15241B] tracking-[-0.04em] leading-[1.05] mb-6 font-bold"
                style={{
                  fontSize: "clamp(42px, 5.2vw, 76px)",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                Ideas Made Visible.
                <br />
                <span className="text-[#08703A]">Work Built to Matter.</span>
              </h1>

              {/* Description */}
              <p
                className="text-[#56645A] text-[16px] sm:text-[18px] leading-[1.65] max-w-[620px] mb-8 sm:mb-10 font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Explore selected branding, digital, campaign and web work designed
                to help businesses communicate clearly, look distinctive and grow
                with purpose.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={(e) => scrollToElement("featured-project", e)}
                  className="group inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-full text-[15px] font-semibold text-white bg-[#08703A] hover:bg-[#065A2E] transition-all duration-200 shadow-[0_8px_20px_rgba(8,112,58,0.20)] hover:-translate-y-0.5 cursor-pointer"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Explore Projects</span>
                  <span className="transition-transform duration-200 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleNav("/contact", e)}
                  className="group inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-full text-[15px] font-semibold text-[#15241B] bg-[#F2F7F4] hover:bg-[#E7F1EB] border border-[#08703A]/15 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Start a Project</span>
                  <span className="text-[#08703A] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-[560px] aspect-[4/4.2] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#F4F8F5] group"
                style={{
                  border: "1px solid rgba(8, 112, 58, 0.10)",
                  boxShadow: "0 30px 70px rgba(20, 55, 35, 0.12)",
                }}
              >
                <img
                  src={agencyOverviewImg}
                  alt="SUPRA BIZ selected agency projects and creative portfolio presentation"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.015] block"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Inner Highlight */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[28px] sm:rounded-[32px]"
                  style={{
                    boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.6)",
                  }}
                />

                {/* Bottom Editorial Badge */}
                <div
                  className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md"
                  style={{
                    background: "rgba(255, 255, 255, 0.90)",
                    border: "1px solid rgba(8, 112, 58, 0.12)",
                    boxShadow: "0 8px 24px rgba(18, 58, 35, 0.08)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
                  <span
                    className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#15241B]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    BRANDING • WEB • CAMPAIGNS • DIGITAL
                  </span>
                </div>

                {/* Top Badge */}
                <div className="absolute top-5 right-5 z-10">
                  <span
                    className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-[#15241B] backdrop-blur-md"
                    style={{
                      background: "rgba(255, 255, 255, 0.90)",
                      border: "1px solid rgba(8, 112, 58, 0.10)",
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    Selected Works 2025–2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. Section: Featured Project ─────────────────────────────────────── */}
      <section
        id="featured-project"
        className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-10 bg-white border-b border-[rgba(8,112,58,0.08)]"
      >
        <div className="max-w-[1380px] mx-auto">
          {/* Section Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[12px] font-bold tracking-[0.12em] text-[#FFC21C]">
              01
            </span>
            <span className="text-[12px] font-bold text-[#FFC21C]">/</span>
            <span
              className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#08703A]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              FEATURED PROJECT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center mt-6">
            {/* Featured Visual */}
            <div
              className="relative w-full rounded-[28px] overflow-hidden group"
              style={{
                border: "1px solid rgba(8, 112, 58, 0.10)",
                boxShadow: "0 24px 60px rgba(20, 55, 35, 0.08)",
                background: "#F4F8F5",
                aspectRatio: "16 / 10.5",
              }}
            >
              <img
                src={brandingImg}
                alt="Brand Identity and Digital Launch presentation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                loading="lazy"
              />
              <div
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md text-[11px] font-bold text-[#15241B]"
                style={{
                  background: "rgba(255, 255, 255, 0.92)",
                  border: "1px solid rgba(8, 112, 58, 0.10)",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                <span>CASE STUDY 01 • FULL BRAND IDENTITY</span>
              </div>
            </div>

            {/* Featured Content */}
            <div className="flex flex-col items-start">
              <span
                className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#08703A] mb-2"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                BRANDING + DIGITAL
              </span>

              <h2
                className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.1] mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Brand Identity &amp;
                <br />
                Digital Launch
              </h2>

              <p
                className="text-[16px] sm:text-[17.5px] text-[#69736C] leading-[1.65] mb-6 max-w-[540px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                A complete visual identity and digital rollout designed around
                clarity, consistency, and a stronger brand presence across every
                touchpoint.
              </p>

              {/* Scope */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {[
                  "Brand Strategy",
                  "Visual Identity",
                  "Social Creative",
                  "Website Direction",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-medium text-[#56645A] bg-[#F4F8F5] border border-[#08703A]/10 px-3 py-1 rounded-full"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Qualitative Impact Note */}
              <div
                className="p-4 rounded-xl border-l-[3px] border-l-[#08703A] mb-8 w-full max-w-[520px]"
                style={{
                  background: "#F8FAF8",
                  borderTop: "1px solid rgba(8, 112, 58, 0.08)",
                  borderRight: "1px solid rgba(8, 112, 58, 0.08)",
                  borderBottom: "1px solid rgba(8, 112, 58, 0.08)",
                }}
              >
                <p
                  className="text-[13.5px] text-[#55645A] leading-[1.6]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Built as a modular design system that connects physical brand
                  collateral, social templates, and web UI under one clear visual
                  standard.
                </p>
              </div>

              {/* CTA */}
              <a
                href="/contact"
                onClick={(e) => handleNav("/contact", e)}
                className="group inline-flex items-center gap-2 text-[14.5px] font-[650] text-[#08703A] hover:text-[#065A2E] cursor-pointer transition-colors"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <span className="relative">
                  Discuss This Project
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#FFC21C] transition-all duration-200 group-hover:w-full" />
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04. Section: Selected Work Grid (6 Projects) ──────────────────────── */}
      <section
        id="projects"
        className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-10 bg-[#FAFBF9] border-b border-[rgba(8,112,58,0.08)]"
      >
        <div className="max-w-[1380px] mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
                <span
                  className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#08703A]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  CURATED PORTFOLIO
                </span>
              </div>
              <h2
                className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.08]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Selected Work.
              </h2>
            </div>

            <p
              className="text-[15px] sm:text-[16px] text-[#69736C] max-w-[420px] leading-[1.6]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Every project represents a tailored partnership connecting strategic
              clarity with creative execution.
            </p>
          </div>

          {/* Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {PROJECTS.map((project) => {
              return (
                <article
                  key={project.id}
                  className="group flex flex-col justify-between rounded-[24px] bg-white border border-[rgba(8,112,58,0.08)] shadow-[0_12px_36px_rgba(20,55,35,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(20,55,35,0.08)] h-full"
                >
                  <div>
                    {/* Visual Container */}
                    {project.isCustomVisual ? (
                      /* Custom HTML/CSS Performance Marketing Architecture Visual */
                      <div className="w-full aspect-[16/10.5] bg-[#F8FAF8] border-b border-[#08703A]/[0.08] p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative">
                        {/* Diagram Top Bar */}
                        <div className="flex items-center justify-between pb-2.5 border-b border-[#08703A]/[0.08]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                            <span
                              className="text-[11px] font-bold uppercase tracking-wider text-[#15241B]"
                              style={{ fontFamily: "Manrope, sans-serif" }}
                            >
                              Campaign Architecture
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold text-[#08703A] bg-[#08703A]/[0.08] px-2 py-0.5 rounded">
                            Multi-Channel
                          </span>
                        </div>

                        {/* Audience & Intent Flow */}
                        <div className="space-y-2 my-1">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-[#15241B] bg-white px-3 py-1.5 rounded-md border border-[#08703A]/[0.08]">
                            <span>High-Intent Search</span>
                            <span className="text-[#08703A]">Commercial Intent</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] font-semibold text-[#15241B] bg-white px-3 py-1.5 rounded-md border border-[#08703A]/[0.08]">
                            <span>Paid Social Creative</span>
                            <span className="text-[#69736C]">Audience Testing</span>
                          </div>
                        </div>

                        {/* Funnel Flow Footer */}
                        <div className="pt-2 border-t border-[#08703A]/[0.08] flex items-center justify-between text-[11px] text-[#69736C]">
                          <span className="flex items-center gap-1">
                            <span className="text-[#08703A]">↓</span>
                            <span>Conversion Landing Page</span>
                          </span>
                          <span className="font-semibold text-[#08703A]">
                            Optimized
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full aspect-[16/10.5] bg-[#F4F8F5] overflow-hidden border-b border-[#08703A]/[0.08]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                          loading="lazy"
                        />
                        {/* Subtle Index Overlay */}
                        <div className="absolute top-3.5 left-3.5">
                          <span
                            className="text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#08703A] border border-[#08703A]/10 shadow-xs"
                            style={{ fontFamily: "Manrope, sans-serif" }}
                          >
                            {project.num}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Content Block */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#08703A]"
                          style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                          {project.categoryLabel}
                        </span>
                      </div>

                      <h3
                        className="text-[22px] sm:text-[24px] font-bold text-[#15241B] group-hover:text-[#08703A] transition-colors leading-[1.2] tracking-[-0.02em] mb-3"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-[14px] text-[#69736C] leading-[1.65] mb-5 line-clamp-2"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {project.description}
                      </p>

                      {/* Scope Tags */}
                      <div className="text-[11.5px] text-[#87908A] font-medium leading-[1.7] mb-6">
                        {project.scope.map((tag, tIdx) => (
                          <span key={tag}>
                            {tag}
                            {tIdx < project.scope.length - 1 && (
                              <span className="mx-2 text-[#08703A]/25">•</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[rgba(8,112,58,0.06)] flex items-center justify-between mt-auto">
                    <a
                      href="/contact"
                      onClick={(e) => handleNav("/contact", e)}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-[650] text-[#08703A] hover:text-[#065A2E] cursor-pointer group/link transition-colors"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      <span>Discuss Project</span>
                      <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>
                    <span className="text-[11px] font-semibold text-[#87908A] bg-[#F4F8F5] px-2.5 py-1 rounded-full border border-[#08703A]/10">
                      Case Study
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 05. Section: Project Spotlight / Mini Case Study ─────────────────── */}
      <section className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-10 bg-white border-b border-[rgba(8,112,58,0.08)]">
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
                <span
                  className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#08703A]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  PROJECT SPOTLIGHT
                </span>
              </div>

              <h2
                className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.08] mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                From Strategy
                <br />
                to Final Experience.
              </h2>

              <p
                className="text-[16px] sm:text-[17.5px] text-[#69736C] leading-[1.65] mb-10 max-w-[540px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Every project begins with a clear creative problem. Here is how
                we break down challenges into disciplined strategic outcomes.
              </p>

              {/* 3-Part Qualitative Story with Thin Dividers (No Cards) */}
              <div className="divide-y divide-[rgba(8,112,58,0.10)] border-y border-[rgba(8,112,58,0.10)]">
                {/* 1. Challenge */}
                <div className="py-5 sm:py-6">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#08703A] block mb-1.5"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    CHALLENGE
                  </span>
                  <p
                    className="text-[15px] sm:text-[16px] text-[#15241B] leading-[1.6] font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Create a clearer and more distinctive brand presence across
                    fragmented digital touchpoints while modernizing customer perception.
                  </p>
                </div>

                {/* 2. Approach */}
                <div className="py-5 sm:py-6">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#08703A] block mb-1.5"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    APPROACH
                  </span>
                  <p
                    className="text-[15px] sm:text-[16px] text-[#15241B] leading-[1.6] font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Build a unified system combining brand positioning, distinctive
                    typography, content templates, and conversion-engineered web design.
                  </p>
                </div>

                {/* 3. Outcome */}
                <div className="py-5 sm:py-6">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#08703A] block mb-1.5"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    OUTCOME
                  </span>
                  <p
                    className="text-[15px] sm:text-[16px] text-[#15241B] leading-[1.6] font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    A cohesive, recognizable, and scalable brand experience that
                    elevates market visibility and ensures seamless communication across
                    all channels.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Case Study Visual */}
            <div className="w-full">
              <div
                className="relative w-full rounded-[28px] overflow-hidden bg-[#F4F8F5] group"
                style={{
                  border: "1px solid rgba(8, 112, 58, 0.10)",
                  boxShadow: "0 24px 60px rgba(20, 55, 35, 0.08)",
                  aspectRatio: "4 / 3.2",
                }}
              >
                <img
                  src={strategyImg}
                  alt="Creative strategy and brand design methodology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                  loading="lazy"
                />
                <div
                  className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md text-[11px] font-bold text-[#15241B]"
                  style={{
                    background: "rgba(255, 255, 255, 0.92)",
                    border: "1px solid rgba(8, 112, 58, 0.10)",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                  <span>STRATEGIC ALIGNMENT &amp; DELIVERY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 06. Section: Creative Process / How We Approach Work ──────────────── */}
      <section className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-10 bg-[#F5F9F6] border-b border-[rgba(8,112,58,0.08)]">
        <div className="max-w-[1380px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
              <span
                className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#08703A]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                HOW WE WORK
              </span>
            </div>
            <h2
              className="text-[32px] sm:text-[42px] font-extrabold tracking-[-0.03em] text-[#15241B]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Good Work Starts
              <br />
              Before Design Begins.
            </h2>
            <p
              className="text-[16px] text-[#667069] mt-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              A structured 4-step framework designed to deliver predictability,
              clarity, and creative excellence.
            </p>
          </div>

          {/* Connected Steps Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-8">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "Learn the business, target audience, competitive space, and core objective.",
              },
              {
                step: "02",
                title: "Define",
                desc: "Clarify the positioning, core messaging, channel selection, and creative direction.",
              },
              {
                step: "03",
                title: "Create",
                desc: "Develop the visual identity, responsive web interface, or multi-format campaign creative.",
              },
              {
                step: "04",
                title: "Refine",
                desc: "Review, test, and optimize all touchpoints before final deployment and launch.",
              },
            ].map((st, i) => (
              <div
                key={st.step}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Desktop Connecting Line */}
                {i < 3 && (
                  <div
                    className="hidden md:block absolute top-[27px] left-1/2 w-[calc(100%+32px)] h-[2px] z-0 pointer-events-none"
                    style={{ background: "rgba(8, 112, 58, 0.18)" }}
                  />
                )}

                {/* Step Circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-[17px] mb-5 transition-all duration-200 group-hover:scale-110 relative z-10 mx-auto"
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
                  className="text-[20px] font-bold mb-2.5 transition-colors duration-200 group-hover:text-[#08703A] text-[#15241B]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {st.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.6] max-w-[280px] mx-auto text-[#667069]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 07. Section: Capabilities in Action ───────────────────────────────── */}
      <section className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-10 bg-white border-b border-[rgba(8,112,58,0.08)]">
        <div className="max-w-[1380px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
                <span
                  className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#08703A]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  CAPABILITIES IN ACTION
                </span>
              </div>
              <h2
                className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.08]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Different Disciplines.
                <br />
                One Connected Brand.
              </h2>
            </div>
            <p
              className="text-[15px] sm:text-[16px] text-[#69736C] max-w-[460px] leading-[1.6]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Every service operates as part of an integrated growth ecosystem
              designed to deliver consistent market distinction.
            </p>
          </div>

          {/* Clean Editorial Capability Rows (No heavy feature cards) */}
          <div className="divide-y divide-[rgba(8,112,58,0.10)] border-y border-[rgba(8,112,58,0.10)]">
            {[
              {
                name: "Branding",
                desc: "Brand strategy, visual identity systems, typography and complete guidelines.",
                link: "/services#branding",
              },
              {
                name: "Social Media Marketing",
                desc: "Strategic content systems, reels and visual storytelling that builds brand equity.",
                link: "/services#social-media",
              },
              {
                name: "SEO",
                desc: "Technical site architecture, keyword intent mapping and sustainable organic visibility.",
                link: "/services#seo",
              },
              {
                name: "Web Design",
                desc: "Responsive UX/UI design, interactive prototyping and conversion-centered web experiences.",
                link: "/services#web-design",
              },
              {
                name: "Performance Marketing",
                desc: "Paid search, targeted social campaigns and conversion funnel optimization.",
                link: "/services#performance-marketing",
              },
              {
                name: "Digital Marketing",
                desc: "Omnichannel growth execution connecting creative campaigns with measurable acquisition.",
                link: "/services#digital-marketing",
              },
            ].map((cap) => (
              <a
                key={cap.name}
                href={cap.link}
                onClick={(e) => handleNav(cap.link, e)}
                className="group py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-200 hover:bg-[#F9FAF8] px-3 sm:px-4 rounded-xl cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                  <h3
                    className="text-[20px] sm:text-[23px] font-bold text-[#15241B] group-hover:text-[#08703A] transition-colors min-w-[240px]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {cap.name}
                  </h3>
                  <p
                    className="text-[14px] sm:text-[15px] text-[#69736C] max-w-[560px]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {cap.desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[13.5px] font-[650] text-[#08703A] group-hover:text-[#065A2E] shrink-0">
                  <span>Explore Service</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 08. Section: Final CTA ────────────────────────────────────────────── */}
      <section
        className="relative pt-[80px] sm:pt-[90px] pb-[90px] sm:pb-[100px] px-6 sm:px-8 lg:px-10 overflow-hidden border-b border-[rgba(255,255,255,0.08)]"
        style={{
          background:
            "linear-gradient(135deg, #075C31 0%, #086B39 55%, #075C31 100%)",
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
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-[850px] mx-auto relative z-10 text-center flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255, 255, 255, 0.09)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#FFC21C]" />
            <span
              className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/80"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              START YOUR PROJECT
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[clamp(50px,5vw,66px)] font-bold text-white tracking-[-0.04em] leading-[1.03] max-w-[800px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Have Something
            <br />
            Worth Building?
          </h2>

          {/* Description */}
          <p
            className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-[620px] mt-[24px] sm:mt-[26px] mb-8 sm:mb-9 text-white/70"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Whether you need a stronger brand, a better digital presence or a
            campaign that brings everything together, let's create something
            meaningful.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a
              href="/contact"
              onClick={(e) => handleNav("/contact", e)}
              className="group inline-flex items-center justify-center gap-2.5 h-[54px] px-8 rounded-full font-[650] text-[15px] sm:text-[16px] cursor-pointer transition-all duration-200 w-full sm:w-auto"
              style={{
                background: "#FFC21C",
                color: "#15241B",
                fontFamily: "Manrope, sans-serif",
                boxShadow: "0 12px 30px rgba(255, 194, 28, 0.16)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 35px rgba(255, 194, 28, 0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(255, 194, 28, 0.16)";
              }}
            >
              <span>Start a Conversation</span>
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                →
              </span>
            </a>

            <a
              href="/services"
              onClick={(e) => handleNav("/services", e)}
              className="inline-flex items-center justify-center h-[54px] px-8 rounded-full font-[600] text-[15px] sm:text-[16px] cursor-pointer transition-all duration-200 text-white w-full sm:w-auto"
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
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
