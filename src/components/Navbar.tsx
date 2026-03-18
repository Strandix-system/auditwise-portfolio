import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Roles", href: "/roles" },
  { label: "Workflow", href: "/workflow" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 add this line
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/#contact") return false;
    return location.pathname === href;
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        backdropFilter: scrolled ? "blur(10px) saturate(80%)" : "none",
        background: scrolled ? "rgba(255,255,255,0.5)" : "transparent",
        borderBottom: scrolled
          ? "1px solid hsl(var(--foreground)/0.08)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 24px hsl(var(--foreground)/0.06)" : "none",
      }}
    >
      <div
        className="w-full px-6 flex items-center justify-between"
        style={{ height: 64, maxWidth: "100%" }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <img
              src="/favicon.ico"
              alt="AuditWise Insights"
              className="w-full h-full"
            />
          </div>
          <span
            className="font-black text-lg uppercase transition-colors duration-300"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              letterSpacing: "0.06em",
              color: scrolled ? "hsl(var(--foreground))" : "#fff",
            }}
          >
            Audit
            <span
              style={{
                color: scrolled ? "hsl(217 91% 50%)" : "hsl(217 91% 72%)",
              }}
            >
              Wise
            </span>
          </span>
        </Link>

        {/* Desktop nav + CTAs */}
        <div className="hidden md:flex items-center gap-1 shrink-0">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const isExternal = link.href.startsWith("/#");

            return isExternal ? (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-200"
                style={{
                  color: scrolled
                    ? "hsl(var(--muted-foreground))"
                    : "hsl(0 0% 100% / 0.75)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = scrolled
                    ? "hsl(var(--foreground))"
                    : "#fff";
                  (e.currentTarget as HTMLElement).style.background = scrolled
                    ? "hsl(var(--foreground)/0.06)"
                    : "hsl(0 0% 100% / 0.10)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = scrolled
                    ? "hsl(var(--muted-foreground))"
                    : "hsl(0 0% 100% / 0.75)";
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-200"
                style={{
                  color: active
                    ? scrolled
                      ? "hsl(217 91% 50%)"
                      : "#fff" // ✅ white on hero (was light-blue, invisible)
                    : scrolled
                    ? "hsl(var(--muted-foreground))"
                    : "hsl(0 0% 100% / 0.75)",
                  background: active
                    ? scrolled
                      ? "hsl(217 91% 50% / 0.1)"
                      : "hsl(0 0% 100% / 0.18)" // ✅ subtle white pill on hero
                    : "transparent",
                  borderBottom:
                    active && !scrolled
                      ? "2px solid rgba(255,255,255,0.8)" // ✅ white underline = active indicator
                      : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = scrolled
                      ? "hsl(var(--foreground))"
                      : "#fff";
                    (e.currentTarget as HTMLElement).style.background = scrolled
                      ? "hsl(var(--foreground)/0.06)"
                      : "hsl(0 0% 100% / 0.10)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = scrolled
                      ? "hsl(var(--muted-foreground))"
                      : "hsl(0 0% 100% / 0.75)";
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="https://admin.auditwise.in/login"
            className="px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-200 hover:opacity-80"
            style={{
              background: scrolled ? "hsl(217 91% 40%)" : "#fff",
              color: scrolled ? "#fff" : "hsl(217 91% 40%)",
            }}
          >
            Sign In
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: scrolled ? "hsl(var(--foreground))" : "#fff",
              transform: open ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: scrolled ? "hsl(var(--foreground))" : "#fff",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: scrolled ? "hsl(var(--foreground))" : "#fff",
              transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? 350 : 0,
          background: "hsl(var(--background))",
          borderTop: open ? "1px solid hsl(var(--foreground)/0.08)" : "none",
        }}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const isExternal = link.href.startsWith("/#");

            return isExternal ? (
              <a
                key={link.label}
                href={link.href}
                className="py-2.5 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground border-b border-foreground/5 last:border-0 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`py-2.5 text-sm font-bold uppercase tracking-widest border-b border-foreground/5 last:border-0 transition-colors ${
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex gap-3 pt-4">
            <a
              href="https://admin.auditwise.in/login"
              className="flex-1 py-2.5 text-xs font-bold uppercase tracking-widest text-center bg-foreground text-background rounded-lg"
              onClick={() => setOpen(false)}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
