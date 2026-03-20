import {
  Upload,
  Send,
  ClipboardCheck,
  TrendingUp,
  FolderDown,
  Users,
  BarChart3,
  Eye,
} from "lucide-react";
import CreateAuditImg from "../assets/create-audit.png";
import EmailResponseImg from "../assets/email-response.png";
import ReviewerActionImg from "../assets/reviewer-action.png";
import AnalyseReportImg from "../assets/analyse-report.png";

const steps = [
  {
    icon: Upload,
    step: "01",
    image: CreateAuditImg,
    title: "Auditor Creates an Audit",
    accent: "hsl(217 91% 48%)",
    accentBg: "hsl(217 91% 48% / 0.08)",
    accentBorder: "hsl(217 91% 48% / 0.2)",
    detail: "Excel → Parse → Validate → Audit Created",
    longDescription:
      "Begin your audit workflow by importing data from your preferred source. AuditWise supports both Excel uploads and direct database connections, allowing you to choose the method that best fits your existing infrastructure. Our intelligent parsing ensures data accuracy and consistency from the start.",
    features: [
      "Support for 10+ Excel formats",
      "Live database sync capability",
      "Automatic data validation",
      "Error detection and correction",
      "Bulk data transformation",
    ],
  },
  {
    icon: Send,
    step: "02",
    image: EmailResponseImg,
    title: "Assign & Notify Reviewers",
    accent: "hsl(38 92% 52%)",
    accentBg: "hsl(38 92% 52% / 0.08)",
    accentBorder: "hsl(38 92% 52% / 0.2)",
    detail: "Select reviewers → Credentials sent → Email delivered",
    longDescription:
      "Streamline the review process by instantly assigning audits to your panel of reviewers. Each reviewer receives a personalized secure email with one-time credentials, eliminating the need for manual credential distribution. Real-time tracking ensures you know when reviewers access their audits.",
    features: [
      "One-click reviewer assignment",
      "Automatic credential generation",
      "Secure email delivery",
      "Access notifications",
      "Delivery tracking and logs",
    ],
  },
  {
    icon: ClipboardCheck,
    step: "03",
    image: ReviewerActionImg,
    title: "Reviewer Acts on Audit",
    accent: "hsl(142 60% 38%)",
    accentBg: "hsl(142 60% 38% / 0.08)",
    accentBorder: "hsl(142 60% 38% / 0.2)",
    detail: "Login → Review → Approve / Reject",
    longDescription:
      "Reviewers enjoy an intuitive dashboard designed specifically for their workflow. They can easily navigate assigned items, leave detailed comments, and make rapid decisions. The streamlined interface means reviewers spend less time learning tools and more time reviewing audit items.",
    features: [
      "Intuitive review interface",
      "Item-level commenting",
      "Bulk action support",
      "Progress tracking",
      "Decision history",
    ],
  },
  {
    icon: TrendingUp,
    step: "04",
    image: AnalyseReportImg,
    title: "Analytics & Reporting",
    accent: "hsl(270 70% 55%)",
    accentBg: "hsl(270 70% 55% / 0.08)",
    accentBorder: "hsl(270 70% 55% / 0.2)",
    detail: "Actions logged → Dashboards updated",
    longDescription:
      "Gain comprehensive insights into your audit process with real-time analytics. Monitor approval rates, reviewer performance, and compliance metrics all from a centralized dashboard. Export reports for stakeholder communication and compliance documentation.",
    features: [
      "Real-time metric updates",
      "Custom dashboard views",
      "Multi-format exports",
      "Trend analysis",
      "Compliance reporting",
    ],
  },
];

const Workflow = () => {
  return (
    <div className="bg-background text-foreground">
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
              THE <span className="text-blue-800">AUDITWISE</span> WORKFLOW
            </h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              From data import to final approval in four clear steps. Simple for
              teams, powerful for compliance.
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

      {/* Workflow Section */}
      <section className="py-10 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(217 91% 50% / 0.15) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, hsl(var(--background)/0.85) 100%)",
          }}
        />

        <div className="container relative z-10 px-6">
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={step.step}>
                <div className="rounded-2xl border border-border bg-card overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left: Image */}
                    {/* Left: Image */}
                    <div
                      className="relative flex flex-col overflow-hidden"
                      style={{
                        background: step.accentBg,
                        borderRight: `1px solid ${step.accentBorder}`,
                      }}
                    >
                      {/* Step number + Icon on top */}
                      <div className="flex items-center gap-3 px-6 pt-6 pb-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: step.accent + "20",
                            border: `2px solid ${step.accentBorder}`,
                          }}
                        >
                          <step.icon
                            className="w-5 h-5"
                            style={{ color: step.accent }}
                          />
                        </div>
                        <span
                          className="text-2xl font-black"
                          style={{
                            fontFamily:
                              "'Bebas Neue', 'Arial Black', sans-serif",
                            color: step.accent,
                          }}
                        >
                          {step.step}
                        </span>
                      </div>

                      {/* Image below */}
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain px-6 pb-6"
                        style={{ display: "block" }}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          (
                            e.currentTarget.nextElementSibling as HTMLElement
                          ).style.display = "flex";
                        }}
                      />

                      {/* Fallback if image fails */}
                      <div
                        className="absolute inset-0 items-center justify-center hidden"
                        style={{ background: step.accentBg }}
                      >
                        <span
                          className="text-6xl font-black"
                          style={{ color: step.accent }}
                        >
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.longDescription}
                      </p>

                      {/* Features List */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {step.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3 text-sm text-muted-foreground"
                            >
                              <div
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ background: step.accent }}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Detail Tag */}
                      <div
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono border w-fit"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-10 relative">
        <div className="container px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Complete Workflow Timeline
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how AuditWise streamlines your entire audit lifecycle
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent transform -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {[
                { title: "Data Import", time: "~5 minutes", icon: FolderDown },
                {
                  title: "Reviewer Assignment",
                  time: "~2 minutes",
                  icon: Users,
                },
                { title: "Review Period", time: "1-7 days", icon: Eye },
                {
                  title: "Analysis & Reporting",
                  time: "Real-time",
                  icon: BarChart3,
                },
              ].map((item, i) => (
                <div key={item.title} className="flex items-center gap-8">
                  {i % 2 === 0 ? (
                    <>
                      <div className="flex-1 text-right">
                        <h4 className="font-bold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.time}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-primary bg-card flex items-center justify-center z-10 text-xl">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1" />
                      <div className="w-12 h-12 rounded-full border-2 border-primary bg-card flex items-center justify-center z-10 text-xl">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.time}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workflow;
