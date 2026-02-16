"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setMessage("Message sent successfully.");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-white text-[#0B1E3D]">
     {/* HERO */}
<section className="relative py-36 px-6 text-white overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1600"
      alt="Prayer gathering"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#0B1E3D]/80" />

  {/* Content */}
  <div className="relative max-w-5xl mx-auto text-center">

    <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
      Connect With Us
    </h1>

    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>

    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
      Partnerships, prayer requests, outreach collaboration —
      we welcome meaningful conversations.
    </p>

  </div>
</section>


      {/* CONTACT INFO */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <InfoCard
            icon={<MapPin size={28} />}
            title="Location"
            text="Lilongwe, Malawi"
          />

          <InfoCard
            icon={<Mail size={28} />}
            title="Email"
            text="info@prayingnation.org"
          />

          <InfoCard
            icon={<Phone size={28} />}
            title="Phone / WhatsApp"
            text="+265 999 000 000"
          />

        </div>
      </section>

      {/* FORM SECTION */}
<section className="py-28 px-6 bg-[#F8FAFC]">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

    {/* FORM */}
    <div className="bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">

      {/* Gold Glow Accent */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>

      <h2 className="text-3xl font-playfair font-bold mb-8 text-[#0B1E3D]">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="relative">
          <input
            type="text"
            placeholder=" "
            required
            className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-[#D4AF37]"
          />
          <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
            Full Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            placeholder=" "
            required
            className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-[#D4AF37]"
          />
          <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
            Email Address
          </label>
        </div>

        <div className="relative">
          <textarea
            placeholder=" "
            rows={5}
            required
            className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-[#D4AF37]"
          />
          <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
            Your Message
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#D4AF37] text-[#0B1E3D] font-semibold py-4 rounded-lg hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition duration-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

      {message && (
        <p className="mt-6 text-green-600 text-sm">
          {message}
        </p>
      )}
    </div>

    {/* SCRIPTURE PANEL */}
    <div className="bg-[#0B1E3D] text-white rounded-3xl p-14 shadow-xl relative overflow-hidden">

      <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>

      <h3 className="text-3xl font-playfair mb-8 leading-relaxed">
        "Carry each other's burdens,
        and in this way you will fulfill
        the law of Christ."
      </h3>

      <p className="text-[#D4AF37] font-medium">
        — Galatians 6:2
      </p>

    </div>

  </div>
</section>

    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:-translate-y-2 transition duration-300">
      <div className="text-[#D4AF37] mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
