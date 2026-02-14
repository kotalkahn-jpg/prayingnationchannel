"use client";

import { useState } from "react";

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

      if (!res.ok) {
        throw new Error(data.error);
      }

      setMessage("Subscription successful 🎉");
      setName("");
      setEmail("");
      setPhone("");
    } catch (err: any) {
      setMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <section id="newsletter" className="bg-white py-16 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Subscribe for Updates
        </h2>

        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>

          {message && (
            <p className="text-center text-sm mt-2">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
