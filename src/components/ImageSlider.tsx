import React, { useState, useEffect, useRef } from "react";

import heroDashboard from "@/assets/dashboard.png";
import heroSlide2 from "@/assets/audits.png";
import heroSlide3 from "@/assets/analytics.png";
import heroSlide4 from "@/assets/connect.png";
import graphs from "@/assets/graph.png";

const slides = [
  {
    src: heroDashboard,
    alt: "AuditWise Main Dashboard",
    label: "01 — Dashboard",
    title: "Command Centre",
    description:
      "Bird's-eye view of every active audit. Track status, progress, and team activity from a single unified dashboard.",
    tag: "Overview",
  },
  {
    src: graphs,
    alt: "AuditWise Graphs",
    label: "02 — Analytics",
    title: "Visual Insights",
    description:
      "Rich charts surface what matters — approval rates, reviewer velocity, pending backlogs — so you act before issues escalate.",
    tag: "Analytics",
  },
  {
    src: heroSlide2,
    alt: "Audit Records & Status",
    label: "03 — Records",
    title: "Full Audit Trail",
    description:
      "Every item, action, and timestamp recorded automatically. Filter by status, reviewer, or date. Nothing slips through.",
    tag: "Records",
  },
  {
    src: heroSlide3,
    alt: "Analytics & Compliance",
    label: "04 — Compliance",
    title: "Stay Compliant",
    description:
      "Compliance reports on demand. Map audit outcomes against regulatory requirements and export findings in seconds.",
    tag: "Compliance",
  },
  {
    src: heroSlide4,
    alt: "DB Connectivity",
    label: "05 — Connectivity",
    title: "Live Data Sources",
    description:
      "Connect to MySQL, PostgreSQL, MongoDB and more. Pull live records into audits without manual exports or CSV wrangling.",
    tag: "Integration",
  },
];

const AUTO_INTERVAL = 6000;

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent((idx + slides.length) % slides.length);
    setTimeout(() => setAnimating(false), 550);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        setAnimating(true);
        setTimeout(() => setAnimating(false), 550);
        return (c + 1) % slides.length;
      });
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slide = slides[current];

  return (
    <div className="container mx-auto px-4 md:px-6">
      {/* ─── DESKTOP: side-by-side ─────────────────────────────── */}
      <div
        className="hidden md:flex border border-foreground/10 rounded-sm overflow-hidden"
        style={{ minHeight: 440 }}
      >
        {/* Image — ~70% */}
        <div className="relative overflow-hidden bg-surface-1 flex-[10]">
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{
                opacity: i === current ? 1 : 0,
                transition: "opacity 0.65s ease",
                userSelect: "none",
                pointerEvents: "none",
              }}
              draggable={false}
            />
          ))}

          {/* Right-edge fade into panel */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent 70%, hsl(var(--background)/0.18) 100%), linear-gradient(to top, hsl(var(--background)/0.45) 0%, transparent 35%)",
            }}
          />

          {/* Bottom progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground/8 z-10">
            <div
              className="h-full bg-primary"
              style={{
                width: `${((current + 1) / slides.length) * 100}%`,
                transition: "width 0.55s ease",
              }}
            />
          </div>
        </div>

        {/* Description — ~30% */}
        <div className="relative flex flex-col justify-between p-8 border-l border-foreground/10 flex-[2] min-w-0">
          {/* Animated text block */}
          <div
            key={current}
            style={{ animation: "descIn 0.45s cubic-bezier(0.4,0,0.2,1) both" }}
          >
            <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mb-1.5">
              {slide.label}
            </p>

            <h3
              className="text-[2rem] font-black tracking-tight leading-none mb-3"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
            >
              {slide.title}
            </h3>

            <div className="w-6 h-[2px] bg-primary mb-4" />

            <p className="text-xs text-muted-foreground leading-relaxed">
              {slide.description}
            </p>
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    goTo(i);
                    resetTimer();
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 20 : 6,
                    height: 6,
                    background:
                      i === current
                        ? "hsl(217 91% 50%)"
                        : "hsl(var(--foreground)/0.15)",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={() => {
                  goTo(current - 1);
                  resetTimer();
                }}
                className="w-8 h-8 rounded-sm border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/22 transition-all"
              >
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M7.5 2L3.5 6L7.5 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  goTo(current + 1);
                  resetTimer();
                }}
                className="w-8 h-8 rounded-sm border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/22 transition-all"
              >
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4.5 2L8.5 6L4.5 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Vertical progress line on right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-foreground/5" />
          <div
            className="absolute right-0 top-0 w-px bg-primary transition-all duration-500 ease-out"
            style={{ height: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* ─── MOBILE: stacked ───────────────────────────────────── */}
      <div className="md:hidden border border-foreground/10 rounded-sm overflow-hidden">
        {/* Image — full width, fixed height */}
        <div
          className="relative overflow-hidden bg-surface-1"
          style={{ height: 220 }}
        >
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{
                opacity: i === current ? 1 : 0,
                transition: "opacity 0.65s ease",
                userSelect: "none",
                pointerEvents: "none",
              }}
              draggable={false}
            />
          ))}

          {/* Counter */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className="text-[9px] font-mono font-black uppercase tracking-widest px-2 py-0.5 rounded-sm border"
              style={{
                background: "hsl(var(--background)/0.75)",
                borderColor: "hsl(var(--foreground)/0.12)",
                color: "hsl(var(--muted-foreground))",
                backdropFilter: "blur(8px)",
              }}
            >
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground/8 z-10">
            <div
              className="h-full bg-primary"
              style={{
                width: `${((current + 1) / slides.length) * 100}%`,
                transition: "width 0.55s ease",
              }}
            />
          </div>
        </div>

        {/* Description — below image */}
        <div className="p-5 border-t border-foreground/10">
          <div
            key={`m-${current}`}
            style={{ animation: "descIn 0.4s cubic-bezier(0.4,0,0.2,1) both" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="inline-block text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm border"
                style={{
                  color: "hsl(217 91% 50%)",
                  borderColor: "hsl(217 91% 50% / 0.22)",
                  background: "hsl(217 91% 50% / 0.06)",
                }}
              >
                {slide.tag}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
                {slide.label}
              </span>
            </div>

            <h3
              className="text-2xl font-black tracking-tight leading-none mb-2"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
            >
              {slide.title}
            </h3>

            <div className="w-5 h-[2px] bg-primary mb-3" />

            <p className="text-xs text-muted-foreground leading-relaxed">
              {slide.description}
            </p>
          </div>

          {/* Mobile nav row */}
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    goTo(i);
                    resetTimer();
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 18 : 6,
                    height: 6,
                    background:
                      i === current
                        ? "hsl(217 91% 50%)"
                        : "hsl(var(--foreground)/0.15)",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={() => {
                  goTo(current - 1);
                  resetTimer();
                }}
                className="w-8 h-8 rounded-sm border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M7.5 2L3.5 6L7.5 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  goTo(current + 1);
                  resetTimer();
                }}
                className="w-8 h-8 rounded-sm border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4.5 2L8.5 6L4.5 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes descIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
