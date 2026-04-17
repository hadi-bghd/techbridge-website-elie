import React from "react";

function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-[#071b26] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* H1 */}
        <h1 className="text-4xl font-bold mb-6">
          Software & Web Development Services
        </h1>

        {/* Intro */}
        <p className="text-lg text-slate-300 mb-6">
          TechBridge Group provides professional software and web development services,
          helping businesses build scalable, efficient, and secure digital solutions.
          We design and develop custom applications, websites, and systems tailored
          to your business needs and long-term growth strategy.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Our Development Services
        </h2>

        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Custom web application development</li>
          <li>Business system development and automation</li>
          <li>Website design and development</li>
          <li>API integration and system connectivity</li>
          <li>Ongoing maintenance and performance optimization</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Scalable and Business-Focused Solutions
        </h2>

        <p className="text-slate-300">
          Our development approach focuses on building scalable and flexible
          solutions that grow with your business. We ensure performance,
          security, and long-term maintainability while aligning technology
          with your operational goals.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Integrated with Your IT Environment
        </h2>

        <p className="text-slate-300">
          Our solutions integrate seamlessly with your existing infrastructure.
          Businesses can also benefit from our{" "}
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
          to ensure complete system reliability, protection, and performance.
        </p>

      </div>
    </div>
  );
}

export default SoftwareDevelopment;