# Market Research - Complete Summary

## Target Audience: "AI-Powered Developer"

### Demographics
- Developers using AI coding assistants (Cursor, Claude Code, Cline, Continue.dev, GitHub Copilot)
- US market size: ~1.5M developers
- Individual contributors and small teams maintaining production code
- Heavy daily usage of AI tools for coding tasks

### Psychographics
- High trust in tooling, low tolerance for code loss
- Frustrated by unpredictable AI behavior
- Prefer technical clarity over marketing language
- Pain severity: CRITICAL (10/10)
- Willingness to pay: 10/10 (insurance for code)

### Core Job-to-be-Done
"Use AI assistants safely without risking code loss, architecture breakage, or out-of-scope edits."

Developers want a guardrail that stays out of the way until something dangerous appears.

---

## Top 3 Pain Points (Detailed)

### Pain #1: Destructive Changes & Data Loss
**Most frequently cited issue across sources. Severity is CRITICAL (10/10).**

Symptoms:
- AI deletes working code or entire files
- Large deletions appear in diffs unexpectedly
- Recovery consumes hours or days

**Quotes:**
- "Cursor destroyed months of development even though I only asked it to update the UI"
- "AI deleted 90% of file content when I asked to update README"

**Typical failure pattern (diff snippet):**
```diff
-export function Navbar() {
-  return (
-    <nav className="navbar">
-      ...
-    </nav>
-  )
-}
+export function Navbar() {}
```

### Pain #2: Out-of-Scope Modifications
**High risk of unintended edits outside the requested scope.**

Symptoms:
- AI modifies unrelated files or config
- Schema and auth files get touched without request
- Prompt boundaries are ignored

**Quote:**
- "Database has reset 3 times in last 24 hours due to AI ignoring rules"

### Pain #3: No Proactive Safety Net
**Existing safety tools act only after damage is done.**

Symptoms:
- Git and backups help only post-factum
- Manual diff review is slow and error-prone
- Developers lose more time debugging AI code than shipping

**Quotes:**
- "There's no safety net - one wrong response destroys everything"
- "I spend MORE time debugging AI code than writing manually"

---

## Developer Language Dictionary

### PAIN Phrases (Red Flags)
1. "Cursor destroyed months of development even though I only asked it to update the UI"
2. "Database has reset 3 times in last 24 hours due to AI ignoring rules"
3. "AI deleted 90% of file content when I asked to update README"
4. "I spend MORE time debugging AI code than writing manually"
5. "There's no safety net - one wrong response destroys everything"

### DESIRE Phrases (Green Flags)
1. "Block dangerous changes before they touch my code"
2. "Show me a risk score when the diff is risky"
3. "Let me restore with one click"
4. "Warn me when AI edits files outside the prompt"
5. "Protect config and schema files by default"

### Language Patterns
**Pain vocabulary:** destroyed, deleted, reset, out of scope, unsafe  
**Desire vocabulary:** safe, guardrails, restore, block, protected

**Key insight:** Developers want proactive prevention, not just a diff viewer.

---

## CX Insights: Red Flags & Hidden Delights

### Top 5 Deal Breakers (Instant Turn-offs)
1. Too many false positives (blocks safe changes)
2. Slow or laggy workflow (delay >3 seconds)
3. Complex setup or manual configuration
4. No trial period for paid tier
5. Intrusive UI that interrupts coding flow

### Top 5 Hidden Delights (Wow Moments)
1. Invisible protection that only appears on risk
2. One-click restore with zero context switching
3. Learns project patterns over time
4. Beautiful diff view with semantic explanations
5. Prevented deletion notifications with line counts

---

## Market Gap Analysis

### Current Competitors
1. **Git (version control)** - post-factum recovery only
2. **Built-in diff views (Cursor/Claude Code/Copilot)** - show changes but no risk analysis
3. **Backup tools (Time Machine, etc.)** - passive, no prevention

### Competitor Weaknesses
- No proactive blocking of dangerous AI changes
- Manual review burden remains on the developer
- No awareness of scope or protected files

### Our Unique Position
**The only tool that analyzes AI-generated changes and blocks destructive edits before they are applied.**

---

## Final Strategic Insight

### Main Market Failure
**No proactive prevention tools exist for AI coding assistants.** Everything is post-factum.

### Main Opportunity Window
Intersection of:
1. Explosive adoption of AI coding assistants
2. Documented destructive change incidents (viral Reddit/HN posts)
3. No built-in safety mechanisms in AI tools
4. High willingness to pay for code insurance

---

## Market Growth Data
- US developers using AI coding assistants: ~1.5M
- Cursor reached 30K paying users in one year
- Pain frequency: HIGH (most mentioned issue)
- Willingness to pay: 10/10 (insurance for code)

*Sources: Reddit (r/Cursor, r/ClaudeAI), Hacker News discussions, GitHub Issues (Cline, Continue.dev), Product Hunt reviews*
