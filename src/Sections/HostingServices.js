import React from "react";
import { Helmet } from "react-helmet-async";

function HostingServices() {
  return (
    <>
      <Helmet>
        <title>Professional Hosting Services | TechBridge Group</title>
        <meta
          name="description"
          content="Professional hosting services including web hosting, domain registration, business email hosting, SSL certificates, cloud hosting, and website hosting solutions for businesses."
        />
      </Helmet>

      <div className="min-h-screen bg-[#071b26] text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold mb-6">
            Professional Hosting Services
          </h1>

          <p className="text-lg text-slate-300 mb-6">
            TechBridge Hosting Services provides reliable hosting solutions for
            businesses that need secure websites, professional domains, business
            email, SSL certificates, and scalable cloud hosting options. Our
            hosting services are designed to help businesses stay online, secure,
            and ready for growth.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Our Hosting Services
          </h2>

          <ul className="list-disc pl-6 text-slate-300 space-y-2">
            <li>Web hosting services</li>
            <li>Domain registration</li>
            <li>Business email hosting</li>
            <li>SSL certificates and website security</li>
            <li>Cloud hosting solutions</li>
            <li>Website design and hosting support</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Hosting for Business Websites
          </h2>

          <p className="text-slate-300">
            A reliable hosting environment is essential for every business
            website. We help businesses choose the right hosting services for
            their website, email, domain, and security needs while keeping the
            setup simple and manageable.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Domains, Email, SSL, and Cloud Hosting
          </h2>

          <p className="text-slate-300">
            Through TechBridge Hosting Services, businesses can access domain
            registration, web hosting, business email services, SSL certificates,
            cloud hosting, and website design options from one place.
          </p>

          <div className="mt-10 rounded-2xl border border-cyan-400/30 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-3">
              Explore Hosting Plans
            </h2>

            <p className="text-slate-300 mb-5">
              Visit our hosting store to browse web hosting, domain registration,
              business email hosting, SSL certificates, cloud hosting, and website
              solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://store.tech-bridgegroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Visit Hosting Store
              </a>

              <a
                href="https://store.tech-bridgegroup.com/domain-registration/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl border border-cyan-400/50 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
              >
                Domain Registration
              </a>

              <a
                href="https://store.tech-bridgegroup.com/web-hosting/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl border border-cyan-400/50 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
              >
                Web Hosting
              </a>

              <a
                href="https://store.tech-bridgegroup.com/cloudhosting.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl border border-cyan-400/50 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
              >
                Cloud Hosting
              </a>

              <a
                href="https://store.tech-bridgegroup.com/digital-certificate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl border border-cyan-400/50 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
              >
                SSL Certificates
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Connected to Your Full IT Environment
          </h2>

          <p className="text-slate-300">
            Hosting services can also be combined with our{" "}
            <a href="/it-solutions" className="text-cyan-300 underline">
              IT solutions
            </a>
            ,{" "}
            <a href="/it-support" className="text-cyan-300 underline">
              IT support services
            </a>
            ,{" "}
            <a href="/cybersecurity" className="text-cyan-300 underline">
              cybersecurity services
            </a>
            ,{" "}
            <a href="/cloud-solutions" className="text-cyan-300 underline">
              cloud solutions
            </a>
            , and{" "}
            <a href="/software-development" className="text-cyan-300 underline">
              software and web development services
            </a>
            .
          </p>

        </div>
      </div>
    </>
  );
}

export default HostingServices;