import { useState, useEffect, useRef } from "react";
import logoImg from "@/imports/WhatsApp_Image_2026-09-07_at_3.33.34_PM.jpeg";
import headerLogoImg from "@/imports/suprabiz-logo-header.png";
import heroMarketingImg from "@/imports/suprabiz-hero-digital-marketing.jpg";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CoursesPage from "./pages/CoursesPage";
import OurWorkPage from "./pages/OurWorkPage";
import ContactPage from "./pages/ContactPage";
import aboutStrategyImg from "@/imports/suprabiz-about-strategy.jpg";
import brandingImg from "@/imports/suprabiz-branding-service.jpg";
import socialMarketingImg from "@/imports/suprabiz-social-media-marketing.jpg";
import webDesignImg from "@/imports/suprabiz-web-design-service.jpg";
import digitalAgencyImg from "@/imports/suprabiz-services-digital-agency.jpg";

// ─── Logo ────────────────────────────────────────────────────────────────────
// Light bg: use the real photo logo; dark bg: SVG wordmark
function SuprabizLogo({
  size = 36,
  dark = false,
  isHeader = false,
  className = "",
  style = {},
}: {
  size?: number;
  dark?: boolean;
  isHeader?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  if (!dark) {
    return (
      <img
        src={isHeader ? headerLogoImg : logoImg}
        alt="SUPRABIZ – Building Brands"
        className={className}
        style={{
          ...(isHeader
            ? {
                objectFit: "contain",
                ...style,
              }
            : {
                height: size * 1.4,
                width: "auto",
                objectFit: "contain",
                ...style,
              }),
        }}
      />
    );
  }
  // SVG wordmark for dark backgrounds (no white JPEG bg visible)
  return (
    <svg width={size * 3.8} height={size} viewBox="0 0 152 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* SB mark — simplified monogram */}
      <rect x="0" y="14" width="8" height="8" rx="1.5" fill="#FFC515" opacity="0.9" />
      <rect x="5" y="8" width="7" height="7" rx="1.5" fill="#138A3D" opacity="0.9" />
      <rect x="10" y="2" width="6" height="6" rx="1.5" fill="#FFC515" opacity="0.8" />
      {/* Swoosh arrow */}
      <path d="M4 34 Q14 20 20 6" stroke="#FAFBF7" strokeWidth="2" strokeLinecap="round" fill="none" />
      <polygon points="20,6 26,12 15,11" fill="#FAFBF7" />
      {/* SUPRA */}
      <text x="30" y="28" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="19" fill="#FAFBF7" letterSpacing="-0.3">SUPRA</text>
      {/* BIZ in gold */}
      <text x="104" y="28" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="19" fill="#FFC515" letterSpacing="-0.3">BIZ</text>
    </svg>
  );
}

// ─── Reveal Hook ─────────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─── Header Icons ─────────────────────────────────────────────────────────────
function ChevronDownIcon({ className = "w-3.5 h-3.5", isOpen = false }: { className?: string; isOpen?: boolean }) {
  return (
    <svg
      className={`${className} transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="10" x2="16" y2="10" />
      <polyline points="11 5 16 10 11 15" />
    </svg>
  );
}

function SparkleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
    </svg>
  );
}

function GraduationCapIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function BookOpenIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

// ─── Course Navigation Data ──────────────────────────────────────────────────
interface CourseItem {
  name: string;
  href: string;
  description: string;
}

interface CourseGroup {
  category: string;
  courses: CourseItem[];
}

const COURSE_GROUPS: CourseGroup[] = [
  {
    category: "Social Media Marketing",
    courses: [
      {
        name: "Social Media Marketing Course",
        description: "Full-funnel organic strategy, community & brand virality",
        href: "/courses#social-media",
      },
      {
        name: "Instagram Marketing Course",
        description: "Reels virality, aesthetics & influencer growth",
        href: "/courses#social-media",
      },
      {
        name: "Facebook Marketing Course",
        description: "Meta Ads, precision retargeting & ROAS scaling",
        href: "/courses#social-media",
      },
      {
        name: "Linkedin Marketing Course",
        description: "B2B lead generation & executive thought leadership",
        href: "/courses#social-media",
      },
    ],
  },
  {
    category: "Search & Performance",
    courses: [
      {
        name: "SEO Specialist Course",
        description: "Technical SEO, indexing & high-intent keyword ranking",
        href: "/courses#search-ads",
      },
      {
        name: "Google Ads Course",
        description: "Search, Display, Shopping & high-conversion bidding",
        href: "/courses#search-ads",
      },
      {
        name: "Performance Marketing Course",
        description: "Full-funnel media buying, CPA & CAC optimization",
        href: "/courses#search-ads",
      },
    ],
  },
  {
    category: "Data & Analytics",
    courses: [
      {
        name: "Google Analytics Course",
        description: "GA4 setup, custom event telemetry & funnel reports",
        href: "/courses#data-analytics",
      },
      {
        name: "Digital Marketing & Data Analytics Course",
        description: "Multi-channel attribution, metrics & business BI",
        href: "/courses#data-analytics",
      },
    ],
  },
];

// ─── Course Mega Menu (Desktop) ──────────────────────────────────────────────
function CourseMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNavigate?: (path: string) => void;
}) {
  if (!isOpen) return null;

  const handleLinkClick = (e: React.MouseEvent, href = "/courses") => {
    onClose();
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <div
      id="course-mega-menu"
      role="region"
      aria-label="Courses Mega Menu"
      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-[1200] w-[880px] max-w-[96vw]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="bg-white rounded-[22px] overflow-hidden relative animate-megaMenuOpen"
        style={{
          border: "1px solid rgba(8, 112, 58, 0.12)",
          boxShadow:
            "0 24px 70px -10px rgba(18, 58, 35, 0.18), 0 10px 30px -5px rgba(18, 58, 35, 0.08)",
        }}
      >
        {/* Subtle warm accent glow */}
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 w-44 h-44 rounded-full pointer-events-none"
          style={{
            background: "rgba(255, 194, 28, 0.08)",
            filter: "blur(36px)",
          }}
        />

        {/* 1. Header Bar */}
          {/* <div
            className="px-7 py-4 flex items-center justify-between border-b relative z-10"
            style={{
              background: "linear-gradient(135deg, #F8FCF9 0%, #F1F7F3 100%)",
              borderColor: "rgba(8, 112, 58, 0.08)",
            }}
          > */}
          {/* <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "#E5F4E9", color: "#08703A" }}
            >
              <GraduationCapIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3
                  className="text-[16px] font-bold text-[#12351F] tracking-tight"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Professional Marketing Courses
                </h3>
                <span
                  className="text-[10.5px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "#E3F2E7", color: "#08703A" }}
                >
                  Agency-Led
                </span>
              </div>
              <p className="text-[12.5px] text-[#607064] mt-0.5">
                Hands-on career tracks with real client campaigns &amp; live mentorship
              </p>
            </div>
          </div> */}

          {/* <a
            href="#course"
            onClick={(e) => handleLinkClick(e, "#course")}
            className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
            style={{
              background: "#EAF5ED",
              color: "#08703A",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#08703A";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#EAF5ED";
              e.currentTarget.style.color = "#08703A";
            }}
          >
            <span>View All Courses</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a> */}
        {/* </div> */}

        {/* 2. 3-Column Course Layout */}
        <div
          className="grid grid-cols-3 divide-x p-6 gap-6 relative z-10"
          style={{ borderColor: "rgba(8, 112, 58, 0.07)" }}
        >
          {/* Column 1: Social Media Marketing */}
          <div className="pr-1 flex flex-col justify-between">
            <div>
              <div
                className="flex items-center justify-between pb-2.5 mb-3 border-b"
                style={{ borderColor: "rgba(8, 112, 58, 0.08)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#FFC21C" }} />
                  <span
                    className="text-[11.5px] font-bold tracking-[0.06em] uppercase text-[#08703A]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Social Media
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#8B988F]">4 Courses</span>
              </div>

              <div className="space-y-1">
                {COURSE_GROUPS[0].courses.map((c) => (
                  <a
                    key={c.name}
                    href={c.href}
                    onClick={(e) => handleLinkClick(e, c.href)}
                    className="group block p-2.5 rounded-xl transition-all duration-180 hover:bg-[#F2F8F4] border border-transparent hover:border-[#DFEEE4]"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <p
                        className="text-[13.5px] font-bold text-[#14271C] group-hover:text-[#08703A] transition-colors"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {c.name}
                      </p>
                      <span className="text-[#08703A] text-xs font-bold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-180">
                        →
                      </span>
                    </div>
                    <p className="text-[11.5px] text-[#607164] mt-0.5 line-clamp-1">
                      {c.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Search & Performance */}
          <div className="px-3 flex flex-col justify-between">
            <div>
              <div
                className="flex items-center justify-between pb-2.5 mb-3 border-b"
                style={{ borderColor: "rgba(8, 112, 58, 0.08)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#08703A" }} />
                  <span
                    className="text-[11.5px] font-bold tracking-[0.06em] uppercase text-[#08703A]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Search &amp; Ads
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#8B988F]">3 Courses</span>
              </div>

              <div className="space-y-1">
                {COURSE_GROUPS[1].courses.map((c) => (
                  <a
                    key={c.name}
                    href={c.href}
                    onClick={(e) => handleLinkClick(e, c.href)}
                    className="group block p-2.5 rounded-xl transition-all duration-180 hover:bg-[#F2F8F4] border border-transparent hover:border-[#DFEEE4]"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <p
                        className="text-[13.5px] font-bold text-[#14271C] group-hover:text-[#08703A] transition-colors"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {c.name}
                      </p>
                      <span className="text-[#08703A] text-xs font-bold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-180">
                        →
                      </span>
                    </div>
                    <p className="text-[11.5px] text-[#607164] mt-0.5 line-clamp-1">
                      {c.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Data & Analytics + Consultation Card */}
          <div className="pl-3 flex flex-col justify-between">
            <div>
              <div
                className="flex items-center justify-between pb-2.5 mb-3 border-b"
                style={{ borderColor: "rgba(8, 112, 58, 0.08)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#FFC21C" }} />
                  <span
                    className="text-[11.5px] font-bold tracking-[0.06em] uppercase text-[#08703A]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Data &amp; Analytics
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#8B988F]">2 Courses</span>
              </div>

              <div className="space-y-1">
                {COURSE_GROUPS[2].courses.map((c) => (
                  <a
                    key={c.name}
                    href={c.href}
                    onClick={(e) => handleLinkClick(e, c.href)}
                    className="group block p-2.5 rounded-xl transition-all duration-180 hover:bg-[#F2F8F4] border border-transparent hover:border-[#DFEEE4]"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <p
                        className="text-[13.5px] font-bold text-[#14271C] group-hover:text-[#08703A] transition-colors"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {c.name}
                      </p>
                      <span className="text-[#08703A] text-xs font-bold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-180">
                        →
                      </span>
                    </div>
                    <p className="text-[11.5px] text-[#607164] mt-0.5 line-clamp-1">
                      {c.description}
                    </p>
                  </a>
                ))}
              </div>

              {/* Consultation Card */}
              <div
                className="mt-3 p-3.5 rounded-xl border relative"
                style={{
                  background: "linear-gradient(145deg, #F3F9F5 0%, #E9F5ED 100%)",
                  borderColor: "rgba(8, 112, 58, 0.15)",
                }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08703A]" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#08703A]">
                    Need Course Guidance?
                  </span>
                </div>
                <p
                  className="text-[12.5px] font-bold text-[#12351F] leading-snug"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Confused which path to choose?
                </p>
                <p className="text-[11px] text-[#55695C] mt-0.5 leading-relaxed">
                  Get free 1-on-1 mentorship to pick the curriculum that matches your career goals.
                </p>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, "/contact")}
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#08703A] hover:text-[#065A2E] transition-colors cursor-pointer"
                >
                  <span>Talk with Advisor</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Trust Bar */}
        <div
          className="px-7 py-3 flex items-center justify-between border-t relative z-10"
          style={{
            background: "#F7FAF8",
            borderColor: "rgba(8, 112, 58, 0.08)",
          }}
        >
          <div className="flex items-center gap-5 text-[11.5px] font-medium text-[#506356]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#08703A]" />
              Live Campaign Practice
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#08703A]" />
              Industry Certification
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#08703A]" />
              1-on-1 Mentorship
            </span>
          </div>

          <a
            href="/courses"
            onClick={(e) => handleLinkClick(e, "/courses")}
            className="text-[11.5px] font-bold text-[#08703A] hover:underline inline-flex items-center gap-1"
          >
            <span>Explore All Courses</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Top Announcement Bar ────────────────────────────────────────────────────
function TopAnnouncementBar() {
  return (
    <div
      className="w-full select-none transition-colors duration-200 border-b border-white/10"
      style={{
        background: "#075C31",
        color: "#FFFFFF",
        height: "36px",
      }}
    >
      <div className="max-w-[1380px] mx-auto h-full px-7 lg:px-10 flex items-center justify-between text-[11px] sm:text-xs font-medium tracking-[0.02em]">
        {/* Left */}
        <div className="flex items-center gap-2.5">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "#FFC21C" }}
          />
          <span className="font-semibold text-white/95">
            Grow Your Brand With SUPRA BIZ
          </span>
          <span className="hidden md:inline text-white/40">•</span>
          <span className="hidden md:inline text-white/80 text-[11px] font-normal">
            Ahmedabad's Leading Branding &amp; Digital Marketing Agency
          </span>
        </div>

        {/* Right */}
        <div className="hidden sm:flex items-center gap-5">
          <span className="tracking-wider text-[11px] font-semibold uppercase text-white/70">
            CREATIVE • STRATEGIC • DIGITAL
          </span>
          <span className="text-white/30">|</span>
          <a
            href="tel:+919313009073"
            className="hover:underline flex items-center gap-1 text-[11px] font-semibold text-white/90 hover:text-white transition-colors"
          >
            <span>Sales: +91 93130 09073</span>
          </a>
          <span className="text-white/30">|</span>
          <a
            href="mailto:sales@suprabiz.co.in"
            className="hover:underline flex items-center gap-1 text-[11px] font-semibold text-white transition-colors"
          >
            sales@suprabiz.co.in
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Redesigned Header / Navbar ──────────────────────────────────────────────
interface NavbarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

function Navbar({ currentPath = "/", onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const courseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  const isAboutRoute =
    currentPath === "/about" ||
    currentPath === "/about/" ||
    (typeof window !== "undefined" &&
      (window.location.pathname === "/about" || window.location.pathname === "/about/"));

  const isServicesRoute =
    currentPath === "/services" ||
    currentPath === "/services/" ||
    currentPath.startsWith("/services#") ||
    (typeof window !== "undefined" &&
      (window.location.pathname === "/services" ||
        window.location.pathname === "/services/" ||
        window.location.pathname.startsWith("/services#")));

  const isCoursesRoute =
    currentPath === "/courses" ||
    currentPath === "/courses/" ||
    currentPath.startsWith("/courses#") ||
    (typeof window !== "undefined" &&
      (window.location.pathname === "/courses" ||
        window.location.pathname === "/courses/" ||
        window.location.pathname.startsWith("/courses#")));

  const isOurWorkRoute =
    currentPath === "/our-work" ||
    currentPath === "/our-work/" ||
    currentPath.startsWith("/our-work#") ||
    (typeof window !== "undefined" &&
      (window.location.pathname === "/our-work" ||
        window.location.pathname === "/our-work/" ||
        window.location.pathname.startsWith("/our-work#")));

  const isContactRoute =
    currentPath === "/contact" ||
    currentPath === "/contact/" ||
    currentPath.startsWith("/contact#") ||
    (typeof window !== "undefined" &&
      (window.location.pathname === "/contact" ||
        window.location.pathname === "/contact/" ||
        window.location.pathname.startsWith("/contact#")));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isAboutRoute) {
        setActiveSection("about");
        return;
      }
      if (isServicesRoute) {
        setActiveSection("services");
        return;
      }
      if (isCoursesRoute) {
        setActiveSection("course");
        return;
      }
      if (isOurWorkRoute) {
        setActiveSection("our-work");
        return;
      }
      if (isContactRoute) {
        setActiveSection("contact");
        return;
      }

      // On home page, active section remains "home"
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath, isAboutRoute, isServicesRoute, isCoursesRoute, isOurWorkRoute, isContactRoute]);

  // Keyboard accessibility and click outside handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCourseOpen(false);
        setMobileOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setCourseOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCourseMouseEnter = () => {
    if (courseTimeoutRef.current) {
      clearTimeout(courseTimeoutRef.current);
      courseTimeoutRef.current = null;
    }
    setCourseOpen(true);
  };

  const handleCourseMouseLeave = () => {
    courseTimeoutRef.current = setTimeout(() => {
      setCourseOpen(false);
    }, 180);
  };

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/about", id: "about" },
    { name: "Services", href: "/services", id: "services" },
    { name: "Course", href: "/courses", id: "course", isDropdown: true },
    { name: "Our Work", href: "/our-work", id: "our-work" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[1000] w-full transition-all duration-300"
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid rgba(10, 60, 35, 0.08)",
        boxShadow: scrolled
          ? "0 8px 30px rgba(17, 47, 32, 0.10)"
          : "0 2px 10px rgba(0, 0, 0, 0.025)",
      }}
    >
      {/* Top Announcement Bar - Distinct Dark Green Strip */}
      <TopAnnouncementBar />

      {/* Main Navbar - Pure Clean White Surface */}
      <nav
        className="w-full relative bg-white transition-all duration-300"
        aria-label="Main Navigation"
      >
        <div
          className="max-w-[1380px] mx-auto px-7 lg:px-10 flex items-center justify-between min-[960px]:block transition-all duration-300"
          style={{ height: scrolled ? "80px" : "84px" }}
        >
          {/* Desktop 3-Column Grid Layout: 180px Logo | 1fr Nav | 180px CTA */}
          <div className="hidden min-[960px]:grid grid-cols-[180px_1fr_180px] items-center w-full h-full">
            {/* 1. Logo (Left) */}
            <div className="justify-self-start flex items-center">
              <a
                href="/"
                className="flex items-center cursor-pointer transition-transform duration-200 hover:opacity-90"
                aria-label="SUPRA BIZ Home"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("/");
                  else window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <SuprabizLogo
                  isHeader
                  className="w-[96px] xl:w-[100px] h-auto max-h-[60px] xl:max-h-[62px] object-contain object-left block"
                />
              </a>
            </div>

            {/* 2. Centered Navigation (Middle) */}
            <div className="justify-self-center flex items-center gap-9 lg:gap-10">
              {navLinks.map((item) => {
                if (item.isDropdown) {
                  const isActive = isCoursesRoute;

                  return (
                    <div
                      key={item.name}
                      className="relative h-full flex items-center"
                      onMouseEnter={handleCourseMouseEnter}
                      onMouseLeave={handleCourseMouseLeave}
                    >
                      <a
                        href="/courses"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigate) onNavigate("/courses");
                        }}
                        className={`nav-link inline-flex items-center gap-1.5 cursor-pointer select-none ${
                          isActive ? "active" : ""
                        }`}
                        aria-expanded={courseOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon isOpen={courseOpen} />
                      </a>

                      {/* Course Mega Menu */}
                      <CourseMegaMenu
                        isOpen={courseOpen}
                        onClose={() => setCourseOpen(false)}
                        onMouseEnter={handleCourseMouseEnter}
                        onMouseLeave={handleCourseMouseLeave}
                        onNavigate={onNavigate}
                      />
                    </div>
                  );
                }

                const isActive = isAboutRoute
                  ? item.id === "about"
                  : isServicesRoute
                  ? item.id === "services"
                  : isCoursesRoute
                  ? item.id === "course"
                  : isOurWorkRoute
                  ? item.id === "our-work"
                  : isContactRoute
                  ? item.id === "contact"
                  : item.id === "home";

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.id === "about") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/about");
                      } else if (item.id === "services") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/services");
                      } else if (item.id === "our-work") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/our-work");
                      } else if (item.id === "contact") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/contact");
                      } else if (item.id === "home") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/");
                      } else if (item.href.startsWith("#")) {
                        if (currentPath !== "/") {
                          e.preventDefault();
                          if (onNavigate) onNavigate("/" + item.href);
                        }
                      }
                    }}
                    className={`nav-link ${
                      isActive ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* 3. CTA Button (Right) */}
            <div className="justify-self-end flex items-center">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("/contact");
                }}
                className="group inline-flex items-center gap-2 h-[46px] px-6 rounded-full text-[14px] font-semibold text-white cursor-pointer transition-all duration-200"
                style={{
                  background: "#08703A",
                  fontFamily: "Manrope, sans-serif",
                  boxShadow: "0 6px 18px rgba(8, 112, 58, 0.18)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#065C30";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 10px 26px rgba(8, 112, 58, 0.22)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#08703A";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(8, 112, 58, 0.18)";
                }}
              >
                <span>Let's Talk</span>
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Flex Header (< 960px) */}
          <div className="flex min-[960px]:hidden items-center justify-between w-full h-full">
            <a
              href="/"
              className="flex items-center cursor-pointer transition-transform duration-200 hover:opacity-90"
              aria-label="SUPRA BIZ Home"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                if (onNavigate) onNavigate("/");
                else window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <SuprabizLogo
                isHeader
                className="w-[76px] sm:w-[82px] md:w-[88px] h-auto max-h-[52px] md:max-h-[56px] object-contain object-left block"
              />
            </a>

            <button
              type="button"
              className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-emerald-950/5 transition-colors focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
            >
              <span
                className="block h-[2px] w-5 rounded-full transition-all duration-300"
                style={{
                  background: "#08703A",
                  transform: mobileOpen ? "rotate(45deg) translateY(6px)" : "",
                }}
              />
              <span
                className="block h-[2px] w-5 rounded-full my-1 transition-all duration-300"
                style={{
                  background: "#08703A",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-[2px] w-5 rounded-full transition-all duration-300"
                style={{
                  background: "#08703A",
                  transform: mobileOpen ? "rotate(-45deg) translateY(-6px)" : "",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Panel */}
        {mobileOpen && (
          <div
            className="min-[960px]:hidden border-t bg-white px-6 py-5 max-h-[80vh] overflow-y-auto shadow-2xl transition-all"
            style={{ borderColor: "rgba(10, 60, 35, 0.08)" }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div
                      key={item.name}
                      className="border-b border-emerald-950/5 py-1"
                    >
                      <button
                        type="button"
                        onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
                        className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-[#16251C] hover:text-[#08703A] transition-colors"
                        aria-expanded={mobileCourseOpen}
                      >
                        <span className="flex items-center gap-2">
                          <span>{item.name}</span>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                            style={{ background: "rgba(8, 112, 58, 0.1)", color: "#08703A" }}
                          >
                            9 Courses
                          </span>
                        </span>
                        <ChevronDownIcon isOpen={mobileCourseOpen} className="w-4 h-4 text-emerald-800" />
                      </button>

                      {/* Mobile Course Accordion Content */}
                      {mobileCourseOpen && (
                        <div className="pl-2 pr-1 pb-4 pt-2 space-y-4">
                          {/* SOCIAL MEDIA */}
                          <div>
                            <p className="text-xs font-bold text-[#0B5F32] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC21C]" />
                              Social Media
                            </p>
                            <div className="space-y-1 pl-2.5">
                              <a
                                href="/courses#social-media"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  if (onNavigate) onNavigate("/courses#social-media");
                                }}
                                className="block py-1 text-sm text-[#1A261F] hover:text-[#08703A]"
                              >
                                Social Media Marketing Course
                              </a>
                              <a
                                href="/courses#social-media"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  if (onNavigate) onNavigate("/courses#social-media");
                                }}
                                className="block py-1 text-sm text-[#1A261F] hover:text-[#08703A]"
                              >
                                Instagram Marketing Course
                              </a>
                              <a
                                href="/courses#social-media"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  if (onNavigate) onNavigate("/courses#social-media");
                                }}
                                className="block py-1 text-sm text-[#1A261F] hover:text-[#08703A]"
                              >
                                Facebook Marketing Course
                              </a>
                              <a
                                href="/courses#social-media"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  if (onNavigate) onNavigate("/courses#social-media");
                                }}
                                className="block py-1 text-sm text-[#1A261F] hover:text-[#08703A]"
                              >
                                Linkedin Marketing Course
                              </a>
                            </div>
                          </div>

                          {/* SEARCH & ADS */}
                          <div>
                            <p className="text-xs font-bold text-[#0B5F32] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#08703A]" />
                              Search &amp; Ads
                            </p>
                            <div className="space-y-1 pl-2.5">
                              <a
                                href="/courses#search-ads"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  if (onNavigate) onNavigate("/courses#search-ads");
                                }}
                                className="block py-1 text-sm text-[#1A261F] hover:text-[#08703A]"
                              >
                                SEO Specialist Course
                              </a>
                              <a
                                href="/courses#search-ads"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  if (onNavigate) onNavigate("/courses#search-ads");
                                }}
                                className="block py-1 text-sm text-[#1A261F] hover:text-[#08703A]"
                              >
                                Google Ads Course
                              </a>
                              <a
                                href="/courses#search-ads"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  if (onNavigate) onNavigate("/courses#search-ads");
                                }}
                                className="block py-1 text-sm text-[#1A261F] hover:text-[#08703A]"
                              >
                                Performance Marketing Course
                              </a>
                            </div>
                          </div>

                          {/* DATA & ANALYTICS */}
                          <div>
                            <p className="text-xs font-bold text-[#0B5F32] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC21C]" />
                              Data &amp; Analytics
                            </p>
                            <div className="space-y-1 pl-2.5">
                              <a
                                href="/courses#data-analytics"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  if (onNavigate) onNavigate("/courses#data-analytics");
                                }}
                                className="block py-1 text-sm text-[#1A261F] hover:text-[#08703A]"
                              >
                                Google Analytics Course
                              </a>
                              <a
                                href="/courses#data-analytics"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  if (onNavigate) onNavigate("/courses#data-analytics");
                                }}
                                className="block py-1 text-sm text-[#1A261F] hover:text-[#08703A]"
                              >
                                Digital Marketing &amp; Data Analytics Course
                              </a>
                            </div>
                          </div>

                          {/* Bottom Explore CTAs */}
                          <div className="pt-2 pl-2.5 flex flex-col gap-2">
                            <a
                              href="/courses"
                              onClick={(e) => {
                                e.preventDefault();
                                setMobileOpen(false);
                                if (onNavigate) onNavigate("/courses");
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#08703A]"
                            >
                              <span>Explore All Courses</span>
                              <span>→</span>
                            </a>
                            <a
                              href="/contact"
                              onClick={(e) => {
                                e.preventDefault();
                                setMobileOpen(false);
                                if (onNavigate) onNavigate("/contact");
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#55695C] hover:text-[#08703A] cursor-pointer"
                            >
                              <span>Book Free Career Guidance</span>
                              <span>→</span>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = isAboutRoute
                  ? item.id === "about"
                  : isServicesRoute
                  ? item.id === "services"
                  : isCoursesRoute
                  ? item.id === "course"
                  : isOurWorkRoute
                  ? item.id === "our-work"
                  : isContactRoute
                  ? item.id === "contact"
                  : item.id === "home";
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`py-3 text-base font-semibold border-b border-emerald-950/5 transition-colors ${
                      isActive ? "text-[#08703A]" : "text-[#16251C] hover:text-[#08703A]"
                    }`}
                    onClick={(e) => {
                      setMobileOpen(false);
                      if (item.id === "about") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/about");
                      } else if (item.id === "services") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/services");
                      } else if (item.id === "our-work") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/our-work");
                      } else if (item.id === "contact") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/contact");
                      } else if (item.id === "home") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/");
                      } else if (item.href.startsWith("#")) {
                        if (currentPath !== "/") {
                          e.preventDefault();
                          if (onNavigate) onNavigate("/" + item.href);
                        }
                      }
                    }}
                  >
                    {item.name}
                  </a>
                );
              })}

              {/* Mobile "Let's Talk →" Button */}
              <div className="pt-5 pb-2">
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-base font-semibold text-white shadow-md transition-transform active:scale-98"
                  style={{ background: "#08703A" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    if (onNavigate) onNavigate("/contact");
                  }}
                >
                  <span>Let's Talk</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// ─── Animated Counter ────────────────────────────────────────────────────────
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
      { threshold: 0.1 }
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

