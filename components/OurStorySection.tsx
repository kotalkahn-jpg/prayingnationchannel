"use client";

import { useState } from "react";
import Image from "next/image";
import ImageStoryModal from "./ImageStoryModal";
import WordReveal from "./animation/WordReveal";


const storyItems = [
  {
    title: "Prayer Gatherings",
    description:
      "What began as small prayer meetings grew into community-wide spiritual gatherings uniting believers in faith and purpose.",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200",
  },
  {
    title: "Youth Mentorship",
    description:
      "We invest in young leaders through mentorship programs rooted in discipline, faith, and leadership growth.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200",
  },
  {
    title: "Orphan Support",
    description:
      "Through structured partnerships, we provide spiritual encouragement and practical support to vulnerable communities.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200",
  },
  {
    title: "Community Outreach",
    description:
      "Our outreach initiatives combine prayer with measurable action, impacting lives beyond the church walls.",
    image:
      "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d0?w=1200",
  },
];

export default function OurStorySection() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

       {/* ================= LEFT CONTENT ================= */}
<div className="max-w-xl">

  <p className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">
    Our Story
  </p>

  <h2 className="mt-3 text-3xl md:text-4xl font-playfair font-bold text-[#0B1E3D]">
    A Journey of Faith & Impact
  </h2>

  <div className="mt-5 text-lg text-gray-600 leading-relaxed">
    <WordReveal
      text="Praying Nation Channel began as a small prayer initiative with a bold belief — that faith, when activated through action, transforms communities."
      delay={0.1}
      duration={0.03}
    />
  </div>

  <div className="mt-4 text-gray-600 leading-relaxed">
    <WordReveal
      text="Over time, that belief evolved into structured outreach, youth mentorship, orphan support, and collaborative partnerships that extend beyond spiritual gatherings."
      delay={0.2}
      duration={0.03}
    />
  </div>

  <button className="mt-8 inline-flex items-center px-6 py-3 rounded-md bg-[#D4AF37] text-[#0B1E3D] font-semibold hover:brightness-110 transition shadow-md">
    Discover Our Mission
  </button>

</div>


        {/* ================= RIGHT STACKED GRID ================= */}
        <div className="grid grid-cols-2 gap-8 auto-rows-[180px]">

          {/* TALL IMAGE (row-span-2) */}
          <div
            onClick={() => setActiveItem(0)}
            className="relative row-span-2 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <Image
              src={storyItems[0].image}
              alt={storyItems[0].title}
              fill
              priority
              className="
                object-cover object-center
                scale-[0.92]
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg font-semibold">
                {storyItems[0].title}
              </p>
            </div>
          </div>

          {/* IMAGE 2 */}
          <div
            onClick={() => setActiveItem(1)}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <Image
              src={storyItems[1].image}
              alt={storyItems[1].title}
              fill
              className="
                object-cover object-center
                scale-[0.92]
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg font-semibold">
                {storyItems[1].title}
              </p>
            </div>
          </div>

          {/* IMAGE 3 */}
          <div
            onClick={() => setActiveItem(2)}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <Image
              src={storyItems[2].image}
              alt={storyItems[2].title}
              fill
              className="
                object-cover object-center
                scale-[0.92]
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg font-semibold">
                {storyItems[2].title}
              </p>
            </div>
          </div>

          {/* WIDE IMAGE (col-span-2) */}
          <div
            onClick={() => setActiveItem(3)}
            className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <Image
              src={storyItems[3].image}
              alt={storyItems[3].title}
              fill
              className="
                object-cover object-center
                scale-[0.92]
                transition-transform duration-500 ease-out
                group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg font-semibold">
                {storyItems[3].title}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* MODAL */}
      {activeItem !== null && (
        <ImageStoryModal
          isOpen={activeItem !== null}
          onClose={() => setActiveItem(null)}
          title={storyItems[activeItem].title}
          description={storyItems[activeItem].description}
        />
      )}
    </section>
  );
}
