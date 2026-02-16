import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { motion } from "framer-motion";

export default async function ArticlesPage() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="bg-white text-[#0B1E3D]">

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 bg-[#0B1E3D] text-white overflow-hidden">

        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Ministry Updates
          </h1>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>

          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Stay informed with our latest outreach initiatives,
            prayer gatherings, and community impact stories.
          </p>

        </div>
      </section>

      {/* ================= ARTICLES SECTION ================= */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Recent Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore detailed updates from our ministry work
              and community engagements.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-3 gap-10">

            {articles?.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
              >
                {/* Image Placeholder */}
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  {article.image_url ? (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F5F5F5]" />
                  )}
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#D4AF37] transition">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-3 text-sm">
                    {article.content}
                  </p>

                  <span className="inline-block mt-4 text-[#D4AF37] font-medium">
                    Read More →
                  </span>

                </div>
              </Link>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}
