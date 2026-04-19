// src/components/Footer.js
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

function cn(...xs) {
  return xs.filter(Boolean).join(" ");
}

function toTelHref(phone) {
  const sanitized = String(phone).replace(/[^+\d]/g, "");
  return `tel:${sanitized}`;
}

function toWhatsAppHref(phone) {
  const sanitized = String(phone).replace(/[^+\d]/g, "");
  const noPlus = sanitized.replace(/^\+/, "");
  const message = encodeURIComponent(
    "Hello TechBridge Group, I am interested in your IT services"
  );
  return `https://wa.me/${noPlus}?text=${message}`;
}

export default function FooterCTA({
  heading = "Contact TechBridge Group",
  ctaTitle = "Looking for IT solutions and managed IT services in Lebanon?",
  ctaSubtitle = "Reliable IT, cloud, and cybersecurity solutions for businesses across Lebanon.",
  email = "info@tech-bridgegroup.com",
  phone = "+961 70 60 68 18",
  tagline = "Innovate, Connect, Build",
  className,
}) {
  const prefersReducedMotion = useReducedMotion();

  const whatsappHref = toWhatsAppHref(phone);
  const telHref = toTelHref(phone);

  return (
    <footer
      id="footer-cta"
      className={cn(
        "relative isolate overflow-hidden",
        "pt-12 pb-4 sm:pt-16 sm:pb-6",
        "bg-gradient-to-b from-sky-200 via-cyan-200 to-blue-300",
        className
      )}
    >
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
        </div>

        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 16 } : undefined}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "mx-auto mt-6 max-w-4xl rounded-[28px] p-[2px]",
            "bg-gradient-to-br from-sky-400/70 via-cyan-400/50 to-blue-500/70"
          )}
        >
          <div
            className={cn(
              "rounded-[26px] backdrop-blur-xl",
              "bg-white/45",
              "ring-1 ring-sky-900/10 shadow-[0_10px_30px_rgba(14,165,233,0.18)]",
              "px-6 py-8 sm:px-8 sm:py-10 text-center"
            )}
          >
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {ctaTitle}
            </p>

            <p className="mt-3 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
              {ctaSubtitle}
            </p>

            <div className="mt-7 flex flex-col items-center gap-4">
              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-base sm:text-lg text-slate-800 shadow-sm ring-1 ring-sky-200/80 transition hover:bg-white/80 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/40"
              >
                <Mail className="h-5 w-5 text-sky-700" aria-hidden />
                <span>{email}</span>
              </a>

              {/* Phone actions */}
              <div className="flex items-center gap-3 rounded-full bg-white/60 px-4 py-2 shadow-sm ring-1 ring-sky-200/80">
                {/* WhatsApp icon */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with TechBridge Group on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition hover:bg-sky-200 hover:text-sky-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/40"
                  title="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>

                {/* Phone number -> same as WhatsApp */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-medium text-slate-800 transition hover:text-sky-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/40 rounded px-1"
                  title="Open WhatsApp chat"
                >
                  {phone}
                </a>

                {/* Call icon */}
                <a
                  href={telHref}
                  aria-label="Call TechBridge Group"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition hover:bg-sky-200 hover:text-sky-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/40"
                  title="Call"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="relative mt-4 text-center text-lg sm:text-xl text-sky-900 font-medium">
          {tagline}
        </p>

        <div className="mt-3 flex flex-col items-center justify-between gap-3 border-t border-slate-400/60 pt-2 text-xs text-slate-800 sm:flex-row">
          <p className="mb-0">
            © {new Date().getFullYear()} Tech Bridge Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}