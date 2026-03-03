import { useState, useEffect } from "react";
import heroDashboard from "@/assets/dashboard.png";
import heroSlide2 from "@/assets/audits.png";
import heroSlide3 from "@/assets/analytics.png";
import heroSlide4 from "@/assets/connect.png";
import graphs from "@/assets/graph.png";
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Database,
  FileSpreadsheet,
  Mail,
  Shield,
} from "lucide-react";

const slides = [
  { src: heroDashboard, alt: "AuditWise Main Dashboard" },
  { src: graphs, alt: "AuditWise Graphs" },
  { src: heroSlide2, alt: "Audit Records & Status Tracking" },
  { src: heroSlide3, alt: "Analytics & Compliance Dashboard" },
  { src: heroSlide4, alt: "Audit Creation & DB Connectivity" },
];

const stats = [
  { value: "4", label: "Role Types" },
  { value: "100%", label: "Audit Coverage" },
  { value: "Real-time", label: "Analytics" },
  { value: "Multi-DB", label: "Integration" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 py-10">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(217 91% 50%), transparent 70%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(217 91% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto text-center relative z-10 px-4">
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-up text-foreground"
          style={{ animationDelay: "0.1s" }}
        >
          Smarter Audits.
          <br />
          <span className="text-gradient-blue">Stronger Control.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          AuditWise is a role-based audit management platform that unifies your
          audit lifecycle—from data ingestion to review and approval—with
          powerful analytics, multi-database connectivity, and seamless team
          collaboration.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-primary-foreground bg-gradient-blue shadow-blue hover:opacity-90 transition-all hover:scale-105"
          >
            Explore Features <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#roles"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border border-border bg-card text-foreground hover:border-primary/40 hover:bg-surface-2 transition-all"
          >
            View Roles
          </a>
        </div>

        <div
          className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: FileSpreadsheet, text: "Excel Import" },
            { icon: Database, text: "Multi-DB Connect" },
            { icon: Mail, text: "Email Workflows" },
            { icon: CheckCircle, text: "Approval Engine" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon className="w-4 h-4 text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border rounded-2xl overflow-hidden bg-border max-w-3xl mx-auto animate-fade-up shadow-card"
          style={{ animationDelay: "0.5s" }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-card px-6 py-5 text-center">
              <div className="font-display text-2xl font-bold text-primary">
                {value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Slider */}
      <div
        className="container mx-auto px-4 mt-20 animate-fade-up"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="relative max-w-5xl mx-auto">
          {/* Glow behind */}
          <div
            className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
            style={{ background: "var(--gradient-blue)" }}
          />

          <div className="relative rounded-2xl overflow-hidden border border-primary/15 shadow-blue p-4">
            {/* Slides */}
            <div className="relative aspect-video overflow-hidden h-fit ">
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.src}
                  alt={slide.alt}
                  className={`absolute inset-0 object-cover transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Slider Controls */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Slide caption */}
          <p className="text-center text-sm text-muted-foreground mt-4 font-medium">
            {slides[current].alt}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
