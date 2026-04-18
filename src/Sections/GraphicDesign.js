import React from "react";

function GraphicDesign() {
  return (
    <div className="min-h-screen bg-[#071b26] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* H1 */}
        <h1 className="text-4xl font-bold mb-6">
          Graphic Design Services
        </h1>

        {/* Intro */}
        <p className="text-lg text-slate-300 mb-6">
          TechBridge Group provides professional graphic design services,
          helping businesses build strong visual identities and clear brand
          communication. We create clean, effective, and business-focused
          designs that support marketing, branding, and digital presence.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Our Graphic Design Services
        </h2>

        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Brand identity and visual design</li>
          <li>Marketing and promotional materials</li>
          <li>Corporate presentation and document design</li>
          <li>Social media creative assets</li>
          <li>Website and digital visual support</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Creative Design with Business Purpose
        </h2>

        <p className="text-slate-300">
          Our design work focuses on clarity, consistency, and professional
          presentation. We help businesses communicate their value through
          visuals that strengthen credibility and improve customer engagement.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Integrated with Digital and Business Services
        </h2>

        <p className="text-slate-300">
          Our graphic design services can be combined with our{" "}
          <a href="/software-development" className="text-cyan-300 underline">
            software and web development services
          </a>{" "}
          ,{" "}
          <a href="/it-support" className="text-cyan-300 underline">
            IT support services
          </a>{" "}
          ,{" "}
          <a href="/network-infrastructure" className="text-cyan-300 underline">
            network infrastructure solutions
          </a>{" "}
          and{" "}
          <a href="/cybersecurity" className="text-cyan-300 underline">
            cybersecurity services
          </a>{" "}
          to provide complete digital and business solutions.
        </p>

      </div>
    </div>
  );
}

export default GraphicDesign;