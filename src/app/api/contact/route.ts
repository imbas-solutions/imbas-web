const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hello@imbas.solutions";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Imbas Solutions <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  projectType?: string;
  scope?: string;
  features?: string[];
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and project details are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (!RESEND_API_KEY) {
    console.error(
      "[contact] RESEND_API_KEY is not set — lead was not delivered:",
      { name, email, message, projectType: body.projectType, scope: body.scope }
    );
    return Response.json(
      { error: "Email delivery isn't configured yet." },
      { status: 503 }
    );
  }

  const summaryLines = [
    body.projectType ? `Project type: ${body.projectType}` : null,
    body.scope ? `Scope: ${body.scope}` : null,
    body.features?.length ? `Features: ${body.features.join(", ")}` : null,
  ].filter((line): line is string => line !== null);

  const html = `
    <h2>New project inquiry from imbas.solutions</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${summaryLines.length ? `<p>${summaryLines.map(escapeHtml).join("<br/>")}</p>` : ""}
    <p><strong>Details:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_EMAIL,
        reply_to: email,
        subject: `New project inquiry from ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend API error:", res.status, detail);
      return Response.json({ error: "Failed to send message." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error sending email:", err);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
