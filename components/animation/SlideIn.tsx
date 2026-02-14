"use client";

import { motion } from "framer-motion";

interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  distance?: number;
  duration?: number;
}

export default function SlideIn({
  children,
  direction = "up",
  delay = 0,
  distance = 50,
  duration = 0.7,
}: SlideInProps) {
  const variants = {
    hidden: {
      opacity: 0,
      x:
        direction === "left"
          ? -distance
          : direction === "right"
          ? distance
          : 0,
      y:
        direction === "up"
          ? distance
          : direction === "down"
          ? -distance
          : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
