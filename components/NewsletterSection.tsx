"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setMessage("Subscribed successfully 🎉");
      setName("");
      setEmail("");
      setPhone("");
    } catch (err: any) {
      setMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <section className="bg-white py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E3D]">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-gray-500 mt-3">
            Stay updated with ministry outreach, events and prayer sessions.
          </p>
        </div>

        {/* Banner */}
        <div className="relative bg-[#102B5C]/90 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-visible">

          {/* Floating Gold Glow */}
          <div className="absolute w-56 h-56 bg-[#D4AF37]/20 rounded-full blur-3xl -top-16 -right-16"></div>

          {/* Floating Email Icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-8 left-12 bg-[#D4AF37] p-4 rounded-full shadow-lg"
          >
            <Mail size={28} className="text-[#0B1E3D]" />
          </motion.div>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row gap-4 w-full md:w-auto relative z-10"
          >
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AF37]"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AF37]"
            />

            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#D4AF37]"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#D4AF37] text-[#0B1E3D] font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition"
            >
              {loading ? "..." : "Subscribe"}
            </button>
          </form>

          {/* Circular Logo Overlapping */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-20 right-10 w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl"

          >
            <img
              src="/prayer.jpg"
              alt="Praying Nation"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

        {/* Message */}
        {message && (
          <p className="text-center text-sm text-gray-600 mt-6">
            {message}
          </p>
        )}

      </div>
    </section>
  );
}
