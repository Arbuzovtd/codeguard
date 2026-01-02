# Best Practices Reference Guide - CodeGuard Landing Page

*Comprehensive guidelines for building high-converting, performant, accessible landing pages*

---

## Table of Contents

1. [Landing Page Conversion Optimization](#1-landing-page-conversion-optimization)
2. [React Development Standards](#2-react-development-standards)
3. [Tailwind CSS Guidelines](#3-tailwind-css-guidelines)
4. [Performance Optimization](#4-performance-optimization)
5. [Accessibility (a11y)](#5-accessibility-a11y)
6. [SEO Implementation](#6-seo-implementation)
7. [Analytics & Privacy](#7-analytics--privacy)
8. [Security Best Practices](#8-security-best-practices)
9. [Mobile-First Design](#9-mobile-first-design)
10. [Form Design & UX](#10-form-design--ux)

---

## 1. Landing Page Conversion Optimization

### 1.1 Core Principles

**Single Focused Goal:**
- One primary CTA per page (waitlist signup)
- Remove ALL navigation links (no escape routes)
- No secondary CTAs that compete for attention
- Every element should guide toward conversion

**Why:** Research shows pages with single CTA convert 266% better than multi-CTA pages.

---

### 1.2 Above-the-Fold Optimization

**Critical 3-Second Rule:**
Visitor decides to stay or leave in 3 seconds. Above-the-fold MUST contain:
```
✓ Clear headline (benefit-driven)
✓ Supporting subheadline (elaborates value)
✓ Primary CTA (visible without scrolling)
✓ Hero image/visual (shows product in action)
✓ Trust signal (social proof or guarantee)
```

**Example (CodeGuard):**
```html
<section> <!-- Viewport height, centered -->
  <h1>Stop AI from destroying your code</h1>
  <p>Intercept AI diffs, flag risk, and block destructive edits before they apply</p>
  <EmailForm /> <!-- Bright, contrasting button -->
  <span>✓ Free tier at launch • No credit card required</span>
  <img src="hero-mockup.png" alt="CodeGuard warning modal preview" />
</section>
```

**What NOT to do:**
❌ Generic stock photos  
❌ Wall of text  
❌ Multiple CTAs ("Learn More", "Contact", "Sign Up")  
❌ Unclear value proposition  

---

### 1.3 F-Pattern Layout

**Eye-Tracking Research Shows:**
Users scan pages in F-shaped pattern:
1. Horizontal scan across top (headline)
2. Vertical scan down left side
3. Another horizontal scan (subheading)

**Implementation:**
```
┌─────────────────────────────┐
│ [HEADLINE..................]│ ← Most important info
│ [Subheadline...............]│ ← Second scan
│                             │
│ • Key point 1               │ ← Left-aligned bullets
│ • Key point 2               │
│ • Key point 3               │
│                             │
│ [CTA Button]                │ ← Left or center
└─────────────────────────────┘
```

**CodeGuard Application:**
- Put strongest benefit in headline (top-left)
- Use bullet points for pain points (left-aligned)
- Place CTA at natural end of F-pattern

---

### 1.4 Conversion Hierarchy

**Order sections by urgency:**
```
1. Hero (Hook + CTA)
   ↓
2. Problem (Agitate pain)
   ↓
3. Solution (Show how it works)
   ↓
4. Benefits (Prove value with data)
   ↓
5. Social Proof (Build trust)
   ↓
6. Final CTA (Close the deal)
```

**Why this order:**
- Hook interest immediately
- Make them feel pain (creates urgency)
- Present solution while pain is fresh
- Prove it works with data
- Remove doubt with testimonials
- Ask for commitment when trust is highest

---

### 1.5 CTA Best Practices

**Button Design:**
```css
/* DO */
- High contrast color (different from brand)
- Large enough (min 44px height for mobile)
- Clear action text ("Join Waitlist", not "Submit")
- White space around button (breathing room)
- Hover state (shows it's clickable)

/* DON'T */
- Generic text ("Click Here", "Learn More")
- Small buttons (<40px tap target)
- Same color as surrounding elements
- Multiple competing CTAs
```

**Button Copy Formula:**
```
[Action Verb] + [Value] + [Urgency]

Examples:
✓ "Join Waitlist - Get 40% Off"
✓ "Start Free Trial - 14 Days"
✓ "Get Early Access Now"

✗ "Submit"
✗ "Click Here"
✗ "Learn More"
```

**Placement:**
- Primary CTA: Above the fold (always visible)
- Secondary CTA: After problem section
- Tertiary CTA: Bottom of page (final chance)

**Color Psychology:**
- **Orange/Red:** Urgency, action (highest conversion)
- **Green:** Safety, go-ahead (good for forms)
- **Blue:** Trust, calm (less urgent)
- **Purple:** Premium, exclusive

For CodeGuard: **Slate-900** (technical, calm) with a high-contrast CTA works well.

---

### 1.6 Social Proof Tactics

**Types of Social Proof (in order of effectiveness):**

1. **Specific Numbers:**
```
   ✓ "Join 127 developers who blocked destructive AI changes"
   ✗ "Join many developers"
```

2. **Customer Testimonials with Details:**
```
   ✓ Prevented 3 destructive changes in first week (example metric)
   ✗ "Great product!" - Anonymous
```

3. **Before/After Data:**
```
   ✓ "Lost 12 hours to AI rollback → 0 after guardrails"
```

4. **Authority Logos:**
```
   "As Featured On: Product Hunt, BetaList, Indie Hackers"
```

5. **Real-Time Activity:**
```
   "🔴 37 people joined in last 24 hours"
```

**Implementation for Early Stage:**
```javascript
// Even with 0 users, you can show:
- "Testing with first 50 users"
- "Launching in 2 weeks - 37 early access spots left"
- Quotes from Wizard of Oz participants
```

---

### 1.7 Urgency & Scarcity

**Ethical Scarcity Tactics:**
```
✓ Real Deadline: "Early bird discount ends [date]"
✓ Limited Quantity: "Testing with first 50 users only"
✓ Time-Based: "Price increases after launch"

✗ Fake Countdown: Reset timer on refresh
✗ False Scarcity: "Only 3 left!" (but always 3)
✗ Pressure Tactics: "Your neighbor just bought!"
```

**Implementation:**
```javascript
// Real counter (using backend or localStorage)
const spotsLeft = 50 - totalSignups; // Actual number

// Display
{spotsLeft > 0 && (
  <p>⚡ Only {spotsLeft} early access spots remaining</p>
)}
```

---

### 1.8 Cognitive Load Reduction

**Minimize Decisions:**
- One clear path forward
- Remove navigation menu
- No external links (until after conversion)
- Simple forms (email only for waitlist)

**Visual Hierarchy:**
```
Most Important → Largest, Boldest, Highest Contrast
Secondary Info → Medium size, regular weight
Tertiary Info → Small, muted color
```

**White Space Usage:**
```css
/* Give elements breathing room */
section { padding: 4rem 0; }      /* Vertical space between sections */
.container { padding: 0 1rem; }   /* Horizontal margins */
.cta { margin: 2rem 0; }          /* Space around CTA */
```

**Why:** Brain processes information faster with proper spacing. Cramped layouts = cognitive overload = bounce.

---

## 2. React Development Standards

### 2.1 Component Structure

**Folder Organization:**
```
src/
├── components/
│   ├── layout/           # Wrappers, containers
│   ├── sections/         # Page sections (Hero, Problem, etc)
│   ├── forms/            # Form components
│   └── ui/               # Reusable UI elements (Button, Input)
├── hooks/                # Custom hooks
├── utils/                # Helper functions
└── constants/            # Config, constants
```

**Component File Structure:**
```javascript
// 1. Imports (external → internal)
import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

// 2. Types/Interfaces (if using TypeScript)
// interface Props { ... }

// 3. Component
export default function Hero() {
  // 3a. Hooks (useState, useEffect, custom hooks)
  const [isLoading, setIsLoading] = useState(false);
  
  // 3b. Event handlers
  const handleClick = () => {
    trackEvent('cta_click');
  };
  
  // 3c. Render
  return (
    <section>
      {/* JSX */}
    </section>
  );
}

// 4. Helper functions (if component-specific)
function formatDate(date) { ... }
```

---

### 2.2 Component Best Practices

**DO:**
```javascript
// ✓ Descriptive component names (PascalCase)
function EmailForm() { ... }

// ✓ Single responsibility
function Button({ children, onClick }) { ... }  // Just a button

// ✓ Props destructuring
function Card({ title, description, icon }) {
  return <div>...</div>
}

// ✓ Early returns
function UserGreeting({ user }) {
  if (!user) return <LoginPrompt />;
  return <h1>Hello, {user.name}</h1>;
}

// ✓ Extract repeated JSX into components
const painPoints = [
  { title: "...", description: "..." }
];
```

**DON'T:**
```javascript
// ✗ Generic names
function Component1() { ... }

// ✗ Too many responsibilities
function SuperComponent() {
  // Handles form, analytics, API calls, rendering...
}

// ✗ Inline objects/arrays (causes re-renders)
<Component style={{ margin: 10 }} />  // New object every render!

// ✗ Nested ternaries (hard to read)
{isLoading ? <Spinner /> : user ? <Profile /> : isError ? <Error /> : null}
```

---

### 2.3 State Management

**When to use useState:**
```javascript
// ✓ Component-local state
const [isOpen, setIsOpen] = useState(false);

// ✓ Form inputs
const [email, setEmail] = useState('');

// ✓ UI state (loading, error)
const [status, setStatus] = useState('idle');
```

**When NOT to use useState:**
```javascript
// ✗ Derived data (use regular variables)
const fullName = firstName + ' ' + lastName;  // Don't use state!

// ✗ Props (already reactive)
function Child({ name }) {
  const [localName, setLocalName] = useState(name);  // Unnecessary!
  return <div>{name}</div>;  // Just use prop directly
}
```

**State Naming Convention:**
```javascript
// Boolean states: is/has/should prefix
const [isLoading, setIsLoading] = useState(false);
const [hasError, setHasError] = useState(false);

// Counts: plural or 'count' suffix
const [items, setItems] = useState([]);
const [itemCount, setItemCount] = useState(0);

// Status: explicit states
const [status, setStatus] = useState('idle');  // 'idle' | 'loading' | 'success' | 'error'
```

---

### 2.4 Hooks Rules

**Always follow:**

1. **Only call hooks at top level** (not in loops, conditions, nested functions)
```javascript
// ✓ CORRECT
function Component() {
  const [state, setState] = useState(0);
  
  if (condition) {
    // Use state here
  }
}

// ✗ WRONG
function Component() {
  if (condition) {
    const [state, setState] = useState(0);  // Conditional hook!
  }
}
```

2. **Only call hooks in React functions** (components or custom hooks)
```javascript
// ✓ CORRECT
function useCustomHook() {
  const [value, setValue] = useState(0);
  return value;
}

// ✗ WRONG
function regularFunction() {
  const [value, setValue] = useState(0);  // Not a React function!
}
```

3. **Custom hooks start with 'use'**
```javascript
// ✓ CORRECT
function useWindowSize() { ... }
function useLocalStorage() { ... }

// ✗ WRONG
function getWindowSize() { ... }  // Not prefixed with 'use'
```

---

### 2.5 Performance Optimization

**Memoization (use sparingly!):**
```javascript
// ✓ Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return items.reduce((acc, item) => acc + item.price, 0);
}, [items]);

// ✓ Memoize callback functions passed to children
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// ✗ Don't memoize everything (overhead > benefit)
const name = useMemo(() => firstName + lastName, [firstName, lastName]);  // Overkill!
```

**Code Splitting:**
```javascript
// Lazy load components not needed immediately
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

**List Rendering:**
```javascript
// ✓ Use stable keys (IDs from data)
{items.map(item => <Item key={item.id} {...item} />)}

// ✗ Don't use array index as key (causes bugs)
{items.map((item, index) => <Item key={index} {...item} />)}

// ✗ Don't use random values
{items.map(item => <Item key={Math.random()} {...item} />)}
```

---

### 2.6 Error Handling

**Error Boundaries:**
```javascript
// Create error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // Send to error tracking service (Sentry, LogRocket)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please refresh.</h1>;
    }
    return this.props.children;
  }
}

// Wrap app
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

**Async Error Handling:**
```javascript
async function submitEmail(email) {
  try {
    setStatus('loading');
    await emailjs.send(...);
    setStatus('success');
    trackEvent('signup_success');
  } catch (error) {
    setStatus('error');
    console.error('Submission failed:', error);
    trackEvent('signup_error', { error: error.message });
  }
}
```

---

### 2.7 VS Code Extension Snippet (CodeGuard Context)

**Purpose:** Example of intercepting risky changes in a VS Code extension.

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.workspace.onDidChangeTextDocument((event) => {
    if (!event.contentChanges.length) return;

    const changeCount = event.contentChanges.length;
    if (changeCount > 5) {
      vscode.window.showWarningMessage(
        `CodeGuard: Risky change detected (${changeCount} edits)`,
        'Review Diff',
        'Allow Anyway'
      );
    }
  });

  context.subscriptions.push(disposable);
}
```

---

## 3. Tailwind CSS Guidelines

### 3.1 Utility-First Methodology

**Philosophy:**
Instead of writing custom CSS, compose styles from utility classes.

**Example:**
```html
<!-- ✓ Tailwind Way -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Click me
</button>

<!-- ✗ Traditional CSS Way -->
<button class="custom-button">Click me</button>
<style>
  .custom-button {
    padding: 0.5rem 1rem;
    background: blue;
    color: white;
    border-radius: 0.25rem;
  }
  .custom-button:hover {
    background: darkblue;
  }
</style>
```

**Benefits:**
- No context switching (CSS in same file as HTML)
- No naming conflicts (no need for BEM, SMACSS)
- Smaller bundle (purge removes unused styles)
- Consistent spacing/colors (design system enforced)

---

### 3.2 Responsive Design Pattern

**Mobile-First Approach:**

Tailwind breakpoints are **min-width** (mobile-first):
```
sm:  640px   (small tablets)
md:  768px   (tablets)
lg:  1024px  (laptops)
xl:  1280px  (desktops)
2xl: 1536px  (large desktops)
```

**Implementation:**
```html
<!-- Base = mobile, then override for larger screens -->
<div class="text-sm       sm:text-base    md:text-lg      lg:text-xl">
  <!--     mobile (14px)   tablet (16px)  laptop (18px)  desktop (20px) -->
  Responsive text
</div>

<!-- Grid example -->
<div class="grid grid-cols-1   md:grid-cols-2   lg:grid-cols-3">
  <!--        1 column       2 columns      3 columns -->
</div>
```

**CodeGuard Pattern:**
```html
<section class="py-16 md:py-24">
  <!-- Mobile: 64px padding, Desktop: 96px -->
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Responsive horizontal padding -->
    
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <!-- Mobile: 1 col, 32px gap
           Tablet: 2 cols, 32px gap
           Desktop: 2 cols, 48px gap -->
    </div>
  </div>
</section>
```

---

### 3.3 Custom Configuration

**tailwind.config.js Best Practices:**
```javascript
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // All component files
  ],
  theme: {
    extend: {  // Use 'extend' to add, not replace defaults
      colors: {
        // Brand colors
        primary: {
          50: '#f8fafc',
          500: '#0f172a',
          600: '#1e293b',
          700: '#334155',
        },
        // Don't override default colors (slate, gray, etc)
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        // Keep default serif, mono
      },
      // Add custom utilities sparingly
      spacing: {
        '128': '32rem',  // Only if you need it
      }
    },
  },
  plugins: [],  // Add plugins only when needed
}
```

**When to customize:**
- ✓ Brand colors (primary, accent)
- ✓ Custom fonts
- ✓ Project-specific spacing (if defaults insufficient)

**When NOT to customize:**
- ✗ Don't recreate existing utilities
- ✗ Don't add one-off values (use arbitrary values: `w-[347px]`)
- ✗ Don't override semantic colors (red, green, etc)

---

### 3.4 Component Extraction

**When to extract components:**
```javascript
// ✗ Repeating same utility combinations
<button class="px-4 py-2 bg-blue-500 text-white rounded">Button 1</button>
<button class="px-4 py-2 bg-blue-500 text-white rounded">Button 2</button>
<button class="px-4 py-2 bg-blue-500 text-white rounded">Button 3</button>

// ✓ Extract into React component
function Button({ children }) {
  return (
    <button class="px-4 py-2 bg-blue-500 text-white rounded">
      {children}
    </button>
  );
}

// ✗ DON'T create @apply classes (defeats Tailwind purpose)
/* styles.css */
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}
```

**3-Repetition Rule:**
If you use same combination **3+ times**, extract to React component.

---

### 3.5 Class Organization

**Order classes by category:**
```html
<!-- Layout → Box Model → Typography → Visual → Misc -->
<div class="
  flex items-center justify-between        <!-- Layout -->
  w-full max-w-4xl mx-auto p-4            <!-- Box Model -->
  text-lg font-bold text-slate-900        <!-- Typography -->
  bg-white border-2 border-gray-200       <!-- Visual -->
  rounded-lg shadow-lg                     <!-- Visual -->
  hover:shadow-xl transition-shadow       <!-- Interactive -->
">
```

**Use Prettier Plugin:**
```bash
npm install -D prettier prettier-plugin-tailwindcss

# .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

This auto-sorts classes for consistency.

---

### 3.6 Dark Mode (Optional)

**If implementing dark mode:**
```javascript
// tailwind.config.js
export default {
  darkMode: 'class',  // or 'media' for system preference
  // ...
}
```
```html
<!-- Light + Dark variants -->
<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
  Content adapts to theme
</div>
```

**For CodeGuard MVP:** Skip dark mode initially. Add post-launch if requested.

---

## 4. Performance Optimization

### 4.1 Lighthouse Targets

**Minimum Acceptable Scores:**
```
Performance:     90+
Accessibility:   100
Best Practices:  95+
SEO:             100
```

**How to Test:**
```bash
# Chrome DevTools
1. Open DevTools (F12)
2. Lighthouse tab
3. Generate report (Mobile + Desktop)
4. Fix critical issues first (red alerts)
```

---

### 4.2 Core Web Vitals

**Critical Metrics:**

**LCP (Largest Contentful Paint):** <2.5s
- What: Time until largest element visible
- How to optimize:
  - Optimize hero image (WebP, lazy load)
  - Remove render-blocking resources
  - Use font-display: swap

**FID (First Input Delay):** <100ms
- What: Time until page responds to interaction
- How to optimize:
  - Minimize JavaScript execution
  - Code split large bundles
  - Use web workers for heavy tasks

**CLS (Cumulative Layout Shift):** <0.1
- What: Visual stability (no layout jumps)
- How to optimize:
  - Set width/height on images
  - Reserve space for dynamic content
  - Avoid injecting content above viewport

---

### 4.3 Image Optimization

**Format Selection:**
```
Use Case              Format      Why
---------------------------------------------
Photos               WebP        90% smaller than JPEG
Icons/Logos          SVG         Scalable, tiny size
Transparency needed  PNG         Lossless with alpha
GIFs                 MP4/WebM    90% smaller, better quality
```

**Implementation:**
```html
<!-- Responsive images -->
<img 
  src="hero.webp" 
  srcset="hero-mobile.webp 640w, 
          hero-tablet.webp 1024w,
          hero-desktop.webp 1920w"
  sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw,
         800px"
  alt="CodeGuard warning modal"
  width="1920"
  height="1080"
  loading="lazy"  <!-- Lazy load below-fold images -->
/>
```

**Optimization Tools:**
```bash
# CLI tools
npm install -g sharp-cli
sharp -i input.jpg -o output.webp --webp-quality 80

# Online tools
- Squoosh.app (Google)
- TinyPNG.com
- ImageOptim (Mac)
```

---

### 4.4 Font Optimization

**Google Fonts Best Practice:**
```html
<!-- Preconnect to font provider -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load only needed weights -->
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```

**`display=swap` parameter:**
- Shows fallback font immediately
- Swaps to web font when loaded
- Prevents FOIT (Flash of Invisible Text)

**Self-Hosting Fonts (Better Performance):**
```bash
# Download fonts locally
npm install @fontsource/ibm-plex-sans

# Import in main.jsx
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/inter/700.css';
```

---

### 4.5 Code Splitting

**Vite Automatic Code Splitting:**

Vite automatically splits code by route. For manual control:
```javascript
// Lazy load heavy components
import { lazy, Suspense } from 'react';

const HeavyChart = lazy(() => import('./components/HeavyChart'));

function Analytics() {
  return (
    <Suspense fallback={<div>Loading chart...</div>}>
      <HeavyChart />
    </Suspense>
  );
}
```

**When to split:**
- ✓ Large libraries (chart.js, video players)
- ✓ Below-fold content (testimonials, FAQs)
- ✓ Conditional features (chat widget, A/B tests)

**When NOT to split:**
- ✗ Small components (<10KB)
- ✗ Above-fold critical content
- ✗ Everything (too many requests hurt performance)

---

### 4.6 Bundle Size Optimization

**Analyze Bundle:**
```bash
npm run build

# Visualize bundle
npx vite-bundle-visualizer
```

**Common Bloat Sources:**
```javascript
// ✗ Importing entire library
import _ from 'lodash';  // 70KB!

// ✓ Import only what you need
import debounce from 'lodash/debounce';  // 2KB

// ✗ Importing icons library
import { IconName } from 'react-icons/fa';  // Bundles ALL icons!

// ✓ Use lucide-react (tree-shakeable)
import { Shield, Zap } from 'lucide-react';  // Only imports these 2
```

**Tree Shaking:**
Vite automatically removes unused code. To ensure it works:
```javascript
// ✓ Use ES6 imports/exports
export function myFunction() { ... }

// ✗ Don't use CommonJS
module.exports = { myFunction };
```

---

## 5. Accessibility (a11y)

### 5.1 Semantic HTML

**Use correct HTML elements:**
```html
<!-- ✓ CORRECT -->
<header>
  <nav>
    <ul>
      <li><a href="#features">Features</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h1>Main Heading</h1>
    <p>Content</p>
  </section>
</main>

<footer>
  <p>&copy; 2025 Company</p>
</footer>

<!-- ✗ WRONG -->
<div class="header">
  <div class="nav">
    <div class="link">Features</div>
  </div>
</div>
```

**Why:** Screen readers use semantic HTML to navigate. `<div>` soup is inaccessible.

---

### 5.2 ARIA Labels

**When to use ARIA:**
```html
<!-- Icons without text need labels -->
<button aria-label="Close dialog">
  <X size={24} />
</button>

<!-- Decorative images should be hidden -->
<img src="decoration.png" alt="" role="presentation" />

<!-- Form inputs need labels -->
<label for="email">Email Address</label>
<input id="email" type="email" required />

<!-- Or use aria-label if no visible label -->
<input 
  type="email" 
  aria-label="Email address" 
  placeholder="your@email.com" 
/>
```

**ARIA Rules:**
1. **No ARIA is better than bad ARIA** (semantic HTML first)
2. **Don't override native semantics** (`<button role="link">` - why?)
3. **Interactive elements need accessible names**

---

### 5.3 Keyboard Navigation

**All interactive elements must be keyboard-accessible:**
```html
<!-- ✓ Native buttons are keyboard-accessible -->
<button onClick={handleClick}>Click me</button>

<!-- ✗ Div "buttons" are NOT -->
<div onClick={handleClick}>Click me</div>

<!-- ✓ If you MUST use div, add: -->
<div 
  role="button" 
  tabIndex={0} 
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Click me
</div>
```

**Tab Order:**
```html
<!-- Natural tab order (top to bottom) -->
<input />  <!-- Tab 1 -->
<button />  <!-- Tab 2 -->

<!-- Force specific order (avoid unless necessary) -->
<input tabIndex={1} />
<input tabIndex={3} />
<input tabIndex={2} />  <!-- Confusing! Don't do this -->
```

**Focus Indicators:**
```css
/* ✓ Always show focus (don't remove outline) */
button:focus {
  outline: 2px solid blue;
  outline-offset: 2px;
}

/* ✗ Never do this */
button:focus {
  outline: none;  /* WCAG violation! */
}

/* ✓ Custom focus styles are OK */
button:focus-visible {
  ring: 2px solid slate-500;
}
```

---

### 5.4 Color Contrast

**WCAG AA Standards:**
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

**Test Contrast:**
```
Tools:
- Chrome DevTools (Lighthouse)
- WebAIM Contrast Checker
- Stark plugin (Figma)
```

**CodeGuard Palette Check:**
```
Background: white (#FFFFFF)
Text: slate-900 (#0f172a)
Ratio: 18.8:1 ✓ (exceeds 4.5:1)

CTA Button: slate-900 (#0f172a)
Button Text: white (#FFFFFF)
Ratio: 18.8:1 ✓ (exceeds 4.5:1)
```

---

### 5.5 Form Accessibility

**Best Practices:**
```html
<!-- Always associate labels with inputs -->
<label htmlFor="email-input">Email Address</label>
<input 
  id="email-input" 
  type="email"
  required
  aria-required="true"
  aria-invalid={errors.email ? "true" : "false"}
  aria-describedby={errors.email ? "email-error" : undefined}
/>

<!-- Show errors accessibly -->
{errors.email && (
  <p id="email-error" role="alert" className="text-red-600">
    {errors.email.message}
  </p>
)}

<!-- Provide helpful hints -->
<input 
  type="password"
  aria-describedby="password-requirements"
/>
<p id="password-requirements">
  Must be at least 8 characters
</p>
```

**Error Announcements:**
```javascript
// Announce errors to screen readers
const [errors, setErrors] = useState({});

useEffect(() => {
  if (Object.keys(errors).length > 0) {
    // Screen reader announcement
    const announcement = Object.values(errors).join('. ');
    // Use live region or aria-live
  }
}, [errors]);
```

---

### 5.6 Mobile Accessibility

**Touch Targets:**
```
Minimum size: 44x44px (Apple)
              48x48px (Google)
              
Spacing: 8px between targets
```
```html
<!-- ✓ Large enough for thumbs -->
<button className="min-h-[44px] min-w-[44px] p-3">
  Tap me
</button>

<!-- ✗ Too small -->
<button className="text-xs p-1">
  Tap me
</button>
```

**Input Types (Mobile Keyboards):**
```html
<!-- Triggers numeric keyboard -->
<input type="tel" inputMode="numeric" />

<!-- Triggers email keyboard (@ key) -->
<input type="email" inputMode="email" />

<!-- Triggers URL keyboard (.com key) -->
<input type="url" inputMode="url" />
```

---

## 6. SEO Implementation

### 6.1 Meta Tags Essentials

**Priority Order:**

1. **Title Tag** (most important)
```html
<title>CodeGuard - Stop AI from destroying your code | VS Code extension</title>

Rules:
- 50-60 characters (Google displays ~60)
- Front-load keywords
- Include brand name
- Unique per page
```

2. **Meta Description**
```html
<meta name="description" content="CodeGuard intercepts AI-generated diffs, flags dangerous changes, and blocks destructive edits before they apply.">

Rules:
- 150-160 characters
- Include CTA
- Natural language (not keyword stuffed)
- Unique per page
```

3. **Open Graph (Social Sharing)**
```html
<meta property="og:title" content="CodeGuard - Stop AI from destroying your code">
<meta property="og:description" content="The safety net for AI coding assistants.">
<meta property="og:image" content="https://codeguard.dev/og-image.png">
<meta property="og:url" content="https://codeguard.dev/">
<meta property="og:type" content="website">
```

4. **Twitter Card**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="CodeGuard - Stop AI from destroying your code">
<meta name="twitter:description" content="The safety net for AI coding assistants.">
<meta name="twitter:image" content="https://codeguard.dev/og-image.png">
```

---

### 6.2 Structured Data (JSON-LD)

**Why:** Helps Google understand your page content → rich snippets in search results
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CodeGuard",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Windows, macOS, Linux",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/PreOrder"
  },
  "description": "VS Code extension that blocks destructive AI changes before they apply"
}
</script>
```

**Test Schema:**
- Google Rich Results Test
- Schema.org Validator

---

### 6.3 URL Structure

**Best Practices:**
```
✓ https://codeguard.dev/
✓ https://codeguard.dev/features
✓ https://codeguard.dev/pricing

✗ https://codeguard.dev/?page=home
✗ https://codeguard.dev/index.php?id=123
✗ https://codeguard.dev/FeAtUrEs (inconsistent casing)
```

**Rules:**
- Lowercase only
- Hyphens for spaces (not underscores)
- Short and descriptive
- No parameters for main pages
- HTTPS (required for trust)

---

### 6.4 Heading Hierarchy

**Correct Structure:**
```html
<h1>Main Page Title</h1>  <!-- Only ONE H1 per page -->
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
    <h3>Subsection 1.2</h3>
  <h2>Section 2</h2>
    <h3>Subsection 2.1</h3>

<!-- ✗ Don't skip levels -->
<h1>Title</h1>
<h3>Oops, skipped H2!</h3>

<!-- ✗ Don't use headings for styling -->
<h3 class="text-xs">This should be a <p> tag</h3>
```

**CodeGuard Example:**
```html
<h1>Stop AI from destroying your code</h1>
  <h2>AI changes are fast. Recovery is not.</h2>
  <h2>How CodeGuard blocks destructive changes</h2>
    <h3>Intercept</h3>
    <h3>Analyze risk</h3>
  <h2>Protect code without slowing down</h2>
```

---

### 6.5 Image SEO

**Alt Text Best Practices:**
```html
<!-- ✓ Descriptive alt text -->
<img src="dashboard.png" alt="CodeGuard warning modal highlighting a 156-line deletion and out-of-scope edit">

<!-- ✗ Keyword stuffing -->
<img src="dashboard.png" alt="AI destructive change prevention VS Code extension risk analysis tool dashboard">

<!-- ✓ Decorative images -->
<img src="decoration.svg" alt="" role="presentation">

<!-- ✗ Missing alt -->
<img src="important.png">  <!-- Screen readers say "image" with no context -->
```

**File Naming:**
```
✓ danger-warning-modal.png
✓ diff-risk-analysis.jpg

✗ IMG_1234.png
✗ Screenshot 2025-01-01.png
```

---

### 6.6 Internal Linking

**Why:** Helps Google understand site structure + distributes page authority
```html
<!-- ✓ Descriptive anchor text -->
<a href="/features">See how CodeGuard blocks destructive changes</a>

<!-- ✗ Generic anchor text -->
<a href="/features">Click here</a>
<a href="/features">Read more</a>

<!-- ✗ Over-optimization -->
<a href="/features">best AI diff risk tool for developers 2025</a>
```

**For Single-Page Landing:**
- Link to sections: `href="#problem"`, `href="#solution"`
- Use smooth scroll for better UX

---

## 7. Analytics & Privacy

### 7.1 Privacy-First Analytics

**Plausible vs Google Analytics:**
```
Plausible:
✓ No cookies (GDPR/CCPA compliant)
✓ Lightweight (< 1KB script)
✓ Simple dashboard
✓ Privacy-focused
✗ Less detailed data
✗ Paid ($9/mo for 10k pageviews)

Google Analytics 4:
✓ Free
✓ Very detailed data
✓ Integration with Google Ads
✗ Requires cookie consent
✗ Complex setup
✗ Slower (45KB script)
```

**Recommendation for CodeGuard:** Use both
- Plausible: Main analytics (privacy-friendly)
- GA4: Backup for detailed funnels (optional)

---

### 7.2 Event Tracking Strategy

**What to Track (Priority Order):**

1. **Conversion Events** (Critical)
```javascript
trackEvent('waitlist_signup_success');
trackEvent('waitlist_signup_error');
```

2. **Engagement Events** (Important)
```javascript
trackEvent('scroll_50');  // Scrolled halfway
trackEvent('scroll_100'); // Read full page
trackEvent('time_30s');   // Spent 30+ seconds
trackEvent('cta_click', { location: 'hero' | 'final' });
```

3. **Traffic Sources** (Automatic)
```
- Referrer (where they came from)
- UTM parameters (campaign tracking)
- Device (mobile/desktop)
```

**Event Naming Convention:**
```
Format: [object]_[action]_[result]

Examples:
✓ waitlist_signup_success
✓ email_focus
✓ cta_click
✓ video_play

✗ click (too vague)
✗ userSignedUpForWaitlist (too long)
```

---

### 7.3 Cookie Consent (GDPR/CCPA)

**When Required:**
- Using Google Analytics (tracks users)
- Using Facebook Pixel
- Using any tracking cookies

**When NOT Required:**
- Plausible (no cookies)
- EmailJS (no tracking)
- Essential cookies only (session, auth)

**Simple Implementation:**
```javascript
// Use cookie consent library
import CookieConsent from 'react-cookie-consent';

function App() {
  return (
    <>
      <YourApp />
      
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="analytics-consent"
        onAccept={() => {
          // Initialize GA4 only after consent
          initializeGA4();
        }}
      >
        We use cookies to improve your experience. No personal data is sold.
      </CookieConsent>
    </>
  );
}
```

**For CodeGuard MVP:** 
If using only Plausible → No consent banner needed.
If using GA4 → Add simple banner.

---

### 7.4 UTM Parameters

**Track Campaign Performance:**
```
URL Structure:
https://codeguard.dev/?utm_source=reddit&utm_medium=cpc&utm_campaign=launch

Parameters:
utm_source:   Where traffic came from (reddit, producthunt, facebook)
utm_medium:   Type of traffic (cpc, organic, email)
utm_campaign: Specific campaign name (launch, beta, holiday)
utm_content:  A/B test variant (headline-a, headline-b)
utm_term:     Keyword (paid search only)
```

**CodeGuard Campaign URLs:**
```
Product Hunt:
https://codeguard.dev/?utm_source=producthunt&utm_medium=launch&utm_campaign=jan2025

Reddit (r/Cursor):
https://codeguard.dev/?utm_source=reddit&utm_medium=organic&utm_campaign=launch&utm_content=cursor

Hacker News:
https://codeguard.dev/?utm_source=hn&utm_medium=organic&utm_campaign=launch&utm_content=show-hn
```

**URL Builder:** ga-dev-tools.google/campaign-url-builder

---

## 8. Security Best Practices

### 8.1 Form Security

**Email Form Protection:**
```javascript
// 1. Honeypot field (catches bots)
<input 
  type="text" 
  name="bot-field" 
  className="hidden" 
  tabIndex={-1}
  autoComplete="off"
/>

// 2. Check honeypot before submit
const onSubmit = async (data) => {
  if (data['bot-field']) {
    // Bot detected, don't submit
    return;
  }
  // Continue with real submission
};

// 3. Rate limiting (browser-side basic)
const lastSubmit = localStorage.getItem('lastSubmit');
const now = Date.now();
if (lastSubmit && (now - lastSubmit < 60000)) {
  alert('Please wait before submitting again');
  return;
}
localStorage.setItem('lastSubmit', now);

// 4. Email validation (regex)
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
if (!emailRegex.test(email)) {
  setError('Invalid email format');
  return;
}
```

---

### 8.2 Content Security Policy (CSP)

**What:** Prevent XSS attacks by controlling what resources can load
```html
<!-- In index.html or server headers -->
<meta http-equiv="Content-Security-Policy" 
      content="
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://plausible.io;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' data: https:;
        connect-src 'self' https://api.emailjs.com;
      ">
```

**For Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://plausible.io"
        }
      ]
    }
  ]
}
```

---

### 8.3 HTTPS & Security Headers

**Required Headers:**
```json
{
  "headers": [
    {
      "key": "X-Content-Type-Options",
      "value": "nosniff"
    },
    {
      "key": "X-Frame-Options",
      "value": "DENY"
    },
    {
      "key": "X-XSS-Protection",
      "value": "1; mode=block"
    },
    {
      "key": "Referrer-Policy",
      "value": "strict-origin-when-cross-origin"
    },
    {
      "key": "Permissions-Policy",
      "value": "camera=(), microphone=(), geolocation=()"
    }
  ]
}
```

**Vercel Auto-Provides:**
- HTTPS certificate (automatic)
- HTTP → HTTPS redirect
- HSTS header (force HTTPS)

---

### 8.4 Environment Variables

**Never Commit Secrets:**
```bash
# ✓ Store in .env (gitignored)
VITE_EMAILJS_SERVICE_ID=service_abc123