// ─── Hero Section ────────────────────────────────────────────────────────────
function Hero({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <section
      id="home"
      className="relative min-h-[680px] lg:min-h-[740px] flex items-center pt-8 sm:pt-12 lg:pt-14 pb-14 sm:pb-18 px-6 sm:px-8 lg:px-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FBFCF8 0%, #F6F9F5 60%, #F8FAF6 100%)",
      }}
    >
      {/* Subtle Background Radial Glow for Depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 78% 45%, rgba(21, 148, 71, 0.08) 0%, rgba(255, 194, 28, 0.035) 45%, transparent 70%)",
        }}
      />

      {/* Very faint background grid pattern (opacity 0.03) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(7, 92, 49, 0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1380px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6 sm:mb-8 transition-transform duration-200 hover:scale-[1.02]"
              style={{
                background: "#EEF5F0",
                border: "1px solid rgba(8, 112, 58, 0.14)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#FFC21C" }}
              />
              <span
                className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase"
                style={{ color: "#075C31", fontFamily: "Manrope, sans-serif" }}
              >
                CREATIVE • STRATEGIC • DIGITAL
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[44px] sm:text-[56px] md:text-[62px] lg:text-[66px] xl:text-[76px] font-extrabold tracking-[-0.04em] leading-[0.98] sm:leading-[1.0] mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              <span className="block" style={{ color: "#15241B" }}>
                Building Brands
              </span>
              <span className="block mt-1 sm:mt-1.5" style={{ color: "#075C31" }}>
                That Stand Out
              </span>
              <span className="relative inline-block mt-1 sm:mt-1.5" style={{ color: "#159447" }}>
                &amp; Grow.
                {/* Subtle curved yellow accent line below Grow. */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-[8px] overflow-visible"
                  viewBox="0 0 160 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5.5 C45 1.5, 115 1.5, 158 5"
                    stroke="#FFC21C"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-[17px] sm:text-[19px] max-w-[580px] leading-[1.65] mb-8 sm:mb-9"
              style={{ color: "#667069", fontFamily: "Inter, sans-serif" }}
            >
              SUPRABIZ helps ambitious businesses build powerful brands, create
              meaningful digital experiences and connect with the right audience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9 sm:mb-10 w-full sm:w-auto">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("/contact");
                  else window.location.pathname = "/contact";
                }}
                className="group inline-flex items-center justify-center gap-2.5 h-[54px] px-7 sm:px-8 rounded-full font-[650] text-[15px] sm:text-[16px] cursor-pointer transition-all duration-200 w-full sm:w-auto"
                style={{
                  background: "#FFC21C",
                  color: "#15241B",
                  fontFamily: "Manrope, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(255, 194, 28, 0.28)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span>Grow Your Brand</span>
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  →
                </span>
              </a>

              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("/services");
                  else window.location.pathname = "/services";
                }}
                className="inline-flex items-center justify-center h-[54px] px-7 sm:px-8 rounded-full font-semibold text-[15px] sm:text-[16px] cursor-pointer transition-all duration-200 w-full sm:w-auto"
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
                Explore Our Services
              </a>
            </div>

            {/* Horizontal Trust Strip (Desktop / Tablet) with Increasing Numbers */}
            <div
              className="hidden sm:flex items-center gap-6 sm:gap-8 pt-7 border-t w-full max-w-[540px]"
              style={{ borderColor: "rgba(8, 112, 58, 0.12)" }}
            >
              <div>
                <div
                  className="text-[25px] sm:text-[28px] font-bold leading-tight"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <AnimatedCounter target={50} suffix="+" />
                </div>
                <div
                  className="text-[11px] sm:text-[12px] font-medium mt-0.5"
                  style={{ color: "#7A827D", fontFamily: "Inter, sans-serif" }}
                >
                  Brands Built
                </div>
              </div>

              <div
                className="h-9 w-[1px]"
                style={{ background: "rgba(8, 112, 58, 0.12)" }}
              />

              <div>
                <div
                  className="text-[25px] sm:text-[28px] font-bold leading-tight"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <AnimatedCounter target={100} suffix="+" />
                </div>
                <div
                  className="text-[11px] sm:text-[12px] font-medium mt-0.5"
                  style={{ color: "#7A827D", fontFamily: "Inter, sans-serif" }}
                >
                  Projects
                </div>
              </div>

              <div
                className="h-9 w-[1px]"
                style={{ background: "rgba(8, 112, 58, 0.12)" }}
              />

              <div>
                <div
                  className="text-[25px] sm:text-[28px] font-bold leading-tight"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <AnimatedCounter target={95} suffix="%" />
                </div>
                <div
                  className="text-[11px] sm:text-[12px] font-medium mt-0.5"
                  style={{ color: "#7A827D", fontFamily: "Inter, sans-serif" }}
                >
                  Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Digital Marketing Campaign Image Showcase */}
          <div className="w-full flex flex-col items-center lg:items-end">
            <HeroVisual />

            {/* Mobile-only trust strip directly below image with Increasing Numbers */}
            <div
              className="flex sm:hidden items-center justify-between pt-7 mt-8 border-t w-full"
              style={{ borderColor: "rgba(8, 112, 58, 0.12)" }}
            >
              <div>
                <div
                  className="text-[22px] font-bold leading-tight"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <AnimatedCounter target={50} suffix="+" />
                </div>
                <div
                  className="text-[11px] font-medium mt-0.5"
                  style={{ color: "#7A827D", fontFamily: "Inter, sans-serif" }}
                >
                  Brands Built
                </div>
              </div>

              <div
                className="h-8 w-[1px]"
                style={{ background: "rgba(8, 112, 58, 0.12)" }}
              />

              <div>
                <div
                  className="text-[22px] font-bold leading-tight"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <AnimatedCounter target={100} suffix="+" />
                </div>
                <div
                  className="text-[11px] font-medium mt-0.5"
                  style={{ color: "#7A827D", fontFamily: "Inter, sans-serif" }}
                >
                  Projects
                </div>
              </div>

              <div
                className="h-8 w-[1px]"
                style={{ background: "rgba(8, 112, 58, 0.12)" }}
              />

              <div>
                <div
                  className="text-[22px] font-bold leading-tight"
                  style={{ color: "#08703A", fontFamily: "Manrope, sans-serif" }}
                >
                  <AnimatedCounter target={95} suffix="%" />
                </div>
                <div
                  className="text-[11px] font-medium mt-0.5"
                  style={{ color: "#7A827D", fontFamily: "Inter, sans-serif" }}
                >
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[540px] group">
      {/* Soft Green Radial Glow Behind Image */}
      <div
        className="absolute -inset-4 rounded-[40px] pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle at 60% 50%, rgba(21, 148, 71, 0.12) 0%, rgba(255, 194, 28, 0.05) 45%, transparent 70%)",
        }}
      />

      {/* Main Image Container */}
      <div
        className="relative w-full h-[440px] sm:h-[510px] lg:h-[550px] xl:h-[580px] rounded-[28px] lg:rounded-[32px] overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.01]"
        style={{
          border: "1px solid rgba(8, 112, 58, 0.08)",
          boxShadow: "0 30px 70px rgba(20, 55, 35, 0.12)",
          background: "#FFFFFF",
        }}
      >
        <img
          src={heroMarketingImg}
          alt="Digital marketing, social media ads, and SEO campaign workspace by SUPRA BIZ"
          className="w-full h-full object-cover object-[center_36%] block"
          loading="eager"
        />

        {/* Subtle Top Inner Edge Highlight */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[28px] lg:rounded-[32px]"
          style={{
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.5)",
          }}
        />

      </div>

      {/* Floating Card 1: SEO & Performance (Top Right) */}
      <div
        className="hidden sm:block absolute -top-4 sm:-top-5 -right-2 sm:-right-5 z-20 transition-all duration-300 group-hover:-translate-y-[2px]"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(8, 112, 58, 0.08)",
          borderRadius: "16px",
          boxShadow: "0 14px 35px rgba(20, 55, 35, 0.12)",
          padding: "14px 18px",
          minWidth: "190px",
        }}
      >
        <div className="flex items-center justify-between gap-3 mb-1.5">
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#159447" }}
            />
            <span
              className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.10em]"
              style={{ color: "#7A827D", fontFamily: "Inter, sans-serif" }}
            >
              PERFORMANCE
            </span>
          </div>

          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: "rgba(8, 112, 58, 0.07)", color: "#08703A" }}
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>
        </div>

        <div
          className="text-[15px] sm:text-[16px] font-bold leading-tight mb-1"
          style={{ color: "#075C31", fontFamily: "Manrope, sans-serif" }}
        >
          SEO &amp; Performance
        </div>

        <div
          className="text-[10px] sm:text-[11px] font-medium"
          style={{ color: "#69736C", fontFamily: "Inter, sans-serif" }}
        >
          Search • Ads • Analytics
        </div>
      </div>

      {/* Floating Card 2: Social Media (Bottom Left) */}
      <div
        className="absolute -bottom-4 sm:-bottom-5 -left-2 sm:-left-5 z-20 transition-all duration-300 group-hover:-translate-y-[2px]"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(8, 112, 58, 0.08)",
          borderRadius: "16px",
          boxShadow: "0 14px 35px rgba(20, 55, 35, 0.12)",
          padding: "14px 18px",
          minWidth: "185px",
        }}
      >
        <div className="flex items-center justify-between gap-3 mb-1.5">
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#FFC21C" }}
            />
            <span
              className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.10em]"
              style={{ color: "#7A827D", fontFamily: "Inter, sans-serif" }}
            >
              SOCIAL
            </span>
          </div>

          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: "rgba(255, 194, 28, 0.16)", color: "#9E7000" }}
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
            </svg>
          </div>
        </div>

        <div
          className="text-[15px] sm:text-[16px] font-bold leading-tight mb-1"
          style={{ color: "#075C31", fontFamily: "Manrope, sans-serif" }}
        >
          Social Media
        </div>

        <div
          className="text-[10px] sm:text-[11px] font-medium"
          style={{ color: "#69736C", fontFamily: "Inter, sans-serif" }}
        >
          Content • Creative • Growth
        </div>
      </div>
    </div>
  );
}

