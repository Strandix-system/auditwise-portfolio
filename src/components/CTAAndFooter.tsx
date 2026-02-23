// CTAAndFooter.jsx
import {
  Shield,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

const platformLinks = ["Features", "Roles", "Workflow", "Analytics"];

// ─── Field helpers ────────────────────────────────────────────────────────────

const inputBase =
  "w-full rounded-xl border border-border bg-surface-1 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10";

const errorBase = "text-xs text-destructive mt-1.5 flex items-center gap-1";

function Field({ label, error, children }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
      {error && (
        <p className={errorBase}>
          <AlertCircle className="w-3 h-3 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const {
    register,
    errors,
    onSubmit,
    isLoading,
    isSuccess,
    isError,
    errorMessage,
  } = useContactForm();

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className={inputBase}
          />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            className={inputBase}
          />
        </Field>
      </div>

      <Field label="Contact Number" error={errors.contact?.message}>
        <input
          {...register("contact")}
          type="tel"
          placeholder="+1 (555) 000-0000"
          className={inputBase}
        />
      </Field>

      <Field label="Additional Message" error={errors.additionalInfo?.message}>
        <textarea
          {...register("additionalInfo")}
          rows={4}
          placeholder="Tell us about your audit requirements or any questions you have..."
          className={`${inputBase} resize-none`}
        />
      </Field>

      {isSuccess && (
        <div className="flex items-center gap-3 rounded-xl border border-success/30 bg-success/8 px-4 py-3 text-sm text-success">
          <CheckCircle className="w-4 h-4 shrink-0" />
          <span>Message sent! We'll be in touch within 24 hours.</span>
        </div>
      )}
      {isError && (
        <div className="flex items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/8 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>
            {errorMessage || "Something went wrong. Please try again."}
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-primary-foreground bg-gradient-blue shadow-blue hover:opacity-90 transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 text-sm"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const CTAAndFooter = () => {
  return (
    <>
      {/* CTA / Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl border border-primary/20 overflow-hidden bg-card shadow-card">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 0%, hsl(217 91% 50% / 0.06), transparent 70%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(217 91% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 50%) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-0">
              {/* Left */}
              <div className="py-16 px-10 lg:px-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/25 mb-8 w-fit"
                  style={{ background: "hsl(217 91% 50% / 0.07)" }}
                >
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Start Your Audit Journey
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-tight">
                  Ready to Transform
                  <br />
                  <span className="text-gradient-blue">
                    Your Audit Process?
                  </span>
                </h2>
                <p className="text-muted-foreground text-base max-w-sm mb-10 leading-relaxed">
                  AuditWise gives your team the tools to audit faster,
                  collaborate better, and stay fully compliant—all in one
                  platform.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Role-Based Security",
                    "Multi-DB Support",
                    "Excel Import",
                    "Email Workflows",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="py-16 px-10 lg:px-14">
                <h3 className="font-display text-xl font-semibold mb-2">
                  Get in Touch
                </h3>
                <p className="text-sm text-muted-foreground mb-8">
                  Fill in your details and we'll get back to you within 24
                  hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Redesigned Footer ── */}
      <footer className="border-t border-border bg-surface-2">
        {/* Top strip: brand + contact pills + socials */}
        <div
          className="border-b border-border"
          style={{ background: "hsl(217 91% 50% / 0.03)" }}
        ></div>

        {/* Middle: about blurb + platform nav + badges */}
        <div className="container mx-auto px-4 py-5">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* About */}
            <div className="md:col-span-2 space-y-5">
              <h4 className="font-display font-semibold text-base">
                About AuditWise
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                AuditWise is built for finance and compliance teams that need
                speed without sacrificing accuracy. From role-based access
                control to multi-database connectivity and real-time analytics,
                every feature is designed to make your audit process leaner and
                more dependable.
              </p>
            </div>

            {/* Platform links — horizontal grid */}
            <div className="flex flex-col gap-4">
              {/* Platform Section */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Platform</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {platformLinks.map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-border group-hover:bg-primary transition-colors shrink-0" />
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © 2024 Strandix System India, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAAndFooter;
