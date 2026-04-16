import React, { useRef, useEffect, useState } from "react";
import "../Style/Home.css";
import VID1 from "../assets/Vids/VID-1.mp4";

function Home() {
  const videoRef = useRef(null);
  const [showTitle, setShowTitle] = useState(false);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  // Make sure video plays
  video.play?.().catch(() => {});

  const triggerTime = 3.8; // <-- YOU WILL ADJUST THIS

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
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        src={VID1}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

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
      </div>
    </div>
  );
}

export default Home;