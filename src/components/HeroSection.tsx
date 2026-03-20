import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Database,
  FileSpreadsheet,
  Mail,
} from "lucide-react";

const rotatingContent = [
  {
    line1: "SMARTER AUDITS.",
    line2: "STRONGER CONTROL.",
    sub: "AuditWise unifies your audit lifecycle—from data ingestion to review and approval—with role-based access, powerful analytics, and multi-database connectivity.",
  },
  {
    line1: "ROLE-BASED ACCESS",
    line2: "ZERO COMPROMISE.",
    sub: "Every user sees exactly what they need. Admin, Auditor, and Reviewer roles—each with granular, scoped permissions built for real compliance teams.",
  },
  {
    line1: "IMPORT & ASSIGN",
    line2: "REVIEW & APPROVE",
    sub: "Upload Excel files or connect live databases, send audits via email with secure credentials, and track every approve and reject in real time.",
  },
  {
    line1: "REAL-TIME ANALYTICS",
    line2: "FULL VISIBILITY",
    sub: "Purpose-built dashboards for every role. Monitor pending files, approval ratios, reviewer progress, and compliance trends—all in one place.",
  },
];

const HeroSection = () => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % rotatingContent.length);
        setVisible(true);
      }, 350);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const content = rotatingContent[idx];

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(230 70% 22%) 0%, hsl(217 91% 34%) 55%, hsl(199 89% 28%) 100%)",
      }}
    >
      {/* ── Full-section background image ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/w2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      {/* Gradient over image — stronger left, fades right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, hsl(230 70% 18% / 0.92) 0%, hsl(217 91% 34% / 0.6) 50%, hsl(199 89% 28% / 0.4) 100%)",
        }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
      />

      {/* Radial bloom — top left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, hsl(217 100% 65% / 0.14) 0%, transparent 65%)",
        }}
      />

      {/* Bottom-right counter-glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, hsl(199 89% 42% / 0.12) 0%, transparent 60%)",
        }}
      />

      {/* ── Hero content — left-aligned ── */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center pt-28 pb-16">
        <div className="max-w-fit">
          {/* Main heading — rotates every 4s */}
          <h1
            className="font-black leading-[0.92] tracking-tight mb-6"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', Impact, sans-serif",
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
            }}
          >
            <span className="block text-white [-webkit-text-stroke:1px_black]">
              {content.line1}
            </span>
            {/* <span className="block text-white">{content.line2}</span> */}
            <span
              className="block [-webkit-text-stroke:1px_black]"
              style={{ color: "hsl(217 91% 72%)" }}
            >
              {content.line2}
            </span>
            {/* <span className="block" style={{ color: "hsl(217 91% 72%)" }}>
              {content.line4}
            </span> */}
          </h1>

          {/* Subtext — rotates with heading */}
          <p
            className="text-sm md:text-base leading-relaxed mb-8 max-w-sm"
            style={{
              color: "hsl(0 0% 100% / 0.55)",
              transition:
                "opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
            }}
          >
            {content.sub}
          </p>

          {/* CTA */}
          <div style={{ animation: "fadeUp 0.6s ease 0.72s both" }}>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-black uppercase tracking-widest rounded-sm transition-all duration-200 hover:opacity-85"
              style={{ background: "#fff", color: "hsl(217 91% 38%)" }}
            >
              Request Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Feature tags */}
          <div
            className="flex flex-wrap gap-2 mt-8"
            style={{ animation: "fadeUp 0.6s ease 0.85s both" }}
          >
            {[
              { icon: FileSpreadsheet, text: "Excel Import" },
              { icon: Database, text: "Multi-DB" },
              { icon: Mail, text: "Email Workflows" },
              { icon: CheckCircle, text: "Approval Engine" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm"
                style={{
                  border: "1px solid hsl(0 0% 100% / 0.1)",
                  background: "hsl(0 0% 100% / 0.05)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Icon
                  className="w-3 h-3"
                  style={{ color: "hsl(217 91% 75%)" }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: "hsl(0 0% 100% / 0.55)" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ── Wavy bottom edge ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: 80 }}
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
