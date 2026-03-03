import "./globals.css";
import GlobalLoader from "@/components/GlobalLoader";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <GlobalLoader>
          <NavigationBar />
          {children}
          <Footer />
        </GlobalLoader>
      </body>
    </html>
  );
}