# ✗ Never hardcode in code
const serviceId = 'service_abc123';  // Exposed in build!
```

**.gitignore Must Include:**
```
.env
.env.local
.env.production
```

**Vite Environment Variables:**
```javascript
// Only VITE_ prefixed vars are exposed to the browser
const apiKey = import.meta.env.VITE_API_KEY;  // ✓ Safe

// Server-only vars (no VITE_ prefix)
const secretKey = process.env.SECRET_KEY;  // ✓ Not exposed
```

---

## 9. Mobile-First Design

### 9.1 Mobile Statistics

**Why Mobile-First:**
- 83% of landing page visits are mobile (2024 data)
- Google uses mobile-first indexing (ranks mobile version)
- Easier to scale up than down

**CodeGuard Target Devices:**
```
iPhone SE:       320px width
iPhone 12/13:    390px width
iPad:            768px width
Desktop:         1024px+ width
```

---

### 9.2 Touch-Friendly Design

**Tap Targets:**
```css
/* Minimum sizes */
button { min-height: 44px; min-width: 44px; }  /* iOS guideline */
button { min-height: 48px; min-width: 48px; }  /* Android guideline */

/* Spacing between targets */
.button-group button { margin: 8px; }
```

**Example:**
```html
<!-- ✓ Large enough for thumbs -->
<button className="px-6 py-3 text-lg">
  Join Waitlist
