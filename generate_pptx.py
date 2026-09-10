#!/usr/bin/env python3
"""
Generate a high-quality, professional 16:9 PowerPoint presentation
covering all content and pages of the SUPRABIZ website:
- Home Page
- About Us Page
- Services Page
- Courses / Academy Page
- Our Work / Portfolio Page
- Contact Page
"""

import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# ─── Brand Colors ─────────────────────────────────────────────────────────────
DARK_BG = RGBColor(15, 28, 20)        # Deep forest night #0F1C14
DARK_CARD = RGBColor(22, 40, 29)      # Deep forest card
LIGHT_BG = RGBColor(251, 252, 248)    # Clean off-white #FBFCF8
LIGHT_CARD = RGBColor(255, 255, 255)  # Pure white card
EMERALD = RGBColor(8, 112, 58)        # Brand primary green #08703A
EMERALD_LIGHT = RGBColor(232, 244, 236)# Soft green tint #E8F4EC
GOLD = RGBColor(255, 194, 28)         # Brand accent gold #FFC21C
GOLD_LIGHT = RGBColor(255, 248, 225)  # Soft gold tint
TEXT_DARK = RGBColor(21, 36, 27)      # Primary dark text #15241B
TEXT_MUTED = RGBColor(105, 115, 108)  # Slate secondary text #69736C
TEXT_LIGHT = RGBColor(250, 251, 247)  # Crisp white text #FAFBF7
TEXT_LIGHT_MUTED = RGBColor(180, 195, 185)
BORDER_LIGHT = RGBColor(220, 232, 224)
BORDER_DARK = RGBColor(35, 60, 45)

IMPORTS_DIR = os.path.abspath("src/imports")
HEADER_LOGO = os.path.join(IMPORTS_DIR, "suprabiz-logo-header.png")
HERO_IMG = os.path.join(IMPORTS_DIR, "suprabiz-hero-digital-marketing.jpg")
BRANDING_IMG = os.path.join(IMPORTS_DIR, "suprabiz-branding-service.jpg")
SOCIAL_IMG = os.path.join(IMPORTS_DIR, "suprabiz-social-media-marketing.jpg")
WEB_IMG = os.path.join(IMPORTS_DIR, "suprabiz-web-design-service.jpg")
COURSES_IMG = os.path.join(IMPORTS_DIR, "suprabiz-courses-hero.jpg")
STRATEGY_IMG = os.path.join(IMPORTS_DIR, "suprabiz-about-strategy.jpg")
TEAM_IMG = os.path.join(IMPORTS_DIR, "suprabiz-about-team.jpg")

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
blank_layout = prs.slide_layouts[6]

def set_bg(slide, color):
    bg_shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg_shape.fill.solid()
    bg_shape.fill.fore_color.rgb = color
    bg_shape.line.fill.background()
    return bg_shape

def add_speaker_note(slide, text):
    notes_slide = slide.notes_slide
    text_frame = notes_slide.notes_text_frame
    text_frame.text = text

def add_header(slide, tag_text, title_text, subtitle_text=None, is_dark=False):
    # Tag / Pill
    tag_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.45), Inches(11.7), Inches(0.4))
    tf_tag = tag_box.text_frame
    tf_tag.word_wrap = True
    tf_tag.margin_left = tf_tag.margin_top = tf_tag.margin_right = tf_tag.margin_bottom = 0
    p_tag = tf_tag.paragraphs[0]
    p_tag.text = tag_text.upper()
    p_tag.font.size = Pt(10)
    p_tag.font.bold = True
    p_tag.font.color.rgb = GOLD if is_dark else EMERALD
    p_tag.font.name = "Arial"

    # Title
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.8), Inches(11.7), Inches(0.75))
    tf_title = title_box.text_frame
    tf_title.word_wrap = True
    tf_title.margin_left = tf_title.margin_top = tf_title.margin_right = tf_title.margin_bottom = 0
    p_title = tf_title.paragraphs[0]
    p_title.text = title_text
    p_title.font.size = Pt(24)
    p_title.font.bold = True
    p_title.font.color.rgb = TEXT_LIGHT if is_dark else TEXT_DARK
    p_title.font.name = "Arial"

    if subtitle_text:
        p_sub = tf_title.add_paragraph()
        p_sub.text = subtitle_text
        p_sub.font.size = Pt(13)
        p_sub.font.bold = False
        p_sub.font.color.rgb = TEXT_LIGHT_MUTED if is_dark else TEXT_MUTED
        p_sub.font.name = "Arial"

def add_card(slide, left, top, width, height, bg_color=LIGHT_CARD, border_color=BORDER_LIGHT):
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(left), Inches(top), Inches(width), Inches(height))
    card.fill.solid()
    card.fill.fore_color.rgb = bg_color
    card.line.color.rgb = border_color
    card.line.width = Pt(1)
    return card

def add_image_safe(slide, img_path, left, top, width=None, height=None):
    if os.path.exists(img_path):
        try:
            if width and height:
                return slide.shapes.add_picture(img_path, Inches(left), Inches(top), Inches(width), Inches(height))
            elif width:
                return slide.shapes.add_picture(img_path, Inches(left), Inches(top), width=Inches(width))
            elif height:
                return slide.shapes.add_picture(img_path, Inches(left), Inches(top), height=Inches(height))
            else:
                return slide.shapes.add_picture(img_path, Inches(left), Inches(top))
        except Exception:
            return None
    return None

# ==============================================================================
# SLIDE 1: Title & Cover Slide
# ==============================================================================
s1 = prs.slides.add_slide(blank_layout)
set_bg(s1, DARK_BG)

# Accent Top Line
top_bar = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(0.12))
top_bar.fill.solid()
top_bar.fill.fore_color.rgb = GOLD
top_bar.line.fill.background()

# Logo if present
add_image_safe(s1, HEADER_LOGO, left=0.8, top=0.9, width=2.4)

# Main Title block
tbox = s1.shapes.add_textbox(Inches(0.8), Inches(2.2), Inches(7.5), Inches(3.2))
tf = tbox.text_frame
tf.word_wrap = True

p = tf.paragraphs[0]
p.text = "SUPRABIZ"
p.font.size = Pt(46)
p.font.bold = True
p.font.color.rgb = GOLD
p.font.name = "Arial"

p2 = tf.add_paragraph()
p2.text = "Building Brands That Matter"
p2.font.size = Pt(32)
p2.font.bold = True
p2.font.color.rgb = TEXT_LIGHT
p2.font.name = "Arial"

p3 = tf.add_paragraph()
p3.text = "\nComprehensive Presentation Deck of Website Architecture, Content Strategy, Capabilities & Academy Offerings across every page."
p3.font.size = Pt(14)
p3.font.color.rgb = TEXT_LIGHT_MUTED
p3.font.name = "Arial"

# Right Card: Quick Overview
add_card(s1, 8.8, 1.6, 3.8, 5.0, bg_color=DARK_CARD, border_color=BORDER_DARK)
rbox = s1.shapes.add_textbox(Inches(9.1), Inches(1.9), Inches(3.2), Inches(4.4))
rtf = rbox.text_frame
rtf.word_wrap = True

rp1 = rtf.paragraphs[0]
rp1.text = "WEBSITE SITEMAP & SCOPE"
rp1.font.size = Pt(11)
rp1.font.bold = True
rp1.font.color.rgb = GOLD

