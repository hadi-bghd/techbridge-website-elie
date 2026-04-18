import React from "react";
import { Helmet } from "react-helmet-async";

function NetworkInfrastructure() {
  return (
    <>
      <Helmet>
        <title>Network Infrastructure Solutions | TechBridge Group</title>
        <meta
          name="description"
          content="Advanced network infrastructure solutions including LAN, WAN, enterprise WiFi, structured cabling, and network security. Build scalable, secure, and high-performance business networks."
        />
      </Helmet>

      <div className="min-h-screen bg-[#071b26] text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">

          {/* H1 */}
          <h1 className="text-4xl font-bold mb-6">
            Network Infrastructure Solutions
          </h1>

          {/* Intro */}
          <p className="text-lg text-slate-300 mb-6">
            TechBridge Group delivers advanced network infrastructure solutions across Lebanon,
            helping businesses build reliable, secure, and scalable network environments.
            Our solutions are designed to support business growth, ensure stability,
            and optimize performance across your entire IT infrastructure.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Our Network Infrastructure Services
          </h2>

          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Enterprise network design and architecture</li>
            <li>LAN, WAN, and secure enterprise WiFi deployment</li>
            <li>Structured cabling and physical infrastructure setup</li>
            <li>Firewall configuration and network security implementation</li>
            <li>Network performance monitoring and optimization</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Scalable and Secure Infrastructure
          </h2>

          <p className="text-slate-300">
            We design network infrastructures that are built for scalability,
            allowing your business to grow without limitations. Our solutions
            focus on security, redundancy, and high availability to ensure
            continuous operations and minimal downtime.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Why Choose TechBridge Group
          </h2>

          <p className="text-slate-300">
           With strong technical expertise and hands-on experience, TechBridge Group
           provides tailored network infrastructure solutions in Lebanon. We work closely
           with businesses to design, implement, and maintain efficient and secure
           network environments that meet modern operational needs. For ongoing technical
           assistance, businesses can also benefit from our{" "}
           <a href="/it-support" className="text-cyan-300 underline">
           IT support services
           </a>{" "}
           ,{" "}
           <a href="/cybersecurity" className="text-cyan-300 underline">
           cybersecurity services
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

export default NetworkInfrastructure;