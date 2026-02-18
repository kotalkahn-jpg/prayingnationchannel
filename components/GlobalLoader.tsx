"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function GlobalLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingDone, setLoadingDone] = useState(false);

  // 🔒 Lock scroll while loading
  useEffect(() => {
    if (!loadingDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loadingDone]);

  return (
    <>
      {!loadingDone && (
        <Loader onFinish={() => setLoadingDone(true)} />
      )}

      <div
        style={{
          visibility: loadingDone ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </>
  );
}
