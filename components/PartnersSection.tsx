"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const partners = [
  "/partners/partner1.png",
  "/partners/partner2.png",
  "/partners/partner3.png",
  "/partners/partner4.png",
  "/partners/partner5.png",
  "/partners/partner6.png",
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative bg-[#08162E] py-24 overflow-hidden text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Who We’ve Worked With
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Churches, outreach ministries, and community organizations
          partnering with Praying Nation Channel to spread faith and hope.
        </p>

        {/* Animated Gold Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 120 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[3px] bg-[#D4AF37] mx-auto mt-6 rounded-full"
        />

      </div>

      {/* Infinite Marquee */}
      <div className="relative mt-16">

        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((logo, index) => (
            <FloatingLogo key={index} src={logo} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function FloatingLogo({ src }: { src: string }) {
  return (
    <motion.div
      className="flex items-center justify-center min-w-[160px]"
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="bg-white/5 border border-white/10 rounded-lg px-8 py-6 hover:bg-white/10 transition">
        <img
          src={src}
          alt="Partner"
          className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </motion.div>
  );
}
