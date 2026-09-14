import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Facebook, Instagram, Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-content";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3" aria-label="Titanium Equestrian">
      <span className={`brand-mark ${inverse ? "brand-mark-inverse" : ""}`} aria-hidden="true">T</span>
      <span className="min-w-0 leading-none">
        <span className="block truncate font-display text-[1.05rem] font-semibold uppercase tracking-[0.08em] sm:text-xl">Titanium</span>
        <span className="mt-1 block truncate text-[0.54rem] font-bold uppercase tracking-[0.31em] text-primary sm:text-[0.6rem]">Equestrian</span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const home = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const overlay = home && !scrolled && !open;
  return (
    <header className={`site-header ${overlay ? "site-header-overlay" : "site-header-solid"}`}>
      <div className="site-container flex h-20 items-center justify-between gap-5 lg:h-24">
        <Link to="/" className="min-w-0 shrink" aria-label="Titanium Equestrian home"><Brand inverse={overlay || open} /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link">{item.label}</Link>
          ))}
        </nav>
        <div className="hidden lg:block"><Button asChild size="lg"><Link to="/contact">Book a lesson <ArrowRight /></Link></Button></div>
        <Button variant="ghost" size="icon" className="relative z-50 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && (
        <div className="mobile-menu lg:hidden">
          <nav className="site-container flex flex-col pt-28" aria-label="Mobile navigation">
            {navItems.map((item, index) => <Link key={item.to} to={item.to} className="mobile-nav-link"><span>0{index + 1}</span>{item.label}</Link>)}
            <Button asChild size="lg" className="mt-8 w-full"><Link to="/contact">Book a lesson <ArrowRight /></Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SectionIntro({ eyebrow, title, copy, inverse = false }: { eyebrow: string; title: string; copy?: string; inverse?: boolean }) {
  return <div className={`max-w-3xl ${inverse ? "text-secondary-foreground" : ""}`}><p className="eyebrow">{eyebrow}</p><h2 className="section-title mt-4">{title}</h2>{copy && <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${inverse ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>{copy}</p>}</div>;
}

export function PageHero({ eyebrow, title, copy, image, imageAlt }: { eyebrow: string; title: string; copy: string; image: string; imageAlt: string }) {
  return <section className="page-hero bg-secondary text-secondary-foreground"><img src={image} alt={imageAlt} width={1408} height={1008} className="absolute inset-0 h-full w-full object-cover" /><div className="hero-scrim absolute inset-0" /><div className="site-container relative flex min-h-[72svh] items-end pb-16 pt-36 sm:pb-20"><div className="max-w-4xl"><p className="eyebrow">{eyebrow}</p><h1 className="hero-title mt-5">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-secondary-foreground/80 sm:text-xl sm:leading-8">{copy}</p></div></div></section>;
}

export function FinalCta() {
  return <section className="cta-band"><div className="site-container grid gap-8 py-14 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end lg:py-20"><div><p className="eyebrow">Take the next stride</p><h2 className="mt-4 max-w-3xl font-display text-4xl leading-none text-secondary-foreground sm:text-5xl lg:text-6xl">Ready to build a stronger partnership?</h2></div><Button asChild size="lg"><Link to="/contact">Book a lesson <ArrowRight /></Link></Button></div></section>;
}

export function SiteFooter() {
  return <footer className="bg-foreground text-secondary-foreground"><div className="site-container grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_.8fr] lg:py-20"><div><Brand inverse /><p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-primary">Partnership · Progress · Performance</p><p className="mt-5 max-w-sm text-sm leading-6 text-secondary-foreground/60">Eventing-based training for thoughtful riders and horses across Washington State and the Pacific Northwest.</p></div><div><p className="footer-title">Navigate</p><nav className="mt-5 grid gap-3" aria-label="Footer navigation">{navItems.map((item) => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}</nav></div><div><p className="footer-title">Contact</p><a className="mt-5 flex items-center gap-3 text-lg font-semibold" href="tel:+12532632021"><Phone className="h-4 w-4 text-primary" /> +1 253-263-2021</a><p className="mt-3 text-sm text-secondary-foreground/60">Washington State · Pacific Northwest</p><div className="mt-6 flex gap-3"><a className="social-link" href="#" aria-label="Facebook — link coming soon"><Facebook /></a><a className="social-link" href="#" aria-label="Instagram — link coming soon"><Instagram /></a></div></div></div><div className="border-t border-secondary-foreground/10"><div className="site-container flex flex-col gap-3 py-6 text-[0.68rem] uppercase tracking-widest text-secondary-foreground/45 sm:flex-row sm:justify-between"><p>© 2026 Titanium Equestrian LLC</p><p>Proudly sponsored by Antarès Sellier USA</p></div></div></footer>;
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}