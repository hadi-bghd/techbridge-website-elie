import React from "react";
import { Helmet } from "react-helmet-async";

function ITSolutions() {
  return (
    <>
      <Helmet>
        <title>IT Solutions | TechBridge Group</title>
        <meta
          name="description"
          content="Comprehensive IT solutions including cloud, infrastructure, cybersecurity, software development, and business systems. TechBridge Group delivers scalable and secure technology solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-[#071b26] text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">

          {/* H1 */}
          <h1 className="text-4xl font-bold mb-6">
            IT Solutions
          </h1>

          {/* Intro */}
          <p className="text-lg text-slate-300 mb-6">
            TechBridge Group provides comprehensive IT solutions designed to help
            businesses operate efficiently, securely, and at scale. Our approach
            combines infrastructure, cloud, security, and business systems to deliver
            reliable and future-ready technology environments.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Complete IT Solutions for Businesses
          </h2>

          <p className="text-slate-300">
            We deliver end-to-end IT solutions that cover all aspects of your
            technology environment, from infrastructure design to system
            implementation and ongoing support. Our solutions are tailored to
            meet your operational needs and long-term growth objectives.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Cloud and Modern Technology Solutions
          </h2>

          <p className="text-slate-300">
            Our IT solutions include modern cloud services that improve flexibility,
            collaboration, and scalability. Businesses can benefit from our{" "}
            <a href="/cloud-solutions" className="text-cyan-300 underline">
              cloud solutions
            </a>{" "}
            to enable secure remote access, data protection, and efficient system
            management.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Integrated with Core IT Services
          </h2>

          <p className="text-slate-300">
            Our IT solutions are fully integrated with our{" "}
            <a href="/it-support" className="text-cyan-300 underline">
              IT support services
            </a>{" "}
            ,{" "}
            <a href="/network-infrastructure" className="text-cyan-300 underline">
              network infrastructure solutions
            </a>{" "}
            ,{" "}
            <a href="/cybersecurity" className="text-cyan-300 underline">
              cybersecurity services
            </a>{" "}
            ,{" "}
            <a href="/software-development" className="text-cyan-300 underline">
              software and web development services
            </a>{" "}
            ,{" "}
            <a href="/graphic-design" className="text-cyan-300 underline">
              graphic design services
            </a>{" "}
            and{" "}
            <a href="/cctv-installation" className="text-cyan-300 underline">
              CCTV installation services
            </a>{" "}
            to provide a complete and unified technology ecosystem.
          </p>

        </div>
      </div>
    </>
  );
}

export default ITSolutions;