pages = [
    ("01. Home Page", "Full-funnel growth ecosystem & brand hooks"),
    ("02. About Us", "Story, core values, mission & methodology"),
    ("03. Services (6 Pillars)", "Branding, Social, SEO, Web, Ads, Digital"),
    ("04. Academy / Courses", "9 practical industry tracks & certifications"),
    ("05. Our Work", "Selected client case studies & ROI portfolio"),
    ("06. Contact & Studio", "Direct channels, inquiry funnel & HQ info")
]

for title, desc in pages:
    p_item = rtf.add_paragraph()
    p_item.text = f"• {title}: {desc}"
    p_item.font.size = Pt(11)
    p_item.font.color.rgb = TEXT_LIGHT
    p_item.space_before = Pt(8)

add_speaker_note(s1, "Welcome to the SUPRABIZ website content presentation. This deck covers all 6 key pages of the platform: Home, About Us, Services, Courses Academy, Our Work Portfolio, and Contact & Headquarters.")

# ==============================================================================
# SLIDE 2: Executive Overview & Brand Pillars
# ==============================================================================
s2 = prs.slides.add_slide(blank_layout)
set_bg(s2, LIGHT_BG)
add_header(s2, "EXECUTIVE SUMMARY", "Agency Overview & Strategic Positioning", "Who SUPRABIZ is and how we deliver sustainable, scalable growth for modern brands.")

# Left Column: Mission & Positioning Card
add_card(s2, 0.8, 1.8, 5.7, 5.0)
l_box = s2.shapes.add_textbox(Inches(1.1), Inches(2.1), Inches(5.1), Inches(4.4))
ltf = l_box.text_frame
ltf.word_wrap = True

p = ltf.paragraphs[0]
p.text = "CORE POSITIONING"
p.font.size = Pt(11)
p.font.bold = True
p.font.color.rgb = EMERALD

p = ltf.add_paragraph()
p.text = "We Don't Just Market Brands. We Build Them to Matter."
p.font.size = Pt(20)
p.font.bold = True
p.font.color.rgb = TEXT_DARK
p.space_before = Pt(6)

p = ltf.add_paragraph()
p.text = "\nSUPRABIZ is a multi-disciplinary growth agency and digital academy headquartered in Ahmedabad. We bridge the gap between creative storytelling, technical web performance, and aggressive paid acquisition.\n\nFrom disruptive brand positioning to high-converting performance campaigns and enterprise web development, we partner with founders to drive compound business equity."
p.font.size = Pt(13)
p.font.color.rgb = TEXT_MUTED

# Right Column: 4 Stat Cards
stats = [
    ("150+", "Brands Scaled", "Across D2C, B2B SaaS, Real Estate, Healthcare & Retail"),
    ("₹25Cr+", "Ad Spend Managed", "Optimized across Google, Meta, LinkedIn & Programmatic"),
    ("4.9 / 5.0", "Client & Student Rating", "Consistently validated by founder reviews & testimonials"),
    ("98%", "Retention Rate", "Long-term client partnerships built on demonstrable ROI")
]

positions = [(6.8, 1.8), (9.9, 1.8), (6.8, 4.3), (9.9, 4.3)]
for (stat, label, detail), (cx, cy) in zip(stats, positions):
    add_card(s2, cx, cy, 2.8, 2.5)
    sbox = s2.shapes.add_textbox(Inches(cx + 0.2), Inches(cy + 0.3), Inches(2.4), Inches(2.0))
    stf = sbox.text_frame
    stf.word_wrap = True
    
    sp1 = stf.paragraphs[0]
    sp1.text = stat
    sp1.font.size = Pt(28)
    sp1.font.bold = True
    sp1.font.color.rgb = EMERALD
    
    sp2 = stf.add_paragraph()
    sp2.text = label
    sp2.font.size = Pt(13)
    sp2.font.bold = True
    sp2.font.color.rgb = TEXT_DARK
    sp2.space_before = Pt(4)
    
    sp3 = stf.add_paragraph()
    sp3.text = detail
    sp3.font.size = Pt(11)
    sp3.font.color.rgb = TEXT_MUTED
    sp3.space_before = Pt(4)

add_speaker_note(s2, "Executive summary highlighting Suprabiz's core philosophy and its track record: 150+ brands scaled, ₹25Cr+ ad spend managed, 4.9 client rating, and 98% retention.")

# ==============================================================================
# SLIDE 3: Page 1 — Home Page (Hero & Value Proposition)
# ==============================================================================
s3 = prs.slides.add_slide(blank_layout)
set_bg(s3, LIGHT_BG)
add_header(s3, "PAGE 1: HOME PAGE (PART 1)", "Home Page: Above-The-Fold Architecture", "High-impact conversion hero, top announcement banner, and instant trust proof.")

# Top Announcement Box
add_card(s3, 0.8, 1.7, 11.7, 0.65, bg_color=GOLD_LIGHT, border_color=GOLD)
abox = s3.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(11.3), Inches(0.5))
atf = abox.text_frame
atf.word_wrap = True
ap = atf.paragraphs[0]
ap.text = "⚡ ANNOUNCEMENT: Master In-Demand Digital Marketing Skills — Enroll in 2025/2026 Batch with 100% Placement Assistance"
ap.font.size = Pt(11.5)
ap.font.bold = True
ap.font.color.rgb = RGBColor(120, 80, 0)

# 3 Column Content Breakdown
cols = [
    ("HERO HEADLINE & COPY", "Transform Your Business With Intelligent Growth Marketing", [
        "Primary Hook: Unifying creative brand strategy with engineering-grade digital execution.",
        "Subtext: Scaling ambitious businesses through performance ads, high-converting web apps, and authority content.",
        "Primary CTAs: 'Book Free Strategy Call' and 'Explore Courses'.",
        "Visual: High-energy digital marketing operations and live metrics dashboard."
    ]),
    ("TRUST BAR & VALIDATION", "Instant Social Proof & Industry Breadth", [
        "Trusted By: Rapid-growth startups, D2C retail brands, B2B SaaS firms, and regional leaders.",
        "Multi-Industry Expertise: Proven playbooks across 12+ competitive industry verticals.",
        "Key Metrics Highlighted: ₹25Cr+ ad spend managed with continuous multi-touch attribution.",
        "Rating Proof: 4.9/5 star satisfaction from verified founders."
    ]),
    ("USER JOURNEY FUNNEL", "Seamless Navigation & Pathway Discovery", [
        "Dual Funnel Intent: Built for both Business Clients looking for agency scaling, and Learners seeking career transformation.",
        "Smart Header: Responsive mega menu with deep-links to 9 specialized course tracks and 6 core services.",
        "Sticky Action: Instant WhatsApp quick-chat & phone consultation direct dial."
    ])
]

col_lefts = [0.8, 4.8, 8.8]
for (tag, heading, points), cl in zip(cols, col_lefts):
    add_card(s3, cl, 2.6, 3.75, 4.2)
    cbox = s3.shapes.add_textbox(Inches(cl + 0.25), Inches(2.8), Inches(3.25), Inches(3.8))
    ctf = cbox.text_frame
    ctf.word_wrap = True
    
    cp1 = ctf.paragraphs[0]
    cp1.text = tag
    cp1.font.size = Pt(10)
    cp1.font.bold = True
    cp1.font.color.rgb = EMERALD
    
    cp2 = ctf.add_paragraph()
    cp2.text = heading
    cp2.font.size = Pt(14)
    cp2.font.bold = True
    cp2.font.color.rgb = TEXT_DARK
    cp2.space_before = Pt(4)
    
    for pt in points:
        cp_bullet = ctf.add_paragraph()
        cp_bullet.text = f"• {pt}"
        cp_bullet.font.size = Pt(11)
        cp_bullet.font.color.rgb = TEXT_MUTED
        cp_bullet.space_before = Pt(6)

