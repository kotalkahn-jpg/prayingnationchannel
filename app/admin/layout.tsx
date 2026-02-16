"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0B1E3D] text-white flex flex-col p-6">
        <h2 className="text-xl font-bold mb-10">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-4 text-sm">

          <Link href="/admin/dashboard" className="hover:text-[#D4AF37]">
            Dashboard
          </Link>

          <Link href="/admin/articles" className="hover:text-[#D4AF37]">
            Articles
          </Link>

          <Link href="/admin/events" className="hover:text-[#D4AF37]">
            Events
          </Link>

          <Link href="/admin/subscribers" className="hover:text-[#D4AF37]">
            Subscribers
          </Link>

        </nav>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="mt-10 bg-[#D4AF37] text-[#0B1E3D] w-full py-2 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}