</button>

<!-- ✗ Too small -->
<button className="px-2 py-1 text-xs">
  Join Waitlist
</button>
```

---

### 9.3 Mobile Typography

**Scale Down Gracefully:**
```html
<!-- Desktop: 60px, Mobile: 36px -->
<h1 className="text-4xl md:text-6xl">
  Stop AI from destroying your code
</h1>

<!-- Desktop: 20px, Mobile: 16px -->
<p className="text-base md:text-xl">
  Description text
</p>
```

**Line Length:**
```
Optimal: 50-75 characters per line
Mobile: 35-50 characters (narrower screens)

Implementation:
<p className="max-w-prose">  <!-- Tailwind: ~65ch -->
  Long paragraph text...
</p>
```

---

### 9.4 Mobile Navigation

**For Single-Page Landing:**
```html
<!-- Sticky CTA (always visible) -->
<div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg md:hidden">
  <button className="w-full py-3">
    Join Waitlist
  </button>
</div>

<!-- Floating CTA (Z-index managed) -->
<button className="fixed bottom-4 right-4 md:hidden z-50">
  Get Started
</button>
```

**Avoid:**
- Hamburger menus (unnecessary for single-page)
- Horizontal scrolling
- Hover states (no hover on mobile)

---

### 9.5 Mobile Forms

**Optimizations:**
```html
<!-- Prevent zoom on input focus (iOS) -->
<input 
  type="email"
  className="text-base"  <!-- 16px minimum prevents zoom -->
  placeholder="your@email.com"
