"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  variants: any;
  delay?: number;
  duration?: number;
}

export default function Reveal({
  children,
  variants,
  delay = 0,
  duration = 0.8,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