add_speaker_note(s3, "The home page welcomes users with high-energy positioning, dynamic announcement bar, trust bar, and clear paths for both agency clients and academy students.")

# ==============================================================================
# SLIDE 4: Page 1 — Home Page (Sections & Growth Process)
# ==============================================================================
s4 = prs.slides.add_slide(blank_layout)
set_bg(s4, LIGHT_BG)
add_header(s4, "PAGE 1: HOME PAGE (PART 2)", "Home Page: Body Sections & The 4-Step Process", "Guiding visitors from initial awareness down to conversion through value demonstration.")

sections = [
    ("1. ABOUT TEASER", "Why Suprabiz Exists", "Introduces the agency's human-centered yet metrics-obsessed approach to sustainable scale."),
    ("2. SERVICES OVERVIEW", "6 Core Pillars", "Quick interactive grid previewing Branding, Social Media, SEO, Web Design, Performance & Digital."),
    ("3. ACADEMY SPOTLIGHT", "Real-World Upskilling", "Feature on practical cohorts, live client ad budgets, and 100% placement track record."),
    ("4. WHY CHOOSE US", "6 Agency Advantages", "Data-driven ROI, agile squad model, full-funnel strategy, transparent dashboards, fast execution.")
]

for idx, (sec_title, sec_sub, sec_desc) in enumerate(sections):
    top_pos = 1.8 + idx * 1.05
    add_card(s4, 0.8, top_pos, 5.6, 0.95)
    s_box = s4.shapes.add_textbox(Inches(1.0), Inches(top_pos + 0.1), Inches(5.2), Inches(0.8))
    stf = s_box.text_frame
    stf.word_wrap = True
    p1 = stf.paragraphs[0]
    p1.text = f"{sec_title} — {sec_sub}"
    p1.font.size = Pt(12)
    p1.font.bold = True
    p1.font.color.rgb = EMERALD
    p2 = stf.add_paragraph()
    p2.text = sec_desc
    p2.font.size = Pt(10.5)
    p2.font.color.rgb = TEXT_MUTED

# Right Side: The 4-Step Process
add_card(s4, 6.8, 1.8, 5.7, 4.95, bg_color=DARK_CARD, border_color=BORDER_DARK)
pbox = s4.shapes.add_textbox(Inches(7.1), Inches(2.0), Inches(5.1), Inches(4.5))
ptf = pbox.text_frame
ptf.word_wrap = True

pp1 = ptf.paragraphs[0]
pp1.text = "THE SUPRABIZ 4-STEP GROWTH FRAMEWORK"
pp1.font.size = Pt(11)
pp1.font.bold = True
pp1.font.color.rgb = GOLD

steps = [
    ("Step 01: Discovery & Audit", "Deep-dive into unit economics, competitors, ad history, and conversion bottlenecks."),
    ("Step 02: Strategy & Architecture", "Engineering bespoke brand voice, customer personas, funnel architecture, and media plan."),
    ("Step 03: Agile Execution & Launch", "Rapid deployment of creative variations, campaign setups, and high-speed web pages."),
    ("Step 04: Optimize, Retarget & Scale", "Rigorous A/B testing, ROAS scaling, retention funnels, and real-time weekly reporting.")
]

for title, desc in steps:
    p_step = ptf.add_paragraph()
    p_step.text = f"▶ {title}"
    p_step.font.size = Pt(12.5)
    p_step.font.bold = True
    p_step.font.color.rgb = TEXT_LIGHT
    p_step.space_before = Pt(8)
    
    p_desc = ptf.add_paragraph()
    p_desc.text = desc
    p_desc.font.size = Pt(11)
    p_desc.font.color.rgb = TEXT_LIGHT_MUTED
    p_desc.space_before = Pt(2)

add_speaker_note(s4, "The rest of the Home page walks users through the services, why choose us, student success, and the 4-step framework: Discovery, Strategy, Agile Execution, and Optimization.")

# ==============================================================================
# SLIDE 5: Page 2 — About Us (Story, Mission & Vision)
# ==============================================================================
s5 = prs.slides.add_slide(blank_layout)
set_bg(s5, LIGHT_BG)
add_header(s5, "PAGE 2: ABOUT US (PART 1)", "Brand Story, Mission, Vision & Credibility", "Unpacking Suprabiz's heritage, purpose, and commitment to client transformation.")

# Left Card: Brand Story
add_card(s5, 0.8, 1.8, 5.7, 5.0)
sbox = s5.shapes.add_textbox(Inches(1.1), Inches(2.1), Inches(5.1), Inches(4.4))
stf = sbox.text_frame
stf.word_wrap = True

p = stf.paragraphs[0]
p.text = "OUR STORY & PHILOSOPHY"
p.font.size = Pt(11)
p.font.bold = True
p.font.color.rgb = EMERALD

p = stf.add_paragraph()
p.text = "Built on Execution, Not Fluff"
p.font.size = Pt(20)
p.font.bold = True
p.font.color.rgb = TEXT_DARK
p.space_before = Pt(4)

p = stf.add_paragraph()
p.text = "\nSuprabiz was established to solve the recurring frustration modern founders experience with conventional agencies: endless vanity metrics, slow execution cycles, and disconnected service silos.\n\nWe organized our agency around multidisciplinary growth pods where designers, media buyers, software engineers, and brand strategists collaborate in real-time. The result is faster market entry, cohesive branding, and transparent revenue accountability."
p.font.size = Pt(12)
p.font.color.rgb = TEXT_MUTED

# Right Column: Mission & Vision Cards
add_card(s5, 6.8, 1.8, 5.7, 2.35)
mbox = s5.shapes.add_textbox(Inches(7.1), Inches(2.0), Inches(5.1), Inches(1.9))
mtf = mbox.text_frame
mtf.word_wrap = True

mp1 = mtf.paragraphs[0]
mp1.text = "OUR MISSION"
mp1.font.size = Pt(11)
mp1.font.bold = True
mp1.font.color.rgb = EMERALD

mp2 = mtf.add_paragraph()
mp2.text = "To empower modern enterprises with the strategic clarity, technical brilliance, and creative firepower required to outpace competitors and create enduring brand equity."
mp2.font.size = Pt(12.5)
mp2.font.color.rgb = TEXT_DARK
mp2.space_before = Pt(4)

add_card(s5, 6.8, 4.45, 5.7, 2.35)
vbox = s5.shapes.add_textbox(Inches(7.1), Inches(4.65), Inches(5.1), Inches(1.9))
vtf = vbox.text_frame
vtf.word_wrap = True

vp1 = vtf.paragraphs[0]
vp1.text = "OUR VISION"
vp1.font.size = Pt(11)
vp1.font.bold = True
vp1.font.color.rgb = GOLD
vp1.font.color.rgb = RGBColor(180, 130, 10)

