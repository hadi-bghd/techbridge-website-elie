import React from "react";

function ITSupport() {
  return (
    <div className="min-h-screen bg-[#071b26] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* H1 */}
        <h1 className="text-4xl font-bold mb-6">
          IT Support Services in Lebanon
        </h1>

        {/* Intro */}
        <p className="text-lg text-slate-300 mb-6">
          TechBridge Group provides professional IT support services in Lebanon,
          helping businesses maintain secure, stable, and efficient technology
          environments. Our team delivers fast response times, expert troubleshooting,
          and ongoing support tailored to your business needs.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Our IT Support Services
        </h2>

        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Remote and on-site IT support</li>
          <li>System and network troubleshooting</li>
          <li>Server and infrastructure maintenance</li>
          <li>Helpdesk and user support services</li>
          <li>Performance monitoring and system optimization</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Managed IT Services for Businesses
        </h2>

        <p className="text-slate-300">
          Our managed IT services in Lebanon are designed to provide complete
          support for your business infrastructure. We proactively monitor,
          maintain, and optimize your systems to reduce downtime and improve
          operational efficiency.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Reliable IT Support Across Lebanon
        </h2>

        <p className="text-slate-300">
         TechBridge Group delivers reliable IT support services across Lebanon,
         helping businesses of all sizes operate smoothly and securely. Our
         solutions are tailored to meet modern business challenges and ensure
         long-term performance and stability. Businesses looking to strengthen
         their core systems can also explore our{" "}
         <a href="/network-infrastructure" className="text-cyan-300 underline">
         network infrastructure solutions
         </a>{" "}
         ,{" "}
         <a href="/cybersecurity" className="text-cyan-300 underline">
         cybersecurity services
         </a>{" "}
         and{" "}
         <a href="/software-development" className="text-cyan-300 underline">
         software and web development solutions
         </a>.
        </p>

      </div>
    </div>
  );
}

export default ITSupport;