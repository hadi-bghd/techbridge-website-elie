import React, { useRef, useEffect, useState } from "react";
import "../Style/Home.css";
import VID1_MP4 from "../assets/Vids/VID-1.mp4";
import VID1_WEBM from "../assets/Vids/VID-1.webm";

function Home() {
  const videoRef = useRef(null);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Make sure video plays
    video.play?.().catch(() => {});

    const triggerTime = 3.8; // adjust this later if needed

    const handleTimeUpdate = () => {
      if (video.currentTime >= triggerTime) {
        setShowTitle(true);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div
      id="home"
      className="relative flex h-screen min-h-screen items-center justify-center overflow-hidden bg-[#071b26]"
      style={{ perspective: "900px" }}
    >
      {/* ✅ Hidden SEO H1 (does NOT affect design) */}
      <h1 className="sr-only">
        IT Solutions and Managed IT Services in Lebanon
      </h1>

      <p className="sr-only">
      TechBridge Group provides IT solutions in Lebanon, including managed IT
      services, IT support, network infrastructure, cloud solutions,
      cybersecurity services, server installation, IT outsourcing, enterprise
      WiFi, CCTV systems, and open-source business solutions for companies
      seeking secure, scalable, and reliable technology services.
      </p>

      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={VID1_WEBM} type="video/webm" />
        <source src={VID1_MP4} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 px-6 text-center">
        <h1
          aria-hidden={!showTitle}
          className={[
            "font-extrabold tracking-tight text-white drop-shadow-xl",
            "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight",
            showTitle ? "emerge-3d" : "opacity-0",
          ].join(" ")}
        >
          Connecting Ideas. Building Technology. Empowering Growth.
        </h1>
         <p
         aria-hidden={!showTitle}
         className={[
         "mt-4 text-white/80 text-sm sm:text-base transition-opacity duration-700",
          showTitle ? "opacity-100" : "opacity-0",
        ].join(" ")}
        >
        Delivering IT solutions, managed IT services, and technology support for businesses across Lebanon
        </p>
      </div>
    </div>
  );
}

export default Home;