"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const eventTime = new Date(targetDate).getTime();
      const now = Date.now();
      const difference = eventTime - now;

      if (difference <= 0) {
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(interval);
  }, [targetDate]);

  // 👇 THIS prevents hydration mismatch
  if (!mounted) return null;

  if (!timeLeft) {
    return (
      <div className="text-[#D4AF37] font-semibold mt-4">
        🎉 Event Started
      </div>
    );
  }

  return (
    <div className="flex gap-4 mt-6 text-center text-[#D4AF37] font-semibold">
      <TimeBlock value={timeLeft.days} label="Days" />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Min" />
      <TimeBlock value={timeLeft.seconds} label="Sec" />
    </div>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white/10 px-4 py-3 rounded-lg min-w-[40px] backdrop-blur-sm text-center">
      <div className="text-xl font-bold overflow-hidden h-6 relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full left-0"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="text-xs text-gray-300 mt-2">
        {label}
      </div>
    </div>
  );
}