vp2 = vtf.add_paragraph()
vp2.text = "To become India's premier integrated growth accelerator and learning ecosystem, shaping how tomorrow's category leaders communicate, scale, and build digital value."
vp2.font.size = Pt(12.5)
vp2.font.color.rgb = TEXT_DARK
vp2.space_before = Pt(4)

add_speaker_note(s5, "The About Us page details the company's genesis, the frustration with conventional agency vanity metrics, and sets forth our Mission and Vision.")

# ==============================================================================
# SLIDE 6: Page 2 — About Us (Core Values & The Suprabiz Method)
# ==============================================================================
s6 = prs.slides.add_slide(blank_layout)
set_bg(s6, LIGHT_BG)
add_header(s6, "PAGE 2: ABOUT US (PART 2)", "Core Values & The Suprabiz Difference", "How our foundational operating principles directly translate into better client outcomes.")

# 3 Column Values Grid
values = [
    ("01. Relentless Transparency", "No vanity metrics or disguised reporting. Every rupee spent and converted is tracked through transparent live dashboards."),
    ("02. Radical Accountability", "We treat your marketing budget with the same fiscal discipline and ownership as our own capital investment."),
    ("03. Design Craftsmanship", "Aesthetic excellence is non-negotiable. We create visual identities that command respect and elevate customer trust."),
    ("04. Relentless Innovation", "Continuous mastery of cutting-edge AI marketing workflows, algorithmic shifts, and next-generation ad channels."),
    ("05. True Growth Partnership", "We don't act as detached vendors. We embed directly as your dedicated, executive-level growth squad."),
    ("06. Rapid Cycle Speed", "Agile sprint cycles eliminate bureaucratic friction, letting us test, iterate, and scale campaigns in days, not months.")
]

coords = [
    (0.8, 1.8), (4.8, 1.8), (8.8, 1.8),
    (0.8, 4.3), (4.8, 4.3), (8.8, 4.3)
]

for (val_title, val_desc), (vx, vy) in zip(values, coords):
    add_card(s6, vx, vy, 3.75, 2.3)
    vbox = s6.shapes.add_textbox(Inches(vx + 0.2), Inches(vy + 0.2), Inches(3.35), Inches(1.9))
    vtf = vbox.text_frame
    vtf.word_wrap = True
    
    vp1 = vtf.paragraphs[0]
    vp1.text = val_title
    vp1.font.size = Pt(12.5)
    vp1.font.bold = True
    vp1.font.color.rgb = EMERALD
    
    vp2 = vtf.add_paragraph()
    vp2.text = val_desc
    vp2.font.size = Pt(11)
    vp2.font.color.rgb = TEXT_MUTED
    vp2.space_before = Pt(4)

add_speaker_note(s6, "Suprabiz's 6 core values define how we operate: Relentless Transparency, Radical Accountability, Craftsmanship, Innovation, Partnership, and Rapid Cycle Speed.")

# ==============================================================================
# SLIDE 7: Page 3 — Services Overview (The 6 Pillars)
# ==============================================================================
s7 = prs.slides.add_slide(blank_layout)
set_bg(s7, DARK_BG)
add_header(s7, "PAGE 3: SERVICES (OVERVIEW)", "The 6 Core Agency Service Pillars", "Full-spectrum digital capabilities engineered to handle brand creation through revenue scaling.", is_dark=True)

service_pillars = [
    ("01. BRANDING", "Brand Strategy & Visual Identity", "Logos, brand guidelines, typography, voice, positioning & physical packaging.", EMERALD),
    ("02. SOCIAL MEDIA", "Organic & Paid Social Growth", "Reels, content systems, viral storytelling, influencer partnerships & community.", GOLD),
    ("03. SEARCH (SEO)", "Search Engine Optimization", "Technical audits, on-page optimization, intent-based keywords & domain authority.", EMERALD),
    ("04. WEB DESIGN", "High-Performance Web & Apps", "Figma UI/UX design, custom React/Next.js engineering, fast speed & mobile UX.", GOLD),
    ("05. PERFORMANCE", "Paid Media & Funnels", "High-converting Google Search/Display, Meta ads, LinkedIn B2B & ROAS scaling.", EMERALD),
    ("06. DIGITAL ECOSYSTEM", "Integrated Full-Funnel Marketing", "Omnichannel launch, email automation, CRM retention & cross-platform analytics.", GOLD),
]

s_coords = [
    (0.8, 1.8), (4.8, 1.8), (8.8, 1.8),
    (0.8, 4.3), (4.8, 4.3), (8.8, 4.3)
]

for (num_title, main_title, desc, accent_col), (sx, sy) in zip(service_pillars, s_coords):
    add_card(s7, sx, sy, 3.75, 2.3, bg_color=DARK_CARD, border_color=BORDER_DARK)
    sbox = s7.shapes.add_textbox(Inches(sx + 0.25), Inches(sy + 0.2), Inches(3.25), Inches(1.9))
    stf = sbox.text_frame
    stf.word_wrap = True
    
    p1 = stf.paragraphs[0]
    p1.text = num_title
    p1.font.size = Pt(11)
    p1.font.bold = True
    p1.font.color.rgb = accent_col
    
    p2 = stf.add_paragraph()
    p2.text = main_title
    p2.font.size = Pt(14)
    p2.font.bold = True
    p2.font.color.rgb = TEXT_LIGHT
    p2.space_before = Pt(4)
    
    p3 = stf.add_paragraph()
    p3.text = desc
    p3.font.size = Pt(11)
    p3.font.color.rgb = TEXT_LIGHT_MUTED
    p3.space_before = Pt(4)

add_speaker_note(s7, "Suprabiz's 6 core service pillars cover the full lifecycle: Brand Identity, Social Media Marketing, SEO, Web Design, Performance Marketing, and Integrated Digital Ecosystem.")

# ==============================================================================
# SLIDE 8: Page 3 — Services Deep Dive (Branding & Social Media)
# ==============================================================================
s8 = prs.slides.add_slide(blank_layout)
set_bg(s8, LIGHT_BG)
add_header(s8, "PAGE 3: SERVICES (DEEP DIVE 1)", "Service 01: Branding & Service 02: Social Media", "Detailed scopes, deliverables, and business impact for creative services.")

# Left Card: Branding
add_card(s8, 0.8, 1.8, 5.7, 5.0)
bbox = s8.shapes.add_textbox(Inches(1.1), Inches(2.0), Inches(5.1), Inches(4.5))
btf = bbox.text_frame
btf.word_wrap = True

bp1 = btf.paragraphs[0]
bp1.text = "SERVICE 01 • BRANDING & STRATEGY"
bp1.font.size = Pt(11)
bp1.font.bold = True
bp1.font.color.rgb = EMERALD

bp2 = btf.add_paragraph()
bp2.text = "Building Distinctive Brand Moats"
bp2.font.size = Pt(18)
bp2.font.bold = True
bp2.font.color.rgb = TEXT_DARK
bp2.space_before = Pt(4)

b_points = [
    "Brand Positioning: Defining your unique market whitespace and competitive value proposition.",
    "Visual Identity Systems: Primary & secondary logos, responsive emblems, typography rules & color palettes.",
    "Comprehensive Brand Guidelines: 40+ page documentation ensuring total team and vendor consistency.",
    "Collateral & Packaging: Premium physical packaging, marketing decks, business stationery & environmental signage."
]
for pt in b_points:
    p = btf.add_paragraph()
    p.text = f"• {pt}"
    p.font.size = Pt(11)
    p.font.color.rgb = TEXT_MUTED
    p.space_before = Pt(6)

