import { Shield, Target, Users, Zap, Globe, Award } from "lucide-react";

const stats = [
  { value: "10K+", label: "Audits Processed" },
  { value: "500+", label: "Organizations" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.9★", label: "Customer Rating" },
];

const team = [
  {
    name: "Compliance Teams",
    description:
      "Built alongside compliance professionals who needed a faster, more reliable way to manage large-scale review cycles.",
    icon: "🏛️",
    accent: "hsl(217 91% 48%)",
  },
  {
    name: "Finance Auditors",
    description:
      "Designed to handle the precision demands of financial auditing — from import to final sign-off.",
    icon: "💼",
    accent: "hsl(38 92% 52%)",
  },
  {
    name: "IT & Operations",
    description:
      "Engineered for reliability and scalability, supporting teams that audit technical infrastructure and operational data.",
    icon: "⚙️",
    accent: "hsl(142 60% 38%)",
  },
  {
    name: "Risk Management",
    description:
      "Helps identify, track, and mitigate risks with structured audit workflows and real-time visibility.",
    icon: "⚠️",
    accent: "hsl(0 84% 60%)",
  },
  {
    name: "Internal Audit Teams",
    description:
      "Streamlines internal audits with centralized data, faster reviews, and consistent reporting standards.",
    icon: "📊",
    accent: "hsl(262 83% 58%)",
  },
  {
    name: "External Consultants",
    description:
      "Enables secure collaboration with external auditors while maintaining strict access control and audit trails.",
    icon: "🤝",
    accent: "hsl(199 89% 42%)",
  },
];

const About = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Header Section with Wavy Bottom */}
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
              ABOUT <span style={{ color: "hsl(217 91% 25%)" }}>AUDITWISE</span>
            </h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              We are building the audit platform that compliance teams actually
              want to use — fast, secure, and built around how real teams work.
            </p>
          </div>
        </div>

        {/* Wavy Bottom Edge */}
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

      {/* Mission Statement */}
      <section className="py-10 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% 0%, hsl(217 91% 50% / 0.04) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              AuditWise was born out of frustration with fragmented, manual
              audit processes. Spreadsheets, scattered emails, and disconnected
              tools were slowing teams down and introducing risk. We set out to
              build a single, intelligent platform that covers the entire audit
              lifecycle — from data import to final approval — with clarity,
              speed, and compliance built in from the ground up.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div
                  className="text-4xl font-black mb-1"
                  style={{
                    fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                    color: "hsl(217 91% 48%)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For Section */}
      <section className="py-10 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% 100%, hsl(217 91% 50% / 0.04), transparent 60%)",
          }}
        />
        <div className="container px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Built For Real Teams</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AuditWise is shaped by the professionals who use it every day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4
                  className="text-xl font-bold mb-3"
                  style={{ color: item.accent }}
                >
                  {item.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: item.accent }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — mirrors Workflow's Complete Workflow Timeline */}
    </div>
  );
};

export default About;
