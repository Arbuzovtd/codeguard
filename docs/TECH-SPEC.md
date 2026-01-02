# Technical Specification - CodeGuard Landing Page & MVP

*Based on validated market research and a fast validation cycle.*

---

## 1. Project Overview

### Purpose
Build a high-converting landing page to validate demand for CodeGuard before building the VS Code extension. MVP for this phase is **landing page only**.

### Timeline
- **Landing Page:** 2-3 hours development
- **Launch Period:** 2 weeks smoke test
- **Decision Point:** Day 21 (GO/NO-GO for extension MVP)

### Success Criteria
- Week 1: 50-100 signups
- Week 2: 5+ beta testers
- Week 4: 3+ testimonials
- Week 6: 10+ paying customers

---

## 2. Landing Page Architecture

### Tech Stack
```
Frontend:
├── React 18.2+
├── Vite 5.0+ (build tool - fastest HMR)
├── Tailwind CSS 3.4+ (utility-first styling)
├── React Hook Form 7.x (form validation)
├── Lucide React (icons)
└── EmailJS 4.x (email collection)

Extension (Phase 2):
└── VS Code extension (TypeScript)

Backend API (Phase 2):
└── Node.js API (for Pro features)

Analytics:
├── Plausible Analytics (privacy-friendly)
└── Google Analytics 4 (backup/comparison)

Hosting:
├── Vercel (primary - auto-deploy from GitHub)
└── Netlify (backup option)

Version Control:
└── GitHub (public or private repo)
```

### Why This Stack?

**React + Vite:**
- Fast development experience (HMR in <100ms)
- Production builds <150KB gzipped
- Minimal configuration

**Tailwind CSS:**
- Fast layout iteration
- Built-in responsive utilities
- Automatic purging for small bundles

**EmailJS:**
- No backend needed for MVP
- Free tier: 200 emails/month
- 2-minute setup

**Vercel:**
- Zero-config deployment
- Global CDN
- Free SSL

---

## 3. File Structure
```
codeguard-landing/
├── docs/                           # All documentation
│   ├── OVERVIEW.md
│   ├── RESEARCH.md
│   ├── MARKETING-BRIEF.md
│   ├── PRODUCT-CONCEPT.md
│   ├── TECH-SPEC.md (this file)
│   └── CONTENT.md
│
├── public/                         # Static assets
│   ├── favicon.ico
│   ├── og-image.png (1200x630)
│   └── mockups/
│       ├── hero-mockup.png
│       ├── danger-modal.png
│       └── diff-preview.png
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Layout.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Problem.jsx
│   │   │   ├── Solution.jsx
│   │   │   ├── Benefits.jsx
│   │   │   └── FinalCTA.jsx
│   │   │
│   │   ├── forms/
│   │   │   └── EmailForm.jsx
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       └── Section.jsx
│   │
│   ├── utils/
│   │   ├── emailService.js (EmailJS config)
│   │   └── analytics.js (tracking functions)
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example                    # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 4. Component Specifications

### 4.1 Hero Component

**Purpose:** Above-the-fold conversion driver

**Requirements:**
- Full viewport height on desktop (`min-h-screen`)
- Centered content with max-width container
- EmailForm embedded
- Hero image/mockup (hidden on mobile, visible `md:` breakpoint+)
- Subtle background gradient

**Layout Structure:**
```jsx
<section className="min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Copy + Form */}
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Stop AI from destroying your code
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          CodeGuard intercepts AI diffs and blocks destructive edits before apply.
        </p>
        <EmailForm />
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <CheckCircle size={16} />
          <span>Free tier at launch • No credit card required</span>
        </div>
      </div>

      {/* Right: Hero Image (hidden on mobile) */}
      <div className="hidden md:block">
        <img src="/mockups/hero-mockup.png" alt="CodeGuard Warning Modal" />
      </div>
    </div>
  </div>
