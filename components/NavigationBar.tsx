"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B1E3D]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
         <div className="relative group">
  <Image
    src="/prayer.jpg"
    alt="Praying Nation Channel Logo"
    width={80}
    height={80}
    className="rounded-full transition duration-500"
  />

  {/* Gold Glow Effect */}
  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 bg-[#D4AF37]/30 blur-xl"></div>
</div>


          <span className="text-[#D4AF37] font-semibold text-lg tracking-wide hidden sm:block">
            Praying Nation
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link href="/" className="hover:text-[#D4AF37] transition">Home</Link>
          <Link href="/about" className="hover:text-[#D4AF37] transition">About</Link>
          <Link href="/articles" className="hover:text-[#D4AF37] transition">Articles</Link>
          <Link href="/contact" className="hover:text-[#D4AF37] transition">Contact</Link>

          <Link
            href="/donate"
            className="border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-md hover:bg-[#D4AF37] hover:text-[#0B1E3D] transition"
          >
            Give
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0B1E3D] text-white flex flex-col items-center space-y-6 py-6 shadow-xl">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/ministries" onClick={closeMenu}>Ministries</Link>
          <Link href="/articles" onClick={closeMenu}>Articles</Link>
          <Link href="/events" onClick={closeMenu}>Events</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>

          <Link
            href="/donate"
            onClick={closeMenu}
            className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-md"
          >
            Give
          </Link>
        </div>
      )}
    </nav>
  );
}
