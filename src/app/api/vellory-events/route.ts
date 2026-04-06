import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const FORWARD_TO = [
  process.env.VELLORY_FORWARD_JOHN ?? "amaojohn767@gmail.com",
  process.env.VELLORY_FORWARD_SAM ?? "oyedejisamuel05@gmail.com",
];

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Health check — open GET /api/vellory-events in the browser or curl to confirm the route is live. */
export function GET() {
  return NextResponse.json({
    ok: true,
    route: "/api/vellory-events",
    methods: ["GET", "POST"],
  });
}

export async function POST(request: NextRequest) {
  const event = await request.json();

  console.log("[api/vellory-events] POST", JSON.stringify(event, null, 2));

  if (event.type !== "email.received") {
    return NextResponse.json({});
  }

  const apiKey = process.env.VELLORY_RESEND_API_KEY;
  const from = process.env.VELLORY_RESEND_FROM;

  if (!apiKey || !from) {
    console.error(
      "[api/vellory-events] Missing VELLORY_RESEND_API_KEY or VELLORY_RESEND_FROM.",
    );
    return NextResponse.json(
      {
        error:
          "Server not configured: set VELLORY_RESEND_API_KEY and VELLORY_RESEND_FROM in the environment.",
      },
      { status: 503 },
    );
  }

  const emailId = event.data?.email_id as string | undefined;
  if (!emailId) {
    return NextResponse.json({ error: "Missing email_id" }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const { data: inbound, error: fetchError } =
    await resend.emails.receiving.get(emailId);

  if (fetchError || !inbound) {
    console.error("[api/vellory-events] receiving.get", fetchError);
    return NextResponse.json(
      { error: "Failed to load inbound email from Resend" },
      { status: 502 },
    );
  }

  const forwardTo = FORWARD_TO;

  const subjectBase =
    inbound.subject?.trim() ? inbound.subject : "(no subject)";
  const subject = subjectBase.startsWith("Fwd:")
    ? subjectBase
    : `Fwd: ${subjectBase}`;

  const meta = `<p style="color:#666;font-size:13px;margin:0 0 1rem">From: ${escapeHtml(inbound.from)} · To: ${escapeHtml(inbound.to.join(", "))}</p>`;

  const htmlBody =
    inbound.html ??
    (inbound.text
      ? `<pre style="white-space:pre-wrap;font-family:ui-monospace,monospace">${escapeHtml(inbound.text)}</pre>`
      : "<p><em>(No body)</em></p>");

  const { data: sent, error: sendError } = await resend.emails.send({
    from,
    to: forwardTo,
    subject,
    replyTo: inbound.from,
    html: `${meta}${htmlBody}`,
    text:
      inbound.text ??
      (inbound.html
        ? inbound.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
        : "(No body)"),
  });

  if (sendError || !sent) {
    console.error("[api/vellory-events] emails.send", sendError);
    return NextResponse.json(
      { error: "Failed to forward email" },
      { status: 502 },
    );
  }

  return NextResponse.json({
    forwarded: true,
    to: forwardTo,
    outbound_id: sent.id,
    inbound_id: inbound.id,
  });
}
