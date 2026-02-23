import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Roles", href: "#roles" },
  { label: "Workflow", href: "#workflow" },
  { label: "Analytics", href: "#analytics" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl"
      style={{ background: "hsl(var(--background) / 0.92)" }}>
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-blue shadow-blue animate-pulse-blue">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Audit<span className="text-gradient-blue">Wise</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-blue text-primary-foreground shadow-blue hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-surface-2 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-center bg-gradient-blue text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
