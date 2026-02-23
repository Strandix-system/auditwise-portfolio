import {
  Users,
  Upload,
  Mail,
  UserCheck,
  FileUp,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
  Download,
  Search,
  ArrowUpDown,
} from "lucide-react";

const metrics = [
  {
    label: "Total Users",
    value: "1",
    icon: Users,
    iconBg: "hsl(210 90% 92%)",
    iconColor: "hsl(210 90% 50%)",
    borderColor: "hsl(210 90% 55%)",
  },
  {
    label: "Total File Uploads",
    value: "2",
    icon: Upload,
    iconBg: "hsl(150 70% 90%)",
    iconColor: "hsl(150 70% 38%)",
    borderColor: "hsl(150 70% 45%)",
  },
  {
    label: "Total Mails Sent",
    value: "2",
    icon: Mail,
    iconBg: "hsl(38 92% 92%)",
    iconColor: "hsl(38 92% 48%)",
    borderColor: "hsl(38 92% 52%)",
  },
  {
    label: "Total Reviewers",
    value: "2",
    icon: UserCheck,
    iconBg: "hsl(270 70% 93%)",
    iconColor: "hsl(270 70% 55%)",
    borderColor: "hsl(270 70% 60%)",
  },
  {
    label: "Total Reviewers File",
    value: "2",
    icon: FileUp,
    iconBg: "hsl(150 70% 90%)",
    iconColor: "hsl(150 70% 38%)",
    borderColor: "hsl(150 70% 45%)",
  },
  {
    label: "Pending Files",
    value: "1",
    icon: Clock,
    iconBg: "hsl(220 10% 90%)",
    iconColor: "hsl(220 10% 50%)",
    borderColor: "hsl(220 10% 60%)",
  },
  {
    label: "Approved Files",
    value: "1",
    icon: CheckCircle,
    iconBg: "hsl(150 70% 90%)",
    iconColor: "hsl(150 70% 38%)",
    borderColor: "hsl(150 70% 45%)",
  },
  {
    label: "Rejected Files",
    value: "0",
    icon: XCircle,
    iconBg: "hsl(0 80% 93%)",
    iconColor: "hsl(0 80% 55%)",
    borderColor: "hsl(0 80% 55%)",
  },
];

const tableData = [
  {
    name: "Deepti",
    email: "pro.deep@gmail.com",
    auditorEmail: "kamal@gmail.com",
    organization: "Barnett Reeves Plc",
  },
  {
    name: "Marcus",
    email: "marcus.lee@techcorp.io",
    auditorEmail: "nina@audit.com",
    organization: "Highfield Solutions",
  },
  {
    name: "Priya",
    email: "priya.sharma@ventures.in",
    auditorEmail: "raj@reviewhub.com",
    organization: "Nexus Partners Ltd",
  },
];

const AnalyticsSection = () => {
  return (
    <section id="analytics" className="py-32 relative bg-surface-2">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 100%, hsl(217 91% 50% / 0.04), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Insight at Every <span className="text-gradient-blue">Level</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every role gets a purpose-built dashboard with the metrics that
            matter most to them.
          </p>
        </div>

        {/* Mock analytics UI */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-card">
          {/* Top bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-surface-2">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "hsl(38 92% 55% / 0.7)" }}
            />
            <div className="w-3 h-3 rounded-full bg-success/70" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">
              AuditWise — Analytics Dashboard
            </span>
          </div>

          <div className="p-6 space-y-6">
            {/* Section label */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Organization - Analytics
              </h3>
            </div>

            {/* 8 metric cards in 2 rows of 4 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-white dark:bg-surface-1 p-4 shadow-sm flex items-center gap-3 relative overflow-hidden"
                    style={{ borderLeft: `4px solid ${m.borderColor}` }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: m.iconBg }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: m.iconColor }}
                      />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-foreground leading-none">
                        {m.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 leading-tight">
                        {m.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Organization Analytics Breakdown */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Organization Analytics Breakdown
              </h3>

              {/* Search + download row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-surface-1 w-56">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground w-full"
                  />
                </div>
                <button className="p-2 rounded-lg border border-border bg-surface-1 hover:bg-surface-2 transition-colors">
                  <Download className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Table */}
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface-1">
                      {[
                        "Name",
                        "Email",
                        "Auditor Email",
                        "Organization",
                        "Actions",
                      ].map((col) => (
                        <th
                          key={col}
                          className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground"
                        >
                          <div className="flex items-center gap-1">
                            {col}
                            {col !== "Actions" && (
                              <ArrowUpDown className="w-3 h-3 opacity-50" />
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-border last:border-0 hover:bg-surface-1 transition-colors"
                      >
                        <td className="px-4 py-3 font-medium text-foreground">
                          {row.name}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.email}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.auditorEmail}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.organization}
                        </td>
                        <td className="px-4 py-3">
                          <button className="text-primary hover:text-primary/80 transition-colors">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
