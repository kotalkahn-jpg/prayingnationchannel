"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#08162E] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/prayer.jpg"
                alt="Praying Nation"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold">
                Praying Nation Channel
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Spreading faith, hope, and love through prayer,
              outreach, and community partnerships.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="block w-8 h-[2px] bg-[#D4AF37] mt-2"></span>
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/articles">Articles</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 — Ministries */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Ministries
              <span className="block w-8 h-[2px] bg-[#D4AF37] mt-2"></span>
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Prayer Meetings</li>
              <li>Community Outreach</li>
              <li>Orphan Support</li>
              <li>Youth Ministry</li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Contact Us
              <span className="block w-8 h-[2px] bg-[#D4AF37] mt-2"></span>
            </h4>

            <div className="space-y-4 text-gray-400 text-sm">

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>info@prayingnation.org</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+265 99 123 4567</span>
              </div>

              <div className="flex gap-4 mt-4">
                <Facebook className="cursor-pointer hover:text-[#D4AF37] transition" />
                <Instagram className="cursor-pointer hover:text-[#D4AF37] transition" />
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 mb-8 border-t border-white/10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>
            © {new Date().getFullYear()} Praying Nation Channel.
            All rights reserved.
          </p>

          <p>
            Designed with faith & purpose.
          </p>
        </div>

      </div>
    </footer>
  );
}
