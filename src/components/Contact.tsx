import {
  AlertCircle,
  CheckCircle,
  Loader2,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";
import ContactIllustration from "./ContactIllustration";

const inputBase =
  "w-full rounded-xl border border-border bg-surface-1 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10";

const errorBase = "text-xs text-destructive mt-1.5 flex items-center gap-1";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
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
          placeholder="Enter your contact number"
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

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@strandixsystem.com",
    href: "mailto:info@strandixsystem.com",
    accent: "hsl(217 91% 48%)",
    accentBg: "hsl(217 91% 48% / 0.08)",
    accentBorder: "hsl(217 91% 48% / 0.2)",
    desc: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 8450073824",
    value2: "+91 7415700954",
    href: "tel:+918450073824",
    accent: "hsl(142 60% 38%)",
    accentBg: "hsl(142 60% 38% / 0.08)",
    accentBorder: "hsl(142 60% 38% / 0.2)",
    desc: "Mon–Fri, 9 AM – 6 PM IST",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Indore, Madhya Pradesh, India",
    accent: "hsl(38 92% 52%)",
    accentBg: "hsl(38 92% 52% / 0.08)",
    accentBorder: "hsl(38 92% 52% / 0.2)",
    desc: "Our headquarters",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat, 9 AM – 7 PM",
    accent: "hsl(270 70% 55%)",
    accentBg: "hsl(270 70% 55% / 0.08)",
    accentBorder: "hsl(270 70% 55% / 0.2)",
    desc: "Including demo bookings",
  },
];

const Contact = () => {
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
              GET IN <span style={{ color: "hsl(217 91% 25%)" }}>TOUCH</span>
            </h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions about AuditWise? We'd love to hear from you. Send
              us a message and we'll respond as soon as possible.
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

      <section className="py-10 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(217 91% 50% / 0.12) 1px, transparent 1px)`,
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div
                className="p-12 flex flex-col items-center justify-center gap-8 border-b lg:border-b-0 lg:border-r border-border"
                style={{
                  background: "hsl(217 91% 48% / 0.04)",
                }}
              >
                <ContactIllustration />
              </div>

              <div className="py-5 px-12 flex flex-col justify-center">
                <div className="">
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill in your details and we'll get back to you within 24
                    hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Us — full-width gradient banner with inline contact details */}
      <section className="py-8 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(100deg, hsl(230 70% 48%) 0%, hsl(217 91% 72%) 55%, hsl(205 89% 65%) 100%)",
          }}
        />
        {/* subtle dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* left — heading */}
            <div className="text-center lg:text-left shrink-0">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                Reach Us Directly
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                We're Just a{" "}
                <span style={{ color: "hsl(217 91% 25%)" }}>Message Away</span>
              </h2>
            </div>

            {/* vertical divider */}
            <div className="hidden lg:block w-px self-stretch bg-white/20" />

            {/* right — contact rows */}
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 flex-1 max-w-xl">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ background: "hsl(0 0% 100% / 0.15)" }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/55">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-white group-hover:underline">
                        {item.value}
                      </p>
                      {item.value2 && (
                        <p className="text-sm font-bold text-white hover:underline">
                          {item.value2}
                        </p>
                      )}
                      <p className="text-xs text-white/50">{item.desc}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
