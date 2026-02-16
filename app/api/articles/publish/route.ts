import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendArticleNotification } from "@/lib/sendNewsletterEmail";
import { sendSMS } from "@/lib/sendSMS";


export async function PATCH(req: Request) {
  const { id, is_published } = await req.json();

  const { data: article } = await supabase
    .from("articles")
    .update({ is_published })
    .eq("id", id)
    .select()
    .single();

 if (is_published) {
  const { data: subscribers } = await supabase
    .from("subscribers")
    .select("email, phone");

  const emails = subscribers?.map((s) => s.email) || [];
  const phones = subscribers?.map((s) => s.phone) || [];

  if (emails.length > 0) {
    await sendArticleNotification(
      emails,
      article.title,
      article.slug
    );
  }

  if (phones.length > 0) {
    await sendSMS(
      phones,
      `New update from Praying Nation: ${article.title}`
    );
  }
}

await sendArticleNotification(
  ["rowlandbanda2003@gmail.com"],
  article.title,
  article.slug
);

  return NextResponse.json({ success: true });
}