/>

<!-- Use correct input types (triggers right keyboard) -->
<input type="email" inputMode="email" />      <!-- @ key visible -->
<input type="tel" inputMode="numeric" />      <!-- Number pad -->
<input type="url" inputMode="url" />          <!-- .com key -->

<!-- Autocomplete attributes (helps autofill) -->
<input 
  type="email" 
  autoComplete="email"
  name="email"
/>
```

---

### 9.6 Responsive Images

**Different Images for Different Screens:**
```html
<!-- Show different images based on screen size -->
<picture>
  <source 
    media="(max-width: 640px)" 
    srcset="hero-mobile.webp"
  />
  <source 
    media="(max-width: 1024px)" 
    srcset="hero-tablet.webp"
  />
  <img 
    src="hero-desktop.webp" 
    alt="CodeGuard warning modal"
    width="1920"
    height="1080"
  />
</picture>

<!-- Or hide on mobile (save bandwidth) -->
<img 
  src="hero.webp" 
  className="hidden md:block"  <!-- Only show on tablet+ -->
/>
```

---

## 10. Form Design & UX

### 10.1 Form Field Best Practices

**Input Design:**
```html
<!-- ✓ Good input field -->
<div className="space-y-2">
  <label 
    htmlFor="email" 
    className="block text-sm font-medium text-slate-700"
  >
    Email Address
  </label>
  <input
    id="email"
    type="email"
    autoComplete="email"
    placeholder="your@email.com"
    className="
      w-full px-4 py-3 
      text-base                      /* Prevent zoom on iOS */
      border-2 border-slate-200 
      rounded-lg
      focus:border-slate-600         /* Visual feedback */
      focus:ring-2 focus:ring-slate-200
      transition-colors
    "
  />
  {error && (
    <p className="text-sm text-red-600">{error}</p>
  )}
