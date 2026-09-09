import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";
import teamImg from "@/imports/suprabiz-about-team.jpg";

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
    document.title = "Contact Us | Start a Project or Enquiry | SUPRA BIZ";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Get in touch with SUPRA BIZ. Start a branding, web design, or digital marketing project, or enquire about our specialized courses in Ahmedabad."
    );
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
      q: "How quickly can we start on our project after contacting you?",
      a: "Typically, we schedule an initial discovery call within 24–48 hours of receiving your brief. Once scope and objectives are agreed upon, project kickoffs usually take place within 5 to 7 business days.",
    },
    {
      q: "Do you work with clients outside Ahmedabad or internationally?",
      a: "Yes. While our headquarters is in Ahmedabad, Gujarat, our team regularly collaborates with ambitious brands and businesses across India, the UK, the US, and the Middle East using modern remote collaboration frameworks.",
    },
    {
      q: "Can I visit your Ahmedabad studio for an in-person consultation?",
      a: "We welcome in-person meetings at our Ahmedabad studio. We recommend scheduling an appointment in advance so our creative and strategy directors can dedicate focused time to your discussion.",
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
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-10 overflow-hidden bg-white border-b border-[#08703A]/[0.06]">
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
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8F4EC] border border-[#08703A]/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#08703A]" />
                <span
                  className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#08703A]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  GET IN TOUCH
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
                Let's Build Something
                <br />
                <span className="text-[#08703A]">Remarkable Together.</span>
              </h1>

              {/* Description */}
              <p
                className="text-[#56645A] text-[16px] sm:text-[18px] leading-[1.65] max-w-[620px] mb-8 sm:mb-10 font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Whether you need a distinctive brand identity, a high-converting
                website, scalable performance campaigns, or industry-grade marketing
                training, our studio is ready to collaborate.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={(e) => scrollToElement("contact-form", e)}
                  className="group inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-full text-[15px] font-semibold text-white bg-[#08703A] hover:bg-[#065A2E] transition-all duration-200 shadow-[0_8px_20px_rgba(8,112,58,0.20)] hover:-translate-y-0.5 cursor-pointer"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Send a Message</span>
                  <span className="transition-transform duration-200 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </button>

                <a
                  href="mailto:sales@suprabiz.co.in"
                  className="group inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-full text-[15px] font-semibold text-[#15241B] bg-[#F2F7F4] hover:bg-[#E7F1EB] border border-[#08703A]/15 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>sales@suprabiz.co.in</span>
                  <span className="text-[#08703A] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual Showcase (Matching 4/4.2 Aspect Ratio) */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-[560px] aspect-[4/4.2] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#F4F8F5] group"
                style={{
                  border: "1px solid rgba(8, 112, 58, 0.10)",
                  boxShadow: "0 30px 70px rgba(20, 55, 35, 0.12)",
                }}
              >
                <img
                  src={teamImg}
                  alt="SUPRA BIZ creative agency team in Ahmedabad collaborating on digital marketing projects"
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
                    background: "rgba(255, 255, 255, 0.92)",
                    border: "1px solid rgba(8, 112, 58, 0.12)",
                    boxShadow: "0 8px 24px rgba(18, 58, 35, 0.08)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
                  <span
                    className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#15241B]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    STUDIO • AHMEDABAD, GUJARAT
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
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. Section: Direct Contact Channels ───────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-10 bg-[#FAFBF9] border-b border-[rgba(8,112,58,0.08)]">
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 1. Email Inquiries */}
            <div className="p-8 rounded-[24px] bg-white border border-[rgba(8,112,58,0.08)] shadow-[0_10px_30px_rgba(20,55,35,0.04)] hover:shadow-[0_16px_40px_rgba(20,55,35,0.07)] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F4EC] text-[#08703A] flex items-center justify-center text-xl mb-6">
                  ✉
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
            </div>

            {/* 2. Direct Call & WhatsApp (Sales + Admin) */}
            <div className="p-8 rounded-[24px] bg-white border border-[rgba(8,112,58,0.08)] shadow-[0_10px_30px_rgba(20,55,35,0.04)] hover:shadow-[0_16px_40px_rgba(20,55,35,0.07)] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F4EC] text-[#08703A] flex items-center justify-center text-xl mb-6">
                  ✆
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#08703A] block mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  CALL &amp; WHATSAPP
                </span>
                <div className="space-y-1.5 mb-3">
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
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-[#55695C]">
                      Admin
                    </span>
                    <a
                      href="tel:+918980444498"
                      className="text-[17px] font-bold text-[#15241B] hover:text-[#08703A] transition-colors"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      +91 89804 44498
                    </a>
                  </div>
                </div>
                <p
                  className="text-[13.5px] text-[#69736C] leading-[1.6]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Available Monday through Saturday, 9:30 AM to 6:30 PM IST for
                  project calls and inquiries.
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
                <span className="text-black/20">•</span>
                <a
                  href="tel:+918980444498"
                  className="inline-flex items-center gap-1.5 text-[13px] font-[650] text-[#69736C] hover:text-[#08703A] group"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>Call Admin</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* 3. Studio Headquarters */}
            <div className="p-8 rounded-[24px] bg-white border border-[rgba(8,112,58,0.08)] shadow-[0_10px_30px_rgba(20,55,35,0.04)] hover:shadow-[0_16px_40px_rgba(20,55,35,0.07)] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F4EC] text-[#08703A] flex items-center justify-center text-xl mb-6">
                  ⌖
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#08703A] block mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  STUDIO HEADQUARTERS
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
                href="https://share.google/XcnqzuVTT3DxUhJjg"
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
            </div>
          </div>

          {/* Social Channels Bar */}
          <div className="mt-8 p-5 sm:p-6 rounded-[20px] bg-white border border-[#08703A]/10 shadow-[0_4px_16px_rgba(20,55,35,0.03)] flex flex-col sm:flex-row items-center justify-between gap-4">
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
        </div>
      </section>

      {/* ─── 03. Section: Interactive Project Inquiry Form ─────────────────────── */}
      <section
        id="contact-form"
        className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-10 bg-white border-b border-[rgba(8,112,58,0.08)]"
      >
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
              <span
                className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#08703A]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                PROJECT BRIEF
              </span>
            </div>
            <h2
              className="text-[32px] sm:text-[42px] font-extrabold tracking-[-0.035em] text-[#15241B] leading-[1.1]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Tell Us About Your Project.
            </h2>
            <p
              className="text-[16px] text-[#667069] mt-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Fill in the brief below or email us directly. We review every
              enquiry with our senior strategy team.
            </p>
          </div>

          {/* Form Card */}
          <div
            className="rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 lg:p-14 bg-[#FAFBF9] border border-[rgba(8,112,58,0.10)] shadow-[0_20px_60px_rgba(20,55,35,0.06)]"
          >
            {isSubmitted ? (
              <div className="text-center py-16 sm:py-20 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#E8F4EC] text-[#08703A] text-3xl font-bold flex items-center justify-center mb-6 shadow-sm">
                  ✓
                </div>
                <h3
                  className="text-[28px] sm:text-[34px] font-bold text-[#15241B] tracking-[-0.03em] mb-3"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Thank You! Your Enquiry Has Been Sent.
                </h3>
                <p
                  className="text-[16px] text-[#56645A] max-w-[500px] leading-[1.65] mb-8"
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
                  className="h-[48px] px-7 rounded-full text-[14px] font-semibold text-white bg-[#08703A] hover:bg-[#065A2E] transition-all cursor-pointer shadow-[0_6px_18px_rgba(8,112,58,0.18)]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                {/* 1. Service Selection Pills */}
                <div>
                  <label
                    className="block text-[13px] font-bold uppercase tracking-[0.10em] text-[#08703A] mb-3"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    1. What can we help you with? *
                  </label>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {servicesList.map((svc) => {
                      const isSelected = selectedService === svc;
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => setSelectedService(svc)}
                          className={`px-4 sm:px-5 py-2.5 rounded-full text-[13.5px] sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer ${
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
                    className="block text-[13px] font-bold uppercase tracking-[0.10em] text-[#08703A] mb-3"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    2. Ideal Timeline
                  </label>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {timelineOptions.map((opt) => {
                      const isSelected = timeline === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setTimeline(opt)}
                          className={`px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-[13.5px] font-medium transition-all duration-200 cursor-pointer ${
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className="w-full h-[50px] px-4 rounded-xl bg-white border border-[#08703A]/15 text-[#15241B] text-[14.5px] outline-none focus:border-[#08703A] focus:ring-2 focus:ring-[#08703A]/10 transition-all placeholder:text-[#9AA59D]"
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
                      className="w-full h-[50px] px-4 rounded-xl bg-white border border-[#08703A]/15 text-[#15241B] text-[14.5px] outline-none focus:border-[#08703A] focus:ring-2 focus:ring-[#08703A]/10 transition-all placeholder:text-[#9AA59D]"
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
                      className="w-full h-[50px] px-4 rounded-xl bg-white border border-[#08703A]/15 text-[#15241B] text-[14.5px] outline-none focus:border-[#08703A] focus:ring-2 focus:ring-[#08703A]/10 transition-all placeholder:text-[#9AA59D]"
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
                      className="w-full h-[50px] px-4 rounded-xl bg-white border border-[#08703A]/15 text-[#15241B] text-[14.5px] outline-none focus:border-[#08703A] focus:ring-2 focus:ring-[#08703A]/10 transition-all placeholder:text-[#9AA59D]"
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
                    className="w-full p-4 rounded-xl bg-white border border-[#08703A]/15 text-[#15241B] text-[14.5px] outline-none focus:border-[#08703A] focus:ring-2 focus:ring-[#08703A]/10 transition-all placeholder:text-[#9AA59D] resize-none"
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
                    className="text-[12.5px] text-[#6E7B73]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    🔒 Your information is confidential and never shared.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2.5 h-[54px] px-10 rounded-full font-bold text-[15px] text-white bg-[#08703A] hover:bg-[#065A2E] disabled:bg-[#08703A]/70 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_8px_24px_rgba(8,112,58,0.22)] hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
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
        </div>
      </section>

      {/* ─── 04. Section: Studio Location & Visiting Info ──────────────────────── */}
      <section
        id="location-map"
        className="py-20 sm:py-24 px-6 sm:px-8 lg:px-10 bg-[#FAFBF9] border-b border-[rgba(8,112,58,0.08)]"
      >
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
                <span
                  className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#08703A]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  LOCATION &amp; VISITS
                </span>
              </div>

              <h2
                className="text-[34px] sm:text-[44px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.1] mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Visit Our Studio
                <br />
                in Ahmedabad.
              </h2>

              <p
                className="text-[16px] text-[#69736C] leading-[1.65] mb-8 max-w-[500px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                We believe in face-to-face creative alignment. If you are based in
                or visiting Gujarat, drop by for freshly brewed coffee and a
                strategic brand conversation.
              </p>

              {/* Office Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#E8F4EC] text-[#08703A] flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      SUPRA BIZ Digital &amp; Creative Studio
                    </h4>
                    <p
                      className="text-[14px] text-[#69736C] leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      C-1210, Titanium business park, Makarba, Ahmedabad, Gujarat 380015
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
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
                      className="text-[14px] text-[#69736C] leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Sales: <a href="tel:+919313009073" className="font-semibold text-[#15241B] hover:text-[#08703A]">+91 93130 09073</a> &nbsp;|&nbsp; Admin: <a href="tel:+918980444498" className="font-semibold text-[#15241B] hover:text-[#08703A]">+91 89804 44498</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#E8F4EC] text-[#08703A] flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4
                      className="text-[15px] font-bold text-[#15241B]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Studio Hours
                    </h4>
                    <p
                      className="text-[14px] text-[#69736C]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Monday – Saturday: 9:30 AM – 6:30 PM IST (Sundays Closed)
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://share.google/XcnqzuVTT3DxUhJjg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-[48px] px-6 rounded-full text-[14px] font-semibold text-[#08703A] bg-[#E8F4EC] hover:bg-[#D8ECD0] border border-[#08703A]/15 transition-all cursor-pointer"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <span>Open in Google Maps</span>
                <span>↗</span>
              </a>
            </div>

            {/* Right Live Google Map Card */}
            <div
              className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white border border-[rgba(8,112,58,0.12)] shadow-[0_20px_50px_rgba(20,55,35,0.08)] flex flex-col"
            >
              {/* Map Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#08703A]/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#08703A] animate-pulse" />
                  <span
                    className="text-[12px] font-bold tracking-wider uppercase text-[#15241B]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Ahmedabad Headquarters
                  </span>
                </div>
                <a
                  href="https://share.google/XcnqzuVTT3DxUhJjg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-[#08703A] bg-[#E8F4EC] hover:bg-[#D8ECD0] transition-colors px-3 py-1 rounded-full flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Live Interactive Google Map */}
              <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] min-h-[350px] sm:min-h-[390px] bg-[#F4F8F5]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586.9755216994283!2d72.50187580937867!3d22.99767832344428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b7eee8ca869%3A0xd31c25799d187694!2sSUPRABIZ%20ADS%20%26%20EVENTS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1788948480425!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="SUPRABIZ Headquarters Google Map"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Info */}
              <div className="px-6 py-3.5 bg-white border-t border-[#08703A]/10 flex flex-wrap items-center justify-between text-[12px] text-[#69736C] gap-2">
                <div className="flex items-center gap-1.5 font-medium text-[#15241B]">
                  <span className="text-[#08703A]">📍</span>
                  <span>C-1210, Titanium Business Park, Makarba</span>
                </div>
                <span className="font-semibold text-[#08703A]">IST (UTC +5:30)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 05. Section: Frequently Asked Questions ───────────────────────────── */}
      <section className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-10 bg-white border-b border-[rgba(8,112,58,0.08)]">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFC21C]" />
              <span
                className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#08703A]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2
              className="text-[32px] sm:text-[42px] font-bold text-[#15241B] tracking-[-0.035em] leading-[1.1]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Clear Answers Before We Begin.
            </h2>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-[rgba(8,112,58,0.10)] border-y border-[rgba(8,112,58,0.10)]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <h3
                      className={`text-[17px] sm:text-[19px] font-bold transition-colors ${
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
                    <div className="mt-3.5 pr-8">
                      <p
                        className="text-[15px] sm:text-[15.5px] text-[#69736C] leading-[1.65]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 06. Section: Final CTA ────────────────────────────────────────────── */}
      <section
        className="relative pt-[80px] sm:pt-[90px] pb-[90px] sm:pb-[100px] px-6 sm:px-8 lg:px-10 overflow-hidden"
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
              PREFER A DIRECT CONVERSATION?
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[clamp(50px,5vw,66px)] font-bold text-white tracking-[-0.04em] leading-[1.03] max-w-[800px]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            We're Only an
            <br />
            Email or Call Away.
          </h2>

          {/* Description */}
          <p
            className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-[620px] mt-[24px] sm:mt-[26px] mb-8 sm:mb-9 text-white/70"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Drop us a quick note or reach out directly to discuss how SUPRA BIZ
            can build, elevate, and scale your brand presence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a
              href="mailto:sales@suprabiz.co.in"
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
              <span>sales@suprabiz.co.in</span>
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                →
              </span>
            </a>

            <button
              type="button"
              onClick={(e) => scrollToElement("contact-form", e)}
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
              <span>Fill Online Brief</span>
              <span className="ml-1.5">↑</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
