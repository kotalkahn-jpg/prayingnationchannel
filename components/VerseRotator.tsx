"use client";

import { useEffect, useState } from "react";
import WordReveal from "./animation/WordReveal";

const verses = [
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be still, and know that I am God. – Psalm 46:10",
  "I can do all things through Christ who strengthens me. – Philippians 4:13",
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "For with God nothing shall be impossible. – Luke 1:37",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "Faith is the substance of things hoped for. – Hebrews 11:1",
  "The Lord will fight for you; you need only be still. – Exodus 14:14",
  "Your word is a lamp to my feet. – Psalm 119:105",
  "Let everything that has breath praise the Lord. – Psalm 150:6",
];

export default function VerseRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const words = verses[index].split(" ").length;

    // Time calculation based on number of words
    const totalTime = words * 250 + 2000;

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % verses.length);
    }, totalTime);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="text-center px-6">
      <WordReveal
  key={index}   // 👈 THIS FIXES IT
  text={verses[index]}
  stagger={0.15}
  duration={0.5}
  className="text-1xl md:text-1xl font-bold "
/>

    </div>
  );
}