</div>
```

**What Makes a Good Input:**
1. Clear label (not just placeholder)
2. Large enough (min 44px height)
3. Visible focus state
4. Error messaging below field
5. Appropriate input type
6. Autocomplete enabled

---

### 10.2 Validation UX

**When to Validate:**
```javascript
// ✓ Validate on blur (after user leaves field)
<input 
  onBlur={validateEmail}
  onChange={clearError}  // Clear error as they type
/>

// ✗ Don't validate on every keystroke
<input onChange={validateEmail} />  // Annoying!

// ✓ Validate on submit (final check)
const onSubmit = (data) => {
  const errors = validate(data);
  if (errors) {
    setErrors(errors);
    return;
  }
  // Submit
};
```

**Error Message Best Practices:**
```javascript
// ✓ Specific, helpful errors
"Please enter a valid email address"
"Email is required"

// ✗ Generic, unhelpful errors
"Invalid input"
"Error"
"Field is required"  // Which field?

// ✓ Show errors near the field
<input />
{error && <p className="text-red-600 text-sm">{error}</p>}

// ✗ Show errors at top of form only
```

---

### 10.3 Loading States

**Button States:**
```javascript
function SubmitButton({ isLoading, isSuccess }) {
  return (
    <button
      type="submit"
      disabled={isLoading || isSuccess}
      className={`
        px-8 py-3 font-semibold rounded-lg
        transition-all duration-200
        ${isLoading ? 'opacity-50 cursor-wait' : ''}
        ${isSuccess ? 'bg-green-600' : 'bg-slate-900'}
      `}
    >
      {isLoading && <Spinner className="animate-spin mr-2" />}
      {isSuccess && <Check className="mr-2" />}
      
      {isLoading ? 'Joining...' : 
       isSuccess ? "You're In!" : 
       'Join Waitlist'}
    </button>
  );
}
```

**Full Form States:**
```javascript
const [status, setStatus] = useState('idle');
// 'idle' | 'loading' | 'success' | 'error'

