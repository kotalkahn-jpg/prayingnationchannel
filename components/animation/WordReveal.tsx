"use client";

import { motion } from "framer-motion";

interface WordRevealProps {
  text: string;
  delay?: number;
  stagger?: number;   // spacing between words
  duration?: number;  // animation time per word
  className?: string;
}

export default function WordReveal({
  text,
  delay = 0,
  stagger = 0.12,
  duration = 0.4,
  className,
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * stagger,
            duration: duration,
            ease: "easeOut",
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
