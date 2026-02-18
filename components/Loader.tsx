"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      >

        {/* Gold Glow Background */}
        <div className="absolute w-[500px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-3xl"></div>

        {/* Loader Content */}
        <div className="relative z-10 flex flex-col items-center">

          {/* Rotating Gold Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "linear",
            }}
            className="absolute w-[420px] h-[420px] border-2 border-[#D4AF37]/40 rounded-full"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            className="absolute w-[480px] h-[480px] border border-[#D4AF37]/20 rounded-full"
          />

          {/* Floating Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            <Image
              src="/loader.png"
              alt="Praying Nation Loader"
              width={350}
              height={350}
              priority
            />
          </motion.div>

        </div>

      </motion.div>
    </AnimatePresence>
  );
}
