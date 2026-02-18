"use client";
import { useEffect, useState } from "react";

interface LoaderProps {
  onFinish?: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);

      setTimeout(() => {
        if (onFinish) onFinish();
      }, 1500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`loader-wrapper ${exit ? "exit" : ""}`}>
      <img src="/logo.png" alt="PrayerNationChannel Logo" className="logo" />
      <div className="loader"></div>

      <style jsx>{`
        .loader-wrapper {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #fdfcf9;
          opacity: 0;
          animation: fadeIn 1.5s ease forwards;
          transition: filter 1.5s ease, opacity 1.5s ease;
          z-index: 9999;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .logo {
          width: 350px;
          max-width: 90%;
          animation: breathe 4s ease-in-out infinite;
        }

        @keyframes breathe {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .loader {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: gold;
          position: relative;
          margin-top: 30px;
        }

        .loader:before,
        .loader:after {
          content: "";
          position: absolute;
          border-radius: 50%;
          inset: 0;
          background: #0047AB;
          transform: rotate(0deg) translate(26px);
          animation: rotate 1s ease infinite;
        }

        .loader:after {
          animation-delay: 0.5s;
          background: gold;
        }

        @keyframes rotate {
          100% {
            transform: rotate(360deg) translate(26px);
          }
        }

        .exit {
          opacity: 0;
          filter: blur(6px);
        }
      `}</style>
    </div>
  );
}
