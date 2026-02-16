import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Praying Nation Channel",
  description: "Spreading faith and hope through prayer and outreach.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">

        <NavigationBar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
