import { useEffect, useRef, useState } from "react";
import heroImg from "@/imports/suprabiz-courses-hero.jpg";
import socialLearningImg from "@/imports/suprabiz-social-media-learning.jpg";
import analyticsLearningImg from "@/imports/suprabiz-analytics-learning.jpg";

export interface Course {
  id: string;
  num: string;
  category: "social-media" | "search-ads" | "data-analytics";
  categoryLabel: string;
  title: string;
  description: string;
  topics: string[];
  anchor: string;
}

export const ALL_COURSES: Course[] = [
  // Category 1: Social Media
  {
    id: "social-media-marketing",
    num: "01",
    category: "social-media",
    categoryLabel: "Social Media",
    title: "Social Media Marketing Course",
    description:
      "Build an integrated social strategy across channels, content and community.",
    topics: ["Platform Strategy", "Content Planning", "Community Growth"],
    anchor: "social-media",
  },
  {
    id: "instagram-marketing",
    num: "02",
    category: "social-media",
    categoryLabel: "Social Media",
    title: "Instagram Marketing Course",
    description:
      "Learn how visual storytelling, reels strategy and audience engagement work together to build presence.",
    topics: ["Content Strategy", "Reels & Stories", "Audience Engagement"],
    anchor: "social-media",
  },
  {
    id: "facebook-marketing",
    num: "03",
    category: "social-media",
    categoryLabel: "Social Media",
    title: "Facebook Marketing Course",
    description:
      "Learn how content, audience targeting and campaign strategy work together across Facebook.",
    topics: ["Campaign Basics", "Audience Targeting", "Content & Ads"],
    anchor: "social-media",
  },
  {
    id: "linkedin-marketing",
    num: "04",
    category: "social-media",
    categoryLabel: "Social Media",
    title: "Linkedin Marketing Course",
    description:
      "Learn how professional content and B2B strategy can support visibility and lead generation.",
    topics: ["Professional Branding", "B2B Content", "Lead Generation"],
    anchor: "social-media",
  },

  // Category 2: Search & Ads
  {
    id: "seo-specialist",
    num: "05",
    category: "search-ads",
    categoryLabel: "Search & Ads",
    title: "SEO Specialist Course",
    description:
      "Learn how search engines discover, understand and rank content, and how businesses can improve organic visibility.",
    topics: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Content Optimization",
    ],
    anchor: "search-ads",
  },
  {
    id: "google-ads",
    num: "06",
    category: "search-ads",
    categoryLabel: "Search & Ads",
    title: "Google Ads Course",
    description:
      "Learn how paid search campaigns are structured, targeted and optimized to reach high-intent audiences.",
    topics: [
      "Campaign Setup",
      "Keywords & Targeting",
      "Ad Creation",
      "Optimization",
    ],
    anchor: "search-ads",
  },
  {
    id: "performance-marketing",
    num: "07",
    category: "search-ads",
    categoryLabel: "Search & Ads",
    title: "Performance Marketing Course",
    description:
      "Understand how paid acquisition, audience testing and conversion strategy work together to improve marketing efficiency.",
    topics: [
      "Paid Campaigns",
      "Audience Testing",
      "Conversion Strategy",
      "Campaign Optimization",
    ],
    anchor: "search-ads",
  },

  // Category 3: Data & Analytics
  {
    id: "google-analytics",
    num: "08",
    category: "data-analytics",
    categoryLabel: "Data & Analytics",
    title: "Google Analytics Course",
    description:
      "Learn how website and campaign data can be interpreted to understand traffic, behaviour and performance.",
    topics: [
      "Traffic Analysis",
      "User Behaviour",
      "Events & Engagement",
      "Performance Measurement",
    ],
    anchor: "data-analytics",
  },
  {
    id: "digital-marketing-data-analytics",
    num: "09",
    category: "data-analytics",
    categoryLabel: "Data & Analytics",
    title: "Digital Marketing & Data Analytics Course",
    description:
      "Learn how marketing data from multiple channels can support stronger reporting and smarter decisions.",
    topics: [
      "Marketing Data",
      "Campaign Analysis",
      "Reporting",
      "Insights & Decision-Making",
    ],
    anchor: "data-analytics",
  },
];

interface CoursesPageProps {
  onNavigate?: (path: string) => void;
}

