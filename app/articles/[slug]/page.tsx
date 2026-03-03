import { supabase } from "../../../lib/supabase";
import { notFound } from "next/navigation";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-4xl font-bold mb-6">
          {article.title}
        </h1>

        {article.image_url && (
          <img
            src={article.image_url}
            alt={article.title}
            className="mb-6 rounded-lg"
          />
        )}

        <div
  className="prose prose-lg max-w-none"
  dangerouslySetInnerHTML={{ __html: article.content }}
/>
      </div>
    </main>
  );
}