{status === 'loading' && <LoadingSpinner />}
{status === 'success' && <SuccessMessage />}
{status === 'error' && <ErrorMessage />}
```

---

### 10.4 Success/Error Feedback

**Success Message:**
```javascript
{status === 'success' && (
  <div className="
    p-4 bg-green-50 border-2 border-green-200 rounded-lg
    flex items-center gap-3
  ">
    <CheckCircle className="text-green-600" size={24} />
    <div>
      <p className="font-semibold text-green-900">
        🎉 You're on the list!
      </p>
      <p className="text-sm text-green-700">
        Check your email for confirmation.
      </p>
    </div>
  </div>
)}
```

**Error Message:**
```javascript
{status === 'error' && (
  <div className="
    p-4 bg-red-50 border-2 border-red-200 rounded-lg
    flex items-center gap-3
  ">
    <AlertCircle className="text-red-600" size={24} />
    <div>
      <p className="font-semibold text-red-900">
        Oops! Something went wrong
      </p>
      <p className="text-sm text-red-700">
        Please try again or contact support.
      </p>
    </div>
  </div>
)}
```

---

### 10.5 Autofill Optimization

**Help Browsers Autofill Correctly:**
```html
<!-- Email -->
<input 
  type="email"
  name="email"
  autoComplete="email"
  id="email"
