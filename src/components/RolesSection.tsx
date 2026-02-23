import { Crown, UserCog, ClipboardList, Eye, Check } from "lucide-react";

const roles = [
  // {
  //   icon: Crown,
  //   title: "Superadmin",
  //   badge: "Platform Control",
  //   badgeStyle: { color: "hsl(270 70% 55%)", borderColor: "hsl(270 70% 55% / 0.3)", background: "hsl(270 70% 55% / 0.06)" },
  //   iconStyle: { background: "hsl(270 70% 55% / 0.1)", borderColor: "hsl(270 70% 55% / 0.25)", color: "hsl(270 70% 55%)" },
  //   description:
  //     "The highest authority on the platform. Superadmin manages the entire system, creates and manages admins, configures global settings, and has full visibility across all organizations and audit activities.",
  //   permissions: [
  //     "Full platform administration",
  //     "Create & manage Admin accounts",
  //     "View all organization audits",
  //     "Configure system-wide settings",
  //     "Monitor all role activities",
  //     "Manage billing & subscriptions",
  //   ],
  // },
  {
    icon: UserCog,
    title: "Admin",
    badge: "Organization Control",
    badgeStyle: {
      color: "hsl(217 91% 48%)",
      borderColor: "hsl(217 91% 48% / 0.3)",
      background: "hsl(217 91% 48% / 0.06)",
    },
    iconStyle: {
      background: "hsl(217 91% 48% / 0.1)",
      borderColor: "hsl(217 91% 48% / 0.25)",
      color: "hsl(217 91% 48%)",
    },
    description:
      "Organization-level administrators who oversee the audit operations within their domain. Admins manage auditors and reviewers, configure team settings, and maintain oversight of all audits in their organization.",
    permissions: [
      "Manage Auditor & Reviewer accounts",
      "View org audit reports",
      // "Configure org-level settings",
      // "Monitor team performance",
      "Access organization analytics",
      "Control user permissions",
    ],
  },
  {
    icon: ClipboardList,
    title: "Auditor",
    badge: "Audit Creator",
    badgeStyle: {
      color: "hsl(199 89% 42%)",
      borderColor: "hsl(199 89% 42% / 0.3)",
      background: "hsl(199 89% 42% / 0.06)",
    },
    iconStyle: {
      background: "hsl(199 89% 42% / 0.1)",
      borderColor: "hsl(199 89% 42% / 0.25)",
      color: "hsl(199 89% 42%)",
    },
    description:
      "The core operators who build and manage audit workflows. Auditors import data via Excel or live database connections, manage their reviewer panel, and send audit packages via email for review.",
    permissions: [
      "Create audits from Excel files",
      "Connect to multiple databases",
      "Manage reviewer panel",
      "Send audits via email",
      "View personal analytics",
      "Track reviewer progress",
    ],
  },
  {
    icon: Eye,
    title: "Reviewer",
    badge: "Review & Approve",
    badgeStyle: {
      color: "hsl(142 60% 38%)",
      borderColor: "hsl(142 60% 38% / 0.3)",
      background: "hsl(142 60% 38% / 0.06)",
    },
    iconStyle: {
      background: "hsl(142 60% 38% / 0.1)",
      borderColor: "hsl(142 60% 38% / 0.25)",
      color: "hsl(142 60% 38%)",
    },
    description:
      "Specialized users who receive and review audit items assigned by auditors. Reviewers access their dashboard via secure email credentials and can approve or reject items with full commentary.",
    permissions: [
      "View assigned audit items",
      "Approve or reject entries",
      // "Add review comments",
      "Access via email credentials",
      // "Track personal review history",
      // "Receive real-time notifications",
    ],
  },
];

const RolesSection = () => {
  return (
    <section id="roles" className="py-32 relative bg-surface-2">
      {/* Decorative line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Built for{" "}
            <span className="text-gradient-blue">Every Stakeholder</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            AuditWise's role-based system ensures every team member has the
            right tools and visibility—no more, no less.
          </p>
        </div>

        {/* Roles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/20 transition-all duration-300 overflow-hidden shadow-card"
              >
                {/* Subtle animated bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 60% at 20% 20%, hsl(217 91% 50% / 0.03), transparent)",
                  }}
                />

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center border flex-shrink-0"
                    style={{
                      background: role.iconStyle.background,
                      borderColor: role.iconStyle.borderColor,
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: role.iconStyle.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <div
                      className="inline-flex items-center text-xs font-medium border px-2.5 py-1 rounded-full mb-1"
                      style={role.badgeStyle}
                    >
                      {role.badge}
                    </div>
                    <h3 className="font-display text-2xl font-bold">
                      {role.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Permissions */}
                <div className="grid grid-cols-1 gap-2">
                  {role.permissions.map((perm) => (
                    <div
                      key={perm}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border"
                        style={{
                          background: role.iconStyle.background,
                          borderColor: role.iconStyle.borderColor,
                        }}
                      >
                        <Check
                          className="w-3 h-3"
                          style={{ color: role.iconStyle.color }}
                        />
                      </div>
                      {perm}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Role hierarchy visual */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center shadow-card">
          <p className="text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">
            Role Hierarchy
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              {
                label: "Superadmin",
                style: {
                  color: "hsl(270 70% 55%)",
                  borderColor: "hsl(270 70% 55% / 0.3)",
                  background: "hsl(270 70% 55% / 0.06)",
                },
              },
              {
                label: "→",
                style: {
                  color: "hsl(var(--muted-foreground))",
                  borderColor: "transparent",
                  background: "transparent",
                },
              },
              {
                label: "Admin",
                style: {
                  color: "hsl(217 91% 48%)",
                  borderColor: "hsl(217 91% 48% / 0.3)",
                  background: "hsl(217 91% 48% / 0.06)",
                },
              },
              {
                label: "→",
                style: {
                  color: "hsl(var(--muted-foreground))",
                  borderColor: "transparent",
                  background: "transparent",
                },
              },
              {
                label: "Auditor",
                style: {
                  color: "hsl(199 89% 42%)",
                  borderColor: "hsl(199 89% 42% / 0.3)",
                  background: "hsl(199 89% 42% / 0.06)",
                },
              },
              {
                label: "→",
                style: {
                  color: "hsl(var(--muted-foreground))",
                  borderColor: "transparent",
                  background: "transparent",
                },
              },
              {
                label: "Reviewer",
                style: {
                  color: "hsl(142 60% 38%)",
                  borderColor: "hsl(142 60% 38% / 0.3)",
                  background: "hsl(142 60% 38% / 0.06)",
                },
              },
            ].map((item, i) => (
              <span
                key={i}
                className="text-sm font-semibold px-4 py-2 rounded-full border"
                style={item.style}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
