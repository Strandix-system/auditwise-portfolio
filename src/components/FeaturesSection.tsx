import {
  Shield,
  Users,
  FileText,
  BarChart3,
  Database,
  FileSpreadsheet,
  Mail,
  CheckCircle2,
  Lock,
  Zap,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description:
      "Granular permissions for Superadmin, Admin, Auditor, and Reviewer roles. Each user sees only what they need—nothing more.",
    tag: "Security",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Audit Import",
    description:
      "Auditors can upload Excel files to instantly create structured audits. Map columns, validate data, and start reviewing in minutes.",
    tag: "Productivity",
  },
  {
    icon: Database,
    title: "Multi-Database Connectivity",
    description:
      "Connect to MySQL, MongoDB, and more. Pull live data directly from your existing systems for real-time auditing.",
    tag: "Integration",
  },
  {
    icon: Mail,
    title: "Secure Email Delivery",
    description:
      "Send audit files to reviewers with credentials. Each reviewer receives a access link with their email and password.",
    tag: "Collaboration",
  },
  {
    icon: CheckCircle2,
    title: "Approve & Reject Workflow",
    description:
      "Reviewers can approve or reject individual audit items. Full audit trail of every decision is recorded automatically.",
    tag: "Workflow",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Key audit metrics presented as summary counts and detailed lists for monitoring progress, reviews, approvals, and compliance.",
    tag: "Analytics",
  },
  {
    icon: Users,
    title: "Reviewer Management",
    description:
      "Auditors can create and manage their reviewer panel, assign specific audits, and track progress from a unified dashboard.",
    tag: "Management",
  },

  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "End-to-end encryption, role-scoped data visibility, and audit logging ensure your sensitive financial data stays protected.",
    tag: "Compliance",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      {/* Section bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(217 91% 50% / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Everything You Need to{" "}
            <span className="text-gradient-blue">Audit Smarter</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From data ingestion to final approval, AuditWise handles the entire
            audit lifecycle with precision and transparency.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-blue overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, hsl(217 91% 50% / 0.05), transparent 70%)",
                  }}
                />

                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/35 transition-colors"
                    style={{ background: "hsl(217 91% 50% / 0.08)" }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span
                    className="text-xs font-medium text-primary/80 border border-primary/20 px-2.5 py-1 rounded-full"
                    style={{ background: "hsl(217 91% 50% / 0.06)" }}
                  >
                    {feature.tag}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
