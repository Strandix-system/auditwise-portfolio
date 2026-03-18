import {
  Shield,
  Users,
  FileSpreadsheet,
  Database,
  Mail,
  CheckCircle2,
  BarChart3,
  Lock,
  ArrowRight,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";

const features = [
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description:
      "Granular permissions for Superadmin, Admin, Auditor, and Reviewer roles. Each user sees only what they need—nothing more.",
    details: [
      "Fine-grained permission system",
      "Hierarchical role management",
      "Real-time access control updates",
      "Audit logging of all access changes",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Audit Import",
    description:
      "Upload Excel files to instantly create structured audits. Map columns, validate data, and start reviewing in minutes.",
    details: [
      "Batch upload multiple files",
      "Automatic column mapping",
      "Data validation and error reporting",
      "Template-based imports for consistency",
    ],
  },
  {
    icon: Database,
    title: "Multi-Database Connectivity",
    description:
      "Connect to MySQL, MongoDB, and more. Pull live data directly from your existing systems for real-time auditing.",
    details: [
      "Support for 15+ databases",
      "Live data synchronization",
      "Connection pooling and optimization",
      "Secure credential management",
    ],
  },
  {
    icon: Mail,
    title: "Secure Email Delivery",
    description:
      "Send audit files to reviewers with credentials. Each reviewer gets a secure access link with their email and password.",
    details: [
      "One-time password generation",
      "SSL/TLS encrypted emails",
      "Delivery confirmation tracking",
      "Scheduled batch sending",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Approve & Reject Workflow",
    description:
      "Reviewers approve or reject individual audit items. Full audit trail of every decision is recorded automatically.",
    details: [
      "Bulk approval/rejection actions",
      "Comment and annotation support",
      "Workflow state tracking",
      "Automatic escalation rules",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Key audit metrics as summary counts and detailed lists for monitoring progress, reviews, and compliance.",
    details: [
      "Real-time dashboard updates",
      "Customizable metric views",
      "Export reports in multiple formats",
      "Trend analysis and forecasting",
    ],
  },
  {
    icon: Users,
    title: "Reviewer Management",
    description:
      "Create and manage your reviewer panel, assign specific audits, and track progress from a unified dashboard.",
    details: [
      "Bulk user import and management",
      "Performance metrics per reviewer",
      "Round-robin audit distribution",
      "Availability scheduling",
    ],
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "End-to-end encryption, role-scoped data visibility, and audit logging keep your sensitive financial data protected.",
    details: [
      "AES-256 encryption at rest",
      "TLS 1.3 in transit",
      "SOC 2 Type II compliant",
      "Regular security audits",
    ],
  },
];

const Features = () => {
  return (
    <div className="bg-background text-foreground">
      {/* ── Header (unchanged) ── */}
      <section className="relative pt-24 pb-32 bg-surface-2">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(100deg, hsl(230 70% 48%) 0%, hsl(217 91% 72%) 55%, hsl(205 89% 65%) 100%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
              EVERYTHING YOU NEED TO{" "}
              <span className="text-blue-800">AUDIT SMARTER</span>
            </h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              From data ingestion to final approval, AuditWise handles the
              entire audit lifecycle with precision, transparency, and
              enterprise-grade security.
            </p>
          </div>
        </div>
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
      </section>

      {/* ── Body ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const num = String(index + 1).padStart(2, "0");
            const isEven = index % 2 === 0;

            return (
              <div key={feature.title}>
                {/* Horizontal rule with number */}
                <div className="flex items-center gap-4 mb-10">
                  <span
                    className="text-xs font-black uppercase tracking-[0.3em]"
                    style={{ color: "hsl(217 91% 50%)" }}
                  >
                    {num}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div
                  className={`grid lg:grid-cols-[1fr_420px] gap-16 mb-20 ${
                    !isEven ? "lg:grid-cols-[420px_1fr]" : ""
                  }`}
                >
                  {/* Text block */}
                  <div
                    className={`${
                      !isEven ? "lg:order-2" : ""
                    } pr-0 lg:pr-16 pb-10 lg:pb-0`}
                  >
                    {/* Giant ghost number */}
                    <div className="relative mb-4">
                      <span
                        className="absolute -top-6 -left-2 text-[8rem] font-black leading-none select-none pointer-events-none"
                        style={{
                          color: "hsl(217 91% 50% / 0.06)",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {num}
                      </span>
                      <div className="relative z-10 flex items-center gap-3 mb-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: "hsl(217 91% 50% / 0.1)" }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: "hsl(217 91% 50%)" }}
                          />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight text-foreground">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                      {feature.description}
                    </p>

                    {/* Details as inline tags instead of list */}
                    <div className="flex flex-wrap gap-2">
                      {feature.details.map((detail) => (
                        <span
                          key={detail}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                          style={{
                            borderColor: "hsl(217 91% 50% / 0.2)",
                            color: "hsl(217 91% 45%)",
                            background: "hsl(217 91% 50% / 0.05)",
                          }}
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual block — abstract geometric accent, not a boring icon box */}
                  <div
                    className={`${
                      !isEven ? "lg:order-1" : ""
                    } relative rounded-2xl overflow-hidden`}
                    style={{
                      background: "hsl(217 91% 50% / 0.04)",
                      border: "1px solid hsl(217 91% 50% / 0.12)",
                      minHeight: 240,
                    }}
                  >
                    {/* Grid pattern */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: `linear-gradient(hsl(217 91% 50% / 0.07) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(217 91% 50% / 0.07) 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                      }}
                    />

                    {/* Glowing orb */}
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        width: 220,
                        height: 220,
                        borderRadius: "50%",
                        background: "hsl(217 91% 60% / 0.12)",
                        filter: "blur(48px)",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />

                    {/* Center content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 gap-4">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: "hsl(217 91% 50% / 0.12)",
                          border: "1px solid hsl(217 91% 50% / 0.25)",
                          boxShadow: "0 0 32px hsl(217 91% 50% / 0.15)",
                        }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: "hsl(217 91% 52%)" }}
                        />
                      </div>

                      {/* Decorative pill row */}
                      <div className="flex gap-2 mt-2">
                        {[40, 64, 48].map((w, i) => (
                          <div
                            key={i}
                            className="h-1.5 rounded-full"
                            style={{
                              width: w,
                              background:
                                i === 1
                                  ? "hsl(217 91% 52% / 0.5)"
                                  : "hsl(217 91% 52% / 0.2)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Features;
