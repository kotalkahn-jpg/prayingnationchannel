import { Facebook, Phone } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      <a
        href="https://facebook.com/yourpage"
        target="_blank"
        className="text-blue-600 hover:scale-110 transition"
      >
        <Facebook size={28} />
      </a>

      <a
        href="https://wa.me/265XXXXXXXXX"
        target="_blank"
        className="text-green-600 hover:scale-110 transition"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
