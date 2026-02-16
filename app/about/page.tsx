"use client";


import { motion } from "framer-motion";
import OurStorySection from "@/components/OurStorySection";



export default function AboutPage() {
  return (
    <div className="bg-white text-[#0B1E3D]">

      {/* HERO */}
      <section className="relative py-40 px-6 bg-[#0B1E3D] text-white overflow-hidden">

        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=1600"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold mb-6"
          >
            More Than a Ministry.
            <br />
            A Movement of Prayer & Impact.
          </motion.h1>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>

          <p className="text-lg text-gray-200">
            Praying Nation Channel unites communities through faith,
            outreach, and strategic partnerships that bring
            lasting transformation.
          </p>

        </div>
      </section>

     <OurStorySection />


    {/* ================= WHAT MAKES US DIFFERENT ================= */}
<section className="py-32 px-6 bg-[#F8FAFC]">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-4xl font-playfair font-bold mb-16 text-[#0B1E3D]">
      What Makes Us Different
    </h2>

    <div className="grid md:grid-cols-3 gap-12">

      <FounderCard
        name="Pastor Daniel Mwale"
        pillar="Faith-Driven Leadership"
        verse='"For where two or three gather in my name, there am I with them." — Matthew 18:20'
        image="https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=800"
      />

      <FounderCard
        name="Sister Grace Banda"
        pillar="Community Collaboration"
        verse='"Let us not love with words or speech but with actions and in truth." — 1 John 3:18'
        image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800"
      />

      <FounderCard
        name="Brother Emmanuel Phiri"
        pillar="Action-Oriented Mission"
        verse='"Faith by itself, if it is not accompanied by action, is dead." — James 2:17'
        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"
      />

    </div>

  </div>
</section>


      {/* IMPACT NUMBERS */}
      <section className="py-28 px-6 bg-[#0B1E3D] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">

          <Impact number="15+" label="Strategic Partnerships" />
          <Impact number="120+" label="Prayer Gatherings Hosted" />
          <Impact number="5,000+" label="Lives Reached" />

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-playfair font-bold mb-6">
          Join the Movement
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether through partnership, participation, or support —
          your involvement helps us expand our reach and deepen our impact.
        </p>

        <button className="bg-[#D4AF37] text-[#0B1E3D] px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition">
          Partner With Us
        </button>
      </section>

    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-xl p-10 hover:-translate-y-2 transition"
    >
      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>
      <p className="text-gray-600">
        {text}
      </p>
    </motion.div>
  );
}

function Impact({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-bold text-[#D4AF37]">
        {number}
      </h3>
      <p className="text-gray-300 mt-3">
        {label}
      </p>
    </motion.div>
  );
}

function FounderCard({
  name,
  pillar,
  verse,
  image,
}: {
  name: string;
  pillar: string;
  verse: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

      {/* Image Box */}
      <div className="relative h-56 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Soft Gold Overlay Accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/60 to-transparent" />

        {/* Pillar on Image */}
        <div className="absolute bottom-4 left-6">
          <p className="text-white text-sm font-semibold tracking-wide uppercase">
            {pillar}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 text-center">

        <h3 className="text-lg font-semibold text-[#0B1E3D] mb-2">
          {name}
        </h3>

        <p className="text-gray-600 italic leading-relaxed text-sm">
          {verse}
        </p>

      </div>

    </div>
  );
}


