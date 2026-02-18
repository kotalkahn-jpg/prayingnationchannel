"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import { AnimatePresence } from "framer-motion";

export default function LoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>
      {children}
    </>
  );
}
