import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  Pin,
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const platformLinks = ["Features", "Roles", "Workflow", "Analytics"];

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

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      {/* ── Footer ── */}
      <footer className="border-t border-border bg-surface-2">
        {/* Top strip: brand + contact pills + socials */}
        <div
          className="border-b border-border"
          style={{ background: "hsl(217 91% 50% / 0.03)" }}
        />

        {/* Middle: about blurb + platform nav + badges */}
        <div className="container mx-auto px-4 py-8">
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
                      href={`/${link.toLowerCase()}`}
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

      {/* Privacy Policy Dialog */}
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
              Audit Wise ("we," "our," "us") values your privacy. This Privacy
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
                Audit Wise is provided "as is." We are not liable for indirect,
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

export default Footer;
