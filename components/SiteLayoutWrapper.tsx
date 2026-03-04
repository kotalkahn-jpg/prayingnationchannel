"use client";

import { usePathname } from "next/navigation";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function SiteLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname === "/admin/login";

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}