// ─── Trust Bar ───────────────────────────────────────────────────────────────
function TrustBar() {
  const trustedBrands = [
    {
      name: "NEXORA",
      style: { letterSpacing: "0.08em", fontWeight: 700, fontFamily: "Manrope, sans-serif" },
      logo: null,
    },
    {
      name: "URBANO",
      style: { letterSpacing: "0.14em", fontWeight: 600, fontFamily: "Inter, sans-serif" },
      logo: null,
    },
    {
      name: "VERTEX",
      style: { letterSpacing: "0.05em", fontWeight: 800, fontFamily: "Manrope, sans-serif" },
      logo: null,
    },
    {
      name: "AURA",
      style: { letterSpacing: "0.12em", fontWeight: 500, fontFamily: "Inter, sans-serif" },
      logo: null,
    },
    {
      name: "NOVEX",
      style: { letterSpacing: "0.09em", fontWeight: 750, fontFamily: "Manrope, sans-serif" },
      logo: null,
    },
  ];

  return (
    <section
      className="relative py-7 sm:py-8 lg:py-9 px-6 sm:px-8 lg:px-10 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FBF8 100%)",
        borderTop: "1px solid rgba(8, 112, 58, 0.07)",
        borderBottom: "1px solid rgba(8, 112, 58, 0.07)",
      }}
    >
      {/* Subtle Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(8, 112, 58, 0.035), transparent 65%)",
        }}
      />

      <div className="max-w-[1380px] mx-auto relative z-10 flex flex-col items-center">
        {/* Subtle Section Title with Side Accent Lines */}
        <div className="w-full max-w-[560px] flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div
            className="h-[1px] flex-1 max-w-[80px] sm:max-w-[110px]"
            style={{ background: "rgba(8, 112, 58, 0.12)" }}
          />

          <div className="flex items-center gap-2">
            <span
              className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase whitespace-nowrap"
              style={{ color: "#738078", fontFamily: "Manrope, sans-serif" }}
            >
              TRUSTED BY AMBITIOUS BRANDS
            </span>
          </div>

          <div
            className="h-[1px] flex-1 max-w-[80px] sm:max-w-[110px]"
            style={{ background: "rgba(8, 112, 58, 0.12)" }}
          />
        </div>

        {/* Brand Logos Row */}
        <div className="w-full max-w-[980px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14">
          {trustedBrands.map((brand) => (
            <div
              key={brand.name}
              className="group cursor-default py-1 px-2 flex flex-col items-center transition-all duration-200"
            >
              <span
                className="text-[17px] sm:text-[19px] md:text-[20px] transition-all duration-200 select-none group-hover:text-[#08703A] group-hover:-translate-y-[2px]"
                style={{
                  color: "#8E9992",
                  opacity: 0.85,
                  ...brand.style,
                }}
              >
                {brand.name}
              </span>
              <span
                className="w-0 h-[2px] rounded-full transition-all duration-200 group-hover:w-4 mt-0.5"
                style={{ background: "#FFC21C" }}
              />
            </div>
          ))}
        </div>

        {/* Small Supporting Trust Indicator */}
        <p
          className="text-[11px] sm:text-[12px] font-medium tracking-[0.02em] mt-4 sm:mt-5 text-center"
          style={{ color: "#929A95", fontFamily: "Inter, sans-serif" }}
        >
          Growing brands. Meaningful partnerships.
        </p>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 sm:py-28 px-6 sm:px-8 lg:px-10" style={{ background: "var(--offwhite)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8F4EC] border border-[#08703A]/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#08703A]" />
              <span
                className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#08703A]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                WHO WE ARE
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-[34px] sm:text-[42px] lg:text-[46px] font-extrabold mb-6 leading-[1.14] text-[#15241B]"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
            >
              We turn ideas into brands people remember.
            </h2>

            {/* Paragraphs */}
            <p
              className="text-[16px] sm:text-[17px] mb-5 leading-[1.68] text-[#526056]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              SUPRABIZ is a full-service branding and digital marketing agency based in Ahmedabad, Gujarat.
              We partner with ambitious businesses to build brand identities that resonate, marketing systems
              that convert, and digital experiences that leave lasting impressions.
            </p>

            <p
              className="text-[15px] sm:text-[16px] leading-[1.68] mb-8 text-[#66736A]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              From startups finding their voice to established companies ready to evolve — we bring
              strategy, creativity and execution together in one focused partnership.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 w-full">
              {[
                { title: "Strategic Clarity", desc: "Positioning built to cut through market noise" },
                { title: "Creative Craft", desc: "Design systems tailored to inspire trust" },
                { title: "Performance Drive", desc: "ROI-led execution on every campaign" },
                { title: "Local Presence", desc: "Direct studio access in Ahmedabad" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-[#08703A]/10 shadow-[0_2px_8px_rgba(20,55,35,0.02)]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#E8F4EC] text-[#08703A] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-[#15241B]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-[#69746D]" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("/about");
                  else window.location.pathname = "/about";
                }}
                className="inline-flex items-center gap-2.5 h-[50px] px-7 rounded-full text-[14.5px] font-semibold text-white transition-all duration-200 cursor-pointer shadow-[0_6px_20px_rgba(8,112,58,0.20)] hover:bg-[#065A2E] hover:-translate-y-0.5"
                style={{ background: "#08703A", fontFamily: "Manrope, sans-serif" }}
              >
                <span>Discover Our Story</span>
                <span className="transition-transform duration-200 hover:translate-x-1">→</span>
              </a>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("/services");
                  else window.location.pathname = "/services";
                }}
                className="inline-flex items-center gap-2 h-[50px] px-6 rounded-full text-[14.5px] font-semibold text-[#15241B] bg-white border border-[#08703A]/20 hover:border-[#08703A] hover:bg-[#F2F7F4] transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <span>See what we do</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right — Refined Visual Showcase without bottom number tiles */}
          <div className="relative w-full flex justify-center lg:justify-end">
            {/* Ambient Glow */}
            <div
              className="absolute -inset-4 rounded-[40px] pointer-events-none opacity-50 filter blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 60% 40%, rgba(8, 112, 58, 0.15) 0%, rgba(255, 194, 28, 0.08) 50%, transparent 70%)",
              }}
            />

            <div
              className="relative w-full max-w-[560px] rounded-[32px] overflow-hidden bg-white border border-[rgba(8,112,58,0.12)] shadow-[0_20px_50px_rgba(20,55,35,0.08)] group"
            >
              {/* Main Workspace Image */}
              <div className="relative aspect-[4/3.6] sm:aspect-[4/3.8] overflow-hidden">
                <img
                  src={aboutStrategyImg}
                  alt="SUPRA BIZ Strategy & Creative Agency Workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#15241B]/85 via-[#15241B]/25 to-transparent pointer-events-none" />

                {/* Top Floating Glass Badge */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#08703A] animate-pulse" />
                    <span
                      className="text-[11.5px] font-bold tracking-wide uppercase text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Studio HQ • Ahmedabad
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-white/90 bg-[#15241B]/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    Gujarat, IN
                  </span>
                </div>

                {/* In-Image Caption Bottom */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-2.5 py-1 rounded-md text-[10.5px] font-bold bg-[#FFC21C] text-[#15241B] uppercase tracking-wider mb-2">
                    Creative &amp; Strategic Hub
                  </div>
                  <p
                    className="text-white text-[15px] sm:text-[16.5px] font-semibold leading-snug drop-shadow-sm"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Strategic thinking meets high-performance execution.
                  </p>
                </div>
              </div>

              {/* Bottom Editorial Trust Bar */}
              <div className="p-5 sm:p-6 bg-white border-t border-[#08703A]/[0.08] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F4EC] flex items-center justify-center text-[#08703A] font-bold text-sm shrink-0">
                    ★
                  </div>
                  <div>
                    <p className="text-[13.5px] font-bold text-[#15241B]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Dedicated Agency Team
                    </p>
                    <p className="text-[11.5px] text-[#69746D]" style={{ fontFamily: "Inter, sans-serif" }}>
                      Branding, campaigns &amp; web experiences
                    </p>
                  </div>
                </div>

                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate("/about");
                    else window.location.pathname = "/about";
                  }}
                  className="inline-flex items-center gap-1 text-[12.5px] font-bold text-[#08703A] hover:text-[#065A2E] transition-colors shrink-0 group/link"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Learn More</span>
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
const services = [
  {
    icon: "◈",
    title: "Branding",
    desc: "Logo, identity systems, brand guidelines and visual language that makes your brand unmistakable.",
    href: "/services#branding",
  },
  {
    icon: "◉",
    title: "Social Media Marketing",
    desc: "Content strategy, creative production and community management that builds real audiences.",
    href: "/services#social-media",
  },
  {
    icon: "◎",
    title: "SEO",
    desc: "Technical SEO, content strategy and link building to rank higher and drive organic growth.",
    href: "/services#seo",
  },
  {
    icon: "⬡",
    title: "Web Design & Development",
    desc: "Fast, conversion-optimized websites and landing pages built to perform and impress.",
    href: "/services#web-design",
  },
  {
    icon: "◐",
    title: "Performance Marketing",
    desc: "Data-driven paid campaigns on Meta, Google and more — every rupee tracked for ROI.",
    href: "/services#performance-marketing",
  },
  {
    icon: "◑",
    title: "Digital Marketing",
    desc: "Integrated digital strategy combining multiple channels into one cohesive growth engine.",
    href: "/services#digital-marketing",
  },
];

function Services({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const ref = useReveal();
  return (
    <section id="services" className="py-28 px-6" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-dot" />
            <span className="text-xs font-bold tracking-widest" style={{ color: "var(--green-mid)", fontFamily: "Inter" }}>WHAT WE DO</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 mx-auto max-w-2xl leading-tight"
            style={{ color: "var(--dark)", fontFamily: "Manrope", letterSpacing: "-0.02em" }}
          >
            Everything your brand needs to grow.
          </h2>
          <p className="text-lg mx-auto max-w-xl" style={{ color: "rgba(23,33,27,0.6)", fontFamily: "Inter" }}>
            From identity to performance — we handle it all under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              onClick={() => {
                if (onNavigate) onNavigate(s.href);
                else window.location.href = s.href;
              }}
              className="service-card rounded-2xl p-7 cursor-pointer group hover:-translate-y-1 hover:shadow-lg transition-all"
              style={{ background: "var(--offwhite)", border: "1.5px solid var(--border-light)" }}
            >
              <div
                className="text-2xl mb-5 w-12 h-12 flex items-center justify-center rounded-xl transition-colors group-hover:bg-[#08703A] group-hover:text-white"
                style={{ background: "rgba(7,92,42,0.08)", color: "var(--green-dark)" }}
              >
                {s.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-[#08703A] transition-colors" style={{ color: "var(--dark)", fontFamily: "Manrope" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(23,33,27,0.6)", fontFamily: "Inter" }}>
                {s.desc}
              </p>
              <span className="text-sm font-semibold flex items-center gap-1 transition-all group-hover:gap-2 group-hover:text-[#08703A]" style={{ color: "var(--green-dark)", fontFamily: "Manrope" }}>
                Learn more <span>→</span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate("/services");
              else window.location.pathname = "/services";
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "#08703A", fontFamily: "Manrope, sans-serif" }}
          >
            <span>Explore All Services &amp; Capabilities</span>
            <span className="transition-transform duration-200 hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Course Section ──────────────────────────────────────────────────────────
const courseModules = [
  { n: "01", t: "Marketing Fundamentals", d: "Brand thinking, consumer psychology, and how modern marketing really works." },
  { n: "02", t: "Social Media Mastery", d: "Content strategy, platform algorithms, reels, stories and community building." },
  { n: "03", t: "SEO & Content Marketing", d: "Keyword research, on-page SEO, blogging and building organic visibility from scratch." },
  { n: "04", t: "Paid Advertising", d: "Meta Ads, Google Ads — campaign setup, targeting, budgeting and scaling." },
  { n: "05", t: "Analytics & Reporting", d: "Google Analytics, Meta Insights — read data, spot trends and make smarter decisions." },
  { n: "06", t: "Branding & Positioning", d: "Build a compelling brand identity, messaging and positioning that stands out." },
];

function Course({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const ref = useReveal();
  return (
    <section id="course" className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--offwhite)" }}>
      {/* Decorative bg element */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{ background: "linear-gradient(135deg, transparent 0%, rgba(7,92,42,0.04) 100%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-14 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-dot" />
              <span className="text-xs font-bold tracking-widest" style={{ color: "var(--green-mid)", fontFamily: "Inter" }}>LEARN WITH SUPRABIZ</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight"
              style={{ color: "var(--dark)", fontFamily: "Manrope", letterSpacing: "-0.02em" }}
            >
              Master Digital Marketing.
              <br />
              <span style={{ color: "var(--green-dark)" }}>From Zero to Pro.</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(23,33,27,0.65)", fontFamily: "Inter" }}>
              Our hands-on Digital Marketing Course is built by practitioners, not professors.
              Learn the exact strategies, tools and frameworks we use every day to grow real brands —
              and apply them to your own career or business.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid var(--border-light)", color: "var(--dark)" }}>
                <span style={{ color: "#FFC515" }}>✦</span> Live + Recorded Sessions
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid var(--border-light)", color: "var(--dark)" }}>
                <span style={{ color: "#FFC515" }}>✦</span> Certificate of Completion
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#fff", border: "1px solid var(--border-light)", color: "var(--dark)" }}>
                <span style={{ color: "#FFC515" }}>✦</span> Placement Support
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/courses"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("/courses");
                  else window.location.pathname = "/courses";
                }}
                className="btn-arrow inline-flex items-center px-7 py-4 rounded-full font-bold text-sm cursor-pointer hover:shadow-lg transition-all"
                style={{ background: "var(--gold)", color: "var(--dark)", fontFamily: "Manrope" }}
              >
                Explore All 9 Courses →
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("/contact");
                  else window.location.pathname = "/contact";
                }}
                className="btn-arrow inline-flex items-center px-7 py-4 rounded-full font-semibold text-sm border-2 cursor-pointer hover:bg-[#08703A] hover:text-white transition-all"
                style={{ borderColor: "var(--green-dark)", color: "var(--green-dark)", fontFamily: "Manrope" }}
              >
                Get Syllabus &amp; Enroll
              </a>
            </div>
          </div>

          {/* Course highlight card */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: "var(--green-dark)", minHeight: "320px" }}
          >
            {/* Decorative squares */}
            <div className="absolute top-6 right-6 opacity-20">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <rect x="32" y="42" width="18" height="18" rx="4" fill="#FFC515" />
                <rect x="22" y="28" width="14" height="14" rx="3" fill="#138A3D" />
                <rect x="12" y="14" width="10" height="10" rx="2" fill="#FFC515" />
                <line x1="18" y1="60" x2="46" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "#FFC515", color: "var(--dark)" }}
            >
              🎓 DIGITAL MARKETING ACADEMY
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { v: "9", l: "Courses" },
                { v: "3 mo", l: "Duration" },
                { v: "Live", l: "Mentorship" },
                { v: "100%", l: "Practical Projects" },
              ].map(({ v, l }) => (
                <div key={l} className="rounded-xl p-4" style={{ background: "rgba(250,251,247,0.07)" }}>
                  <div className="text-xl font-extrabold mb-0.5" style={{ color: "#FFC515", fontFamily: "Manrope" }}>{v}</div>
                  <div className="text-xs" style={{ color: "rgba(250,251,247,0.6)", fontFamily: "Inter" }}>{l}</div>
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(250,251,247,0.65)", fontFamily: "Inter" }}>
              Taught by working professionals with real agency experience. Small batch sizes, personal mentorship and a job-ready curriculum.
            </p>
            <a
              href="/courses"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/courses");
                else window.location.pathname = "/courses";
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFC515] hover:underline cursor-pointer"
            >
              <span>View full syllabus &amp; batch timings</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Modules grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseModules.map((m) => (
            <div
              key={m.n}
              onClick={() => {
                if (onNavigate) onNavigate("/courses");
                else window.location.pathname = "/courses";
              }}
              className="rounded-2xl p-6 flex gap-4 items-start cursor-pointer hover:border-[#08703A] hover:-translate-y-0.5 transition-all hover:shadow-md group"
              style={{ background: "#fff", border: "1.5px solid var(--border-light)" }}
            >
              <div
                className="text-xs font-extrabold flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center transition-colors group-hover:bg-[#08703A] group-hover:text-white"
                style={{ background: "rgba(7,92,42,0.08)", color: "var(--green-dark)", fontFamily: "Manrope" }}
              >
                {m.n}
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1 group-hover:text-[#08703A] transition-colors" style={{ color: "var(--dark)", fontFamily: "Manrope" }}>{m.t}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(23,33,27,0.55)", fontFamily: "Inter" }}>{m.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why SUPRABIZ ────────────────────────────────────────────────────────────
const whyPoints = [
  { n: "01", t: "Strategy First", d: "Every creative decision is grounded in research, data and a clear understanding of your audience and market." },
  { n: "02", t: "Creative Thinking", d: "We don't do generic. Each project gets a fresh creative perspective tailored to your brand's unique story." },
  { n: "03", t: "Growth Focused", d: "Beautiful work means nothing without results. We measure success by the growth it drives for your business." },
  { n: "04", t: "Partnership Approach", d: "We work as an extension of your team — transparent, proactive and genuinely invested in your success." },
];

function WhyUs() {
  const ref = useReveal();
  return (
    <section className="py-28 px-6" style={{ background: "var(--green-dark)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex items-center gap-3 mb-5">
            <span style={{ width: 8, height: 8, background: "#FFC515", borderRadius: "50%", display: "inline-block" }} />
            <span className="text-xs font-bold tracking-widest" style={{ color: "rgba(250,251,247,0.5)", fontFamily: "Inter" }}>WHY SUPRABIZ</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-16 max-w-xl leading-tight"
            style={{ color: "#FAFBF7", fontFamily: "Manrope", letterSpacing: "-0.02em" }}
          >
            Creativity backed by strategy.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((p) => (
              <div
                key={p.n}
                className="rounded-2xl p-7"
                style={{ background: "rgba(250,251,247,0.06)", border: "1px solid rgba(250,251,247,0.1)" }}
              >
                <div className="text-xs font-bold mb-4" style={{ color: "#FFC515", fontFamily: "Manrope" }}>{p.n}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#FAFBF7", fontFamily: "Manrope" }}>{p.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(250,251,247,0.6)", fontFamily: "Inter" }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ───────────────────────────────────────────────────────────────
const projects = [
  {
    name: "NEXORA",
    category: "Brand Identity",
    tag: "Branding",
    bg: "#1a2e22",
    accent: "#FFC515",
    imgUrl: brandingImg,
  },
  {
    name: "URBANO",
    category: "Social Media",
    tag: "SMM",
    bg: "#0d1f14",
    accent: "#138A3D",
    imgUrl: socialMarketingImg,
  },
  {
    name: "AURA LIVING",
    category: "Branding + Website",
    tag: "Full Service",
    bg: "#17211b",
    accent: "#FFC515",
    imgUrl: webDesignImg,
  },
  {
    name: "VERTEX",
    category: "Performance Marketing",
    tag: "Marketing",
    bg: "#0b1a10",
    accent: "#138A3D",
    imgUrl: digitalAgencyImg,
  },
];

function Portfolio({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const ref = useReveal();
  return (
    <section id="our-work" className="py-28 px-6" style={{ background: "var(--offwhite)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-dot" />
              <span className="text-xs font-bold tracking-widest" style={{ color: "var(--green-mid)", fontFamily: "Inter" }}>SELECTED WORK</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              style={{ color: "var(--dark)", fontFamily: "Manrope", letterSpacing: "-0.02em" }}
            >
              Work we're proud of.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/our-work"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/our-work");
              }}
              className="btn-arrow inline-flex items-center font-semibold text-sm cursor-pointer hover:text-[#08703A] transition-colors"
              style={{ color: "var(--green-dark)", fontFamily: "Manrope" }}
            >
              Explore Our Work →
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/contact");
                else window.location.pathname = "/contact";
              }}
              className="btn-arrow inline-flex items-center font-semibold text-sm opacity-85 hover:opacity-100 cursor-pointer hover:text-[#08703A] transition-colors"
              style={{ color: "var(--green-dark)", fontFamily: "Manrope" }}
            >
              Start a project →
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              onClick={() => {
                if (onNavigate) onNavigate("/our-work");
              }}
              className="portfolio-card rounded-3xl overflow-hidden relative cursor-pointer"
              style={{ height: "320px", background: p.bg }}
            >
              <img
                src={p.imgUrl}
                alt={p.name}
                className="portfolio-img absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div
                className="portfolio-overlay absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${p.bg}e0 0%, ${p.bg}80 100%)` }}
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span
                  className="self-start px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: p.accent, color: "#17211B" }}
                >
                  {p.tag}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold mb-1" style={{ color: "#FAFBF7", fontFamily: "Manrope" }}>{p.name}</h3>
                  <p className="text-sm" style={{ color: "rgba(250,251,247,0.7)", fontFamily: "Inter" }}>{p.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────
const steps = [
  { n: "01", t: "Discover", d: "Deep-dive into your brand, market, audience and goals. We ask the right questions before we make anything." },
  { n: "02", t: "Strategize", d: "We map out a clear, tailored strategy — positioning, messaging, channels and timelines — before a single pixel is designed." },
  { n: "03", t: "Create", d: "Our creative team brings the strategy to life with design, content and campaigns crafted to make an impact." },
  { n: "04", t: "Grow", d: "We launch, measure, optimize and scale. Your brand gets stronger with every iteration and every data point." },
];

function Process() {
  const ref = useReveal();
  return (
    <section className="py-28 px-6" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-dot" />
            <span className="text-xs font-bold tracking-widest" style={{ color: "var(--green-mid)", fontFamily: "Inter" }}>HOW WE WORK</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: "var(--dark)", fontFamily: "Manrope", letterSpacing: "-0.02em" }}
          >
            From an idea to an impactful brand.
          </h2>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-0 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg, transparent 0%, var(--green-dark) 15%, var(--green-mid) 85%, transparent 100%)", top: "32px" }}
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                {/* Step dot */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10 font-extrabold text-sm"
                  style={{ background: i % 2 === 0 ? "var(--green-dark)" : "#FFC515", color: i % 2 === 0 ? "#FAFBF7" : "var(--dark)", fontFamily: "Manrope" }}
                >
                  {s.n}
                </div>
                {/* Arrow between steps (desktop) */}
                {i < 3 && (
                  <div
                    className="hidden md:block absolute text-sm font-bold"
                    style={{ top: "18px", right: "-16px", color: "var(--green-mid)", zIndex: 20 }}
                  >
                    →
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--dark)", fontFamily: "Manrope" }}>{s.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(23,33,27,0.6)", fontFamily: "Inter" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── Testimonials ────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "SUPRABIZ completely transformed our brand. The team brought a clarity and visual language we'd been struggling to articulate for years. Our customers immediately noticed the difference.",
    name: "Arjun Mehta",
    role: "Founder, NEXORA",
    initials: "AM",
  },
  {
    quote: "The social media growth we saw in just 3 months was remarkable. SUPRABIZ understood our audience better than we did and built a content strategy that actually worked.",
    name: "Priya Sharma",
    role: "CMO, URBANO",
    initials: "PS",
  },
  {
    quote: "Working with SUPRABIZ feels like having an in-house team that genuinely cares. They're proactive, creative and always thinking about what's best for our business.",
    name: "Rohan Desai",
    role: "CEO, AURA LIVING",
    initials: "RD",
  },
];

function Testimonials() {
  const ref = useReveal();
  return (
    <section
      className="py-28 px-6 border-t"
      style={{
        background: "var(--offwhite)",
        borderColor: "rgba(8, 112, 58, 0.09)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-dot" />
            <span className="text-xs font-bold tracking-widest" style={{ color: "var(--green-mid)", fontFamily: "Inter" }}>TESTIMONIALS</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--dark)", fontFamily: "Manrope", letterSpacing: "-0.02em" }}
          >
            What our clients say.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card rounded-2xl p-8 flex flex-col transition-transform duration-200 hover:-translate-y-1"
              style={{
                background: "#FFFFFF",
                border: "1.5px solid var(--border-light)",
                boxShadow: "0 12px 32px rgba(21, 36, 27, 0.04)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{ color: "#FFC515", fontSize: "14px" }}>★</span>
                ))}
              </div>
              <p
                className="text-base leading-relaxed flex-1 mb-6"
                style={{ color: "rgba(23,33,27,0.75)", fontFamily: "Inter", fontStyle: "italic" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "rgba(8, 112, 58, 0.08)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: i === 1 ? "#FFC515" : "var(--green-dark)", color: i === 1 ? "var(--dark)" : "#FAFBF7", fontFamily: "Manrope" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "var(--dark)", fontFamily: "Manrope" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "rgba(23,33,27,0.5)", fontFamily: "Inter" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTA({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const ref = useReveal();
  return (
    <section className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--green-dark)" }}>
      {/* Decorative */}
      <div className="absolute top-8 right-12 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <rect x="60" y="80" width="30" height="30" rx="6" fill="#FFC515" />
          <rect x="40" y="55" width="24" height="24" rx="5" fill="#138A3D" />
          <rect x="20" y="30" width="18" height="18" rx="4" fill="#FFC515" />
          <line x1="30" y1="100" x2="75" y2="25" stroke="#FAFBF7" strokeWidth="2" strokeLinecap="round" />
          <polygon points="75,25 85,38 65,35" fill="#FFC515" />
        </svg>
      </div>
      <div className="absolute bottom-8 left-12 opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#FFC515" strokeWidth="2" />
          <circle cx="40" cy="40" r="20" stroke="#138A3D" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div ref={ref} className="reveal">
          <p className="text-xs font-bold tracking-widest mb-5" style={{ color: "rgba(250,251,247,0.4)", fontFamily: "Inter" }}>
            READY TO GROW?
          </p>
          <h2
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            style={{ color: "#FAFBF7", fontFamily: "Manrope", letterSpacing: "-0.02em" }}
          >
            Have a brand in mind?
            <br />
            <span style={{ color: "#FFC515" }}>Let's make it unforgettable.</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(250,251,247,0.6)", fontFamily: "Inter" }}>
            Book a free strategy call and let's figure out exactly how SUPRABIZ can help your brand grow.
          </p>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate("/contact");
              else window.location.pathname = "/contact";
            }}
            className="btn-arrow inline-flex items-center px-10 py-5 rounded-full text-base font-bold transition-all hover:scale-105 cursor-pointer shadow-lg"
            style={{ background: "#FFC21C", color: "var(--dark)", fontFamily: "Manrope", letterSpacing: "-0.01em" }}
          >
            Let's Build Together →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-6" style={{ background: "var(--offwhite)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-dot" />
              <span className="text-xs font-bold tracking-widest" style={{ color: "var(--green-mid)", fontFamily: "Inter" }}>GET IN TOUCH</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
              style={{ color: "var(--dark)", fontFamily: "Manrope", letterSpacing: "-0.02em" }}
            >
              Let's create something great together.
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(23,33,27,0.65)", fontFamily: "Inter" }}>
              Whether you have a brief ready or just an idea — we'd love to hear from you.
              Reach out and let's start a conversation.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: "✉", label: "Email", val: "sales@suprabiz.co.in", href: "mailto:sales@suprabiz.co.in" },
                { icon: "✆", label: "Sales Call", val: "+91 93130 09073", href: "tel:+919313009073" },
                { icon: "✆", label: "Admin Desk", val: "+91 89804 44498", href: "tel:+918980444498" },
                { icon: "⌖", label: "Location", val: "C-1210, Titanium business park, Makarba, Ahmedabad", href: "https://share.google/XcnqzuVTT3DxUhJjg" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm group-hover:bg-[#08703A] group-hover:text-white transition-colors"
                    style={{ background: "rgba(7,92,42,0.08)", color: "var(--green-dark)" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "rgba(23,33,27,0.45)", fontFamily: "Inter" }}>{c.label}</div>
                    <div className="text-sm font-medium group-hover:text-[#08703A] transition-colors" style={{ color: "var(--dark)", fontFamily: "Inter" }}>{c.val}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {[
                { name: "Instagram", href: "https://www.instagram.com/suprabiz/" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/supra-biz-441133340/" },
                { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61594457241124" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-colors hover:bg-[#08703A] hover:text-white"
                  style={{ background: "#fff", border: "1px solid var(--border-light)", color: "var(--green-dark)", fontFamily: "Manrope" }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{ background: "#fff", border: "1px solid var(--border-light)", boxShadow: "0 8px 40px rgba(7,92,42,0.06)" }}
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4 text-[#08703A]">✓</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--green-dark)", fontFamily: "Manrope" }}>Enquiry Sent!</h3>
                <p style={{ color: "rgba(23,33,27,0.6)", fontFamily: "Inter" }}>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--dark)", fontFamily: "Manrope" }}>Send an Enquiry</h3>
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "you@company.com" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 93130 09073" },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "rgba(23,33,27,0.6)", fontFamily: "Inter" }}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:border-[#08703A]"
                      style={{
                        border: "1.5px solid var(--border-light)",
                        background: "var(--offwhite)",
                        color: "var(--dark)",
                        fontFamily: "Inter",
                      }}
                      value={form[f.id as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "rgba(23,33,27,0.6)", fontFamily: "Inter" }}>Service Interested In</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:border-[#08703A]"
                    style={{ border: "1.5px solid var(--border-light)", background: "var(--offwhite)", color: "var(--dark)", fontFamily: "Inter" }}
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    {["Branding", "Social Media Marketing", "SEO", "Web Design & Development", "Performance Marketing", "Digital Marketing", "Digital Marketing Courses"].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "rgba(23,33,27,0.6)", fontFamily: "Inter" }}>Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none focus:border-[#08703A]"
                    style={{ border: "1.5px solid var(--border-light)", background: "var(--offwhite)", color: "var(--dark)", fontFamily: "Inter" }}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-arrow w-full flex items-center justify-center py-4 rounded-xl font-bold text-sm mt-1 cursor-pointer transition-transform hover:scale-[1.01]"
                  style={{ background: "var(--green-dark)", color: "#FAFBF7", fontFamily: "Manrope" }}
                >
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Location ────────────────────────────────────────────────────────────────
function Location() {
  return (
    <section className="py-20 px-6" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Real Google Maps Embed */}
          <div
            className="rounded-3xl overflow-hidden min-h-[340px] relative shadow-sm border"
            style={{ borderColor: "var(--border-light)" }}
          >
            <iframe
              title="SUPRABIZ ADS & EVENTS Studio Location Ahmedabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586.9755216994283!2d72.50187580937867!3d22.99767832344428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b7eee8ca869%3A0xd31c25799d187694!2sSUPRABIZ%20ADS%20%26%20EVENTS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1788948480425!5m2!1sen!2sin"
              className="w-full h-full min-h-[340px] border-0 block"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--dark)", fontFamily: "Manrope" }}>Find Us</h3>
            <div className="flex flex-col gap-4 mb-8">
              {[
                { l: "Company", v: "SUPRABIZ — Branding & Digital Marketing Agency" },
                { l: "Address", v: "C-1210, Titanium business park, Makarba, Ahmedabad, Gujarat 380015" },
                { l: "Sales", v: "+91 93130 09073" },
                { l: "Admin", v: "+91 89804 44498" },
                { l: "Email", v: "sales@suprabiz.co.in" },
                { l: "Business Hours", v: "Mon–Sat: 9:30 AM – 6:30 PM IST" },
              ].map(({ l, v }) => (
                <div key={l} className="flex gap-3">
                  <span className="text-xs font-semibold w-28 flex-shrink-0 mt-0.5" style={{ color: "rgba(23,33,27,0.4)", fontFamily: "Inter" }}>{l}</span>
                  <span className="text-sm" style={{ color: "var(--dark)", fontFamily: "Inter" }}>{v}</span>
                </div>
              ))}
            </div>
            <a
              href="https://share.google/XcnqzuVTT3DxUhJjg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow inline-flex items-center self-start px-6 py-3 rounded-full font-semibold text-sm cursor-pointer transition-transform hover:scale-105"
              style={{ background: "var(--gold)", color: "var(--dark)", fontFamily: "Manrope" }}
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Course", href: "/courses" },
    { name: "Our Work", href: "/our-work" },
    { name: "Contact", href: "/contact" },
  ];
  const serviceLinks = [
    { name: "Branding", href: "/services#branding" },
    { name: "Social Media Marketing", href: "/services#social-media" },
    { name: "SEO", href: "/services#seo" },
    { name: "Web Design", href: "/services#web-design" },
    { name: "Performance Marketing", href: "/services#performance-marketing" },
    { name: "Digital Marketing", href: "/services#digital-marketing" },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: "#043F23",
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Subtle Oversized Brand Wordmark Background */}
      <div
        className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 text-[clamp(100px,15vw,220px)] font-extrabold tracking-[-0.06em] text-white/[0.018] pointer-events-none select-none whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        SUPRA BIZ
      </div>

      <div className="max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 pt-[72px] pb-[32px] relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] gap-10 lg:gap-[60px] mb-14">
          {/* 1. Brand Column */}
          <div>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/");
                else window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-block bg-white px-3 py-1.5 rounded-xl shadow-sm border border-white/10 hover:opacity-95 transition-opacity"
            >
              <img
                src={headerLogoImg}
                alt="SUPRA BIZ"
                className="w-[125px] h-auto object-contain block"
              />
            </a>
            <p
              className="text-[13.5px] leading-[1.7] mt-4 mb-6 max-w-[280px]"
              style={{ color: "rgba(255, 255, 255, 0.55)", fontFamily: "Inter, sans-serif" }}
            >
              Building brands that stand out and grow. Your strategic creative partner.
            </p>

            {/* Social Links with SVG Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/suprabiz/"
                target="_blank"
                rel="noreferrer"
                aria-label="SUPRA BIZ on Instagram"
                className="w-[38px] h-[38px] rounded-full flex items-center justify-center transition-all duration-200 group"
                style={{
                  background: "rgba(255, 255, 255, 0.07)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFC21C";
                  e.currentTarget.style.color = "#15241B";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/supra-biz-441133340/"
                target="_blank"
                rel="noreferrer"
                aria-label="SUPRA BIZ on LinkedIn"
                className="w-[38px] h-[38px] rounded-full flex items-center justify-center transition-all duration-200 group"
                style={{
                  background: "rgba(255, 255, 255, 0.07)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFC21C";
                  e.currentTarget.style.color = "#15241B";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61594457241124"
                target="_blank"
                rel="noreferrer"
                aria-label="SUPRA BIZ on Facebook"
                className="w-[38px] h-[38px] rounded-full flex items-center justify-center transition-all duration-200 group"
                style={{
                  background: "rgba(255, 255, 255, 0.07)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "rgba(255, 255, 255, 0.75)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFC21C";
                  e.currentTarget.style.color = "#15241B";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4
              className="text-[11px] font-bold tracking-[0.12em] text-white uppercase"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              QUICK LINKS
            </h4>
            <div className="w-[22px] h-[2px] rounded-full bg-[#FFC21C] mt-2 mb-5" />
            <div className="flex flex-col gap-1.5">
              {quickLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={(e) => {
                    if (l.href === "/about") {
                      e.preventDefault();
                      if (onNavigate) onNavigate("/about");
                    } else if (l.href === "/services") {
                      e.preventDefault();
                      if (onNavigate) onNavigate("/services");
                    } else if (l.href === "/courses") {
                      e.preventDefault();
                      if (onNavigate) onNavigate("/courses");
                    } else if (l.href === "/our-work") {
                      e.preventDefault();
                      if (onNavigate) onNavigate("/our-work");
                    } else if (l.href === "/contact") {
                      e.preventDefault();
                      if (onNavigate) onNavigate("/contact");
                    } else if (l.href === "/") {
                      e.preventDefault();
                      if (onNavigate) onNavigate("/");
                    } else if (l.href.startsWith("#")) {
                      if (window.location.pathname !== "/") {
                        e.preventDefault();
                        if (onNavigate) onNavigate("/" + l.href);
                      }
                    }
                  }}
                  className="text-[13.5px] leading-[2] transition-all duration-200 inline-block hover:text-white hover:translate-x-[3px]"
                  style={{
                    color: "rgba(255, 255, 255, 0.58)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {l.name}
                </a>
              ))}
            </div>
          </div>

          {/* 3. Services */}
          <div>
            <h4
              className="text-[11px] font-bold tracking-[0.12em] text-white uppercase"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              SERVICES
            </h4>
            <div className="w-[22px] h-[2px] rounded-full bg-[#FFC21C] mt-2 mb-5" />
            <div className="flex flex-col gap-1.5">
              {serviceLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate(l.href);
                  }}
                  className="text-[13.5px] leading-[2] transition-all duration-200 inline-block hover:text-white hover:translate-x-[3px]"
                  style={{
                    color: "rgba(255, 255, 255, 0.58)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {l.name}
                </a>
              ))}
            </div>
          </div>

          {/* 4. Contact */}
          <div>
            <h4
              className="text-[11px] font-bold tracking-[0.12em] text-white uppercase"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              CONTACT
            </h4>
            <div className="w-[22px] h-[2px] rounded-full bg-[#FFC21C] mt-2 mb-5" />
            <div
              className="flex flex-col gap-2.5 text-[13px] leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.58)", fontFamily: "Inter, sans-serif" }}
            >
              <div className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 shrink-0 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:sales@suprabiz.co.in" className="hover:text-white transition-colors">
                  sales@suprabiz.co.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 shrink-0 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-white/40 text-xs">Sales:</span>
                <a href="tel:+919313009073" className="hover:text-white transition-colors">
                  +91 93130 09073
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 shrink-0 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-white/40 text-xs">Admin:</span>
                <a href="tel:+918980444498" className="hover:text-white transition-colors">
                  +91 89804 44498
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-0.5">
                <svg className="w-3.5 h-3.5 shrink-0 text-white/50 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href="https://share.google/XcnqzuVTT3DxUhJjg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-xs leading-relaxed"
                >
                  C-1210, Titanium business park, Makarba, Ahmedabad, Gujarat 380015
                </a>
              </div>
            </div>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/contact");
                else window.location.pathname = "/contact";
              }}
              className="inline-flex items-center gap-1.5 h-[40px] px-[18px] rounded-full text-[12px] font-[650] mt-[18px] transition-all duration-200 hover:translate-y-[-1px] shadow-sm cursor-pointer"
              style={{
                background: "#FFC21C",
                color: "#15241B",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              <span>Let's Talk</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 mt-14 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
        >
          <p
            className="text-[11.5px]"
            style={{ color: "rgba(255, 255, 255, 0.42)", fontFamily: "Inter, sans-serif" }}
          >
            © 2026 SUPRA BIZ. All rights reserved.
          </p>

          <div
            className="flex items-center gap-4 text-[11.5px]"
            style={{ color: "rgba(255, 255, 255, 0.42)", fontFamily: "Inter, sans-serif" }}
          >
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/contact");
              }}
              className="hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">•</span>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/contact");
              }}
              className="hover:text-white/80 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "/";
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (currentPath === "/") {
      document.title = "SUPRA BIZ | Branding & Digital Marketing Agency Ahmedabad";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Ahmedabad's leading branding and digital marketing agency helping businesses build standout brand identities, high-converting digital marketing systems and sustainable growth."
        );
      }
    }
  }, [currentPath]);

  const navigateTo = (path: string) => {
    if (path.startsWith("/#")) {
      const hash = path.replace("/", "");
      if (window.location.pathname !== "/") {
        window.history.pushState(null, "", "/");
        setCurrentPath("/");
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (path.startsWith("/services#")) {
      const hash = path.replace("/services", "");
      if (currentPath !== "/services") {
        window.history.pushState(null, "", path);
        setCurrentPath("/services");
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        window.history.pushState(null, "", path);
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (path.startsWith("/courses#")) {
      const hash = path.replace("/courses", "");
      if (currentPath !== "/courses") {
        window.history.pushState(null, "", path);
        setCurrentPath("/courses");
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        window.history.pushState(null, "", path);
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (path.startsWith("/our-work#")) {
      const hash = path.replace("/our-work", "");
      if (currentPath !== "/our-work") {
        window.history.pushState(null, "", path);
        setCurrentPath("/our-work");
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        window.history.pushState(null, "", path);
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (path.startsWith("/contact#")) {
      const hash = path.replace("/contact", "");
      if (currentPath !== "/contact") {
        window.history.pushState(null, "", path);
        setCurrentPath("/contact");
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        window.history.pushState(null, "", path);
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    window.history.pushState(null, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isAbout = currentPath === "/about" || currentPath === "/about/";
  const isServices =
    currentPath === "/services" ||
    currentPath === "/services/" ||
    currentPath.startsWith("/services#");
  const isCourses =
    currentPath === "/courses" ||
    currentPath === "/courses/" ||
    currentPath.startsWith("/courses#");
  const isOurWork =
    currentPath === "/our-work" ||
    currentPath === "/our-work/" ||
    currentPath.startsWith("/our-work#");
  const isContact =
    currentPath === "/contact" ||
    currentPath === "/contact/" ||
    currentPath.startsWith("/contact#");

  return (
    <div className="min-h-screen">
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />
      {isAbout ? (
        <AboutPage onNavigate={navigateTo} />
      ) : isServices ? (
        <ServicesPage onNavigate={navigateTo} />
      ) : isCourses ? (
        <CoursesPage onNavigate={navigateTo} />
      ) : isOurWork ? (
        <OurWorkPage onNavigate={navigateTo} />
      ) : isContact ? (
        <ContactPage onNavigate={navigateTo} />
      ) : (
        <>
          <Hero onNavigate={navigateTo} />
          <TrustBar />
          <About onNavigate={navigateTo} />
          <Services onNavigate={navigateTo} />
          <Course onNavigate={navigateTo} />
          <WhyUs />
          <Portfolio onNavigate={navigateTo} />
          <Process />
          <Testimonials />
          <CTA onNavigate={navigateTo} />
        </>
      )}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
