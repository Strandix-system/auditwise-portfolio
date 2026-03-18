import { UserCog, ClipboardList, Eye, Check } from "lucide-react";

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
    ],
  },
];

const RolesSection = () => {
  return (
    <section id="roles" className="relative overflow-hidden">
      <style>{`
        .role-flip-card { perspective: 1000px; }
        .role-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }
        .role-flip-card:hover .role-flip-inner { transform: rotateY(180deg); }
        .role-flip-front,
        .role-flip-back {
          position: absolute;
          inset: 0;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        .role-flip-back { transform: rotateY(180deg); }
      `}</style>

      {/* Background cross-hatch */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 pb-12">
          <h2
            className="text-4xl md:text-5xl font-black "
            // style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
          >
            BUILT FOR EVERY
            {/* <br /> */}
            <span className="text-gradient-blue"> STAKEHOLDER</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AuditWise's role-based system ensures every team member has the
            right tools and visibility—no more, no less.
          </p>
        </div>

        {/* Flip cards */}
        <div className="grid md:grid-cols-3 gap-6" style={{ minHeight: 360 }}>
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="role-flip-card"
                style={{ height: 360 }}
              >
                <div className="role-flip-inner" style={{ height: 360 }}>
                  {/* ── FRONT ── */}
                  <div className="role-flip-front border border-border bg-card flex flex-col items-center justify-center gap-5 p-8">
                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{ background: role.accent }}
                    />

                    {/* Large icon circle */}
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center border-2"
                      style={{
                        background: role.accentBg,
                        borderColor: role.accentBorder,
                      }}
                    >
                      <Icon
                        className="w-10 h-10"
                        style={{ color: role.accent }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-5xl font-black tracking-tight text-center"
                      style={{
                        fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                      }}
                    >
                      {role.title}
                    </h3>

                    {/* Accent line */}
                    <div
                      className="w-10 h-[2px]"
                      style={{ background: role.accent }}
                    />

                    {/* Hint */}
                    <p className="text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em]">
                      Hover to explore
                    </p>
                  </div>

                  {/* ── BACK ── */}
                  <div
                    className="role-flip-back border flex flex-col justify-between p-7"
                    style={{
                      background: role.accentBg,
                      borderColor: role.accentBorder,
                    }}
                  >
                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{ background: role.accent }}
                    />

                    <div>
                      {/* Icon + title row */}
                      <div className="flex items-center gap-3 mb-5 pt-1">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center border shrink-0"
                          style={{
                            background: "hsl(var(--background)/0.55)",
                            borderColor: role.accentBorder,
                          }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: role.accent }}
                          />
                        </div>
                        <h3
                          className="text-3xl font-black tracking-tight"
                          style={{
                            fontFamily:
                              "'Bebas Neue', 'Arial Black', sans-serif",
                            color: role.accent,
                          }}
                        >
                          {role.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                        {role.description}
                      </p>
                    </div>

                    {/* Permissions */}
                    <ul className="space-y-2">
                      {role.permissions.map((perm) => (
                        <li
                          key={perm}
                          className="flex items-start gap-2.5 text-xs text-muted-foreground"
                        >
                          <span
                            className="mt-0.5 w-4 h-4 rounded-sm flex items-center justify-center shrink-0 border"
                            style={{
                              background: "hsl(var(--background)/0.5)",
                              borderColor: role.accentBorder,
                            }}
                          >
                            <Check
                              className="w-2.5 h-2.5"
                              style={{ color: role.accent }}
                            />
                          </span>
                          {perm}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hierarchy strip */}
        <div className="mt-10 border border-foreground/8 p-6 flex flex-wrap items-center justify-center gap-3">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 mr-4">
            Hierarchy
          </span>
          {[
            { label: "Admin", color: "hsl(217 91% 48%)" },
            { label: "Auditor", color: "hsl(199 89% 42%)" },
            { label: "Reviewer", color: "hsl(142 60% 38%)" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-3">
              {i > 0 && <span className="text-foreground/20 text-sm">—</span>}
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-l-2"
                style={{
                  color: item.color,
                  borderColor: item.color,
                  background: `${item.color}0d`,
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
