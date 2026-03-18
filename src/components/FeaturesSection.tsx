import {
  Shield,
  Users,
  FileSpreadsheet,
  Database,
  Mail,
  CheckCircle2,
  BarChart3,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description:
      "Granular permissions for Superadmin, Admin, Auditor, and Reviewer roles. Each user sees only what they need—nothing more.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Audit Import",
    description:
      "Upload Excel files to instantly create structured audits. Map columns, validate data, and start reviewing in minutes.",
  },
  {
    icon: Database,
    title: "Multi-Database Connectivity",
    description:
      "Connect to MySQL, MongoDB, and more. Pull live data directly from your existing systems for real-time auditing.",
  },
  {
    icon: Mail,
    title: "Secure Email Delivery",
    description:
      "Send audit files to reviewers with credentials. Each reviewer gets a secure access link with their email and password.",
  },
  {
    icon: CheckCircle2,
    title: "Approve & Reject Workflow",
    description:
      "Reviewers approve or reject individual audit items. Full audit trail of every decision is recorded automatically.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Key audit metrics as summary counts and detailed lists for monitoring progress, reviews, and compliance.",
  },
  {
    icon: Users,
    title: "Reviewer Management",
    description:
      "Create and manage your reviewer panel, assign specific audits, and track progress from a unified dashboard.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "End-to-end encryption, role-scoped data visibility, and audit logging keep your sensitive financial data protected.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-10 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, hsl(217 91% 50% / 0.04) 0%, transparent 60%)",
        }}
      />

      {/* <div className="container mx-auto px-6 relative z-10"> */}
      {/* Header */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Built for{" "}
            <span className="text-gradient-blue">Modern Auditing</span>
          </h2>
          <p className="text-muted-foreground text-md max-w-2xl mx-auto">
            Every feature is designed to make audit operations faster, easier,
            and more compliant
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden cursor-default"
                style={{ minHeight: 180 }}
              >
                {/* DEFAULT STATE — icon + title centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-3 bg-gradient-to-tl from-blue-100 via-blue-50 to-blue-400">
                  {/* Circle icon */}
                  <div className="w-22 h-22 rounded-full flex items-center justify-center">
                    <Icon
                      className="w-16 h-16"
                      style={{ color: "hsl(217 91% 48%)" }}
                    />
                  </div>
                  <p className="text-sm font-semibold text-foreground text-center leading-snug">
                    {feature.title}
                  </p>
                </div>

                {/* HOVER STATE — icon small + title + description */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ background: "hsl(217 91% 50% / 0.04)" }}
                >
                  {/* Small icon on hover */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "hsl(217 91% 50% / 0.10)" }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: "hsl(217 91% 48%)" }}
                    />
                  </div>
                  <p className="text-sm font-semibold text-foreground text-center leading-snug">
                    {feature.title}
                  </p>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom border accent that grows on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: "hsl(217 91% 50%)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
