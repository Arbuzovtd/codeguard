# Product Concept - CodeGuard

*Based on market research identifying the "AI-Powered Developer" segment and the market gap in proactive AI change prevention.*

---

## Executive Summary

**CodeGuard** is a VS Code extension that prevents destructive AI changes by intercepting risky edits before they are applied. It protects developers who use AI coding assistants (Cursor, Claude Code, Cline, Continue.dev, GitHub Copilot) and have seen AI delete working code, modify critical files, or ignore prompt boundaries.

Unlike existing tools (Git, built-in diff views, backup tools) that help only after damage is done, CodeGuard provides a proactive safety gate:
1. Intercepts AI-generated changes before apply
2. Analyzes risk (large deletions, out-of-scope edits, protected files)
3. Blocks destructive operations and creates restore points

**Market Opportunity:** ~1.5M US developers use AI coding assistants, pain severity is CRITICAL (10/10), and willingness to pay for code insurance is 10/10. The market lacks a proactive prevention tool.

---

## 1. Product Essence

### What It Is
**CodeGuard is a protective layer inside VS Code that analyzes AI-generated changes and blocks destructive edits before they touch the codebase.**

### For Whom
**Core Audience:** "AI-Powered Developer" segment

Characteristics:
- Uses AI assistants daily for coding tasks
- Maintains production systems where a bad change is expensive
- Has experienced accidental deletions or out-of-scope edits
- Wants safety without workflow slowdown

Demographics:
- US market size: ~1.5M developers
- Individual contributors and small teams
- Heavy VS Code usage
- Technical tone preferred, low tolerance for marketing fluff

### Main Job-to-be-Done
**"Use AI assistants safely without risking code loss, architecture breakage, or out-of-scope edits."**

Product aims for a state where AI is helpful and the codebase stays protected.

---

## 2. Core Features (MVP)

### Feature 1: Diff Interceptor (Pre-Apply Gate)

**What It Solves:**
- **Pain:** AI deletes or rewrites working code
- **Quote:** "Cursor destroyed months of development even though I only asked it to update the UI"

**How It Works:**
1. AI assistant generates code changes
2. CodeGuard intercepts the diff before apply
3. Developer sees a warning UI with the diff and risk summary
4. Developer can Block, Review Details, or Allow Anyway

**Key Innovation:**
Pre-apply gating, not post-factum recovery.

**Hidden Delight:**
Prevented deletion notifications with line counts.

**Technical Implementation (MVP):**
- VS Code extension intercepting file changes
- Diff preview with risk summary
- One-click block/allow

---

### Feature 2: Danger Analyzer (Risk Analysis and Scope Checking)

**What It Solves:**
- **Pain:** Out-of-scope edits and critical file changes
- **Quote:** "Database has reset 3 times in last 24 hours due to AI ignoring rules"

**How It Works:**
1. Analyze diff size and deletion volume
2. Detect edits outside the requested scope (files not mentioned in prompt)
3. Detect changes to protected files (config, schema, auth, .env)
4. Produce a risk score and explanation

**Key Innovation:**
Rules-based risk detection in MVP, with AI risk scoring in Pro.

**Hidden Delight:**
Semantic explanation of why a change is risky.

**Technical Implementation (MVP):**
- Heuristics for large deletions (>50 lines)
- Protected files list and file-type rules
- Risk scoring (1-10)

---

### Feature 3: Restore Points (Local)

**What It Solves:**
- **Pain:** No fast rollback when AI breaks code
- **Quote:** "There's no safety net - one wrong response destroys everything"

**How It Works:**
1. Before apply, CodeGuard snapshots touched files
2. Stores last 5 local restore points
3. One click restores previous state

**Key Innovation:**
Automatic snapshots tied to AI changes only.

**Hidden Delight:**
Instant restore without context switching.

**Technical Implementation (MVP):**
- Local snapshots per change session
- Restore UI in VS Code

---

### Feature 4: Protected Files and Project Rules

**What It Solves:**
- **Pain:** AI modifies critical files without permission
- **Quote:** "AI deleted 90% of file content when I asked to update README"

**How It Works:**
1. Default protected files list (config, .env, package.json, schema)
2. Developer can add project-specific protected paths
3. Pro tier adds learned project rules and ML risk analysis

**Key Innovation:**
Safe defaults with room for project-specific guardrails.

**Hidden Delight:**
Learns patterns over time to reduce false positives.

**Technical Implementation (MVP):**
- JSON config for protected paths
- Rule evaluation during diff analysis

---

## 3. User Experience Flow

### Scenario: AI Assistant Attempts Destructive Change

**Step 1: Developer Prompt**
```
Developer: "Add a login button to the navbar"
```

**Step 2: AI Generates Changes**
AI proposes edits that delete most of the navbar and touch auth.js.

**Step 3: CodeGuard Intercepts**
CodeGuard analyzes the diff before apply.

