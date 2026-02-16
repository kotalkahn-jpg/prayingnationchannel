import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendArticleNotification(
  subscribers: string[],
  articleTitle: string,
  articleSlug: string
) {
  try {
    await resend.emails.send({
      from: "Praying Nation <onboarding@resend.dev>",
      to: subscribers,
      subject: `New Ministry Update: ${articleTitle}`,
      html: `
        <h2>${articleTitle}</h2>
        <p>A new ministry update has been published.</p>
        <a href="http://localhost:3000/articles/${articleSlug}">
          Read Article
        </a>
      `,
    });
  } catch (error) {
    console.error("Email error:", error);
  }
}
