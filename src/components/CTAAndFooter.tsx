// CTAAndFooter.jsx
import {
  Shield,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Pin,
} from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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

const socialLinks = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/company/strandix-system-india-m",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/strandixsystem/",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/@strandixsystem",
  },
];
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
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 relative">
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
                <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
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
                {socialLinks.map(({ icon: Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
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
              © 2026 Strandix System India, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-muted-foreground">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-foreground transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setTermsOpen(true)}
                className="hover:text-foreground transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              Privacy Policy
            </DialogTitle>
            <DialogDescription>Last updated: March 2026</DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p className="text-foreground">
              Audit Wise (“we,” “our,” “us”) values your privacy. This Privacy
              Policy explains how we collect, use, and protect your information
              when you use our software and services.
            </p>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                1. Information We Collect
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email, phone number, company details</li>
                <li>Login credentials</li>
                <li>Billing information</li>
                <li>Audit data and documents uploaded</li>
                <li>Usage data (IP address, device, browser type)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Manage accounts and process payments</li>
                <li>Communicate updates and support</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                3. Data Sharing
              </h3>
              <p>
                We do not sell your data. We may share it with trusted service
                providers (hosting, payment processors) or when required by law.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                4. Data Security
              </h3>
              <p>
                We use appropriate technical and organizational measures to
                protect your data.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                5. Your Rights
              </h3>
              <p>
                You may request access, correction, or deletion of your personal
                data by contacting us.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                6. Contact Us
              </h3>
              <p className="mb-2">For privacy-related questions:</p>
              <ul className="space-y-2">
                <li>
                  <Mail className="inline mr-2" size={14} />
                  Email:{" "}
                  <a
                    href="mailto:info@strandixsystem.com"
                    className="text-primary hover:underline"
                  >
                    info@strandixsystem.com
                  </a>
                </li>
                <li>
                  <Pin className="inline mr-2" size={14} />
                  Address: No. 103, Shri Krishna Classic, First Floor, A.B.
                  Road, Above Axis Bank, Near CHL Hospital, LIG Square,
                  Indore-452001 (M.P.)
                </li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Service Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              Terms of Service
            </DialogTitle>
            <DialogDescription>Last updated: March 2026</DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p className="text-foreground">
              Welcome to Audit Wise. By accessing or using our software and
              services, you agree to these Terms of Service.
            </p>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                1. Use of Service
              </h3>
              <p>
                Audit Wise provides audit management and automation tools. You
                agree to use the service only for lawful business purposes and
                not to misuse, copy, or disrupt the platform.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                2. Account Responsibility
              </h3>
              <p>
                You are responsible for maintaining the confidentiality of your
                login credentials and for all activities under your account.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                3. Subscription & Payments
              </h3>
              <p>
                Certain features may require a paid subscription. Fees are
                billed as agreed and are non-refundable unless otherwise stated.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                4. User Data
              </h3>
              <p>
                You retain ownership of the data you upload. By using the
                service, you grant us permission to process and store data
                solely to provide the service.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                5. Intellectual Property
              </h3>
              <p>
                All software, branding, and content related to Audit Wise remain
                the property of the company. You may not copy, modify, or
                distribute without permission.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                6. Limitation of Liability
              </h3>
              <p>
                Audit Wise is provided “as is.” We are not liable for indirect,
                incidental, or consequential damages arising from use of the
                service.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                7. Termination
              </h3>
              <p>
                We may suspend or terminate accounts that violate these terms.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                8. Changes to Terms
              </h3>
              <p>
                We may update these Terms from time to time. Continued use of
                the service means you accept the revised terms.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CTAAndFooter;