**Step 4: Warning Modal**
```
DANGER DETECTED
Risk Score: 9/10

AI attempting:
- Delete 156 lines in navbar.jsx
- Modify auth.js (outside scope)
- Delete userSchema.js (protected file)

[Review Details] [Block Changes] [Allow Anyway]
```

**Step 5: Developer Blocks**
Developer clicks "Block Changes" and refines the prompt.

**Step 6: Safe Outcome**
```
Safe: 12 lines added in navbar.jsx
Restore point created.
```

---

### Avoiding Red Flags (Deal Breakers)

Based on research, CodeGuard must avoid:

#### 1. False Positives
**Solution:** Allow override with clear explanations and tuning options.

#### 2. Slow Workflow
**Solution:** Risk analysis under 3 seconds.

#### 3. Complex Setup
**Solution:** Works out of the box with defaults.

#### 4. Intrusive UI
**Solution:** Only interrupts when risk is high.

#### 5. Paid With No Trial
**Solution:** Clear free tier with core protections.

---

### Enabling Hidden Delights (Wow Moments)

Based on research, CodeGuard includes:

#### 1. Invisible Protection
Only shows UI when risk is detected.

#### 2. One-Click Restore
Restore point visible in the editor with a single action.

#### 3. Learning Project Patterns
Pro tier adapts to project structure over time.

#### 4. Beautiful Diff View
Visual + semantic explanation for risk areas.

#### 5. Prevented Deletion Notifications
Summaries like "Prevented 156-line deletion."

---

## 4. Product Positioning

### What We Are NOT

NOT a version control system  
- We do not replace Git or branching workflows.

NOT a diff viewer  
- We do more than show changes; we assess risk.

NOT a backup tool  
- Backups are post-factum; we prevent damage.

NOT an AI coding assistant  
- We do not generate code; we protect it.

### What We ARE

Guardrails for AI coding  
- Pre-apply safety gate for AI-generated changes.

Insurance for your code  
- Automatic restore points and risk analysis.

An invisible VS Code extension  
- Works in the background and only interrupts when needed.

### Market Position

**Git:** "Recover after the mistake"  
**CodeGuard:** "Block the mistake before it lands"

**Diff Viewers:** "See what changed"  
**CodeGuard:** "Understand if it is dangerous"

**Backup Tools:** "Restore later"  
**CodeGuard:** "Prevent now"

---

## 5. Success Metrics

### User Success Indicators

**Immediate (Week 1):**
- Installs extension and enables default protections
- First risky change blocked
- First restore point created

**Short-term (Month 1):**
- 3+ risky changes flagged or blocked
- Developer reports time saved on recovery
- Reduced time spent debugging AI code

**Long-term (Month 3+):**
- Developer trusts AI for larger tasks
- Zero critical file deletions from AI
- Referral to another developer

### Product Metrics

**Engagement:**
- Warnings shown per active user
- Block vs allow rate
- Restore points used

**Safety Performance:**
- False positive rate
- Median analysis latency (target <3s)
- Protected file hits

**Satisfaction:**
- NPS score (target: 50+)
- Retention rate (target: 85%+)
- Prevented deletion notifications per user

---

## 6. Roadmap (Post-MVP)

### Phase 1: Validation (Weeks 1-2)
- Landing page and waitlist
- Validate pain and willingness to pay
- Collect developer feedback on workflows

### Phase 2: Extension MVP (Weeks 3-6)
- VS Code extension with pre-apply gating
- Rules-based risk analysis
- Local restore points (last 5)
- Protected files list

### Phase 3: Pro Intelligence (Months 2-3)
- ML-based risk analysis
- Project-specific rules
- Cloud restore points (30-day history)
- Detailed activity logs

### Phase 4: Team & Scale (Months 4-6)
- Multi-device sync
- Shared rules for teams
- Team dashboard
- Priority support workflows

---

## 7. Competitive Differentiation

### vs. Git
**They:** "Rollback after damage"  
**We:** "Prevent damage before apply"

### vs. Built-in Diff Views
**They:** "Show changes only"  
**We:** "Analyze risk and block destructive edits"

### vs. Backup Tools
**They:** "Passive snapshots"  
**We:** "Active prevention at the moment of change"

### vs. Do Nothing (Most Common)
**They:** "Trust the AI and hope"  
**We:** "Safety net for every AI-generated change"

---

## 8. Pricing Strategy

### Pricing Tiers

**Free**
- Basic protection against destructive operations
- Warnings on large deletions (>50 lines)
- Local restore points (last 5)
- Protected files list
- Diff preview before apply

**Pro: $8/month**
- AI-powered danger analysis
- Project-specific rules
- Cloud restore points (30 days)
- Multi-device sync
- Detailed activity logs
- Priority support

**Team: $12/user/month**
- Shared rules
- Team dashboard
- Centralized policies and logs

---

*This product concept is the foundation for all development decisions. Every feature must answer: "Does this reduce the risk of destructive AI changes for developers using AI assistants?"*
