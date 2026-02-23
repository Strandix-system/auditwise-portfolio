import {
  FileSpreadsheet,
  Database,
  Mail,
  CheckCircle2,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileSpreadsheet,
    title: "Auditor Creates an Audit",
    description:
      "The auditor uploads an Excel file or connects directly to a live database (PostgreSQL, MySQL, MongoDB, etc.) to generate a structured audit dataset.",
    detail: "Excel → Parse → Validate → Audit Created",
  },
  {
    step: "02",
    icon: Mail,
    title: "Assign & Notify Reviewers",
    description:
      "The auditor selects reviewers from their panel and sends the audit package via email. Each reviewer receives a secure link with their personal credentials.",
    detail: "Auditor selects reviewers → Sends credentials → Email delivered",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Reviewer Acts on Audit",
    description:
      "Reviewers log in using their email and password, access their assigned audits, and perform approve or reject actions on each item with optional comments.",
    detail: "Login → Review items → Approve / Reject with comments",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Analytics",
    description:
      "Completed actions are aggregated into visual dashboards. Track audit progress, reviewer response rates, approval ratios, and compliance trends in real time.",
    detail: "Actions logged → Analytics updated",
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-32 relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            The <span className="text-gradient-blue">AuditWise</span> Workflow
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From data import to final approval in four clear steps. Simple for
            teams, powerful for compliance.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/25 via-primary/10 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
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
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : ""}`}>
                    <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/25 transition-all duration-300 group hover:shadow-blue shadow-card">
                      <div
                        className={`flex items-start gap-4 mb-4 ${
                          isEven ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className="w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors"
                          style={{
                            background: "hsl(217 91% 50% / 0.08)",
                            borderColor: "hsl(217 91% 50% / 0.2)",
                          }}
                        >
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">
                            Step {step.step}
                          </span>
                          <h3 className="font-display text-xl font-bold mt-0.5">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-2 border border-border text-xs text-muted-foreground font-mono">
                        {step.detail}
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full border-2 border-primary/35 bg-card items-center justify-center flex-shrink-0 z-10 shadow-blue">
                    <span className="font-display font-bold text-sm text-primary">
                      {step.step}
                    </span>
                  </div>

                  {/* Spacer for alternating layout */}
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
