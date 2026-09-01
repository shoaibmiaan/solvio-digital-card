README.md — Add this to your repo root
Markdown
Code
Preview
# Solvio Digital Card

> **A premium, conversion-focused digital identity platform for Muhammad Shoaib Ahmed, ACCA — Founder of Solvio Advisors Private Limited.**

**Live URL:** [https://solvioadvisors.com](https://solvioadvisors.com)  
**Custom Domain:** `card.solvioadvisors.com` (CNAME configured)  
**Deployment:** GitHub Pages (static)

---

## North Star

**SCAN → UNDERSTAND → TRUST → CONTACT → BOOK → LEAD**

The card is designed as a business acquisition and conversion tool — not just a digital business card. Every feature prioritizes trust-building and lead generation over visual novelty.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vanilla HTML5, CSS3, JavaScript (no frameworks) |
| Styling | CSS Custom Properties, responsive design, safe-area insets |
| Fonts | DM Sans, Playfair Display, Noto Nastaliq Urdu, Noto Sans Arabic |
| QR Generation | qrcode.js (CDN) |
| Booking | Calendly inline embed |
| Lead Form | Formspree (endpoint configured, awaiting activation) |
| PWA | Service Worker with offline caching |
| Hosting | GitHub Pages + custom domain |

---

## File Structure
solvio-digital-card/
├── index.html          # Main digital card (single file app)
├── sw.js               # Service Worker for PWA/offline support
├── profile.jpg         # Profile photo asset
├── solvio-logo.png     # Company logo asset
├── CNAME               # Custom domain: card.solvioadvisors.com
├── PROJECT-INSTRUCTIONS.md  # V2 Master Spec (read before contributing)
└── README.md           # This file
plain

---

## Completed Features (V1.5 — Live)

### Core Card
- [x] Dual-sided flip card (Profile front / Company back)
- [x] 3D tilt effect on desktop (mouse move)
- [x] Gyroscope tilt on mobile (device orientation)
- [x] Smooth staggered entrance animations
- [x] Reduced motion support (`prefers-reduced-motion` respected)

### Contact & Conversion
- [x] **Save Contact** — vCard (.vcf) download with full contact details
- [x] **WhatsApp** — Modal with US (+1) and Pakistan (+92) number options
- [x] **Email** — Protected via Cloudflare email obfuscation
- [x] **QR Code** — Generated client-side with share functionality
- [x] **Calendly Booking** — Inline modal for free 30-min consultation
- [x] **Quick Message (Lead Form)** — Name, email, message form (Formspree-ready)

### Multi-Language
- [x] English (default) 🇺🇸
- [x] Urdu (RTL) 🇵🇰
- [x] Arabic (RTL) 🇸🇦
- [x] Language toggle with live switching (no page reload)
- [x] Proper RTL layout for Urdu and Arabic

### Trust & Credibility
- [x] ACCA Member badge
- [x] Credentials display (BSc Hons, CFA L2 Candidate, Advocate, Tax Bar)
- [x] Live availability indicator (PK timezone — 9AM-6PM online status)
- [x] Testimonials carousel (3 rotating client quotes)
- [x] US-focused value proposition ("Accounting & Advisory for US Businesses")

### PWA & Performance
- [x] Service Worker with cache-first strategy
- [x] Offline support (falls back to cached `index.html`)
- [x] Mobile-optimized viewport with safe-area insets
- [x] Optimized asset loading (removed unused 2.8MB QR image)
- [x] No root-page delay

### SEO & Sharing
- [x] Canonical URL, meta description
- [x] Open Graph tags (title, description, image, URL)
- [x] Twitter Card meta tags
- [x] Theme color for mobile browsers
- [x] Apple mobile web app capable

### Accessibility
- [x] Keyboard navigation (Enter/Space to flip, Escape to close modals)
- [x] ARIA labels on all interactive elements
- [x] Visible focus states (`:focus-visible`)
- [x] Semantic HTML structure
- [x] Screen reader friendly modal dialogs

### Analytics & Tracking
- [x] UTM parameter capture (`utm_source`, `utm_medium`, `utm_campaign`)
- [x] UTM persistence in card URL and QR code
- [x] View-based URL parameter support (`?view=company` auto-flips card)

---

## In Progress / Needs Configuration

| Feature | Status | Notes |
|---------|--------|-------|
| Formspree Lead Form | ⚠️ Pending activation | Endpoint ID is set but shows "not configured" alert. Activate at formspree.io or replace with working endpoint. |
| Calendly Integration | ⚠️ Verify username | Currently using `solvioadvisors` — verify this is the correct Calendly username. |
| Testimonials | ⚠️ Verify & expand | 3 testimonials are live. Add real client names/permissions before marketing push. |
| Privacy-Conscious Analytics | 🔄 In planning | Need to choose: Plausible, Fathom, or Cloudflare Web Analytics (privacy-first, no cookies). |

---

## V2 Roadmap — Pending Features

### Highest Priority (Business Impact)

| # | Feature | Description | Effort |
|---|---------|-------------|--------|
| 1 | **Inline Booking Polish** | Calendly/Cal.com deep linking, timezone prefill, meeting type selection | Low |
| 2 | **Request-a-Proposal Form** | Dedicated "Get a Proposal" form with service type, company size, budget range | Medium |
| 3 | **Testimonials Section v2** | Expand to 5-6 testimonials, add client photos/logos, video testimonials | Medium |
| 4 | **Credibility/Certification Section** | Display ACCA certificate badge, Oxford Brookes credential, Tax Bar membership | Low |
| 5 | **Privacy-Conscious Analytics** | Integrate Plausible/Fathom/Cloudflare Analytics for conversion tracking | Low |
| 6 | **UTM Tracking v2** | Auto-tag QR prints, track button clicks, save-contact events, booking conversions | Medium |

### Next Priority

| # | Feature | Description | Effort |
|---|---------|-------------|--------|
| 7 | **Premium Interactions** | Custom cursor, haptic feedback on mobile, smoother micro-interactions | Medium |
| 8 | **PWA Improvements** | Add `manifest.json`, app icons, splash screen, "Add to Home Screen" prompt | Low |
| 9 | **Improved Sharing** | Dynamic OG image generation, pre-filled share messages per platform | Medium |

### Advanced (Future)

| # | Feature | Description | Effort |
|---|---------|-------------|--------|
| 10 | **Apple Wallet Pass** | Generate `.pkpass` for "Add to Wallet" functionality | High |
| 11 | **Google Wallet Pass** | Generate Google Wallet save button | High |
| 12 | **Timezone-Aware Availability** | Show user's local time vs PK time, smart scheduling | Medium |
| 13 | **Short Video Introduction** | 15-30 second intro video on card back | Medium |
| 14 | **NFC Integration** | Program NFC cards/tags to open this URL | Low (hardware) |
| 15 | **Advanced Analytics** | Funnel tracking, heatmaps, A/B test support | Medium |
| 16 | **Retargeting Pixel** | Meta Pixel / LinkedIn Insight Tag for remarketing | Low |

---

## Development Rules

> **Read `PROJECT-INSTRUCTIONS.md` before making any changes.**

Key principles:

1. **Protect existing functionality** — Never break working features.
2. **Smallest safe change** — Make only the requested change.
3. **Preserve design & branding** — Dark luxury, minimal, premium feel.
4. **No backend assumed** — GitHub Pages static hosting only.
5. **No fabricated claims** — Only use verified testimonials, credentials, stats.
6. **Test before finishing** — See full checklist in `PROJECT-INSTRUCTIONS.md`.

---

## Local Development

No build step required. This is a static site.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/solvio-digital-card.git
cd solvio-digital-card

# Serve locally (any static server)
npx serve .
# or
python3 -m http.server 8000
# or simply open index.html in your browser
Test Checklist (Before Every Deploy)
[ ] Front card renders correctly
[ ] Back card renders correctly
[ ] Card flip works (tap, click, keyboard)
[ ] Profile image loads
[ ] Logo loads (with fallback)
[ ] Call button works
[ ] WhatsApp modal opens, both numbers work
[ ] Email link works
[ ] Website link works
[ ] Save Contact downloads .vcf
[ ] QR code generates and scans correctly
[ ] Calendly booking opens
[ ] Lead form submits (or shows correct fallback)
[ ] Responsive on mobile (iPhone SE, iPhone 14, Android)
[ ] Responsive on desktop
[ ] PWA installable
[ ] Service worker registers
[ ] Offline mode works
[ ] English language correct
[ ] Urdu language + RTL correct
[ ] Arabic language + RTL correct
[ ] UTM parameters preserved in QR and share
Deployment
Pushes to main branch auto-deploy via GitHub Pages.
Custom Domain: card.solvioadvisors.com
CNAME file must remain in root. Do not delete CNAME.
If changing domains, update:
CNAME file
Canonical meta tag in index.html
OG/Twitter meta URLs in index.html
CARD_URL constant in JavaScript
Analytics & Privacy
Current tracking capabilities:
UTM source/medium/campaign capture
QR code share tracking (via URL params)
Planned (see V2 Roadmap):
Page views
Button click events
Contact save events
Booking conversion events
Proposal request events
Privacy rule: No unnecessary PII collection. Use privacy-first analytics only.
Contact
Muhammad Shoaib Ahmed, ACCA
Founder — Solvio Advisors Private Limited
📧 solvioadvisors@gmail.com
🌐 solvioadvisors.com
Built for trust. Designed for conversion.
plain

---

## 2. `PROJECT-INSTRUCTIONS.md` — Also add this file

Create a file named `PROJECT-INSTRUCTIONS.md` in your repo root and paste the entire content from the file I was given (the V2 Master Spec). This is the **master specification** that governs all future development. Every new developer should read it before touching the code.

Key sections to include:
- Project Goal (North Star: SCAN → UNDERSTAND → TRUST → CONTACT → BOOK → LEAD)
- Rule #1: Protect Existing Functionality
- V2 Business Priority list (1-16)
- Trust & Accuracy rules
- Multi-language requirements
- Design & UX guidelines
- Accessibility requirements
- PWA / Deployment rules
- Analytics & Privacy rules
- Code Change Rule
- Test Before Finishing checklist
- Final Principle (conversion over impressiveness)

---

## 3. How to add these to your GitHub repo

```bash
# 1. Navigate to your local repo
cd solvio-digital-card

# 2. Create the new files (paste the content above)
# README.md
# PROJECT-INSTRUCTIONS.md

# 3. Stage and commit
git add README.md PROJECT-INSTRUCTIONS.md
git commit -m "docs: add comprehensive README and V2 master project instructions

- README includes complete feature roadmap, done/pending lists
- Added file structure, local dev guide, deployment rules
- Added test checklist for pre-deploy verification
- PROJECT-INSTRUCTIONS.md contains V2 master spec for all contributors"

# 4. Push
git push origin main
Summary of what this README gives new developers
Table
Section	Purpose
North Star	Understand the business goal (not just a card — a conversion tool)
Completed Features	Know what's already built so they don't rebuild it
In Progress	Know what needs activation/fixing right now
V2 Roadmap	Clear priority-ranked backlog (highest → next → advanced)
File Structure	Understand the codebase in 10 seconds
Local Dev	Run it immediately without asking
Test Checklist	Deploy with confidence
Dev Rules	Don't break existing functionality
Deployment	Know how GitHub Pages + custom domain works.

