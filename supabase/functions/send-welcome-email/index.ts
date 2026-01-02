import { serve } from "https://deno.land/std@0.208.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") || "CodeGuard <onboarding@resend.dev>"
const SITE_URL = Deno.env.get("SITE_URL") || "https://codeguard-sandy.vercel.app"
const WEBHOOK_SECRET = Deno.env.get("WEBHOOK_SECRET")

const buildEmailHtml = (email: string) => `
  <div style="font-family: Inter, Arial, sans-serif; background: #000000; color: #ffffff; padding: 32px;">
    <h1 style="margin: 0 0 16px 0;">You're on the list!</h1>
    <p style="margin: 0 0 12px 0;">Hey there,</p>
    <p style="margin: 0 0 12px 0;">
      Thanks for signing up for early access to <strong>CodeGuard</strong>.
    </p>
    <p style="margin: 0 0 16px 0;">
      We're building guardrails that stop AI from breaking your code. No more accidental deletions.
    </p>
    <p style="margin: 0 0 8px 0;"><strong>What happens next?</strong></p>
    <ul style="margin: 0 0 16px 16px;">
      <li>We'll email you when CodeGuard launches.</li>
      <li>Early access users get first access to the beta.</li>
    </ul>
    <p style="margin: 0 0 16px 0;">If you want to share your pain points, just reply to this email.</p>
    <p style="margin: 0;">— CodeGuard Team</p>
    <hr style="border: none; border-top: 1px solid #1f2937; margin: 24px 0;" />
    <p style="font-size: 12px; color: #9ca3af;">
      You received this because ${email} signed up at
      <a href="${SITE_URL}" style="color: #10b981;">${SITE_URL}</a>.
    </p>
  </div>
`

const buildEmailText = (email: string) => `
You're on the list!

Thanks for signing up for early access to CodeGuard.
We'll email you when CodeGuard launches and when the beta is ready.

If you want to share your pain points, just reply to this email.

— CodeGuard Team

You received this because ${email} signed up at ${SITE_URL}.
`.trim()

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 })
  }

  if (WEBHOOK_SECRET) {
    const authHeader = req.headers.get("authorization")
    if (authHeader !== `Bearer ${WEBHOOK_SECRET}`) {
      return new Response("Unauthorized", { status: 401 })
    }
  }

  if (!RESEND_API_KEY) {
    return new Response("Missing RESEND_API_KEY", { status: 500 })
  }

  let payload: { record?: { email?: string }; email?: string }
  try {
    payload = await req.json()
  } catch {
    return new Response("Invalid JSON payload", { status: 400 })
  }

  const email = payload?.record?.email || payload?.email
  if (!email) {
    return new Response("Missing email", { status: 400 })
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [email],
      subject: "Thanks for joining CodeGuard early access!",
      html: buildEmailHtml(email),
      text: buildEmailText(email),
    }),
  })

  const body = await response.text()

  if (!response.ok) {
    return new Response(body, { status: 500 })
  }

  return new Response(body, { status: 200 })
})
