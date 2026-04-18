import React from "react";
import { Helmet } from "react-helmet-async";

function CloudSolutions() {
  return (
    <>
      <Helmet>
        <title>Cloud Solutions | TechBridge Group</title>
        <meta
          name="description"
          content="Cloud solutions including migration, infrastructure setup, backup, disaster recovery, and scalable cloud environments to improve business flexibility and efficiency."
        />
      </Helmet>

      <div className="min-h-screen bg-[#071b26] text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">

          {/* H1 */}
          <h1 className="text-4xl font-bold mb-6">
            Cloud Solutions
          </h1>

          {/* Intro */}
          <p className="text-lg text-slate-300 mb-6">
            TechBridge Group provides cloud solutions for businesses looking to
            improve flexibility, scalability, and operational efficiency. We help
            organizations adopt secure and reliable cloud services that support
            collaboration, business continuity, and long-term growth.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Our Cloud Services
          </h2>

          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Cloud migration and deployment planning</li>
            <li>Cloud infrastructure setup and configuration</li>
            <li>Backup and disaster recovery solutions</li>
            <li>Cloud storage and collaboration platforms</li>
            <li>Ongoing cloud support and optimization</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Secure and Scalable Environments
          </h2>

          <p className="text-slate-300">
            Our cloud solutions are designed to help businesses scale their
            operations while maintaining security, reliability, and performance.
            We focus on practical cloud strategies that align with your business
            needs and make day-to-day operations more efficient.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Connected to Your Full IT Ecosystem
          </h2>

          <p className="text-slate-300">
            Our cloud solutions can be combined with our{" "}
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
            and{" "}
            <a href="/software-development" className="text-cyan-300 underline">
              software and web development services
            </a>{" "}
            to deliver a complete, secure, and scalable business environment.
          </p>

        </div>
      </div>
    </>
  );
}

export default CloudSolutions;