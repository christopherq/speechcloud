import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { naam, email, telefoon, restaurant, bericht } = await req.json();

    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SpeechCloud Contact <onboarding@resend.dev>",
        to: ["christiaanquak@outlook.com"],
        subject: `Nieuwe lead: ${naam}${restaurant ? ` - ${restaurant}` : ""}`,
        reply_to: email,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #2563EB;">Nieuwe demo-aanvraag via speechcloud.nl</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Naam</td><td style="padding: 8px;">${naam}</td></tr>
              <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #374151;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Telefoon</td><td style="padding: 8px;">${telefoon || "—"}</td></tr>
              <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #374151;">Restaurant</td><td style="padding: 8px;">${restaurant || "—"}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 8px;">
              <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Bericht:</p>
              <p style="color: #4b5563; margin: 0; white-space: pre-wrap;">${bericht}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">Klik reply om direct te antwoorden naar ${email}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Verzenden mislukt. Probeer het later opnieuw." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact form error:", e);
    return NextResponse.json(
      { error: "Er ging iets mis." },
      { status: 500 }
    );
  }
}