# Right Card: Social Media
add_card(s8, 6.8, 1.8, 5.7, 5.0)
sbox = s8.shapes.add_textbox(Inches(7.1), Inches(2.0), Inches(5.1), Inches(4.5))
stf = sbox.text_frame
stf.word_wrap = True

sp1 = stf.paragraphs[0]
sp1.text = "SERVICE 02 • SOCIAL MEDIA MARKETING"
sp1.font.size = Pt(11)
sp1.font.bold = True
sp1.font.color.rgb = EMERALD

sp2 = stf.add_paragraph()
sp2.text = "Attention That Converts into Loyalty"
sp2.font.size = Pt(18)
sp2.font.bold = True
sp2.font.color.rgb = TEXT_DARK
sp2.space_before = Pt(4)

s_points = [
    "Platform Strategy: Bespoke channel strategy tailored for Instagram, LinkedIn, YouTube, and X.",
    "Reels & Short-Form Video: Scripting, editing, and motion design engineered for algorithm traction.",
    "Community Management: Daily engagement, proactive conversation starting, and customer sentiment nurturing.",
    "Influencer & Creator Collaborations: Targeted micro-influencer outreach with high relevance and measurable ROI."
]
for pt in s_points:
    p = stf.add_paragraph()
    p.text = f"• {pt}"
    p.font.size = Pt(11)
    p.font.color.rgb = TEXT_MUTED
    p.space_before = Pt(6)

add_speaker_note(s8, "Deep dive into Branding and Social Media services, outlining the core deliverables: from 40+ page brand books to viral reel architectures and influencer campaigns.")

# ==============================================================================
# SLIDE 9: Page 3 — Services Deep Dive (SEO & Web Design)
# ==============================================================================
s9 = prs.slides.add_slide(blank_layout)
set_bg(s9, LIGHT_BG)
add_header(s9, "PAGE 3: SERVICES (DEEP DIVE 2)", "Service 03: SEO & Service 04: Web Design", "Capturing organic search intent and converting traffic through world-class digital experiences.")

# Left Card: SEO
add_card(s9, 0.8, 1.8, 5.7, 5.0)
seobox = s9.shapes.add_textbox(Inches(1.1), Inches(2.0), Inches(5.1), Inches(4.5))
seotf = seobox.text_frame
seotf.word_wrap = True

seop1 = seotf.paragraphs[0]
seop1.text = "SERVICE 03 • SEARCH ENGINE OPTIMIZATION"
seop1.font.size = Pt(11)
seop1.font.bold = True
seop1.font.color.rgb = EMERALD

seop2 = seotf.add_paragraph()
seop2.text = "Dominating High-Intent Search"
seop2.font.size = Pt(18)
seop2.font.bold = True
seop2.font.color.rgb = TEXT_DARK
seop2.space_before = Pt(4)

seo_points = [
    "Technical SEO Audits: Core Web Vitals optimization, crawl budget efficiency, schema markup & site architecture.",
    "Commercial Keyword Strategy: Targeting high-intent transactional search queries that drive qualified sales pipelines.",
    "On-Page & Content Optimization: Topic clustering, semantic SEO, and conversion-aligned copy.",
    "Digital PR & Link Authority: High-quality white-hat backlink acquisition from recognized industry publications."
]
for pt in seo_points:
    p = seotf.add_paragraph()
    p.text = f"• {pt}"
    p.font.size = Pt(11)
    p.font.color.rgb = TEXT_MUTED
    p.space_before = Pt(6)

# Right Card: Web Design
add_card(s9, 6.8, 1.8, 5.7, 5.0)
wbox = s9.shapes.add_textbox(Inches(7.1), Inches(2.0), Inches(5.1), Inches(4.5))
wtf = wbox.text_frame
wtf.word_wrap = True

wp1 = wtf.paragraphs[0]
wp1.text = "SERVICE 04 • WEB DESIGN & ENGINEERING"
wp1.font.size = Pt(11)
wp1.font.bold = True
wp1.font.color.rgb = EMERALD

wp2 = wtf.add_paragraph()
wp2.text = "Engineered for 10x Conversions"
wp2.font.size = Pt(18)
wp2.font.bold = True
wp2.font.color.rgb = TEXT_DARK
wp2.space_before = Pt(4)

w_points = [
    "Custom Figma UI/UX Design: User research, wireframes, and interactive high-fidelity prototypes.",
    "Modern Tech Stack: Blazing-fast React, Next.js, and Tailwind CSS applications with sub-second page loads.",
    "Conversion Rate Optimization (CRO): Strategic visual hierarchy, heatmaps, clear CTAs, and frictionless checkout/lead funnels.",
    "Flawless Responsiveness: Pixel-perfect viewing experiences optimized for smartphones, tablets, and ultra-wide desktops."
]
for pt in w_points:
    p = wtf.add_paragraph()
    p.text = f"• {pt}"
    p.font.size = Pt(11)
    p.font.color.rgb = TEXT_MUTED
    p.space_before = Pt(6)

add_speaker_note(s9, "Deep dive into SEO and Web Design. SEO focuses on intent-based rankings and technical health, while Web Design builds lightning-fast React/Next.js digital platforms optimized for conversions.")

# ==============================================================================
# SLIDE 10: Page 3 — Services Deep Dive (Performance & Digital Ecosystem)
# ==============================================================================
s10 = prs.slides.add_slide(blank_layout)
set_bg(s10, LIGHT_BG)
add_header(s10, "PAGE 3: SERVICES (DEEP DIVE 3)", "Service 05: Performance & Service 06: Digital Marketing", "Paid media scaling and full-funnel customer acquisition ecosystems.")

# Left Card: Performance Marketing
add_card(s10, 0.8, 1.8, 5.7, 5.0)
pbox = s10.shapes.add_textbox(Inches(1.1), Inches(2.0), Inches(5.1), Inches(4.5))
ptf = pbox.text_frame
ptf.word_wrap = True

pp1 = ptf.paragraphs[0]
pp1.text = "SERVICE 05 • PERFORMANCE MARKETING"
pp1.font.size = Pt(11)
pp1.font.bold = True
pp1.font.color.rgb = EMERALD

pp2 = ptf.add_paragraph()
pp2.text = "Predictable Paid Customer Acquisition"
pp2.font.size = Pt(18)
pp2.font.bold = True
pp2.font.color.rgb = TEXT_DARK
pp2.space_before = Pt(4)

p_points = [
    "Google Ads (Search, Display, PMax): Capturing intent-rich searches with rigorous negative keyword discipline.",
    "Meta Ads (FB & Instagram): Creative-led audience testing, dynamic product ads, and scaling lookalikes.",
    "LinkedIn B2B Advertising: Account-based marketing (ABM) targeting C-suite executives and procurement leads.",
    "Attribution & Unit Economics: CAC, LTV, ROAS, and cohort modeling to ensure every ad dollar returns profit."
]
for pt in p_points:
    p = ptf.add_paragraph()
    p.text = f"• {pt}"
    p.font.size = Pt(11)
    p.font.color.rgb = TEXT_MUTED
    p.space_before = Pt(6)

# Right Card: Integrated Digital Marketing
add_card(s10, 6.8, 1.8, 5.7, 5.0)
dbox = s10.shapes.add_textbox(Inches(7.1), Inches(2.0), Inches(5.1), Inches(4.5))
dtf = dbox.text_frame
dtf.word_wrap = True

