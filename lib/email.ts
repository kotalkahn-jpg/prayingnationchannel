import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(
  email: string,
  name: string
) {
  await resend.emails.send({
    from: "Praying Nation Channel <onboarding@resend.dev>",
    to: email,
    subject: "Welcome to Praying Nation Channel 🙏",
    html: `
      <h2>Hello ${name},</h2>
      <p>Thank you for subscribing to Praying Nation Channel.</p>
      <p>You will now receive updates about our ministry and events.</p>
      <br/>
      <p>Blessings 🙏</p>
    `,
  });
}
