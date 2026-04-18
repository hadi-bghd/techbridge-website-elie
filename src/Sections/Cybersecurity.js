import React from "react";
import { Helmet } from "react-helmet-async";

function Cybersecurity() {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services | TechBridge Group</title>
        <meta
          name="description"
          content="Cybersecurity services including endpoint protection, firewall configuration, security assessments, and risk management to protect business systems, networks, and data."
        />
      </Helmet>

      <div className="min-h-screen bg-[#071b26] text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">

          {/* H1 */}
          <h1 className="text-4xl font-bold mb-6">
            Cybersecurity Services
          </h1>

          {/* Intro */}
          <p className="text-lg text-slate-300 mb-6">
            TechBridge Group provides cybersecurity services, helping
            businesses protect their systems, networks, and data against modern
            digital threats. We deliver practical and reliable security solutions
            designed to strengthen resilience, reduce risk, and support secure
            business operations.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Our Cybersecurity Services
          </h2>

          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Endpoint and system security</li>
            <li>Firewall and network security configuration</li>
            <li>Security assessments and risk review</li>
            <li>Access control and account protection</li>
            <li>Security best practices and ongoing guidance</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Protecting Business Operations
          </h2>

          <p className="text-slate-300">
            Our cybersecurity solutions are designed to help businesses operate
            securely and confidently. We focus on practical protection measures
            that improve visibility, strengthen defenses, and support long-term
            operational stability.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Why Choose TechBridge Group
          </h2>

          <p className="text-slate-300">
           TechBridge Group combines technical expertise with a business-focused
           approach to cybersecurity. We help organizations across Lebanon implement
           security measures that are effective, scalable, and aligned with their
           operational needs. Businesses can also strengthen their foundation with our{" "}
           <a href="/it-support" className="text-cyan-300 underline">
           IT support services
           </a>{" "}
           ,{" "}
           <a href="/network-infrastructure" className="text-cyan-300 underline">
           network infrastructure solutions
           </a>{" "}
           and{" "}
           <a href="/software-development" className="text-cyan-300 underline">
           software and web development solutions
           </a>{" "}
           ,{" "}
           <a href="/graphic-design" className="text-cyan-300 underline">
           graphic design services
           </a>{" "}
           and{" "}
           <a href="/cctv-installation" className="text-cyan-300 underline">
           CCTV installation services
           </a>.
          </p>

        </div>
      </div>
    </>
  );
}

export default Cybersecurity;