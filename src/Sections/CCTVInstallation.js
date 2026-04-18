import React from "react";
import { Helmet } from "react-helmet-async";

function CCTVInstallation() {
  return (
    <>
      <Helmet>
        <title>CCTV Installation Services | TechBridge Group</title>
        <meta
          name="description"
          content="Professional CCTV installation services including camera setup, surveillance systems, remote monitoring, and security solutions for businesses and facilities."
        />
      </Helmet>

      <div className="min-h-screen bg-[#071b26] text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">

          {/* H1 */}
          <h1 className="text-4xl font-bold mb-6">
            CCTV Installation Services
          </h1>

          {/* Intro */}
          <p className="text-lg text-slate-300 mb-6">
            TechBridge Group provides professional CCTV installation services,
            helping businesses improve security, visibility, and monitoring across
            their facilities. We design and deploy reliable surveillance solutions
            tailored to operational needs, site requirements, and long-term security goals.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Our CCTV Services
          </h2>

          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>CCTV system design and planning</li>
            <li>Camera installation and configuration</li>
            <li>Remote viewing and monitoring setup</li>
            <li>Recording, storage, and playback solutions</li>
            <li>Maintenance and system optimization</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Security Solutions for Business Environments
          </h2>

          <p className="text-slate-300">
            Our CCTV solutions are designed to support business security, site supervision,
            and incident review. We help organizations implement surveillance systems that
            are reliable, scalable, and aligned with their day-to-day operational needs.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Integrated with Your Infrastructure
          </h2>

          <p className="text-slate-300">
            Our CCTV installation services can be combined with our{" "}
            <a href="/network-infrastructure" className="text-cyan-300 underline">
              network infrastructure solutions
            </a>{" "}
            ,{" "}
            <a href="/it-support" className="text-cyan-300 underline">
              IT support services
            </a>{" "}
            ,{" "}
            <a href="/cybersecurity" className="text-cyan-300 underline">
              cybersecurity services
            </a>{" "}
            ,{" "}
            <a href="/software-development" className="text-cyan-300 underline">
              software and web development services
            </a>{" "}
            and{" "}
            <a href="/graphic-design" className="text-cyan-300 underline">
              graphic design services
            </a>{" "}
            to provide a complete and secure business environment.
          </p>

        </div>
      </div>
    </>
  );
}

export default CCTVInstallation;