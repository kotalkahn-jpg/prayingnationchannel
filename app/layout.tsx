import "./globals.css";
import GlobalLoader from "@/components/GlobalLoader";
import SiteLayoutWrapper from "@/components/SiteLayoutWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <GlobalLoader>
          <SiteLayoutWrapper>
            {children}
          </SiteLayoutWrapper>
        </GlobalLoader>
      </body>
    </html>
  );
}