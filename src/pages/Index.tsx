import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import RolesSection from "@/components/RolesSection";
import WorkflowSection from "@/components/WorkflowSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import CTAAndFooter from "@/components/CTAAndFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <WorkflowSection />
      <AnalyticsSection />
      <CTAAndFooter />
    </div>
  );
};

export default Index;
