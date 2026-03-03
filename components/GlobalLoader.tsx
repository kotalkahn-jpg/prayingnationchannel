"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function GlobalLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loadingDone && <Loader />}

      {loadingDone && children}
    </>
  );
}