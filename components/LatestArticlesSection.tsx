import { supabase } from "../lib/supabase";
import Link from "next/link";
import Reveal from "./animation/Reveal";
import { fadeUp } from "./animation/motionVariants";

export default async function LatestArticlesSection() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <Reveal variants={fadeUp}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3D]">
              Latest Ministry Updates
            </h2>

            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Stay informed about our outreach programs, prayer gatherings,
              and community impact initiatives.
            </p>
          </div>
        </Reveal>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {articles?.map((article, index) => (
            <Reveal key={article.id} variants={fadeUp} delay={index * 0.15}>
              <Link
                href={`/articles/${article.slug}`}
                className="group block bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-[0_10px_40px_rgba(212,175,55,0.25)]
hover:-translate-y-2
 transition-all duration-500"
              >
                {/* Card Content */}
                <div className="p-8">

                  <h3 className="text-2xl font-semibold text-[#0B1E3D] group-hover:text-[#D4AF37] transition duration-300">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-gray-600 line-clamp-3">
                    {article.content}
                  </p>

                  <div className="mt-6 flex items-center text-[#D4AF37] font-medium">
                    Read More
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>

                </div>

                {/* Gold Bottom Accent */}
                <div className="h-1 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