/>

<!-- Name -->
<input 
  type="text"
  name="name"
  autoComplete="name"
  id="name"
/>

<!-- Phone -->
<input 
  type="tel"
  name="phone"
  autoComplete="tel"
  id="phone"
/>

<!-- Credit Card (if needed later) -->
<input 
  type="text"
  name="card-number"
  autoComplete="cc-number"
  id="card"
/>
```

**Don't Fight Autofill:**
```html
<!-- ✗ Disabling autofill frustrates users -->
<input autoComplete="off" />  <!-- Browsers ignore this anyway -->

<!-- ✓ Work with autofill -->
<input autoComplete="email" />
```

---

## 11. Testing Checklist

### 11.1 Functional Testing

**Before Launch:**

- [ ] Email form submits successfully
- [ ] Email arrives in inbox (check spam folder too)
- [ ] Validation shows correct errors
- [ ] Success message displays after submit
- [ ] Error message displays if submission fails
- [ ] Form can't be submitted multiple times rapidly
- [ ] All CTAs lead to correct action
- [ ] External links open in new tab (if any)

---

### 11.2 Cross-Browser Testing

**Test On:**

- [ ] Chrome (latest) - 65% market share
- [ ] Safari (latest) - 20% market share
- [ ] Firefox (latest) - 5% market share
- [ ] Edge (latest) - 5% market share
- [ ] Mobile Safari (iOS) - Critical for iPhone users
- [ ] Chrome Mobile (Android) - Critical for Android

**Use BrowserStack or LambdaTest for testing if you don't have all devices.**

---

### 11.3 Responsive Testing

**Screen Sizes:**

- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 12/13/14)
- [ ] 390px (iPhone 14 Pro)
- [ ] 414px (iPhone Plus models)
- [ ] 768px (iPad Portrait)
- [ ] 1024px (iPad Landscape / Small Laptop)
- [ ] 1280px (Desktop)
- [ ] 1920px (Large Desktop)

**Chrome DevTools:**
```
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
Test responsive design + throttle network to 3G
```

---

### 11.4 Performance Testing

**Run Lighthouse Audit:**
```
Chrome DevTools → Lighthouse → Generate Report

