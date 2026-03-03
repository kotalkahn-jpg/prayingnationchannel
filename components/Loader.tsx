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
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-wrapper ${exit ? "exit" : ""}`}>
      <img src="/prayer.jpg" alt="PrayerNationChannel" className="logo" />

      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>

      <style jsx>{`
        .loader-wrapper {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #0b1e3d;
          z-index: 9999;
          transition: opacity 0.6s ease;
        }

        .exit {
          opacity: 0;
        }

        .logo {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 60px;
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.7);
          animation: breathe 3s ease-in-out infinite;
        }

        @keyframes breathe {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .wrapper {
          width: 200px;
          height: 60px;
          position: relative;
        }

        .circle {
          width: 20px;
          height: 20px;
          position: absolute;
          border-radius: 50%;
          background-color: #d4af37;
          left: 15%;
          animation: bounce 0.5s alternate infinite ease;
        }

        @keyframes bounce {
          0% {
            top: 60px;
            height: 5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
          }
          40% {
            height: 20px;
            border-radius: 50%;
            transform: scaleX(1);
          }
          100% {
            top: 0%;
          }
        }

        .circle:nth-child(2) {
          left: 45%;
          animation-delay: 0.2s;
        }

        .circle:nth-child(3) {
          left: auto;
          right: 15%;
          animation-delay: 0.3s;
        }

        .shadow {
          width: 20px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.4);
          position: absolute;
          top: 62px;
          left: 15%;
          filter: blur(1px);
          animation: shadow 0.5s alternate infinite ease;
        }

        @keyframes shadow {
          0% { transform: scaleX(1.5); }
          40% { transform: scaleX(1); opacity: 0.7; }
          100% { transform: scaleX(0.2); opacity: 0.4; }
        }

        .shadow:nth-child(4) {
          left: 15%;
        }

        .shadow:nth-child(5) {
          left: 45%;
          animation-delay: 0.2s;
        }

        .shadow:nth-child(6) {
          left: auto;
          right: 15%;
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}