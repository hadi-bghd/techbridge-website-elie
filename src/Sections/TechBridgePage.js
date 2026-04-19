import React from "react";
import { Element } from "react-scroll";
import Home from "./Home";
// import Story from "./AboutUs";
import MissionSection from "./Mission";
// import VisionSection from "./Vision";
import Solutions from "./Solutions";
import Footer from "./Footer";
import StickyConsultationButton from "./StickyConsultationButton";

const HomeSEOSection = () => (
  <section className="bg-[#071b26] text-white px-6 py-14">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        IT Solutions & Managed IT Services
      </h2>

      <p className="text-lg text-slate-300 leading-8 mb-8">
        TechBridge Group provides professional IT solutions, managed IT services,
        IT support, network infrastructure, cybersecurity, cloud solutions, and
        CCTV installation services for businesses across Lebanon. We help
        organizations build secure, scalable, and efficient technology
        environments that support growth and long-term performance.
      </p>

      <h3 className="text-2xl font-semibold mb-4">
        Why Businesses Choose TechBridge Group
      </h3>

      <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-10">
        <li>Reliable IT support and fast technical response</li>
        <li>Scalable network infrastructure solutions</li>
        <li>Cybersecurity services for secure business operations</li>
        <li>Cloud solutions for flexibility and continuity</li>
        <li>Custom software, web development, and digital services</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">
        Explore Our Core Services
      </h3>

      <p className="text-slate-300 leading-8">
        Our service portfolio includes{" "}
        <a href="/it-solutions" className="text-cyan-300 underline">
          IT solutions
        </a>
        ,{" "}
        <a href="/it-support" className="text-cyan-300 underline">
          IT support services
        </a>
        ,{" "}
        <a href="/network-infrastructure" className="text-cyan-300 underline">
          network infrastructure solutions
        </a>
        ,{" "}
        <a href="/cybersecurity" className="text-cyan-300 underline">
          cybersecurity services
        </a>
        ,{" "}
        <a href="/software-development" className="text-cyan-300 underline">
          software and web development
        </a>
        ,{" "}
        <a href="/graphic-design" className="text-cyan-300 underline">
          graphic design
        </a>
        ,{" "}
        <a href="/cctv-installation" className="text-cyan-300 underline">
          CCTV installation
        </a>
        , and{" "}
        <a href="/cloud-solutions" className="text-cyan-300 underline">
          cloud solutions
        </a>
        .
      </p>
    </div>
  </section>
);

const BigTradePage = () => (
  <>
    <Element name="home"><Home /></Element>
    <HomeSEOSection />
    {/* <Element name="story"><Story /></Element> MERGED IN MISSION */}
    <Element name="mission"><MissionSection /></Element>
    {/* <Element name="vision"><VisionSection /></Element> MERGED IN MISSION */}
    <Element name="solutions"><Solutions /></Element>
    <Element name="stickyconsultationbutton"><StickyConsultationButton /></Element>
    <Element name="footer"><Footer /></Element>
  </>
);

export default BigTradePage;