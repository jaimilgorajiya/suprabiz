import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";
import teamImg from "@/imports/suprabiz-about-team.jpg";
import {
  RevealText,
  RevealEyebrow,
  RevealImage,
  RevealLine,
  RevealDirectional,
  StaggerGroup,
  StaggerItem,
} from "../motion/MotionComponents";

interface ContactPageProps {
  onNavigate?: (path: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [selectedService, setSelectedService] = useState<string>("Branding");
  const [timeline, setTimeline] = useState<string>("Ready to Start");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    document.title = "Contact Us | Start a Project or Enquiry | SUPRABIZ";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Get in touch with SUPRABIZ. Start a branding, web design, or digital marketing project, or enquire about our specialized courses in Ahmedabad."
      );
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);


  const scrollToElement = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const isConfigured =
      EMAILJS_CONFIG.SERVICE_ID &&
      EMAILJS_CONFIG.SERVICE_ID !== "YOUR_SERVICE_ID" &&
      EMAILJS_CONFIG.TEMPLATE_ID &&
      EMAILJS_CONFIG.TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
      EMAILJS_CONFIG.PUBLIC_KEY &&
      EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

    if (!isConfigured) {
      console.warn(
        "EmailJS is not yet configured with your real keys. Set them in src/config/emailjs.ts or .env"
      );
      // Simulate quick response if keys aren't added yet
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.fullName,
          name: formData.fullName,
          from_email: formData.email,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || "Not provided",
          service: selectedService,
          timeline: timeline,
          message: formData.message || "No additional message provided.",
          to_email: "sales@suprabiz.co.in",
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("EmailJS submission error:", err);
      setIsSubmitting(false);
      setErrorMessage(
        err?.text || "Failed to send message. Please contact sales@suprabiz.co.in directly."
      );
    }
  };

  const servicesList = [
    "Branding",
    "Social Media Marketing",
    "SEO",
    "Web Design",
    "Performance Marketing",
    "Digital Marketing",
    "Courses & Training",
  ];

  const timelineOptions = [
    "Ready to Start",
    "1 – 2 Months",
    "Exploring / Q3-Q4",
  ];

  const faqs = [
    {
      q: "What is SEO?",
      a: "SEO (Search Engine Optimization) is the process of optimizing your website's technical infrastructure, content relevance, and digital authority to rank high on search engines like Google. A strong SEO strategy drives steady, high-intent organic traffic to your brand without relying on paid advertising clicks.",
    },
    {
      q: "What is Performance Marketing?",
      a: "Performance Marketing is a results-driven advertising methodology where campaigns across platforms like Meta (Instagram & Facebook), Google Ads, and LinkedIn are continuously optimized for specific commercial actions — such as qualified leads, sales, and conversions — ensuring every rupee spent delivers measurable ROI.",
    },
    {
      q: "How quickly can we start on our project after contacting you?",
      a: "Typically, we schedule an initial discovery call within 24–48 hours of receiving your brief. Once scope and objectives are agreed upon, project kickoffs usually take place within 5 to 7 business days.",
    },
    {
      q: "Do you work with clients outside Ahmedabad or internationally?",
      a: "Yes. While our headquarters is in Ahmedabad, Gujarat, our team regularly collaborates with ambitious brands and businesses across India, the UK, the US, and the Middle East using modern remote collaboration frameworks.",
    },
    {
      q: "Can I visit your Ahmedabad office for an in-person consultation?",
      a: "We welcome in-person meetings at our Ahmedabad office. We recommend scheduling an appointment in advance so our creative and strategy directors can dedicate focused time to your discussion.",
    },
    {
      q: "How do course admissions and 1-on-1 counseling work?",
      a: "If you are interested in our digital marketing or SEO courses, select 'Courses & Training' in the form or call our admissions desk. We provide a syllabus walkthrough, course counseling, and batch schedule assistance.",
    },
    {
      q: "What information should I include in my initial enquiry?",
      a: "Sharing a brief overview of your business, current marketing challenges, desired deliverables (e.g. brand redesign, new website, or lead acquisition), and your ideal timeline helps us prepare thoughtful recommendations for our first call.",
    },
  ];

  return (
    <main className="w-full bg-[#FBFCF8]">
      {/* ─── 01. Section: Contact Hero ──────────────────────────────────────────── */}
      <section className="relative pt-10 sm:pt-14 lg:pt-20 pb-14 sm:pb-18 lg:pb-24 px-4 sm:px-8 lg:px-10 overflow-hidden bg-white border-b border-[#08703A]/[0.06]">
        {/* Soft Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 85% 35%, rgba(21, 148, 71, 0.08) 0%, rgba(255, 194, 28, 0.035) 45%, transparent 70%)",
          }}
        />

        {/* Subtle Dot Matrix Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(7, 92, 49, 0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-[1380px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start">
              {/* Eyebrow Pill */}
              <RevealEyebrow text="GET IN TOUCH" dotColor="#08703A" textColor="#08703A" />

              {/* Headline H1 */}
              <RevealText
                as="h1"
                lines={["Let's Build Something", "Remarkable Together."]}
                className="text-[#15241B] tracking-[-0.04em] leading-[1.05] mb-5 sm:mb-6 font-bold"
                style={{
                  fontSize: "clamp(34px, 5.2vw, 76px)",
                  fontFamily: "Manrope, sans-serif",
                }}
              />

              {/* Description */}
              <RevealDirectional direction="up" delay={120}>
                <p
                  className="text-[#56645A] text-[15.5px] sm:text-[18px] leading-[1.65] max-w-[620px] mb-7 sm:mb-10 font-normal"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Whether you need a distinctive brand identity, a high-converting
                  website, scalable performance campaigns, or industry-grade marketing
                  training, our team is ready to collaborate.
                </p>
              </RevealDirectional>

              {/* CTAs */}
              <RevealDirectional direction="up" delay={200}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={(e) => scrollToElement("contact-form", e)}
                    className="btn-premium btn-premium-sweep group inline-flex items-center justify-center gap-2.5 h-[50px] sm:h-[52px] px-8 rounded-full text-[15px] font-semibold text-white bg-[#08703A] hover:bg-[#065A2E] transition-all duration-200 shadow-[0_8px_20px_rgba(8,112,58,0.20)] hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    <span>Send a Message</span>
                    <span className="transition-transform duration-200 group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </button>

                  <a
                    href="mailto:sales@suprabiz.co.in"
                    className="btn-premium group inline-flex items-center justify-center gap-2.5 h-[50px] sm:h-[52px] px-8 rounded-full text-[15px] font-semibold text-[#15241B] bg-[#F2F7F4] hover:bg-[#E7F1EB] border border-[#08703A]/15 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    <span>sales@suprabiz.co.in</span>
                    <span className="text-[#08703A] transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </RevealDirectional>
            </div>

            {/* Right Hero Visual Showcase (Matching 4/4.2 Aspect Ratio) */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <RevealImage direction="right">
                <div
                  className="relative w-full max-w-[560px] aspect-[4/4.2] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#F4F8F5] group"
                  style={{
                    border: "1px solid rgba(8, 112, 58, 0.10)",
                    boxShadow: "0 30px 70px rgba(20, 55, 35, 0.12)",
                  }}
                >
                  <img
                    src={teamImg}
                    alt="SUPRABIZ creative agency team in Ahmedabad collaborating on digital marketing projects"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.015] block"
                    loading="eager"
                    fetchPriority="high"
                  />

                  {/* Subtle Inner Highlight */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-[24px] sm:rounded-[32px]"
                    style={{
                      boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.6)",
                    }}
                  />

                  {/* Bottom Editorial Badge */}
                  <div
                    className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md"
                    style={{
                      background: "rgba(255, 255, 255, 0.92)",
                      border: "1px solid rgba(8, 112, 58, 0.12)",
                      boxShadow: "0 8px 24px rgba(18, 58, 35, 0.08)",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
                    <span
                      className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      OFFICE • AHMEDABAD, GUJARAT
                    </span>
                  </div>

                  {/* Top Status Capsule */}
                  <div className="absolute top-5 right-5 z-10">
                    <div
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-[#15241B] backdrop-blur-md"
                      style={{
                        background: "rgba(255, 255, 255, 0.92)",
                        border: "1px solid rgba(8, 112, 58, 0.10)",
                        fontFamily: "Manrope, sans-serif",
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                      <span>Replies within 24h</span>
                    </div>
                  </div>
                </div>
              </RevealImage>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. Section: Direct Contact Channels ───────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-10 bg-[#FAFBF9] border-b border-[rgba(8,112,58,0.08)]">
        <div className="max-w-[1380px] mx-auto">
          <StaggerGroup delay={100} stagger={80} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 1. Email Inquiries */}
            <StaggerItem className="p-8 rounded-[24px] bg-white border border-[rgba(8,112,58,0.08)] shadow-[0_10px_30px_rgba(20,55,35,0.04)] hover:shadow-[0_16px_40px_rgba(20,55,35,0.07)] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F4EC] text-[#08703A] flex items-center justify-center mb-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 8.5 6a2.5 2.5 0 0 0 3 0L22 7" />
                  </svg>
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#08703A] block mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  EMAIL US DIRECTLY
                </span>
                <h3
                  className="text-[19px] sm:text-[20px] font-bold text-[#15241B] mb-2 break-all"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  sales@suprabiz.co.in
                </h3>
                <p
                  className="text-[14px] text-[#69736C] leading-[1.6]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Send us your brief, RFP, or general questions. We respond
                  promptly within one business day.
                </p>
              </div>
              <a
                href="mailto:sales@suprabiz.co.in"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-[650] text-[#08703A] hover:text-[#065A2E] mt-6 group cursor-pointer"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <span>Write an Email</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </StaggerItem>

            {/* 2. Direct Call & WhatsApp (Sales + Admin) */}
            <StaggerItem className="p-8 rounded-[24px] bg-white border border-[rgba(8,112,58,0.08)] shadow-[0_10px_30px_rgba(20,55,35,0.04)] hover:shadow-[0_16px_40px_rgba(20,55,35,0.07)] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F4EC] text-[#08703A] flex items-center justify-center mb-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16l.92.92z" />
                  </svg>
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#08703A] block mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  CALL &amp; WHATSAPP
                </span>
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#E8F4EC] text-[#08703A]">
                      Sales
                    </span>
                    <a
                      href="tel:+919313009073"
                      className="text-[17px] font-bold text-[#15241B] hover:text-[#08703A] transition-colors"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      +91 93130 09073
                    </a>
                  </div>
                </div>
                <p
                  className="text-[13.5px] text-[#69736C] leading-[1.6]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Available Monday – Saturday, 10 AM – 6 PM for project calls and inquiries.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-2">
                <a
                  href="tel:+919313009073"
                  className="inline-flex items-center gap-1.5 text-[13px] font-[650] text-[#08703A] hover:text-[#065A2E] group"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Call Sales</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </StaggerItem>

            {/* 3. Administrative Office */}
            <StaggerItem className="p-8 rounded-[24px] bg-white border border-[rgba(8,112,58,0.08)] shadow-[0_10px_30px_rgba(20,55,35,0.04)] hover:shadow-[0_16px_40px_rgba(20,55,35,0.07)] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F4EC] text-[#08703A] flex items-center justify-center mb-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#08703A] block mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  ADMINISTRATIVE OFFICE
                </span>
                <h3
                  className="text-[17px] font-bold text-[#15241B] mb-2 leading-snug"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Titanium Business Park, Makarba
                </h3>
                <p
                  className="text-[13.5px] text-[#69736C] leading-[1.6]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  C-1210, Titanium business park, Makarba, Ahmedabad, Gujarat 380015
                </p>
              </div>
              <a
                href="https://www.google.com/maps?sca_esv=ac456b0eb9994c0f&authuser=1&output=search&q=SUPRABIZ+ADS+and+EVENTS+PRIVATE+LIMITED+Ahmedabad&source=lnms&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832a9BVCEiB2iPJNekNderQwIgLtPdGtXl-1ukUntONsOMhizNPwQ2HNK10e_nDgVknt3CoXceMc3mRCIZwiN30-loNNQUzVeHN_bUqs5_4k8dfYftaUK6H0OaBHjmrUApnKgMMiNwc4wizR_R5Kf_u9p7AfeGfp-rvsBKNQzLfOeYCu3VdQ&entry=mc&ved=1t:200715&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-[650] text-[#08703A] hover:text-[#065A2E] mt-6 group cursor-pointer"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <span>Get Directions</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </StaggerItem>
          </StaggerGroup>

          {/* Social Channels Bar */}
          <RevealDirectional direction="up" delay={200} className="mt-8">
            <div className="p-5 sm:p-6 rounded-[20px] bg-white border border-[#08703A]/10 shadow-[0_4px_16px_rgba(20,55,35,0.03)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#15241B]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Connect On Official Channels
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/suprabiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#08703A] bg-[#E8F4EC] hover:bg-[#D4EBDC] transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Instagram</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61594457241124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#08703A] bg-[#E8F4EC] hover:bg-[#D4EBDC] transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Facebook</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/supra-biz-441133340/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#08703A] bg-[#E8F4EC] hover:bg-[#D4EBDC] transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </RevealDirectional>
        </div>
      </section>

      {/* ─── 03. Section: Interactive Project Inquiry Form ─────────────────────── */}
      <section
        id="contact-form"
        className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-10 bg-white border-b border-[rgba(8,112,58,0.08)]"
      >
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 flex flex-col items-center">
            <RevealEyebrow text="PROJECT BRIEF" dotColor="#FFC21C" textColor="#08703A" />
            <RevealText
              as="h2"
              lines={["Tell Us About Your Project."]}
              className="text-[28px] sm:text-[42px] font-extrabold tracking-[-0.035em] text-[#15241B] leading-[1.1]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            />
            <RevealDirectional direction="up" delay={120}>
              <p
                className="text-[15px] sm:text-[16px] text-[#667069] mt-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Fill in the brief below or email us directly. We review every
                enquiry with our senior strategy team.
              </p>
            </RevealDirectional>
          </div>

          {/* Form Card */}
          <RevealDirectional direction="up" delay={150}>
            <div
              className="rounded-[24px] sm:rounded-[32px] p-5 sm:p-10 lg:p-14 bg-[#FAFBF9] border border-[rgba(8,112,58,0.10)] shadow-[0_20px_60px_rgba(20,55,35,0.06)]"
            >
              {isSubmitted ? (
                <div className="text-center py-12 sm:py-20 flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E8F4EC] text-[#08703A] text-2xl sm:text-3xl font-bold flex items-center justify-center mb-6 shadow-sm">
                    ✓
                  </div>
                  <h3
                    className="text-[24px] sm:text-[34px] font-bold text-[#15241B] tracking-[-0.03em] mb-3"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Thank You! Your Enquiry Has Been Sent.
                  </h3>
                  <p
                    className="text-[15px] sm:text-[16px] text-[#56645A] max-w-[500px] leading-[1.65] mb-8"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    We have received your brief regarding{" "}
                    <strong className="text-[#08703A] font-semibold">
                      {selectedService}
                    </strong>
                    . A member of our team will review the details and respond
                    within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="btn-premium h-[48px] px-7 rounded-full text-[14px] font-semibold text-white bg-[#08703A] hover:bg-[#065A2E] transition-all cursor-pointer shadow-[0_6px_18px_rgba(8,112,58,0.18)]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10">
                  {/* 1. Service Selection Pills */}
                  <div>
                    <label
                      className="block text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.10em] text-[#08703A] mb-3"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      1. What can we help you with? *
                    </label>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {servicesList.map((svc) => {
                        const isSelected = selectedService === svc;
                        return (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => setSelectedService(svc)}
                            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-[#08703A] text-white shadow-[0_4px_14px_rgba(8,112,58,0.22)] scale-[1.02]"
                                : "bg-white text-[#56645A] hover:text-[#08703A] hover:bg-[#F2F7F4] border border-[#08703A]/15"
                            }`}
                            style={{ fontFamily: "Manrope, sans-serif" }}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Timeline Options */}
                  <div>
                    <label
                      className="block text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.10em] text-[#08703A] mb-3"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      2. Ideal Timeline
                    </label>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {timelineOptions.map((opt) => {
                        const isSelected = timeline === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setTimeline(opt)}
                            className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[12.5px] sm:text-[13.5px] font-medium transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-[#E8F4EC] text-[#08703A] font-semibold border border-[#08703A]/25"
                                : "bg-white text-[#69736C] hover:text-[#15241B] border border-[#08703A]/10"
                            }`}
                            style={{ fontFamily: "Manrope, sans-serif" }}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Contact Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[13px] font-semibold text-[#15241B] mb-2"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Your Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="e.g. Parth Patel"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full h-[50px] px-4 rounded-xl bg-white border border-[#08703A]/15 text-[#15241B] text-[16px] sm:text-[14.5px] outline-none focus:border-[#08703A] focus:ring-2 focus:ring-[#08703A]/10 transition-all placeholder:text-[#9AA59D]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-semibold text-[#15241B] mb-2"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full h-[50px] px-4 rounded-xl bg-white border border-[#08703A]/15 text-[#15241B] text-[16px] sm:text-[14.5px] outline-none focus:border-[#08703A] focus:ring-2 focus:ring-[#08703A]/10 transition-all placeholder:text-[#9AA59D]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[13px] font-semibold text-[#15241B] mb-2"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 93130 09073"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full h-[50px] px-4 rounded-xl bg-white border border-[#08703A]/15 text-[#15241B] text-[16px] sm:text-[14.5px] outline-none focus:border-[#08703A] focus:ring-2 focus:ring-[#08703A]/10 transition-all placeholder:text-[#9AA59D]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[13px] font-semibold text-[#15241B] mb-2"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Organization / Brand Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="e.g. Supra Ventures"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full h-[50px] px-4 rounded-xl bg-white border border-[#08703A]/15 text-[#15241B] text-[16px] sm:text-[14.5px] outline-none focus:border-[#08703A] focus:ring-2 focus:ring-[#08703A]/10 transition-all placeholder:text-[#9AA59D]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      />
                    </div>
                  </div>

                  {/* 4. Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-semibold text-[#15241B] mb-2"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Project Details &amp; Objectives
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your brand, key goals, target audience, or any specific requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full p-4 rounded-xl bg-white border border-[#08703A]/15 text-[#15241B] text-[16px] sm:text-[14.5px] outline-none focus:border-[#08703A] focus:ring-2 focus:ring-[#08703A]/10 transition-all placeholder:text-[#9AA59D] resize-none"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                  </div>

                  {/* Error Banner */}
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center justify-between">
                      <span>{errorMessage}</span>
                      <a
                        href="mailto:sales@suprabiz.co.in"
                        className="underline font-bold text-red-800"
                      >
                        Email Us Directly
                      </a>
                    </div>
                  )}

                  {/* Submit Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p
                      className="text-[12.5px] text-[#6E7B73] text-center sm:text-left"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      🔒 Your information is confidential and never shared.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-premium btn-premium-sweep group inline-flex items-center justify-center gap-2.5 h-[52px] sm:h-[54px] px-8 sm:px-10 rounded-full font-bold text-[15px] text-white bg-[#08703A] hover:bg-[#065A2E] disabled:bg-[#08703A]/70 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_8px_24px_rgba(8,112,58,0.22)] hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Enquiry</span>
                          <span className="transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </RevealDirectional>
        </div>
      </section>

      {/* ─── 04. Section: Office Location & Visiting Info ──────────────────────── */}
      <section
        id="location-map"
        className="py-14 sm:py-20 px-4 sm:px-8 lg:px-10 bg-[#FAFBF9] border-b border-[rgba(8,112,58,0.08)]"
      >
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <RevealDirectional direction="left">
              <RevealEyebrow text="LOCATION & VISITS" dotColor="#FFC21C" textColor="#08703A" />

              <RevealText
                as="h2"
                lines={["Visit SUPRABIZ"]}
                className="text-[30px] sm:text-[44px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.1] mb-5 sm:mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              />

              <p
                className="text-[15px] sm:text-[16px] text-[#69736C] leading-[1.65] mb-6 sm:mb-8 max-w-[500px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                We believe in face-to-face creative alignment. If you are based in
                or visiting Gujarat, drop by for freshly brewed coffee and a
                strategic brand conversation.
              </p>

              {/* Office Details */}
              <StaggerGroup delay={120} stagger={60} className="space-y-4 mb-7 sm:mb-8">
                <StaggerItem className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#E8F4EC] text-[#08703A] flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      SUPRABIZ Administrative Office
                    </h4>
                    <p
                      className="text-[13.5px] sm:text-[14px] text-[#69736C] leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      C-1210, Titanium business park, Makarba, Ahmedabad, Gujarat 380015
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#E8F4EC] text-[#08703A] flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Direct Lines &amp; Inquiries
                    </h4>
                    <p
                      className="text-[13.5px] sm:text-[14px] text-[#69736C] leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <a href="tel:+919313009073" className="font-semibold text-[#15241B] hover:text-[#08703A]">+91 93130 09073</a>
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#E8F4EC] text-[#08703A] flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Office Hours
                    </h4>
                    <p
                      className="text-[13.5px] sm:text-[14px] text-[#69736C]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Monday – Saturday: 10 AM – 6 PM (Sundays Closed)
                    </p>
                  </div>
                </StaggerItem>
              </StaggerGroup>

              <a
                href="https://www.google.com/maps?sca_esv=ac456b0eb9994c0f&authuser=1&output=search&q=SUPRABIZ+ADS+and+EVENTS+PRIVATE+LIMITED+Ahmedabad&source=lnms&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832a9BVCEiB2iPJNekNderQwIgLtPdGtXl-1ukUntONsOMhizNPwQ2HNK10e_nDgVknt3CoXceMc3mRCIZwiN30-loNNQUzVeHN_bUqs5_4k8dfYftaUK6H0OaBHjmrUApnKgMMiNwc4wizR_R5Kf_u9p7AfeGfp-rvsBKNQzLfOeYCu3VdQ&entry=mc&ved=1t:200715&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-full text-[14px] font-semibold text-[#08703A] bg-[#E8F4EC] hover:bg-[#D8ECD0] border border-[#08703A]/15 transition-all cursor-pointer w-full sm:w-auto"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <span>Open in Google Maps</span>
                <span>↗</span>
              </a>
            </RevealDirectional>

            {/* Right Live Google Map Card */}
            <div className="w-full">
              <RevealImage direction="right">
                <div
                  className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white border border-[rgba(8,112,58,0.12)] shadow-[0_20px_50px_rgba(20,55,35,0.08)] flex flex-col"
                >
                  {/* Map Header */}
                  <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-b border-[#08703A]/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#08703A] animate-pulse" />
                      <span
                        className="text-[11.5px] sm:text-[12px] font-bold tracking-wider uppercase text-[#15241B]"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        Administrative Office
                      </span>
                    </div>
                    <a
                      href="https://www.google.com/maps?sca_esv=ac456b0eb9994c0f&authuser=1&output=search&q=SUPRABIZ+ADS+and+EVENTS+PRIVATE+LIMITED+Ahmedabad&source=lnms&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832a9BVCEiB2iPJNekNderQwIgLtPdGtXl-1ukUntONsOMhizNPwQ2HNK10e_nDgVknt3CoXceMc3mRCIZwiN30-loNNQUzVeHN_bUqs5_4k8dfYftaUK6H0OaBHjmrUApnKgMMiNwc4wizR_R5Kf_u9p7AfeGfp-rvsBKNQzLfOeYCu3VdQ&entry=mc&ved=1t:200715&ictx=111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-[#08703A] bg-[#E8F4EC] hover:bg-[#D8ECD0] transition-colors px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <span>Open in Maps</span>
                      <span>↗</span>
                    </a>
                  </div>

                  {/* Live Interactive Google Map */}
                  <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] overflow-hidden bg-[#F4F8F5]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4852924151705!2d72.5018758!3d22.9976783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b7eee8ca869%3A0xd31c25799d187694!2sSUPRABIZ%20ADS%20%26%20EVENTS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1788948480425!5m2!1sen!2sin"
                      style={{ border: 0, width: "100%", height: "100%" }}
                      allowFullScreen
                      loading="eager"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="SUPRABIZ Administrative Office Google Map"
                      className="absolute inset-0 w-full h-full block border-0"
                    />
                  </div>
                </div>
              </RevealImage>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 05. Section: Frequently Asked Questions ───────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-10 bg-white border-b border-[rgba(8,112,58,0.08)]">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 flex flex-col items-center">
            <RevealEyebrow text="FREQUENTLY ASKED QUESTIONS" dotColor="#FFC21C" textColor="#08703A" />
            <RevealText
              as="h2"
              lines={["Clear Answers Before We Begin."]}
              className="text-[28px] sm:text-[42px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.1]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            />
          </div>

          {/* Accordion */}
          <StaggerGroup delay={120} stagger={50} className="divide-y divide-[rgba(8,112,58,0.10)] border-y border-[rgba(8,112,58,0.10)]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <StaggerItem key={faq.q} className="py-4 sm:py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <h3
                      className={`text-[16px] sm:text-[19px] font-bold transition-colors ${
                        isOpen
                          ? "text-[#08703A]"
                          : "text-[#15241B] group-hover:text-[#08703A]"
                      }`}
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {faq.q}
                    </h3>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#08703A] text-white rotate-180"
                          : "bg-[#F2F7F4] text-[#08703A]"
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-2 sm:pr-8">
                      <p
                        className="text-[14px] sm:text-[15.5px] text-[#69736C] leading-[1.65]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ─── 06. Section: Final CTA ────────────────────────────────────────────── */}
      <section
        className="relative pt-14 sm:pt-[80px] pb-14 sm:pb-[90px] px-4 sm:px-8 lg:px-10 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #075C31 0%, #086B39 55%, #075C31 100%)",
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
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-[850px] mx-auto relative z-10 text-center flex flex-col items-center">
          {/* Eyebrow */}
          <RevealEyebrow
            text="PREFER A DIRECT CONVERSATION?"
            dotColor="#FFC21C"
            textColor="rgba(255, 255, 255, 0.88)"
            className="mb-5 sm:mb-6 px-3.5 py-2 rounded-full bg-white/[0.09] border border-white/[0.12]"
          />

          {/* Headline */}
          <RevealText
            as="h2"
            lines={["We're Only an", "Email or Call Away."]}
            className="text-[34px] xs:text-[40px] sm:text-[48px] md:text-[56px] lg:text-[clamp(50px,5vw,66px)] font-bold text-white tracking-[-0.04em] leading-[1.05] max-w-[800px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          />

          {/* Description */}
          <RevealDirectional direction="up" delay={120}>
            <p
              className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-[620px] mt-5 sm:mt-[26px] mb-7 sm:mb-9 text-white/75"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Drop us a quick note or reach out directly to discuss how SUPRABIZ
              can build, elevate, and scale your brand presence.
            </p>
          </RevealDirectional>

          {/* Buttons */}
          <RevealDirectional direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="mailto:sales@suprabiz.co.in"
                className="btn-premium btn-premium-sweep group inline-flex items-center justify-center gap-2.5 h-[50px] sm:h-[54px] px-8 rounded-full font-[650] text-[15px] sm:text-[16px] cursor-pointer transition-all duration-200 w-full sm:w-auto"
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
                <span>sales@suprabiz.co.in</span>
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  →
                </span>
              </a>

              <button
                type="button"
                onClick={(e) => scrollToElement("contact-form", e)}
                className="btn-premium inline-flex items-center justify-center h-[50px] sm:h-[54px] px-8 rounded-full font-[600] text-[15px] sm:text-[16px] cursor-pointer transition-all duration-200 text-white w-full sm:w-auto cursor-pointer"
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
                <span>Fill Online Brief</span>
                <span className="ml-1.5">↑</span>
              </button>
            </div>
          </RevealDirectional>
        </div>
      </section>
    </main>
  );
}

