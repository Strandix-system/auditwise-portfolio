import {
  ArrowRight,
  CheckCircle,
  FileSpreadsheet,
  Mail,
  Shield,
  BarChart3,
  Lock,
  Upload,
  Users,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";

const features = [
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Granular permissions for every team member",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel & Database",
    description: "Import from Excel or connect live databases",
  },
  {
    icon: Mail,
    title: "Email Workflows",
    description: "Send audits with secure credentials",
  },
  {
    icon: CheckCircle,
    title: "Approval Engine",
    description: "Track every approve and reject action",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Purpose-built dashboards for each role",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "End-to-end encryption and audit logging",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Chief Compliance Officer",
    company: "Global Finance Corp",
    image: "👩‍💼",
    text: "AuditWise reduced our audit cycle from 3 weeks to 5 days. The role-based access and real-time analytics are game-changers.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Audit Manager",
    company: "Fortune 500 Bank",
    image: "👨‍💼",
    text: "The Excel import feature alone saved us hundreds of hours. Now we focus on insights, not data entry.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Head of Internal Audit",
    company: "Tech Innovations Inc",
    image: "👩‍💻",
    text: "Best investment we made for our audit operations. The support team is responsive and the platform is intuitive.",
    rating: 5,
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for small teams",
    features: [
      "Up to 5 users",
      "Excel import",
      "Basic analytics",
      "Email support",
      "Role-based access",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "/month",
    description: "For growing organizations",
    features: [
      "Up to 25 users",
      "Excel & Database connection",
      "Advanced analytics",
      "Priority support",
      "Custom workflows",
      "Audit trail logging",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large enterprises",
    features: [
      "Unlimited users",
      "All integrations",
      "Custom analytics",
      "Dedicated support",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Home = () => {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />

      <section className="py-10 relative">
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See AuditWise{" "}
              <span className="text-gradient-blue">in Action</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our platform features through interactive demos
            </p>
          </div>
        </div>
        <ImageSlider />
      </section>

      <FeaturesSection />
      <StatsSection />

      <section className="py-10 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              How It <span className="text-gradient-blue">Works</span>
            </h2>
            <p className="text-muted-foreground text-md max-w-2xl mx-auto">
              Get started in minutes, not weeks
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Upload Data",
                description: "Import Excel files or connect your databases",
                icon: Upload,
              },
              {
                step: "2",
                title: "Assign Reviewers",
                description: "Send audits to your panel with secure access",
                icon: Users,
              },
              {
                step: "3",
                title: "Review & Approve",
                description: "Team reviews items and provides feedback",
                icon: CheckCircle2,
              },
              {
                step: "4",
                title: "View Analytics",
                description: "Track progress and get compliance reports",
                icon: BarChart3,
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="rounded-xl border border-border bg-card p-8 text-center h-full">
                  <div className="text-5xl mb-4 flex items-center justify-center">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {parseInt(item.step) < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-surface-2">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-gradient-blue">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How long does implementation take?",
                a: "Most organizations are up and running within 1-2 weeks with our guided onboarding and training.",
              },
              {
                q: "What databases do you support?",
                a: "We support MySQL, PostgreSQL, MongoDB, Microsoft SQL Server, and more. We can also integrate with custom databases.",
              },
              {
                q: "Can I export my data?",
                a: "Absolutely. You can export data at any time in multiple formats including PDF, Excel, and CSV.",
              },
              {
                q: "Do you offer customer support?",
                a: "Yes, we offer 24/7 support via email and phone. Professional plans include priority support.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
