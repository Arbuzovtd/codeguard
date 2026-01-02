# CodeGuard - Project Overview

## Project Goal
Build a high-converting landing page for CodeGuard - a VS Code extension that prevents destructive AI changes by intercepting risky edits before they touch the codebase.

## Timeline
- Landing page: 3 days
- Validation: 2 weeks
- MVP extension: 1 week

## Success Metrics
- 100+ installs
- 10+ testimonials
- 1+ paying customer

## Tech Stack
- Landing page: React 18 + Vite + Tailwind CSS
- Extension: VS Code extension (TypeScript)
- Backend API (Phase 2): Node.js
- Email: EmailJS (free tier, 200 emails/month)
- Hosting: Vercel (free)
- Analytics: Plausible or Google Analytics 4

## Target Audience: "AI-Powered Developer"

### Core Profile
Developers using AI coding assistants (Cursor, Claude Code, Cline, Continue.dev, GitHub Copilot) who:
- Rely on AI daily but have seen it delete or rewrite working code
- Maintain production systems where a bad change is expensive
- Need guardrails that prevent risky edits before they apply
- Want a safety net without slowing their workflow
- US market size: ~1.5M developers

### Psychographic
- High trust in tooling, low tolerance for data loss
- Frustrated by unpredictable AI behavior
- Prefer technical clarity over marketing language
- Willingness to pay: 10/10 (insurance for code)

### Top 3 Pain Points (from Research)
1. **Destructive AI changes** - "AI deleted 90% of file content when I asked to update README".
2. **Out-of-scope edits** - AI modifies unrelated files or core logic despite narrow prompts.
3. **No fast rollback** - "There's no safety net - one wrong response destroys everything".

## Key Differentiator
We're the ONLY tool that:
- Intercepts AI changes before they are applied
- Analyzes risk (large deletions, out-of-scope edits, protected files)
- Blocks destructive operations and creates restore points automatically
- Works invisibly inside VS Code without workflow disruption

## Market Gap (from Final Insight)
Current competitors (Git, built-in diff views, backup tools) are post-factum. Market lacks tools that:
- Proactively analyze AI-generated changes for danger
- Block destructive edits before they land in the codebase
- Provide real-time guardrails for AI coding assistants

## Opportunity Window
Intersection of:
1. Explosive adoption of AI coding assistants (1.5M developers in the US market)
2. Documented cases of destructive AI changes (viral Reddit/HN threads)
3. No built-in safety mechanisms in popular AI tools

CodeGuard should:
- Intercept AI changes before apply
- Provide risk scoring and safe diff previews
- Create restore points automatically for fast rollback
