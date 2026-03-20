import {
  UserCog,
  ClipboardList,
  Eye,
  Check,
  ArrowRight,
  Key,
  Zap,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";

const roles = [
  {
    icon: UserCog,
    title: "Admin",
    accent: "hsl(217 91% 48%)",
    accentBg: "hsl(217 91% 48% / 0.08)",
    accentBorder: "hsl(217 91% 48% / 0.25)",
    description:
      "Organization-level administrators who oversee audit operations within their domain. Admins manage auditors and reviewers, configure team settings, and maintain oversight of all audits.",
    permissions: [
      "Manage Auditor & Reviewer accounts",
      "View org audit reports",
      "Access organization analytics",
      "Control user permissions",
      "Configure audit templates",
      "Set up role hierarchies",
    ],
    responsibilities: [
      "Oversee all organizational audits",
      "Manage user access and roles",
      "Review compliance reports",
      "Configure system settings",
    ],
  },
  {
    icon: ClipboardList,
    title: "Auditor",
    accent: "hsl(199 89% 42%)",
    accentBg: "hsl(199 89% 42% / 0.08)",
    accentBorder: "hsl(199 89% 42% / 0.25)",
    description:
      "Core operators who build and manage audit workflows. Auditors import data via Excel or live database connections, manage their reviewer panel, and send audit packages via email.",
    permissions: [
      "Create audits from Excel files",
      "Connect to multiple databases",
      "Manage reviewer panel",
      "Send audits via email",
      "View personal analytics",
      "Track reviewer progress",
      "Edit audit items",
      "Generate compliance reports",
    ],
    responsibilities: [
      "Create and manage audits",
      "Assign audits to reviewers",
      "Monitor review progress",
      "Handle reviewer communications",
    ],
  },
  {
    icon: Eye,
    title: "Reviewer",
    accent: "hsl(142 60% 38%)",
    accentBg: "hsl(142 60% 38% / 0.08)",
    accentBorder: "hsl(142 60% 38% / 0.25)",
    description:
      "Specialized users who receive and review audit items assigned by auditors. Reviewers access their dashboard via secure email credentials and approve or reject items.",
    permissions: [
      "View assigned audit items",
      "Approve or reject entries",
      "Access via email credentials",
      "Add comments and notes",
      "View audit history",
    ],
    responsibilities: [
      "Review assigned items",
      "Make approval decisions",
      "Provide feedback",
      "Complete reviews on time",
    ],
  },
];

const Roles = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Roles Header Section with Wavy Bottom - Matching Features Design */}
      <section className="relative pt-24 pb-32 bg-surface-2">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(100deg, hsl(230 70% 48%) 0%, hsl(217 91% 72%) 55%, hsl(205 89% 65%) 100%)",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
              BUILT FOR EVERY <span className="text-blue-800">STAKEHOLDER</span>
            </h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              AuditWise's role-based system ensures every team member has the
              right tools and visibility—no more, no less. Complete control over
              who sees what, and what they can do.
            </p>
          </div>
        </div>

        {/* Wavy Bottom Edge - Same as Features */}
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

      {/* Roles Overview Section */}
      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" />

        <div className="space-y-10 flex flex-col items-center">
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <div key={role.title} className="max-w-6xl py-10 px-20">
                {/* Heading */}
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6" style={{ color: role.accent }} />
                  <h2
                    className="text-3xl font-bold"
                    style={{ color: role.accent }}
                  >
                    {role.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Permissions */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold mb-2 uppercase tracking-widest text-foreground">
                    Permissions
                  </h4>
                  <ul className="space-y-1">
                    {role.permissions.map((perm) => (
                      <li
                        key={perm}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check
                          className="w-4 h-4"
                          style={{ color: role.accent }}
                        />
                        {perm}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 uppercase tracking-widest text-foreground">
                    Responsibilities
                  </h4>
                  <ul className="space-y-1">
                    {role.responsibilities.map((resp) => (
                      <li
                        key={resp}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: role.accent }}
                        />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hierarchy Section */}
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
            <h2 className="text-4xl font-bold mb-4">
              Role Hierarchy & Permissions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A clear hierarchy ensures proper oversight and data security
            </p>
          </div>

          {/* Hierarchy Flow */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            {[
              {
                label: "Admin",
                color: "hsl(217 91% 48%)",
                description: "Full System Control",
              },
              {
                label: "Auditor",
                color: "hsl(199 89% 42%)",
                description: "Audit Management",
              },
              {
                label: "Reviewer",
                color: "hsl(142 60% 38%)",
                description: "Review Operations",
              },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center gap-6">
                <div
                  className="rounded-xl border-2 p-6 text-center min-w-[180px]"
                  style={{
                    borderColor: item.color,
                    background: item.color + "08",
                  }}
                >
                  <div
                    className="text-2xl font-bold mb-2"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {i < 2 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Granular Control",
                description:
                  "Define precisely what each role can see, create, edit, and delete.",
                icon: Key,
              },
              {
                title: "Audit Logging",
                description:
                  "Every action is logged with user, timestamp, and changes made.",
                icon: ClipboardList,
              },
              {
                title: "Dynamic Permissions",
                description:
                  "Update permissions in real-time without restarting the system.",
                icon: Zap,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="text-3xl mb-3">
                  <feature.icon className="w-8 h-8 text-indigo-700" />
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
};

export default Roles;