dp1 = dtf.paragraphs[0]
dp1.text = "SERVICE 06 • FULL DIGITAL ECOSYSTEM"
dp1.font.size = Pt(11)
dp1.font.bold = True
dp1.font.color.rgb = EMERALD

dp2 = dtf.add_paragraph()
dp2.text = "Omnichannel Synergies & Retention"
dp2.font.size = Pt(18)
dp2.font.bold = True
dp2.font.color.rgb = TEXT_DARK
dp2.space_before = Pt(4)

d_points = [
    "Full-Funnel Orchestration: Unifying top-of-funnel awareness with middle retargeting and bottom-funnel conversion.",
    "Email & WhatsApp Marketing Automation: Klaviyo / WhatsApp workflows for abandoned carts, re-orders, and nurturing.",
    "CRM & Lead Pipeline Management: Instant sync with HubSpot, Zoho, or Salesforce for immediate sales team follow-up.",
    "Unified Growth Reporting: Cross-channel dashboards built in Looker Studio providing a single source of truth."
]
for pt in d_points:
    p = dtf.add_paragraph()
    p.text = f"• {pt}"
    p.font.size = Pt(11)
    p.font.color.rgb = TEXT_MUTED
    p.space_before = Pt(6)

add_speaker_note(s10, "Explaining Performance Marketing and Integrated Digital Marketing: handling multi-channel paid acquisition with strict unit economics, paired with retention engines (Email, WhatsApp, CRM).")

# ==============================================================================
# SLIDE 11: Page 4 — Academy / Courses (Overview & Value Prop)
# ==============================================================================
s11 = prs.slides.add_slide(blank_layout)
set_bg(s11, LIGHT_BG)
add_header(s11, "PAGE 4: COURSES & ACADEMY (PART 1)", "SUPRABIZ Academy: Learn Real-World Digital Skills", "Bridging the gap between academic theory and agency-grade campaign execution.")

# Left Overview Card
add_card(s11, 0.8, 1.8, 5.7, 5.0)
abox = s11.shapes.add_textbox(Inches(1.1), Inches(2.0), Inches(5.1), Inches(4.5))
atf = abox.text_frame
atf.word_wrap = True

ap1 = atf.paragraphs[0]
ap1.text = "THE ACADEMY PROMISE"
ap1.font.size = Pt(11)
ap1.font.bold = True
ap1.font.color.rgb = EMERALD

ap2 = atf.add_paragraph()
ap2.text = "Taught by Active Agency Practitioners"
ap2.font.size = Pt(18)
ap2.font.bold = True
ap2.font.color.rgb = TEXT_DARK
ap2.space_before = Pt(4)

ap3 = atf.add_paragraph()
ap3.text = "\nUnlike theoretical classroom courses, SUPRABIZ Academy trains learners on live campaign accounts with real marketing budgets. Our curriculum is constantly updated to reflect current algorithms, AI tools, and conversion strategies.\n\nWhether you are a student launching your career, a working professional upskilling, or a business owner managing your own marketing, our cohorts provide practical, job-ready competence."
ap3.font.size = Pt(12)
ap3.font.color.rgb = TEXT_MUTED

# Right Column: 4 Key Pillars
pillars = [
    ("Real Ad Budgets", "Students manage actual live ad spends on Meta and Google, not simulated mock environments."),
    ("1-on-1 Expert Mentorship", "Direct weekly code and campaign reviews with senior agency strategists and media buyers."),
    ("100% Placement Assistance", "Dedicated career cell providing portfolio reviews, interview prep, and corporate introductions."),
    ("Industry-Recognized Certifications", "Official certifications validating hands-on competence across search, social, and data analytics.")
]

for idx, (p_title, p_desc) in enumerate(pillars):
    top_pos = 1.8 + idx * 1.25
    add_card(s11, 6.8, top_pos, 5.7, 1.15)
    p_box = s11.shapes.add_textbox(Inches(7.1), Inches(top_pos + 0.15), Inches(5.2), Inches(0.9))
    ptf = p_box.text_frame
    ptf.word_wrap = True
    
    pp1 = ptf.paragraphs[0]
    pp1.text = f"✔  {p_title}"
    pp1.font.size = Pt(12.5)
    pp1.font.bold = True
    pp1.font.color.rgb = EMERALD
    
    pp2 = ptf.add_paragraph()
    pp2.text = p_desc
    pp2.font.size = Pt(11)
    pp2.font.color.rgb = TEXT_MUTED
    pp2.space_before = Pt(2)

add_speaker_note(s11, "Suprabiz Academy overview: why learn with us, active practitioner instructors, live ad budgets, 1-on-1 mentorship, and 100% placement support.")

# ==============================================================================
# SLIDE 12: Page 4 — Academy / Courses (The 9 Course Curriculums)
# ==============================================================================
s12 = prs.slides.add_slide(blank_layout)
set_bg(s12, LIGHT_BG)
add_header(s12, "PAGE 4: COURSES & ACADEMY (PART 2)", "The 9 Specialized Course Curriculums", "Structured across 3 key disciplines: Social Media, Search & Ads, and Data Analytics.")

# 3 Category Columns
cat_data = [
    ("CATEGORY 1: SOCIAL MEDIA", EMERALD, [
        ("01. Social Media Marketing", "Platform strategy, content calendars, community building"),
        ("02. Instagram Marketing", "Reels mastery, visual storytelling, algorithmic reach"),
        ("03. Facebook Marketing", "Campaign architecture, audience targeting, ad creatives"),
        ("04. LinkedIn Marketing", "B2B lead generation, personal branding, thought leadership")
    ]),
    ("CATEGORY 2: SEARCH & ADS", GOLD, [
        ("05. SEO Specialist", "Keyword research, technical SEO, on-page optimization"),
        ("06. Google Ads", "Search campaigns, keywords, ad copy, Quality Score"),
        ("07. Performance Marketing", "Paid funnels, A/B testing, CRO, ROAS optimization")
    ]),
    ("CATEGORY 3: DATA & ANALYTICS", EMERALD, [
        ("08. Google Analytics (GA4)", "Traffic analysis, user behavior, custom event tracking"),
        ("09. Digital Marketing & Analytics", "Cross-channel reporting, data-driven decision making"),
        ("Learning Journey Framework", "Theory -> Live Campaign Lab -> Portfolio Project -> Placement")
    ])
]

cat_lefts = [0.8, 4.8, 8.8]
for (cat_name, header_col, items), cl in zip(cat_data, cat_lefts):
    add_card(s12, cl, 1.8, 3.75, 5.0)
    cbox = s12.shapes.add_textbox(Inches(cl + 0.2), Inches(2.0), Inches(3.35), Inches(4.5))
    ctf = cbox.text_frame
    ctf.word_wrap = True
    
    cp1 = ctf.paragraphs[0]
    cp1.text = cat_name
    cp1.font.size = Pt(11)
    cp1.font.bold = True
    cp1.font.color.rgb = header_col if header_col != GOLD else RGBColor(180, 130, 10)
    
    for c_title, c_desc in items:
        p_t = ctf.add_paragraph()
        p_t.text = c_title
        p_t.font.size = Pt(12)
        p_t.font.bold = True
        p_t.font.color.rgb = TEXT_DARK
        p_t.space_before = Pt(8)
        
        p_d = ctf.add_paragraph()
        p_d.text = c_desc
        p_d.font.size = Pt(10)
        p_d.font.color.rgb = TEXT_MUTED
        p_d.space_before = Pt(1)