Target Scores:
Performance:    90+
Accessibility:  100
Best Practices: 95+
SEO:            100
```

**Fix Priority:**
1. Red (0-49) - Critical, fix immediately
2. Orange (50-89) - Important, fix before launch
3. Green (90-100) - Good, monitor

**Common Issues:**
- Large images (compress to WebP)
- Render-blocking resources (defer non-critical CSS/JS)
- No width/height on images (causes CLS)

---

### 11.5 Accessibility Testing

**Automated Tools:**

- [ ] Lighthouse Accessibility Audit
- [ ] axe DevTools (Chrome Extension)
- [ ] WAVE (Web Accessibility Evaluation Tool)

**Manual Tests:**

- [ ] Tab through entire page (keyboard only)
- [ ] All interactive elements reachable via keyboard
- [ ] Focus indicators visible
- [ ] Screen reader test (VoiceOver on Mac, NVDA on Windows)
- [ ] Color contrast sufficient (4.5:1 minimum)
- [ ] Images have descriptive alt text
- [ ] Form inputs have labels

---

### 11.6 Analytics Verification

**Check Tracking Works:**

- [ ] Plausible dashboard shows pageviews
- [ ] Email signup event fires (check Plausible events)
- [ ] UTM parameters captured correctly
- [ ] No JavaScript errors in console
- [ ] Events fire on production URL (not localhost)

**Test Event Tracking:**
```javascript
// Open browser console
// Click CTA button
// Check for: "📊 Analytics Event: cta_click"
```

---

## 12. Launch Day Checklist

### Pre-Launch (Day Before)

- [ ] Final Lighthouse audit (all scores 90+)
- [ ] Test form submission on production URL
- [ ] Check all images load correctly
- [ ] Verify meta tags (Open Graph preview)
- [ ] Test on mobile device (real phone, not just DevTools)
- [ ] Set up analytics dashboards (Plausible, GA4)
- [ ] Prepare social media posts
- [ ] Schedule Product Hunt launch (if applicable)
- [ ] Email list ready for welcome sequence

### Launch Day

- [ ] Submit to Product Hunt (12:01am PST)
- [ ] Post on Reddit (r/Cursor, r/ClaudeAI, r/programming)
- [ ] Share on Twitter/X
- [ ] Post in Facebook Groups
- [ ] Monitor analytics dashboard
- [ ] Respond to comments within 2 hours
- [ ] Watch for errors in browser console (production monitoring)
- [ ] Check email deliverability (confirmations arriving?)

### Post-Launch (First Week)

- [ ] Daily metrics review (signups, conversion rate)
- [ ] Respond to ALL comments/questions
- [ ] A/B test headline if conversion <5%
- [ ] Send welcome email to new signups
- [ ] Reach out for Wizard of Oz participants
- [ ] Document feedback/objections
- [ ] Iterate based on data

---

## 13. Common Mistakes to Avoid

### ❌ Don't:

1. **Use carousel/sliders on hero**
   - 98% of users never click past slide 1
   - Adds unnecessary JavaScript
   - Hurts conversion

2. **Add video autoplay**
   - Annoying on mobile
   - Hurts performance
   - Most users mute/skip anyway

3. **Use modal popups immediately**
   - Interrupts user flow
   - High bounce rate
   - Looks spammy

4. **Stuff keywords in copy**
   - Unreadable for humans
   - Google penalizes keyword stuffing
   - Use natural language

5. **Use generic stock photos**
   - Users ignore them
   - Reduces trust
   - Use real product screenshots or illustrations

6. **Ask for too much information**
   - Waitlist = email only
   - Don't ask for phone, company, etc. yet
   - Reduces friction = higher conversion

7. **Forget mobile testing**
   - 83% of visitors are mobile
   - Desktop-only design = lost conversions

8. **Launch without analytics**
   - Can't improve what you don't measure
   - Set up tracking Day 1

---

## 14. Resources & Tools

### Design

- **Figma** - Design mockups
- **Tailwind UI** - Component examples
- **Heroicons** - Icon library
- **Lucide** - Icon library (recommended)
- **Undraw** - Free illustrations
- **Storyset** - Animated illustrations

### Development

- **Vite** - Build tool (faster than Webpack)
- **React** - UI library
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **EmailJS** - Email service

### Testing

- **Chrome DevTools** - Performance, Lighthouse
- **BrowserStack** - Cross-browser testing
- **PageSpeed Insights** - Google's performance tool
- **GTmetrix** - Performance analysis
- **WebAIM Contrast Checker** - Color contrast

### Analytics

- **Plausible** - Privacy-friendly analytics ($9/mo)
- **Google Analytics 4** - Free, detailed analytics
- **Hotjar** - Heatmaps (optional, later)

### SEO

- **Google Search Console** - Track search performance
- **Ahrefs/Semrush** - Keyword research (paid)
- **Schema.org** - Structured data reference
- **Open Graph Debugger** - Preview social shares

---

*This best practices guide is your reference manual. Don't try to implement everything at once. Focus on high-impact items first (conversion, performance, mobile), then iterate based on user feedback and data.*
