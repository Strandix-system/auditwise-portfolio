import { useState, useEffect, useRef } from "react";
import { Cloud, GitBranch, Users, Zap } from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({
  value,
  duration = 2000,
  isVisible,
}: {
  value: string;
  duration?: number;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric value from the string (e.g., "99.9" from "99.9%")
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, ""); // Get the suffix (%, +, etc)

    if (isNaN(numericValue)) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(numericValue * easeOut * 10) / 10;

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, isVisible]);

  return (
    <span>
      {count.toFixed(1).replace(/\.0$/, "")}
      {value.replace(/[0-9.]/g, "")}
    </span>
  );
};

// Stat Card Component with Visibility Detection
const StatCard = ({ stat }: { stat: any }) => {
  const Icon = stat.icon;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="text-center transition-all duration-500 transform"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-4xl font-bold text-foreground mb-2">
        <AnimatedCounter
          value={stat.value}
          duration={2000}
          isVisible={isVisible}
        />
      </div>
      <div className="text-muted-foreground">{stat.label}</div>
    </div>
  );
};

// Stats Data
const stats = [
  { value: "99.9%", label: "Uptime", icon: Cloud },
  { value: "50K+", label: "Audits Processed", icon: GitBranch },
  { value: "500+", label: "Active Organizations", icon: Users },
  //   { value: "24/7", label: "Support Available", icon: Zap },
];

// Stats Section Component
const StatsSection = () => {
  return (
    <section className="py-10 bg-surface-2">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