add_speaker_note(s12, "Detailed catalog of all 9 courses across Social Media, Search & Ads, and Data Analytics, along with the student learning path.")

# ==============================================================================
# SLIDE 13: Page 5 — Our Work / Portfolio (Featured Case Study & Grid)
# ==============================================================================
s13 = prs.slides.add_slide(blank_layout)
set_bg(s13, LIGHT_BG)
add_header(s13, "PAGE 5: OUR WORK & PORTFOLIO (PART 1)", "Client Successes & Measurable Impact", "Demonstrating commercial outcomes across diverse industries and digital touchpoints.")

# Left Card: Featured Project
add_card(s13, 0.8, 1.8, 5.7, 5.0)
fpbox = s13.shapes.add_textbox(Inches(1.1), Inches(2.0), Inches(5.1), Inches(4.5))
fptf = fpbox.text_frame
fptf.word_wrap = True

fpp1 = fptf.paragraphs[0]
fpp1.text = "FEATURED CASE STUDY 01 • BRANDING + DIGITAL"
fpp1.font.size = Pt(11)
fpp1.font.bold = True
fpp1.font.color.rgb = EMERALD

fpp2 = fptf.add_paragraph()
fpp2.text = "Brand Identity & Digital Launch System"
fpp2.font.size = Pt(18)
fpp2.font.bold = True
fpp2.font.color.rgb = TEXT_DARK
fpp2.space_before = Pt(4)

fpp3 = fptf.add_paragraph()
fpp3.text = "\nA complete visual identity re-architecture and multi-channel launch system built around brand clarity, visual distinction, and commercial scalability."
fpp3.font.size = Pt(12)
fpp3.font.color.rgb = TEXT_MUTED

f_stats = [
    ("340% Growth", "In digital direct customer inquiries within first 90 days of rollout."),
    ("4.2x ROAS", "Delivered on primary performance campaigns post-redesign."),
    ("Scope Delivered", "Complete identity system, responsive design system, and multi-format advertising collateral.")
]

for s_label, s_desc in f_stats:
    p = fptf.add_paragraph()
    p.text = f"★ {s_label}: {s_desc}"
    p.font.size = Pt(11)
    p.font.color.rgb = TEXT_DARK
    p.space_before = Pt(6)

# Right Side: 6 Project Portfolio Grid
proj_items = [
    ("Project 01: Brand Identity System", "Visual identity & guidelines for long-term category recognition."),
    ("Project 02: Social Campaign Direction", "Motion & short-form video systems driving viral engagement."),
    ("Project 03: Conversion-Focused Web", "Responsive UX/UI architecture with sub-second page load times."),
    ("Project 04: Performance Creative Funnels", "High-intent ad variations aligned with commercial search volume."),
    ("Project 05: Digital Launch System", "Omnichannel launch linking search, paid ads, and lead capture."),
    ("Project 06: Content & Visual Strategy", "Sustainable publishing engine maintaining aesthetic coherence.")
]

coords_r = [
    (6.8, 1.8), (9.9, 1.8),
    (6.8, 3.45), (9.9, 3.45),
    (6.8, 5.1), (9.9, 5.1)
]

for (p_title, p_desc), (px, py) in zip(proj_items, coords_r):
    add_card(s13, px, py, 2.8, 1.55)
    p_box = s13.shapes.add_textbox(Inches(px + 0.15), Inches(py + 0.15), Inches(2.5), Inches(1.3))
    ptf = p_box.text_frame
    ptf.word_wrap = True
    
    p1 = ptf.paragraphs[0]
    p1.text = p_title
    p1.font.size = Pt(11)
    p1.font.bold = True
    p1.font.color.rgb = EMERALD
    
    p2 = ptf.add_paragraph()
    p2.text = p_desc
    p2.font.size = Pt(9.5)
    p2.font.color.rgb = TEXT_MUTED
    p2.space_before = Pt(2)

add_speaker_note(s13, "Showcases our work portfolio: Featured Brand Identity & Digital Launch case study with 340% inquiry increase and 4.2x ROAS, followed by the 6 selected portfolio projects.")

# ==============================================================================
# SLIDE 14: Page 5 — Our Work (Creative Process & Capabilities)
# ==============================================================================
s14 = prs.slides.add_slide(blank_layout)
set_bg(s14, LIGHT_BG)
add_header(s14, "PAGE 5: OUR WORK & PORTFOLIO (PART 2)", "How We Deliver & Capabilities in Action", "The operational discipline that turns creative ideas into commercial leverage.")

# 4 Horizontal Process Cards
phases = [
    ("PHASE 01: DIAGNOSE", "Commercial & Brand Audit", "Auditing the brand landscape, customer friction points, and competitor blind spots before designing a single pixel."),
    ("PHASE 02: ARCHITECT", "Strategic Blueprint", "Defining visual tone, value proposition, technical stack, messaging matrix, and target ROAS benchmarks."),
    ("PHASE 03: DEPLOY", "Agile Production", "Rapid sprint cycles producing high-fidelity web pages, creative ad variations, and organic social collateral."),
    ("PHASE 04: SCALE", "Data-Driven Refinement", "Continuous live testing, budget re-allocation to winning angles, and iterative funnel optimization.")
]

for idx, (p_tag, p_head, p_body) in enumerate(phases):
    col_x = 0.8 + idx * 2.95
    add_card(s14, col_x, 1.8, 2.8, 2.45)
    cbox = s14.shapes.add_textbox(Inches(col_x + 0.2), Inches(2.0), Inches(2.4), Inches(2.1))
    ctf = cbox.text_frame
    ctf.word_wrap = True
    
    cp1 = ctf.paragraphs[0]
    cp1.text = p_tag
    cp1.font.size = Pt(10)
    cp1.font.bold = True
    cp1.font.color.rgb = EMERALD
    
    cp2 = ctf.add_paragraph()
    cp2.text = p_head
    cp2.font.size = Pt(12)
    cp2.font.bold = True
    cp2.font.color.rgb = TEXT_DARK
    cp2.space_before = Pt(4)
    
    cp3 = ctf.add_paragraph()
    cp3.text = p_body
    cp3.font.size = Pt(10)
    cp3.font.color.rgb = TEXT_MUTED
    cp3.space_before = Pt(4)

# Bottom Card: Capabilities in Action
add_card(s14, 0.8, 4.45, 11.7, 2.35, bg_color=DARK_CARD, border_color=BORDER_DARK)
bbox = s14.shapes.add_textbox(Inches(1.1), Inches(4.65), Inches(11.1), Inches(1.9))
btf = bbox.text_frame
btf.word_wrap = True

bp1 = btf.paragraphs[0]
bp1.text = "CROSS-FUNCTIONAL CAPABILITIES IN ACTION"
bp1.font.size = Pt(11)
bp1.font.bold = True
bp1.font.color.rgb = GOLD

bp2 = btf.add_paragraph()
bp2.text = "Full-Spectrum Delivery: From Identity Guidelines to High-Traffic Web Infrastructure"
bp2.font.size = Pt(15)
bp2.font.bold = True
bp2.font.color.rgb = TEXT_LIGHT
bp2.space_before = Pt(3)

