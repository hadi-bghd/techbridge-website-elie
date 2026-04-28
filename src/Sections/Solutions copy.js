import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import VID2 from "../assets/Vids/VID-2.mp4";
import {
  Laptop2,
  Wrench,
  Globe2,
  Wifi,
  Target,
  Network,
  Server,
  Camera,
  Cloud,
  Cpu,
  ShieldCheck,
  Code,
  PenTool,
} from "lucide-react";

// ---- Data ----
const DEFAULT_SOLUTIONS = [
  {
    key: "it-solutions",
    title: "IT Solutions",
    blurb:
      "Comprehensive IT solutions designed to support business growth, scalability, and digital transformation.",
    icon: <Laptop2 className="h-6 w-6" aria-hidden />,
    href: "/it-solutions",
  },
  {
    key: "it-support",
    title: "IT Support Services",
    blurb:
      "Reliable and proactive IT support services to keep your business running smoothly at all times.",
    icon: <Wrench className="h-6 w-6" aria-hidden />,
    href: "/it-support",
  },
  {
    key: "networking",
    title: "Network Infrastructure Solutions",
    blurb:
      "Secure and scalable network infrastructure solutions for businesses.",
    icon: <Globe2 className="h-6 w-6" aria-hidden />,
    href: "/network-infrastructure",
  },
  {
    key: "cybersecurity",
    title: "Cybersecurity Services",
    blurb:
      "Advanced cybersecurity solutions to protect systems, networks, and business data from modern threats.",
    icon: <ShieldCheck className="h-6 w-6" aria-hidden />,
    href: "/cybersecurity",
  },
  {
    key: "wifi",
    title: "Enterprise WiFi Solutions",
    blurb:
      "High-performance enterprise WiFi solutions with professional design, deployment, and optimization.",
    icon: <Wifi className="h-6 w-6" aria-hidden />,
    href: "/it-solutions",
  },
  {
    key: "consultancy",
    title: "IT Consultancy Services",
    blurb:
      "Strategic IT consultancy services to help businesses align technology with their goals.",
    icon: <Target className="h-6 w-6" aria-hidden />,
    href: "/it-solutions",
  },
  {
    key: "network-design",
    title: "Network Design & Implementation",
    blurb:
      "Custom network design and implementation services optimized for performance, security, and scalability.",
    icon: <Network className="h-6 w-6" aria-hidden />,
    href: "/it-solutions",
  },
  {
    key: "servers-storage",
    title: "Server Installation & Storage Solutions",
    blurb:
      "Professional server installation and secure storage solutions tailored for business continuity.",
    icon: <Server className="h-6 w-6" aria-hidden />,
    href: "/it-solutions",
  },
  {
    key: "cctv",
    title: "CCTV Installation Services",
    blurb:
      "Advanced CCTV installation and surveillance systems for monitoring and security.",
    icon: <Camera className="h-6 w-6" aria-hidden />,
    href: "/cctv-installation",
  },
  {
    key: "hosting-services",
    title: "Hosting Services",
    blurb:
      "Reliable web hosting, domain, email, and cloud hosting services to keep your business online and secure.",
    icon: <Cloud className="h-6 w-6" aria-hidden />,
    href: "https://store.tech-bridgegroup.com/",
    external: true,
  },
  {
    key: "software-dev",
    title: "Software & Web Development",
    blurb:
      "Custom software and web development solutions designed to support business operations and digital growth.",
    icon: <Code className="h-6 w-6" aria-hidden />,
    href: "/software-development",
  },
  {
    key: "design",
    title: "Graphic Design",
    blurb:
      "Professional graphic design services to enhance brand identity and visual communication.",
    icon: <PenTool className="h-6 w-6" aria-hidden />,
    href: "/graphic-design",
  },
];

// ---- Utilities ----
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ---- Card ----
function SolutionCard({ item }) {
  const prefersReducedMotion = useReducedMotion();

  const cardLabel = `${item.title} - ${item.blurb} - Professional IT services and business technology solutions by TechBridge Group`;

  const cardContent = (
    <>
      <div
        className={cn(
          "rounded-2xl h-full w-full",
          "bg-white/5 backdrop-blur-xl",
          "ring-1 ring-white/10",
          "p-5 sm:p-6 flex flex-col gap-3"
        )}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl",
              "bg-gradient-to-br from-cyan-400/20 to-indigo-500/20",
              "ring-1 ring-white/10"
            )}
          >
            <div className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
              {item.icon}
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
            {item.title}
          </h3>
        </div>
        <p className="text-sm text-white/75 leading-relaxed">{item.blurb}</p>
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-0.5 rounded-3xl opacity-0 blur-xl transition-opacity",
          "group-hover:opacity-40",
          "bg-gradient-to-br from-cyan-500/30 via-sky-500/20 to-indigo-500/30"
        )}
      />
    </>
  );

  if (item.href) {
    const LinkWrapper = item.external ? "a" : Link;

    const linkProps = item.external
      ? {
          href: item.href,
          target: "_blank",
          rel: "noopener noreferrer nofollow",
        }
      : {
          to: item.href,
        };

    return (
      <motion.div
        whileHover={!prefersReducedMotion ? { y: -4 } : undefined}
        className={cn(
          "group relative w-full rounded-2xl p-[1px]",
          "bg-gradient-to-br from-cyan-400/50 via-sky-500/30 to-indigo-500/40"
        )}
      >
        <LinkWrapper
          {...linkProps}
          title={item.title}
          className="block h-full rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label={cardLabel}
        >
          {cardContent}
        </LinkWrapper>
      </motion.div>
    );
  }

  return (
    <motion.div
      role="group"
      whileHover={!prefersReducedMotion ? { y: -4 } : undefined}
      className={cn(
        "group relative w-full rounded-2xl p-[1px] text-left",
        "bg-gradient-to-br from-cyan-400/50 via-sky-500/30 to-indigo-500/40"
      )}
      aria-label={cardLabel}
      tabIndex={-1}
    >
      {cardContent}
    </motion.div>
  );
}

// ---- Section ----
export default function Solutions({
  id = "our-solutions",
  heading = "IT Solutions & Services",
  subheading =
    "Managed IT support, network infrastructure, cloud solutions, cybersecurity services, CCTV installation, hosting, and business technology services",
  items = DEFAULT_SOLUTIONS,
  className,
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            videoRef.current?.play?.().catch(() => {});
          } else {
            videoRef.current?.pause?.();
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className={cn(
        "relative isolate overflow-hidden",
        "pt-0 pb-16 sm:pt-2 sm:pb-20 lg:pt-4 lg:pb-24",
        className
      )}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 -z-30 h-full w-full object-cover pointer-events-none"
        src={VID2}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-20 bg-slate-950/70" />

      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
            <Cpu className="h-4 w-4 text-cyan-300" aria-hidden />
            <span>Trusted technology partner</span>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>

          <p className="mt-2 text-white/70">{subheading}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <SolutionCard key={item.key} item={item} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          Need something custom? We design and integrate bespoke solutions.
        </p>
      </div>
    </section>
  );
}