import React, { useRef, useEffect, useState } from "react";
import "../Style/Home.css";
import VID1 from "../assets/Vids/VID-1.mp4";

function Home() {
  const videoRef = useRef(null);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play?.().catch(() => {});
    }
  }, []);

  return (
    <div
      id="home"
      className="relative flex h-screen min-h-screen items-center justify-center overflow-hidden bg-[#0f1f2a]"
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
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-6 text-center">
        <h1
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