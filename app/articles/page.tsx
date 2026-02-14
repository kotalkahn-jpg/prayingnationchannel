import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default async function ArticlesPage() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-10 text-center text-red-600">
        Failed to load articles.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Ministry Updates
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {articles?.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {article.title}
            </h2>
            <p className="text-gray-600 line-clamp-3">
              {article.content}
            </p>
            <p className="text-sm text-blue-600 mt-4">
              Read more →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
