import { Resend } from "resend";

export const runtime = "edge";

const NOTIFY_TO = process.env.CONTACT_EMAIL || "moranlab.studio@gmail.com";
const FROM_ADDRESS = process.env.RESEND_FROM || "MORAN 網站通知 <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = (await req.json()) as {
      name: string;
      company?: string;
      phone: string;
      email: string;
      topic: string;
      message: string;
    };

    if (!body?.name || !body?.phone || !body?.email || !body?.topic || !body?.message) {
      return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const id = crypto.randomUUID().slice(0, 8);
    const time = new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei" });

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFY_TO,
      subject: `【沐苒官網】新諮詢 — ${body.topic}（${body.name}）`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f5db8;">沐苒官網 — 新諮詢通知</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 12px; border: 1px solid #eee; font-weight: bold; width: 100px;">編號</td><td style="padding: 8px 12px; border: 1px solid #eee;">${id}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #eee; font-weight: bold;">時間</td><td style="padding: 8px 12px; border: 1px solid #eee;">${time}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #eee; font-weight: bold;">姓名</td><td style="padding: 8px 12px; border: 1px solid #eee;">${body.name}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #eee; font-weight: bold;">公司</td><td style="padding: 8px 12px; border: 1px solid #eee;">${body.company || "—"}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #eee; font-weight: bold;">電話</td><td style="padding: 8px 12px; border: 1px solid #eee;">${body.phone}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px 12px; border: 1px solid #eee;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #eee; font-weight: bold;">詢問類型</td><td style="padding: 8px 12px; border: 1px solid #eee;">${body.topic}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #eee; font-weight: bold;" colspan="2">需求描述</td></tr>
            <tr><td style="padding: 12px; border: 1px solid #eee; white-space: pre-wrap;" colspan="2">${body.message}</td></tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 24px;">此信由沐苒官網系統自動發送</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ ok: false, error: "email_failed" }, { status: 500 });
    }

    return Response.json({ ok: true, id });
  } catch (e: any) {
    console.error("Contact API error:", e);
    return Response.json({ ok: false, error: e?.message || "unknown" }, { status: 500 });
  }
}