bp3 = btf.add_paragraph()
bp3.text = "• Brand Systems: High-res vector guidelines, corporate stationery, and packaging mechanicals ready for production.\n• Full-Stack Web Development: Responsive React/Next.js platforms with automated CI/CD deployment pipelines.\n• Media Buying & Creative Engine: High-performing video hooks, static carousels, and landing pages tested in weekly cohorts."
bp3.font.size = Pt(11.5)
bp3.font.color.rgb = TEXT_LIGHT_MUTED
bp3.space_before = Pt(6)

add_speaker_note(s14, "Walkthrough of our creative process: Phase 1 Diagnose, Phase 2 Architect, Phase 3 Deploy, and Phase 4 Scale, supported by cross-functional capability integration.")

# ==============================================================================
# SLIDE 15: Page 6 — Contact Page (Channels, Inquiries & Location)
# ==============================================================================
s15 = prs.slides.add_slide(blank_layout)
set_bg(s15, LIGHT_BG)
add_header(s15, "PAGE 6: CONTACT & STUDIO", "Direct Channels, Project Inquiries & Studio HQ", "Providing frictionless connection pathways for new client briefs and student enrollments.")

# 3 Contact Columns
c_cards = [
    ("EMAIL US DIRECTLY", "sales@suprabiz.co.in", "Send RFPs, project briefs, or general questions. Every email receives a thoughtful strategic response within 1 business day.", "✉ Written Briefs"),
    ("CALL & WHATSAPP", "Sales: +91 93130 09073\nAdmin: +91 89804 44498", "Available Monday to Saturday, 9:30 AM – 6:30 PM IST. Instant WhatsApp consultation for urgent project evaluations.", "✆ Phone / WhatsApp"),
    ("STUDIO HEADQUARTERS", "Titanium Business Park, Makarba", "C-1210, Titanium Business Park, Makarba, Ahmedabad, Gujarat 380015.\nVisits welcome by prior appointment.", "⌖ Ahmedabad Studio")
]

for idx, (head, primary, desc, badge) in enumerate(c_cards):
    cx = 0.8 + idx * 3.95
    add_card(s15, cx, 1.8, 3.8, 3.1)
    box = s15.shapes.add_textbox(Inches(cx + 0.2), Inches(2.0), Inches(3.4), Inches(2.7))
    tf = box.text_frame
    tf.word_wrap = True
    
    p1 = tf.paragraphs[0]
    p1.text = head
    p1.font.size = Pt(10)
    p1.font.bold = True
    p1.font.color.rgb = EMERALD
    
    p2 = tf.add_paragraph()
    p2.text = primary
    p2.font.size = Pt(13)
    p2.font.bold = True
    p2.font.color.rgb = TEXT_DARK
    p2.space_before = Pt(4)
    
    p3 = tf.add_paragraph()
    p3.text = desc
    p3.font.size = Pt(10.5)
    p3.font.color.rgb = TEXT_MUTED
    p3.space_before = Pt(4)

# Bottom Row: Interactive Form & Onboarding Steps
add_card(s15, 0.8, 5.05, 11.7, 1.85, bg_color=EMERALD_LIGHT, border_color=EMERALD)
ibox = s15.shapes.add_textbox(Inches(1.1), Inches(5.2), Inches(11.1), Inches(1.5))
itf = ibox.text_frame
itf.word_wrap = True

ip1 = itf.paragraphs[0]
ip1.text = "INTERACTIVE ONBOARDING FUNNEL & FAQ"
ip1.font.size = Pt(11)
ip1.font.bold = True
ip1.font.color.rgb = EMERALD

ip2 = itf.add_paragraph()
ip2.text = "Multi-Step Project Scope Selection & Rapid Proposal Delivery"
ip2.font.size = Pt(14)
ip2.font.bold = True
ip2.font.color.rgb = TEXT_DARK
ip2.space_before = Pt(2)

ip3 = itf.add_paragraph()
ip3.text = "• Flexible Scope Customization: Clients select specific requirements (Branding, Web, Performance Ads, Courses, or Full Digital Suite).\n• Clear Turnaround SLA: Initial discovery call scheduled within 24 hours; tailored proposal and roadmap delivered within 3 business days.\n• Studio Location & Directions: Direct Google Maps link for seamless in-person visits at Titanium Business Park, Ahmedabad."
ip3.font.size = Pt(11)
ip3.font.color.rgb = TEXT_DARK
ip3.space_before = Pt(4)

add_speaker_note(s15, "The Contact Page breakdown: Direct sales email (sales@suprabiz.co.in), direct phones (+91 93130 09073 and +91 89804 44498), physical headquarters in Ahmedabad, and our 24-hour response SLA.")

# ==============================================================================
# SLIDE 16: Closing & Call to Action
# ==============================================================================
s16 = prs.slides.add_slide(blank_layout)
set_bg(s16, DARK_BG)

# Accent Bottom Line
bot_bar = s16.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, Inches(7.38), Inches(13.333), Inches(0.12))
bot_bar.fill.solid()
bot_bar.fill.fore_color.rgb = GOLD
bot_bar.line.fill.background()

# Center Card
add_card(s16, 1.8, 1.2, 9.7, 5.0, bg_color=DARK_CARD, border_color=BORDER_DARK)
cbox = s16.shapes.add_textbox(Inches(2.2), Inches(1.5), Inches(8.9), Inches(4.4))
ctf = cbox.text_frame
ctf.word_wrap = True

cp1 = ctf.paragraphs[0]
cp1.text = "READY TO BUILD SOMETHING EXCEPTIONAL?"
cp1.font.size = Pt(12)
cp1.font.bold = True
cp1.font.color.rgb = GOLD
cp1.alignment = PP_ALIGN.CENTER

cp2 = ctf.add_paragraph()
cp2.text = "Let's Scale Your Brand Together"
cp2.font.size = Pt(30)
cp2.font.bold = True
cp2.font.color.rgb = TEXT_LIGHT
cp2.alignment = PP_ALIGN.CENTER
cp2.space_before = Pt(4)

cp3 = ctf.add_paragraph()
cp3.text = "Whether you are looking to revitalize your brand identity, launch high-ROAS performance campaigns, engineer a cutting-edge web application, or upskill your team at the Academy — SUPRABIZ is your dedicated growth partner."
cp3.font.size = Pt(13)
cp3.font.color.rgb = TEXT_LIGHT_MUTED
cp3.alignment = PP_ALIGN.CENTER
cp3.space_before = Pt(10)

cp4 = ctf.add_paragraph()
cp4.text = "\nSales Inquiries: sales@suprabiz.co.in   |   Direct Phone: +91 93130 09073\nStudio: C-1210, Titanium Business Park, Makarba, Ahmedabad, Gujarat 380015\nWebsite: suprabiz.co.in"
cp4.font.size = Pt(12.5)
cp4.font.bold = True
cp4.font.color.rgb = GOLD
cp4.alignment = PP_ALIGN.CENTER
cp4.space_before = Pt(14)

add_speaker_note(s16, "Closing slide with clear next steps, call to action, and all official channels to begin a project engagement or course enrollment.")

# ─── Save Presentation ────────────────────────────────────────────────────────
output_path = "Suprabiz_Complete_Website_Presentation.pptx"
prs.save(output_path)
print(f"Presentation saved successfully to: {os.path.abspath(output_path)}")
