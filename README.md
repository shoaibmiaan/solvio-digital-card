# Solvio Digital Card — Feature Tracker & Task Board

> **Single source of truth for developers. Read instructions, check feature status, pick up tasks.**

**Project:** Solvio Advisors Digital Card  
**Owner:** Muhammad Shoaib Ahmed, ACCA  
**Live:** [solvioadvisors.com](https://solvioadvisors.com)  
**Stack:** HTML5 + CSS3 + Vanilla JS (static, GitHub Pages)  

---

## Quick Start for New Developers

1. Read **Section 1: Project Instructions** (the rules).
2. Check **Section 2: Feature Tracker** to see what is done vs. pending.
3. Pick a task from **Section 3: Task Board**.
4. Before deploying, run the **Section 4: Test Checklist**.

---

# 1. PROJECT INSTRUCTIONS

## 1.1 Goal
Transform the digital business card into a premium, conversion-focused platform.

**North Star:** `SCAN → UNDERSTAND → TRUST → CONTACT → BOOK → LEAD`

**Feel:** Dark + Luxury + Professional + Minimal + Premium + Trustworthy

## 1.2 The Golden Rules

| # | Rule | Details |
|---|------|---------|
| 1 | **Protect what works** | Never break, remove, or rewrite working functionality unless necessary. |
| 2 | **Smallest safe change** | Make ONLY the requested change. Preserve design, branding, links, content, assets. |
| 3 | **No fake claims** | Never fabricate testimonials, certifications, clients, awards, stats, or revenue. |
| 4 | **No backend assumed** | This is static GitHub Pages hosting. If a feature needs a server, explain first. |
| 5 | **Business over beauty** | When choosing between "looks impressive" vs. "builds trust / generates leads" — pick the latter. |
| 6 | **Test before shipping** | Run the full test checklist (Section 4) before every deploy. |

## 1.3 Code Change Rules

| You say | I do |
|---------|------|
| "Add X" | Add X. Preserve everything else. |
| "Change X" | Change X only. |
| "Fix X" | Fix X. Do not touch unrelated code. |
| "Give me complete index.html" | Provide the full updated file unless you ask for a fragment. |

## 1.4 Multi-Language Rules

- **EN** (default) / **Urdu** / **Arabic** — must all work.
- Urdu & Arabic need proper **RTL** layout.
- Do NOT translate: brand names, personal names, domains, emails, phone numbers, legal company names.
- Language switch must NOT break flip, responsiveness, or any feature.

## 1.5 Design Rules

- Maintain: **Dark + Luxury + Professional + Minimal + Premium**
- Respect `prefers-reduced-motion`
- Avoid gimmicks, clutter, unnecessary complexity

## 1.6 Accessibility Rules

- Keyboard navigation must work
- ARIA labels on interactive elements
- Visible `:focus-visible` outlines
- Strong contrast
- Card flip must work without animation (keyboard accessible)

## 1.7 PWA / Deployment Rules

- Protect: Service Worker, PWA, offline caching, manifest, assets, custom domain, HTTPS, file paths
- Do not assume a backend exists
- CNAME file must stay in repo root

## 1.8 Analytics & Privacy Rules

- Track: views, country, traffic source, button clicks, contact saves, bookings, proposal requests
- Support UTM: `utm_source=linkedin`, `utm_source=email`, `utm_source=qr`
- Do NOT collect unnecessary PII

---

# 2. FEATURE TRACKER

## 2.1 Core Card Features

| ID | Feature | Status | Notes |
|----|---------|--------|-------|
| C-01 | Dual-sided flip card (Front = Profile, Back = Company) | [x] | Click/tap or Enter/Space to flip. CSS 3D transform. |
| C-02 | 3D tilt effect (desktop mouse) | [x] | `rotateX/Y` on hover. Respects `prefers-reduced-motion`. |
| C-03 | Gyro tilt (mobile device orientation) | [x] | Works on phones with `deviceorientation`. |
| C-04 | Staggered entrance animations | [x] | `fadeUp` with 0.10s–0.70s delays. |
| C-05 | Reduced motion support | [x] | Respects `prefers-reduced-motion`. |
| C-06 | Responsive layout (mobile-first) | [x] | `min(100%, 390px)` width. Safe-area insets for notches. |
| C-07 | Noscript fallback | [x] | Full-screen message if JS is disabled. |

## 2.2 Contact & Conversion

| ID | Feature | Status | Notes |
|----|---------|--------|-------|
| CON-01 | Save Contact (vCard .vcf download) | [x] | Full contact details: name, org, title, dual phone, email, URL, address, note. |
| CON-02 | WhatsApp modal (dual numbers) | [x] | US (+1 228 225 3039) & Pakistan (+92 345 750 2291). |
| CON-03 | Email link | [x] | `mailto:solvioadvisors@gmail.com` |
| CON-04 | QR code generation + share | [x] | Dynamic QR with UTM params. Web Share API + clipboard fallback. |
| CON-05 | Calendly booking (inline modal) | [x] | Iframe embed. Config: `calendly.com/solvioadvisors/30min`. |
| CON-06 | Lead form modal | [x] | Name, Email, Message fields. Formspree endpoint ready but **not activated**. |
| CON-07 | Social links (Website, LinkedIn, Instagram, Facebook) | [x] | All open in new tab. |

## 2.3 Multi-Language

| ID | Feature | Status | Notes |
|----|---------|--------|-------|
| LNG-01 | English (default) | [x] | Default for US audience. |
| LNG-02 | Urdu | [x] | Full RTL support. Font: Noto Nastaliq Urdu. |
| LNG-03 | Arabic | [x] | Full RTL support. Font: Noto Sans Arabic. |
| LNG-04 | Language toggle (EN → UR → AR cycle) | [x] | Live switch without page reload. |
| LNG-05 | RTL layout integrity | [x] | Toggle does not break flip, responsiveness, or features. |

## 2.4 Trust & Credibility

| ID | Feature | Status | Notes |
|----|---------|--------|-------|
| TRU-01 | ACCA Member badge | [x] | Displayed on front card. |
| TRU-02 | Credentials display | [x] | BSc (Hons) Applied Accounting, CFA L2 Candidate, Advocate, Tax Bar. |
| TRU-03 | Live availability badge | [x] | PK timezone (9 AM – 6 PM). Shows online/offline with dot. |
| TRU-04 | Testimonials carousel | [x] | 3 quotes, auto-rotate every 5s. **⚠️ PLACEHOLDERS — need real testimonials.** |
| TRU-05 | US-focused value proposition | [x] | Flag badge: "Accounting & Advisory for US Businesses". |
| TRU-06 | Value proposition grid | [x] | 4 cards: Clean Books, Know Numbers, Tax Ready, Grow Confident. |
| TRU-07 | Company info (About, tagline, address) | [x] | Back card section. |

## 2.5 PWA & Performance

| ID | Feature | Status | Notes |
|----|---------|--------|-------|
| PWA-01 | Service Worker (`sw.js`) | [x] | Cache-first strategy. Offline fallback to `index.html`. |
| PWA-02 | Offline support | [x] | Works without internet after first visit. |
| PWA-03 | PWA manifest | [ ] | **NOT CREATED.** Need `manifest.json` + icons. |
| PWA-04 | Apple touch icon | [ ] | **NOT CREATED.** Need `apple-touch-icon.png` (180x180). |
| PWA-05 | "Add to Home Screen" prompt | [ ] | **NOT STARTED.** Needs manifest + icons. |

## 2.6 SEO & Sharing

| ID | Feature | Status | Notes |
|----|---------|--------|-------|
| SEO-01 | Canonical URL & meta description | [x] | Set in `<head>`. |
| SEO-02 | Open Graph tags | [x] | Title, description, image, URL. |
| SEO-03 | Twitter Cards | [x] | Summary large image. |
| SEO-04 | Theme color & viewport | [x] | Mobile browser theming. |
| SEO-05 | Dynamic OG image generation | [ ] | **NOT STARTED.** |
| SEO-06 | Platform-specific share text | [ ] | **NOT STARTED.** |

## 2.7 Accessibility

| ID | Feature | Status | Notes |
|----|---------|--------|-------|
| ACC-01 | Keyboard navigation | [x] | Enter/Space flips, Escape closes modals. |
| ACC-02 | ARIA labels | [x] | On buttons, links, modals, card faces. |
| ACC-03 | Focus states | [x] | `:focus-visible` with gold outline. |
| ACC-04 | Semantic HTML | [x] | Proper roles and structure. |
| ACC-05 | Screen reader support | [x] | Modals have `role="dialog"` and `aria-modal`. |

## 2.8 Analytics & Tracking

| ID | Feature | Status | Notes |
|----|---------|--------|-------|
| ANA-01 | UTM parameter capture | [x] | Reads `utm_source`, `utm_medium`, `utm_campaign` from URL. |
| ANA-02 | UTM persistence in QR & share | [x] | QR code and share links include UTM params. |
| ANA-03 | Privacy-first analytics integration | [ ] | **NOT STARTED.** Plausible / Fathom / Cloudflare Analytics. |
| ANA-04 | Button click tracking | [ ] | **NOT STARTED.** |
| ANA-05 | Contact save tracking | [ ] | **NOT STARTED.** |
| ANA-06 | Booking conversion tracking | [ ] | **NOT STARTED.** |
| ANA-07 | Proposal request tracking | [ ] | **NOT STARTED.** |
| ANA-08 | Funnel / heatmap analytics | [ ] | **NOT STARTED.** Advanced. |

## 2.9 V2 Advanced Features

| ID | Feature | Status | Priority | Effort |
|----|---------|--------|----------|--------|
| ADV-01 | Apple Wallet Pass (.pkpass) | [ ] | Low | High |
| ADV-02 | Google Wallet Pass | [ ] | Low | High |
| ADV-03 | Timezone-aware availability | [ ] | Low | Medium |
| ADV-04 | Short video introduction | [ ] | Low | Medium |
| ADV-05 | NFC integration | [ ] | Low | High (hardware) |
| ADV-06 | Retargeting pixel (Meta / LinkedIn) | [ ] | Low | Low |
| ADV-07 | Premium micro-interactions (haptic, custom cursor) | [ ] | Medium | Medium |

---

# 3. TASK BOARD

## 3.1 Critical Tasks (Do First)

| Task ID | Feature ID | Task | Why Critical | Estimated Effort | Assigned |
|---------|-----------|------|-------------|------------------|----------|
| T-001 | TRU-04 | **Replace placeholder testimonials with real, verified ones.** | Fake testimonials break trust — against project rules. | Low | — |
| T-002 | CON-06 | **Activate Formspree lead form.** Create real form at formspree.io, update `FORMSPREE_ID` in JS, test submission end-to-end. | Lead form currently shows "not configured" alert. No leads can be captured. | Low | — |
| T-003 | CON-05 | **Verify Calendly account & event type.** Confirm `solvioadvisors` account exists and `/30min` event is active. Test full booking flow. | Booking is a core conversion. Broken booking = lost leads. | Low | — |

## 3.2 High Priority Tasks (Business Impact)

| Task ID | Feature ID | Task | Business Impact | Estimated Effort | Assigned |
|---------|-----------|------|-----------------|------------------|----------|
| T-004 | PWA-03 | **Create `manifest.json`** with name, short_name, icons, theme_color, background_color, display: standalone. Add `<link rel="manifest">` to `<head>`. | Enables "Add to Home Screen" — makes card feel like an app. | Low | — |
| T-005 | PWA-04 | **Create `apple-touch-icon.png`** (180x180px). Add `<link rel="apple-touch-icon">` to `<head>`. | Required for iOS "Add to Home Screen" icon. | Low | — |
| T-006 | ANA-03 | **Integrate privacy-first analytics.** Choose Plausible, Fathom, or Cloudflare Web Analytics. Add script to `<head>`. | Track views and conversions without cookies/PII. | Low | — |
| T-007 | ANA-04 | **Add button click tracking.** Track: Save Contact, WhatsApp, Email, Calendly open, Lead form open, QR share, Language toggle. | Understand which actions users take most. | Low | — |
| T-008 | TRU-05 | **Add legitimate credibility section.** ACCA badge, Oxford Brookes credential, Tax Bar Association membership. Visual badges/icons. | Builds instant trust with US prospects. | Low | — |
| T-009 | CON-05 | **Enhance Calendly integration.** Add timezone prefill, custom meeting types (15min / 30min / 60min), embed branding. | Better booking experience = more conversions. | Low | — |
| T-010 | CON-06 | **Create "Request a Proposal" form.** Fields: Name, Email, Company, Service Type (dropdown), Company Size, Budget Range, Message. | Captures higher-intent leads than generic contact form. | Medium | — |
| T-011 | TRU-04 | **Expand testimonials to 5-6.** Add client photos or company logos if permission granted. | More social proof = more trust. | Medium | — |
| T-012 | ANA-05 | **Track contact save events.** Fire analytics event when `.vcf` is downloaded. | Know if card is being saved to address books. | Low | — |
| T-013 | ANA-06 | **Track booking conversions.** Fire event when Calendly booking is confirmed (via Calendly webhook or post-message). | Core conversion metric. | Medium | — |
| T-014 | ANA-07 | **Track proposal requests.** Fire event when lead form is successfully submitted. | Measure form effectiveness. | Low | — |

## 3.3 Medium Priority Tasks

| Task ID | Feature ID | Task | Business Impact | Estimated Effort | Assigned |
|---------|-----------|------|-----------------|------------------|----------|
| T-015 | SEO-05 | **Create dynamic OG image.** Generate a branded preview image (1200x630) for social sharing. | Better share previews = more clicks. | Low | — |
| T-016 | SEO-06 | **Improve share experience.** Pre-filled share text per platform (LinkedIn, WhatsApp, Email). | Higher share engagement. | Low | — |
| T-017 | PWA-05 | **Add "Add to Home Screen" prompt.** Custom banner or tooltip for iOS/Android. | Increases re-engagement. | Low | — |
| T-018 | ADV-07 | **Add premium micro-interactions.** Haptic feedback on mobile button taps, custom cursor on desktop, smoother transitions. | Premium feel. | Medium | — |
| T-019 | LNG | **Add more languages if needed.** (e.g., Spanish for US Hispanic market). | Expand audience. | Medium | — |

## 3.4 Low Priority / Advanced Tasks

| Task ID | Feature ID | Task | Notes | Estimated Effort | Assigned |
|---------|-----------|------|-------|------------------|----------|
| T-020 | ADV-01 | **Apple Wallet Pass.** Generate `.pkpass` file. Requires Apple Developer account ($99/yr) + pass certificate. | High effort, niche use case. | High | — |
| T-021 | ADV-02 | **Google Wallet Pass.** Google Pay API integration. Requires GCP project. | High effort, niche use case. | High | — |
| T-022 | ADV-03 | **Timezone-aware availability.** Detect visitor timezone, show "It's 9 AM in Lahore" or local equivalent. | Nice-to-have for global prospects. | Medium | — |
| T-023 | ADV-04 | **Short video introduction.** 15-30s embedded video on back card. | Humanizes the brand. | Medium | — |
| T-024 | ADV-05 | **NFC integration.** Program NFC tags/cards to open card URL. | Hardware-dependent. | High | — |
| T-025 | ADV-06 | **Retargeting pixel.** Meta Pixel or LinkedIn Insight Tag for remarketing. | Requires privacy policy update. | Low | — |
| T-026 | ANA-08 | **Advanced analytics.** Funnel tracking, heatmaps, A/B testing. | Overkill at current scale. | Medium | — |

---

# 4. MANDATORY TEST CHECKLIST (Before Every Deploy)

After any significant change, verify **ALL** of the following:

### Card & Visual
- [ ] Front card renders correctly
- [ ] Back card renders correctly
- [ ] Flip works (tap, click, keyboard Enter/Space)
- [ ] Profile photo loads (or fallback hides gracefully)
- [ ] Logo loads (or fallback shows "SA")
- [ ] Branding consistent (colors, fonts, gold accent)
- [ ] 3D tilt works on desktop
- [ ] Gyro tilt works on mobile
- [ ] Responsive on mobile (iPhone SE, iPhone 14, Android)
- [ ] Responsive on desktop
- [ ] `prefers-reduced-motion` respected

### Actions
- [ ] Call button works
- [ ] WhatsApp modal opens, both US & PK numbers work
- [ ] Email link works
- [ ] Website link works
- [ ] Save Contact downloads `.vcf` with correct data
- [ ] QR code generates and scans correctly
- [ ] QR share works (Web Share or clipboard fallback)
- [ ] Calendly booking opens, iframe loads
- [ ] Lead form opens, fields validate, submits (or shows proper fallback)
- [ ] Social links open in new tab

### Language
- [ ] English language correct
- [ ] Urdu language works (RTL layout correct)
- [ ] Arabic language works (RTL layout correct)
- [ ] Language toggle cycles EN → UR → AR without breaking anything

### PWA & Technical
- [ ] Service worker registers (check DevTools > Application)
- [ ] Offline mode works (disable network, reload)
- [ ] GitHub Pages compatibility
- [ ] Custom domain compatibility
- [ ] No console errors
- [ ] UTM params preserved in QR and share links

### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Space, Escape)
- [ ] Focus states visible
- [ ] ARIA labels present on interactive elements
- [ ] Screen reader reads card correctly

---

# 5. QUICK REFERENCE

## Key Constants (in `index.html`)

```javascript
const CALENDLY_USER = 'solvioadvisors';      // Verify this account exists
const FORMSPREE_ID  = 'xaeyqrvd';            // Replace with real Formspree form ID
let CARD_URL = 'https://solvioadvisors.com/'; // Verify domain
```

## Design Tokens (CSS)

```css
--bg: #080e18;        /* Deep navy background */
--card: #101827;      /* Card surface */
--gold: #e8c468;      /* Primary accent */
--text: #b9c5d5;      /* Secondary text */
--muted: #7f8da1;     /* Tertiary text */
```

## Contact Info (do not change without permission)

- **Name:** Muhammad Shoaib Ahmed, ACCA
- **Company:** Solvio Advisors Private Limited
- **Email:** solvioadvisors@gmail.com
- **Phone US:** +1 228 225 3039
- **Phone PK:** +92 345 750 2291
- **Address:** 13-Fane Road, Behind State Bank of Pakistan, Mall Road, Lahore, Pakistan
- **Website:** https://solvioadvisors.com
- **LinkedIn:** https://www.linkedin.com/in/shuaib-ahmed-acca-4b3999151
- **Instagram:** https://www.instagram.com/solvioadvisors
- **Facebook:** https://www.facebook.com/share/1HvuHDr3cx/

---

*Document Version: 3.0*  
*Format: Instruction + Feature Tracker + Task Board*  
*Last Updated: September 2026*  
*For: All Developers Contributing to Solvio Digital Card*
