import {
  FileSpreadsheet,
  Database,
  Mail,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileSpreadsheet,
    title: "Auditor Creates an Audit",
    description:
      "The auditor uploads an Excel file or connects directly to a live database (PostgreSQL, MySQL, MongoDB, etc.) to generate a structured audit dataset.",
    detail: "Excel → Parse → Validate → Audit Created",
    accent: "hsl(217 91% 48%)",
    accentBg: "hsl(217 91% 48% / 0.08)",
    accentBorder: "hsl(217 91% 48% / 0.2)",
  },
  {
    step: "02",
    icon: Mail,
    title: "Assign & Notify Reviewers",
    description:
      "The auditor selects reviewers from their panel and sends the audit package via email. Each reviewer receives a secure link with their personal credentials.",
    detail: "Select reviewers → Credentials sent → Email delivered",
    accent: "hsl(38 92% 52%)",
    accentBg: "hsl(38 92% 52% / 0.08)",
    accentBorder: "hsl(38 92% 52% / 0.2)",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Reviewer Acts on Audit",
    description:
      "Reviewers log in using their email and password, access their assigned audits, and perform approve or reject actions on each item with optional comments.",
    detail: "Login → Review → Approve / Reject",
    accent: "hsl(142 60% 38%)",
    accentBg: "hsl(142 60% 38% / 0.08)",
    accentBorder: "hsl(142 60% 38% / 0.2)",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Completed actions are aggregated into visual dashboards. Track progress, reviewer response rates, approval ratios, and compliance trends in real time.",
    detail: "Actions logged → Dashboards updated",
    accent: "hsl(270 70% 55%)",
    accentBg: "hsl(270 70% 55% / 0.08)",
    accentBorder: "hsl(270 70% 55% / 0.2)",
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-16 relative overflow-hidden">
      {/* ── Web dot grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(217 91% 50% / 0.15) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Fade vignette over dots — edges dark, centre visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, hsl(var(--background)/0.85) 100%)",
        }}
      />

      {/* Top + bottom edge fades */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--background)), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background)), transparent)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 pb-12">
          <div>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
            >
              THE <span className="text-gradient-blue">AUDITWISE</span> WORKFLOW
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From data import to final approval in four clear steps. Simple for
              teams, powerful for compliance.
            </p>
          </div>
        </div>

        {/* Steps — zigzag */}
        <div className="relative">
          {/* Centre vertical connector */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent, hsl(217 91% 50% / 0.2) 15%, hsl(217 91% 50% / 0.2) 85%, transparent)",
            }}
          />

          <div className="space-y-14">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <div
                      className="group relative rounded-2xl border bg-card p-8 transition-all duration-300 overflow-hidden"
                      style={{ borderColor: step.accentBorder }}
                    >
                      {/* Corner dot grid accent — faint, inside card */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-30"
                        style={{
                          backgroundImage: `radial-gradient(circle, hsl(217 91% 50% / 0.12) 1px, transparent 1px)`,
                          backgroundSize: "18px 18px",
                          maskImage: isEven
                            ? "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 60%)"
                            : "linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 60%)",
                          WebkitMaskImage: isEven
                            ? "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 60%)"
                            : "linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 60%)",
                        }}
                      />

                      {/* Left accent bar */}
                      <div
                        className="absolute top-0 bottom-0 left-0 w-[3px] rounded-l-2xl"
                        style={{ background: step.accent }}
                      />

                      {/* Icon + step label row */}
                      <div className="flex items-start gap-4 mb-5 pl-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0"
                          style={{
                            background: step.accentBg,
                            borderColor: step.accentBorder,
                          }}
                        >
                          <Icon
                            className="w-6 h-6"
                            style={{ color: step.accent }}
                          />
                        </div>
                        <div>
                          <span
                            className="text-[10px] font-black uppercase tracking-[0.2em]"
                            style={{ color: step.accent }}
                          >
                            Step {step.step}
                          </span>
                          <h3 className="text-xl font-bold mt-0.5 text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 pl-3">
                        {step.description}
                      </p>

                      {/* Mono detail tag */}
                      <div
                        className="inline-flex items-center px-3 py-1.5 rounded-sm text-[11px] font-mono border ml-3"
                        style={{
                          background: step.accentBg,
                          borderColor: step.accentBorder,
                          color: step.accent,
                        }}
                      >
                        {step.detail}
                      </div>
                    </div>
                  </div>

                  {/* Centre node */}
                  <div
                    className="hidden lg:flex w-12 h-12 rounded-full border-2 bg-card items-center justify-center flex-shrink-0 z-10"
                    style={{
                      borderColor: step.accent,
                      boxShadow: `0 0 0 4px ${step.accentBg}`,
                    }}
                  >
                    <span
                      className="font-black text-sm"
                      style={{
                        fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                        color: step.accent,
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