export default function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [activeNav, setActiveNav] = useState("social-media");

  useEffect(() => {
    document.title = "Digital Marketing Courses in Ahmedabad | SUPRA BIZ";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore SUPRA BIZ digital marketing courses including social media marketing, SEO, Google Ads, Google Analytics, performance marketing and data analytics."
      );
    }

    // Check hash on load
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }

    // Scroll listener for quick nav active state
    const handleScroll = () => {
      const sections = ["social-media", "search-ads", "data-analytics"];
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNav(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      window.history.pushState(null, "", `/courses#${id}`);
      setActiveNav(id);
    }
  };

  const socialCourses = ALL_COURSES.filter((c) => c.category === "social-media");
  const searchAdsCourses = ALL_COURSES.filter((c) => c.category === "search-ads");
  const analyticsCourses = ALL_COURSES.filter(
    (c) => c.category === "data-analytics"
  );

  return (
    <main className="w-full overflow-hidden bg-white selection:bg-[#08703A] selection:text-white">
      {/* ─── 01. Courses Hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-10 bg-white border-b border-[#08703A]/[0.06]">
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Column (52%) */}
            <div className="flex flex-col items-start">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8F4EC] border border-[#08703A]/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                <span
                  className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#08703A]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  LEARN WITH SUPRA BIZ
                </span>
              </div>

              {/* H1 Headline */}
              <h1
                className="text-[#15241B] tracking-[-0.04em] leading-[1.05] mb-6 font-bold"
                style={{
                  fontSize: "clamp(42px, 5.2vw, 76px)",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                Master Digital Marketing.
                <br />
                <span className="text-[#08703A]">Build Skills That Matter.</span>
              </h1>

              {/* Description */}
              <p
                className="text-[#56645A] text-[16px] sm:text-[18px] leading-[1.65] max-w-[620px] mb-8 sm:mb-10 font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Build practical skills across social media, SEO, Google Ads,
                analytics and performance marketing through structured, real-world
                focused learning.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={(e) => scrollToSection("social-media", e)}
                  className="group inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-full text-[15px] font-semibold text-white bg-[#08703A] hover:bg-[#065A2E] transition-all duration-200 shadow-[0_8px_20px_rgba(8,112,58,0.20)] hover:-translate-y-0.5 cursor-pointer"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Explore Courses</span>
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
                  <span>Talk to an Advisor</span>
                  <span className="text-[#08703A] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column (48%): Hero Image */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-[560px] aspect-[4/4.2] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#F4F8F5]"
                style={{
                  border: "1px solid rgba(8, 112, 58, 0.10)",
                  boxShadow: "0 30px 70px rgba(20, 55, 35, 0.12)",
                }}
              >
                <img
                  src={heroImg}
                  alt="Digital marketing learner working with social, SEO and analytics tools"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.015]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Editorial Label */}
                <div
                  className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md"
                  style={{
                    background: "rgba(255, 255, 255, 0.88)",
                    border: "1px solid rgba(8, 112, 58, 0.12)",
                    boxShadow: "0 8px 24px rgba(18, 58, 35, 0.08)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
                  <span
                    className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#15241B]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    SOCIAL • SEO • ADS • ANALYTICS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. Quick Category Navigation ─────────────────────────────────────── */}
      <section className="sticky top-[79px] min-[960px]:top-[83px] z-[900] bg-white/95 backdrop-blur-md border-b border-[#08703A]/10 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span
            className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#08703A]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            EXPLORE LEARNING PATHS
          </span>

          <nav className="flex items-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar py-1">
            {[
              { num: "01", name: "Social Media", id: "social-media" },
              { num: "02", name: "Search & Ads", id: "search-ads" },
              { num: "03", name: "Data & Analytics", id: "data-analytics" },
            ].map((cat) => {
              const isActive = activeNav === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={(e) => scrollToSection(cat.id, e)}
                  className={`group inline-flex items-center gap-2 text-[13.5px] sm:text-[14px] font-semibold transition-colors duration-200 cursor-pointer flex-shrink-0 ${
                    isActive ? "text-[#08703A]" : "text-[#55645A] hover:text-[#08703A]"
                  }`}
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span
                    className={`text-[12px] font-bold transition-colors duration-200 ${
                      isActive
                        ? "text-[#FFC21C]"
                        : "text-[#88978D] group-hover:text-[#FFC21C]"
                    }`}
                  >
                    {cat.num}
                  </span>
                  <span className="border-b-2 border-transparent group-hover:border-[#08703A] pb-0.5">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* ─── 03. Featured Learning Overview ────────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-10 bg-[#FAFBF9]">
        <div className="max-w-[1380px] mx-auto">
          {/* Header */}
          <div className="max-w-[820px] mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#08703A]" />
              <span
                className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#08703A]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                WHAT YOU CAN LEARN
              </span>
            </div>
            <h2
              className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold text-[#15241B] tracking-[-0.03em] leading-[1.15] mb-5"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Build Skills Across the
              <br />
              Digital Marketing Ecosystem.
            </h2>
            <p
              className="text-[16px] sm:text-[17px] text-[#55645A] leading-[1.65]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Learn how strategy, content, search, advertising and analytics work
              together to create effective digital marketing that drives real
              business growth.
            </p>
          </div>

          {/* 3 Learning Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 border-t border-[#08703A]/10 pt-10">
            {/* Pillar 1 */}
            <div className="flex flex-col">
              <span
                className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#08703A] mb-3"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                01 / SOCIAL
              </span>
              <h3
                className="text-[22px] font-bold text-[#15241B] mb-2.5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Social Media &amp; Community
              </h3>
              <p
                className="text-[14.5px] text-[#5A685F] leading-[1.6] mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Build content, community and platform strategy across Instagram,
                Facebook, and professional networks.
              </p>
              <button
                type="button"
                onClick={(e) => scrollToSection("social-media", e)}
                className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-bold text-[#08703A] hover:underline cursor-pointer"
              >
                <span>4 Courses Available</span>
                <span>↓</span>
              </button>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col md:border-l md:border-[#08703A]/10 md:pl-8 lg:pl-10">
              <span
                className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#08703A] mb-3"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                02 / SEARCH &amp; ADS
              </span>
              <h3
                className="text-[22px] font-bold text-[#15241B] mb-2.5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Search &amp; Paid Acquisition
              </h3>
              <p
                className="text-[14.5px] text-[#5A685F] leading-[1.6] mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Learn SEO, search marketing and paid acquisition to capture intent
                and scale media efficiency.
              </p>
              <button
                type="button"
                onClick={(e) => scrollToSection("search-ads", e)}
                className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-bold text-[#08703A] hover:underline cursor-pointer"
              >
                <span>3 Courses Available</span>
                <span>↓</span>
              </button>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col md:border-l md:border-[#08703A]/10 md:pl-8 lg:pl-10">
              <span
                className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#08703A] mb-3"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                03 / DATA &amp; ANALYTICS
              </span>
              <h3
                className="text-[22px] font-bold text-[#15241B] mb-2.5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Measurement &amp; Intelligence
              </h3>
              <p
                className="text-[14.5px] text-[#5A685F] leading-[1.6] mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Understand performance, tracking telemetry and multi-channel
                decision-making with modern analytics.
              </p>
              <button
                type="button"
                onClick={(e) => scrollToSection("data-analytics", e)}
                className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-bold text-[#08703A] hover:underline cursor-pointer"
              >
                <span>2 Courses Available</span>
                <span>↓</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04. Section 01: Social Media Courses ─────────────────────────────── */}
      <section
        id="social-media"
        className="scroll-mt-32 py-20 sm:py-24 px-6 sm:px-8 lg:px-10 bg-white border-t border-[#08703A]/10"
      >
        <div className="max-w-[1380px] mx-auto">
          {/* Category Intro: 2-column (Text Left, Compact Visual Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-[70px] items-center mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] text-[#FFC21C]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  01
                </span>
                <span className="text-[12px] font-bold text-[#FFC21C]">/</span>
                <span
                  className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] text-[#08703A]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  SOCIAL MEDIA
                </span>
              </div>
              <h2
                className="text-[34px] sm:text-[44px] lg:text-[50px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.06] mb-4 sm:mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Create Attention.
                <br />
                Build Community.
                <br />
                <span className="text-[#08703A]">Grow Brands.</span>
              </h2>
              <p
                className="text-[16px] sm:text-[17.5px] text-[#69736C] leading-[1.65] max-w-[580px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Build an integrated social strategy across channels, content and community to develop sustainable organic reach and loyal brand advocacy.
              </p>
            </div>

            {/* Compact Category Visual */}
            <div className="w-full">
              <div
                className="relative w-full h-[320px] sm:h-[360px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#F4F8F5]"
                style={{
                  border: "1px solid rgba(8, 112, 58, 0.08)",
                  boxShadow: "0 22px 55px rgba(20, 55, 35, 0.08)",
                }}
              >
                <img
                  src={socialLearningImg}
                  alt="Social media content planning workspace"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] font-bold text-[#15241B]"
                  style={{
                    background: "rgba(255, 255, 255, 0.92)",
                    border: "1px solid rgba(8, 112, 58, 0.10)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                  <span style={{ fontFamily: "Manrope, sans-serif" }}>
                    CONTENT • CREATIVE • COMMUNITY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Collection: Full Width 2-Column Editorial Grid Below Intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-0">
            {socialCourses.map((course, idx) => (
              <article
                key={course.id}
                className="py-[28px] sm:py-[30px] pr-2 pb-[32px] sm:pb-[34px] border-t border-[#08703A]/10 group transition-colors duration-200"
              >
                <div
                  className="text-[11px] font-bold tracking-[0.08em] text-[#FFC21C] mb-2.5"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-[22px] sm:text-[25px] font-bold text-[#15241B] group-hover:text-[#08703A] transition-colors leading-[1.2] tracking-[-0.02em] mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {course.title}
                </h3>
                <p
                  className="text-[14px] sm:text-[15px] text-[#69736C] leading-[1.65] max-w-[520px] mb-3.5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {course.description}
                </p>
                {/* Topics */}
                <div className="text-[11.5px] sm:text-[12px] font-medium text-[#87908A] leading-[1.7] mb-4">
                  {course.topics.map((t, tIdx) => (
                    <span key={t}>
                      {t}
                      {tIdx < course.topics.length - 1 && (
                        <span className="mx-2 text-[#08703A]/25">•</span>
                      )}
                    </span>
                  ))}
                </div>
                {/* CTA */}
                <button
                  type="button"
                  onClick={(e) => handleNav("/contact", e)}
                  className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[14px] font-[650] text-[#08703A] hover:text-[#065A2E] cursor-pointer group/cta transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span className="relative">
                    View Course
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#FFC21C] transition-all duration-200 group-hover/cta:w-full" />
                  </span>
                  <span className="transition-transform duration-200 group-hover/cta:translate-x-1">
                    →
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 05. Section 02: Search & Ads Courses ─────────────────────────────── */}
      <section
        id="search-ads"
        className="scroll-mt-32 py-20 sm:py-24 px-6 sm:px-8 lg:px-10 bg-[#F7FAF7] border-t border-[#08703A]/10"
      >
        <div className="max-w-[1380px] mx-auto">
          {/* Category Intro: 2-column (Text Left, Compact Visual Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-[70px] items-center mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] text-[#FFC21C]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  02
                </span>
                <span className="text-[12px] font-bold text-[#FFC21C]">/</span>
                <span
                  className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] text-[#08703A]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  SEARCH &amp; ADS
                </span>
              </div>
              <h2
                className="text-[34px] sm:text-[44px] lg:text-[50px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.06] mb-4 sm:mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Be Found.
                <br />
                Reach the Right Audience.
                <br />
                <span className="text-[#08703A]">Drive Action.</span>
              </h2>
              <p
                className="text-[16px] sm:text-[17.5px] text-[#69736C] leading-[1.65] max-w-[580px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Learn how search engines discover, understand and rank content, and how paid acquisition targets high-intent queries with disciplined optimization.
              </p>
            </div>

            {/* Compact Editorial Marketing Diagram */}
            <div className="w-full">
              <div
                className="w-full h-[340px] sm:h-[360px] rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-7 flex flex-col justify-between"
                style={{
                  border: "1px solid rgba(8, 112, 58, 0.08)",
                  boxShadow: "0 22px 55px rgba(20, 55, 35, 0.08)",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#08703A]/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                    <span
                      className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Acquisition Architecture
                    </span>
                  </div>
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-wider text-[#08703A] bg-[#08703A]/[0.08] px-2 py-0.5 rounded"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Editorial Framework
                  </span>
                </div>

                {/* SEARCH Flow */}
                <div className="py-2.5 px-3.5 rounded-xl bg-[#F8FAF8] border border-[#08703A]/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider text-[#08703A]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      SEARCH
                    </span>
                    <span className="text-[11px] font-medium text-[#87908A]">
                      Organic Discovery
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-[12px] font-semibold text-[#15241B]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#08703A]/10 text-xs text-[#15241B]">
                      Keyword Intent
                    </span>
                    <div className="flex-1 flex items-center relative">
                      <div className="w-full h-[1px] bg-[#08703A]/20" />
                      <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FFC21C]" />
                    </div>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#08703A]/10 text-xs text-[#08703A]">
                      Organic Visibility
                    </span>
                  </div>
                </div>

                {/* Connect node */}
                <div className="flex items-center justify-center -my-1 text-center">
                  <span className="w-5 h-5 rounded-full bg-[#EBF6EE] text-[#08703A] text-xs font-bold flex items-center justify-center">
                    +
                  </span>
                </div>

                {/* PAID Flow */}
                <div className="py-2.5 px-3.5 rounded-xl bg-[#F8FAF8] border border-[#08703A]/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      PAID
                    </span>
                    <span className="text-[11px] font-medium text-[#87908A]">
                      High-Intent Targeting
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-[12px] font-semibold text-[#15241B]">
                    <span className="px-2.5 py-1 rounded bg-white border border-[#08703A]/10 text-xs text-[#15241B]">
                      Search Campaigns
                    </span>
                    <div className="flex-1 flex items-center relative">
                      <div className="w-full h-[1px] bg-[#08703A]/20" />
                      <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#08703A]" />
                    </div>
                    <span className="px-2.5 py-1 rounded bg-white border border-[#08703A]/10 text-xs text-[#08703A]">
                      Audience Intent
                    </span>
                  </div>
                </div>

                {/* OPTIMIZE */}
                <div className="pt-2.5 border-t border-[#08703A]/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[#08703A] font-bold text-xs">↓</span>
                    <span
                      className="text-[11.5px] font-bold uppercase tracking-wider text-[#08703A]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      OPTIMIZE
                    </span>
                  </div>
                  <span className="text-[11.5px] text-[#69736C]">
                    Bids • Creative Testing • Conversion Strategy
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Collection: Full Width 3-Column Editorial Grid Below Intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-12 gap-y-0">
            {searchAdsCourses.map((course, idx) => (
              <article
                key={course.id}
                className="py-[28px] sm:py-[30px] pr-2 pb-[32px] sm:pb-[34px] border-t border-[#08703A]/10 group transition-colors duration-200"
              >
                <div
                  className="text-[11px] font-bold tracking-[0.08em] text-[#FFC21C] mb-2.5"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-[22px] sm:text-[25px] font-bold text-[#15241B] group-hover:text-[#08703A] transition-colors leading-[1.2] tracking-[-0.02em] mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {course.title}
                </h3>
                <p
                  className="text-[14px] sm:text-[15px] text-[#69736C] leading-[1.65] max-w-[520px] mb-3.5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {course.description}
                </p>
                {/* Topics */}
                <div className="text-[11.5px] sm:text-[12px] font-medium text-[#87908A] leading-[1.7] mb-4">
                  {course.topics.map((t, tIdx) => (
                    <span key={t}>
                      {t}
                      {tIdx < course.topics.length - 1 && (
                        <span className="mx-2 text-[#08703A]/25">•</span>
                      )}
                    </span>
                  ))}
                </div>
                {/* CTA */}
                <button
                  type="button"
                  onClick={(e) => handleNav("/contact", e)}
                  className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[14px] font-[650] text-[#08703A] hover:text-[#065A2E] cursor-pointer group/cta transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span className="relative">
                    View Course
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#FFC21C] transition-all duration-200 group-hover/cta:w-full" />
                  </span>
                  <span className="transition-transform duration-200 group-hover/cta:translate-x-1">
                    →
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 06. Section 03: Data & Analytics Courses ─────────────────────────── */}
      <section
        id="data-analytics"
        className="scroll-mt-32 py-20 sm:py-24 px-6 sm:px-8 lg:px-10 bg-white border-t border-[#08703A]/10"
      >
        <div className="max-w-[1380px] mx-auto">
          {/* Category Intro: 2-column (Text Left, Compact Visual Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-[70px] items-center mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] text-[#FFC21C]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  03
                </span>
                <span className="text-[12px] font-bold text-[#FFC21C]">/</span>
                <span
                  className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] text-[#08703A]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  DATA &amp; ANALYTICS
                </span>
              </div>
              <h2
                className="text-[34px] sm:text-[44px] lg:text-[50px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.06] mb-4 sm:mb-5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Understand Performance.
                <br />
                <span className="text-[#08703A]">Make Smarter Decisions.</span>
              </h2>
              <p
                className="text-[16px] sm:text-[17.5px] text-[#69736C] leading-[1.65] max-w-[580px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Learn how website and campaign telemetry can be interpreted to understand traffic attribution, user behaviour and data-backed business growth.
              </p>
            </div>

            {/* Compact Category Visual */}
            <div className="w-full">
              <div
                className="relative w-full h-[320px] sm:h-[360px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#F4F8F5]"
                style={{
                  border: "1px solid rgba(8, 112, 58, 0.08)",
                  boxShadow: "0 22px 55px rgba(20, 55, 35, 0.08)",
                }}
              >
                <img
                  src={analyticsLearningImg}
                  alt="Digital analytics workspace and measurement dashboards"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] font-bold text-[#15241B]"
                  style={{
                    background: "rgba(255, 255, 255, 0.92)",
                    border: "1px solid rgba(8, 112, 58, 0.10)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                  <span style={{ fontFamily: "Manrope, sans-serif" }}>
                    ANALYTICS • MEASUREMENT • DECISION-MAKING
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Courses Collection: Full Width 2-Column Editorial Grid Below Intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-0">
            {analyticsCourses.map((course, idx) => (
              <article
                key={course.id}
                className="py-[28px] sm:py-[30px] pr-2 pb-[32px] sm:pb-[34px] border-t border-[#08703A]/10 group transition-colors duration-200"
              >
                <div
                  className="text-[11px] font-bold tracking-[0.08em] text-[#FFC21C] mb-2.5"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-[22px] sm:text-[25px] font-bold text-[#15241B] group-hover:text-[#08703A] transition-colors leading-[1.2] tracking-[-0.02em] mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {course.title}
                </h3>
                <p
                  className="text-[14px] sm:text-[15px] text-[#69736C] leading-[1.65] max-w-[520px] mb-3.5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {course.description}
                </p>
                {/* Topics */}
                <div className="text-[11.5px] sm:text-[12px] font-medium text-[#87908A] leading-[1.7] mb-4">
                  {course.topics.map((t, tIdx) => (
                    <span key={t}>
                      {t}
                      {tIdx < course.topics.length - 1 && (
                        <span className="mx-2 text-[#08703A]/25">•</span>
                      )}
                    </span>
                  ))}
                </div>
                {/* CTA */}
                <button
                  type="button"
                  onClick={(e) => handleNav("/contact", e)}
                  className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[14px] font-[650] text-[#08703A] hover:text-[#065A2E] cursor-pointer group/cta transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span className="relative">
                    View Course
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#FFC21C] transition-all duration-200 group-hover/cta:w-full" />
                  </span>
                  <span className="transition-transform duration-200 group-hover/cta:translate-x-1">
                    →
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 07. Section: Why Learn With SUPRA BIZ ───────────────────────────── */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-10 bg-[#FAFBF9] border-t border-[#08703A]/10">
        <div className="max-w-[1380px] mx-auto">
          {/* Section Header */}
          <div className="max-w-[760px] mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#08703A]" />
              <span
                className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#08703A]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                WHY LEARN WITH US
              </span>
            </div>
            <h2
              className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold text-[#15241B] tracking-[-0.03em] leading-[1.15]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Learn Skills You Can
              <br />
              Actually Use.
            </h2>
          </div>

          {/* 2x2 Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Principle 01 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#08703A]/10 flex flex-col justify-between">
              <div>
                <span
                  className="text-[34px] sm:text-[40px] font-bold text-[#08703A]/22 block mb-3 leading-none"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  01
                </span>
                <h3
                  className="text-[21px] font-bold text-[#15241B] mb-2.5"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Practical Learning
                </h3>
                <p
                  className="text-[15px] text-[#55645A] leading-[1.65]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Learn concepts through realistic marketing examples and practical
                  application across modern toolsets.
                </p>
              </div>
            </div>

            {/* Principle 02 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#08703A]/10 flex flex-col justify-between">
              <div>
                <span
                  className="text-[34px] sm:text-[40px] font-bold text-[#08703A]/22 block mb-3 leading-none"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  02
                </span>
                <h3
                  className="text-[21px] font-bold text-[#15241B] mb-2.5"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Structured Path
                </h3>
                <p
                  className="text-[15px] text-[#55645A] leading-[1.65]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Move from fundamentals into channel-specific and
                  performance-focused skills in a logical, guided progression.
                </p>
              </div>
            </div>

            {/* Principle 03 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#08703A]/10 flex flex-col justify-between">
              <div>
                <span
                  className="text-[34px] sm:text-[40px] font-bold text-[#08703A]/22 block mb-3 leading-none"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  03
                </span>
                <h3
                  className="text-[21px] font-bold text-[#15241B] mb-2.5"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Industry-Relevant Topics
                </h3>
                <p
                  className="text-[15px] text-[#55645A] leading-[1.65]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Focus on modern digital marketing areas and workflows actively
                  relied upon by businesses and agencies today.
                </p>
              </div>
            </div>

            {/* Principle 04 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#08703A]/10 flex flex-col justify-between">
              <div>
                <span
                  className="text-[34px] sm:text-[40px] font-bold text-[#08703A]/22 block mb-3 leading-none"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  04
                </span>
                <h3
                  className="text-[21px] font-bold text-[#15241B] mb-2.5"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Applied Thinking
                </h3>
                <p
                  className="text-[15px] text-[#55645A] leading-[1.65]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Learn how strategy, creative work and data come together in real
                  campaigns to solve authentic business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 08. Section: Learning Journey / How It Works ─────────────────────── */}
      <section className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-10 bg-[#F5F9F6] border-t border-[#08703A]/10">
        <div className="max-w-[1380px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full" style={{ background: "#FFC21C" }} />
              <span
                className="text-[11px] font-bold tracking-[0.16em] uppercase"
                style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
              >
                HOW LEARNING WORKS
              </span>
            </div>
            <h2
              className="text-[32px] sm:text-[42px] font-extrabold tracking-[-0.03em]"
              style={{ color: "#15241B", fontFamily: "Manrope, sans-serif" }}
            >
              Learn. Practice. Apply. Grow.
            </h2>
            <p
              className="text-[16px] mt-3"
              style={{ color: "#667069", fontFamily: "Inter, sans-serif" }}
            >
              A structured 4-step framework designed to deliver practical capability and creative excellence.
            </p>
          </div>

          {/* Connected Steps Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-8">
            {[
              {
                step: "01",
                title: "Learn",
                desc: "Understand the core concepts.",
              },
              {
                step: "02",
                title: "Practice",
                desc: "Work through practical examples and guided exercises.",
              },
              {
                step: "03",
                title: "Apply",
                desc: "Use the concepts across realistic marketing scenarios.",
              },
              {
                step: "04",
                title: "Grow",
                desc: "Build stronger confidence across digital marketing channels.",
              },
            ].map((st, i) => (
              <div
                key={st.step}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Desktop Connecting Line Segment between Step i and Step i+1 */}
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
                  className="text-[20px] font-bold mb-2.5 transition-colors duration-200 group-hover:text-[#08703A]"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 09. Section: Course Guidance CTA ─────────────────────────────────── */}
      <section
        className="relative pt-[80px] sm:pt-[90px] pb-[90px] sm:pb-[100px] px-6 sm:px-8 lg:px-10 overflow-hidden border-b border-[rgba(255,255,255,0.08)]"
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
          <div
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255, 255, 255, 0.09)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#FFC21C" }} />
            <span
              className="text-[10px] font-bold tracking-[0.14em] uppercase"
              style={{ color: "rgba(255, 255, 255, 0.82)", fontFamily: "Manrope, sans-serif" }}
            >
              FIND YOUR PATH
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[clamp(50px,5vw,66px)] font-bold text-white tracking-[-0.04em] leading-[1.03] max-w-[800px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Not Sure Which Course
            <br />
            Is Right for You?
          </h2>

          {/* Description */}
          <p
            className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-[620px] mt-[24px] sm:mt-[26px] mb-8 sm:mb-9"
            style={{ color: "rgba(255, 255, 255, 0.68)", fontFamily: "Inter, sans-serif" }}
          >
            Explore the learning path that best matches the skills you want to build and the area of digital marketing you want to understand better.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={(e) => scrollToSection("social-media", e)}
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
              <span>Explore Courses</span>
              <span className="ml-1.5">↑</span>
            </button>

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
                e.currentTarget.style.boxShadow = "0 16px 35px rgba(255, 194, 28, 0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(255, 194, 28, 0.16)";
              }}
            >
              <span>Talk to Us</span>
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
