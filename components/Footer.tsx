import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 text-center">
      <h3 className="text-xl font-semibold mb-2">
        Praying Nation Channel
      </h3>

      <p className="text-sm mb-4">
        Spreading faith, hope, and love through prayer and outreach.
      </p>

      <SocialLinks />

      <p className="text-xs mt-6 opacity-80">
        © {new Date().getFullYear()} Praying Nation Channel. All rights reserved.
      </p>
    </footer>
  );
}