</section>
```

**Performance:**
- Lazy load hero image
- WebP with PNG fallback
- Max image size: 200KB

---

### 4.2 EmailForm Component

**Purpose:** Primary conversion mechanism - collect waitlist emails

**Requirements:**
- Email field with validation
- Submit button with loading state
- Success/Error messages
- Mobile-optimized input (no zoom on iOS)
- Honeypot field for spam protection

**Validation Rules:**
```javascript
{
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Please enter a valid email address"
    }
  }
}
```

**States:**
```javascript
const [status, setStatus] = useState('idle');
// 'idle' | 'loading' | 'success' | 'error'
```

**Implementation:**
```jsx
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function EmailForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus] = useState('idle');

  const onSubmit = async (data) => {
    setStatus('loading');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_email: data.email,
          timestamp: new Date().toISOString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      reset();

      // Track conversion
      trackEvent('waitlist_signup', { email: data.email });

    } catch (error) {
      console.error('Email submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot field (hidden) */}
      <input type="text" name="bot-field" className="hidden" />

      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email'
            }
          })}
          type="email"
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200
                     focus:border-slate-600 focus:ring-2 focus:ring-slate-200
                     text-base"
          disabled={status === 'loading'}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full px-8 py-3 bg-slate-900 text-white font-semibold
                   rounded-lg hover:bg-slate-800 disabled:opacity-50
                   transition-colors"
      >
        {status === 'loading' ? 'Joining...' :
         status === 'success' ? '✓ You\'re In!' :
         'Join the waitlist'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">
          You're on the list. We will email you when early access opens.
        </p>
      )}

      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Something broke. Please try again.
        </p>
      )}
    </form>
  );
}
```

---

### 4.3 Problem Section

**Purpose:** Agitate pain points using developer language

**Content:** From `docs/CONTENT.md` Problem Section

**Layout:**
```jsx
<section className="py-16 md:py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
      "Cursor destroyed months of development even though I only asked it to update the UI"
    </h2>
    <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
      Diff views show what changed, but they do not tell you if it is dangerous.
    </p>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {painPoints.map((point, idx) => (
        <div key={idx} className="flex gap-4">
          <XCircle className="text-red-500 flex-shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
            <p className="text-slate-600">{point.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Data Structure:**
```javascript
const painPoints = [
  {
    title: '"AI deleted 90% of file content when I asked to update README"',
    description: 'Reality: Large deletions slip through without warning.'
  },
  {
    title: '"Database has reset 3 times in last 24 hours due to AI ignoring rules"',
    description: 'Reality: Out-of-scope edits hit critical files.'
  },
  // ... 2 more
];
```

---

### 4.4 Solution Section

**Purpose:** Show how CodeGuard prevents destructive changes

**Layout:**
```jsx
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
      How CodeGuard blocks destructive changes
    </h2>
    <p className="text-xl text-slate-600 text-center mb-12">
      Analyze risk before apply. Block what is dangerous. Restore in one click.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {steps.map((step, idx) => (
        <div key={idx} className="text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center
                          justify-center mx-auto mb-4">
            {step.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-slate-600">{step.description}</p>
        </div>
      ))}
    </div>

    {/* Optional: Mockup screenshot */}
    <div className="mt-12 max-w-4xl mx-auto">
      <img
        src="/mockups/danger-modal.png"
        alt="CodeGuard Risk Warning"
        className="rounded-lg shadow-2xl"
      />
    </div>
  </div>
</section>
```

**Icons:**
```javascript
import { Shield, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Shield size={32} className="text-slate-900" />,
    title: 'Intercept',
    description: 'Pause AI changes before apply.'
  },
  {
    icon: <Zap size={32} className="text-slate-900" />,
    title: 'Analyze',
    description: 'Detect large deletions, scope drift, and protected files.'
  },
  {
    icon: <CheckCircle size={32} className="text-slate-900" />,
    title: 'Decide',
    description: 'Block, review, or allow. Restore point created automatically.'
  },
];
```

---

### 4.5 Benefits Section

**Purpose:** Show value proposition with data-driven proof

**Key Elements:**
- 3 benefits with icons
- Data callout box

**Layout:**
```jsx
<section className="py-16 md:py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
      Protect code without slowing down
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {benefits.map((benefit, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-4xl mb-4">{benefit.emoji}</div>
          <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
          <p className="text-slate-600 mb-4">{benefit.description}</p>
        </div>
      ))}
    </div>

    <div className="max-w-3xl mx-auto bg-gradient-to-r from-slate-50 to-slate-100
                    border-2 border-slate-200 rounded-lg p-8">
      <p className="text-xl font-bold text-slate-900 mb-4">Reality check:</p>
      <ul className="text-slate-700 space-y-2">
        <li>US developers using AI coding assistants: ~1.5M</li>
        <li>Pain severity: CRITICAL (10/10)</li>
        <li>Willingness to pay: 10/10 (insurance for code)</li>
        <li>Market gap: No proactive prevention tools</li>
      </ul>
    </div>
  </div>
</section>
```

---

### 4.6 FinalCTA Component

**Purpose:** Repeat conversion opportunity

**Requirements:**
- Shorter copy than hero
- Same EmailForm component (reusable)
- Trust badges

**Layout:**
```jsx
<section className="py-16 md:py-24 bg-slate-900 text-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-4">
      Ready to ship with guardrails?
    </h2>
    <p className="text-xl mb-8 text-slate-200">
      Join the waitlist for CodeGuard. Free tier included at launch.
    </p>

    <div className="max-w-md mx-auto mb-8">
      <EmailForm theme="light" />
    </div>

    <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-200">
      <span>✓ Free tier at launch</span>
      <span>✓ No credit card required</span>
      <span>✓ Built for VS Code users</span>
    </div>
  </div>
</section>
```

---

## 5. Design System

### Color Palette (Tailwind Config)
```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          200: '#e2e8f0',
          500: '#0f172a',  // Slate 900
          600: '#1e293b',
          700: '#334155',
        }
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: []
}
```

### Typography Scale
```
H1 (Hero): text-4xl md:text-6xl (36px → 60px)
H2 (Section): text-3xl md:text-5xl (30px → 48px)
H3 (Feature): text-xl md:text-2xl (20px → 24px)
Body Large: text-xl (20px)
Body: text-base (16px)
Body Small: text-sm (14px)
```

### Spacing System
```
Section Padding: py-16 md:py-24 (64px → 96px vertical)
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Element Gaps: gap-4, gap-6, gap-8, gap-12
```

---

## 6. Performance Requirements

### Target Metrics (Lighthouse)
```
Performance: 95+
Accessibility: 100
Best Practices: 95+
SEO: 100
```

### Load Time Targets
```
First Contentful Paint (FCP): <1.2s
Largest Contentful Paint (LCP): <2.0s
Time to Interactive (TTI): <2.5s
```

### Bundle Size Limits
```
JavaScript: <150KB gzipped
CSS: <30KB gzipped (Tailwind purged)
Total Page Weight: <500KB
```

---

## 7. SEO Configuration

### Meta Tags (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary Meta Tags -->
  <title>CodeGuard - Stop AI from destroying your code | VS Code extension</title>
  <meta name="title" content="CodeGuard - Stop AI from destroying your code">
  <meta name="description" content="CodeGuard intercepts AI-generated diffs, flags dangerous changes, and blocks destructive edits before they apply.">
  <meta name="keywords" content="AI coding safety, VS Code extension, destructive AI changes, AI diff risk analysis, code protection">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://codeguard.dev/">
  <meta property="og:title" content="CodeGuard - Stop AI from destroying your code">
  <meta property="og:description" content="The safety net for AI coding assistants.">
  <meta property="og:image" content="https://codeguard.dev/og-image.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://codeguard.dev/">
  <meta property="twitter:title" content="CodeGuard - Stop AI from destroying your code">
  <meta property="twitter:description" content="The safety net for AI coding assistants.">
  <meta property="twitter:image" content="https://codeguard.dev/og-image.png">

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

### Structured Data (JSON-LD)
```javascript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CodeGuard",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  }
};
```

---

## 8. Analytics & Tracking

### Events to Track
```javascript
// Plausible + GA4 Events

// Page View (automatic)
trackPageView();

// Waitlist Interactions
trackEvent('email_focus');
trackEvent('email_blur_empty');
trackEvent('waitlist_submit');
trackEvent('waitlist_success');
trackEvent('waitlist_error');

// Engagement
trackEvent('scroll_50');
trackEvent('scroll_100');
trackEvent('time_30s');
trackEvent('cta_click', {
  location: 'hero' | 'final'
});
```

---

## 9. Environment Variables

### .env.example
```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx

# Analytics
VITE_PLAUSIBLE_DOMAIN=codeguard.dev
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional: Feature flags
VITE_SHOW_SOCIAL_PROOF=false
VITE_SHOW_PRICING=false
```

---

## 10. Deployment Configuration

### Vercel Setup
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 11. Backend Placeholder (Phase 2)

**Backend API (Phase 2, Node.js):**
- Authentication and user profiles
- Cloud restore points (30-day history)
- Project-specific rules storage
- Activity logs and analytics

---

## 12. Testing Checklist

### Before Launch

**Functionality:**
- [ ] Email form submits successfully
- [ ] Validation errors show correctly
- [ ] Success/error messages display

**Responsive Design:**
- [ ] Mobile (320px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px)

**Performance:**
- [ ] Lighthouse score 90+ on all metrics
- [ ] No console errors

**Content:**
- [ ] Copy matches `docs/CONTENT.md`
- [ ] No placeholders

---

## 13. Post-Launch Monitoring

### Daily Checks (Week 1-2)
- Total visits (Plausible dashboard)
- Conversion rate (signups / visits)
- Traffic sources (which channels work)
- Bounce rate
- Time on page

---

## 14. Iteration Protocol

### If Conversion <5%

**Week 1:**
1. Change headline (A/B test 3 variations)
2. Simplify hero section (remove clutter)
3. Add a clearer CTA

**Week 2:**
4. Shorter copy
5. Add social proof (early quotes)
6. Add explainer video

---

*This technical specification ensures the landing page can be built quickly for validation before investing in the extension MVP.*
