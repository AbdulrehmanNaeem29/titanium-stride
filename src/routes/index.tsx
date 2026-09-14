import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FinalCta, SectionIntro } from "@/components/site-shell";
import { audiences, pillars, programs, sampleTestimonials } from "@/lib/site-content";
import heroImage from "@/assets/equestrian-hero.jpg";
import trainerImage from "@/assets/trainer-riding.jpg";
import trainingImage from "@/assets/training-session.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Titanium Equestrian | Training & Riding Lessons" },
      { name: "description", content: "Eventing-based horse training and riding lessons focused on partnership, measurable progress, and confident performance in Washington State." },
      { property: "og:title", content: "Titanium Equestrian | Training & Riding Lessons" },
      { property: "og:description", content: "Professional eventing-based coaching for horse and rider in Washington State." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const [testimonial, setTestimonial] = useState(0);
  const current = sampleTestimonials[testimonial] ?? sampleTestimonials[0];
  const move = (direction: number) => setTestimonial((testimonial + direction + sampleTestimonials.length) % sampleTestimonials.length);
  if (!current) return null;

  return <>
    <section className="relative min-h-[92svh] overflow-hidden bg-secondary text-secondary-foreground">
      <img src={heroImage} alt="Eventing rider and horse clearing a cross-country fence" width={1600} height={1104} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/65 to-transparent" />
      <div className="site-container relative flex min-h-[92svh] items-end pb-16 pt-36 lg:pb-24"><div className="max-w-4xl">
        <p className="eyebrow">Eventing-based training · Washington State</p>
        <h1 className="hero-title mt-6">Partnership.<br /><span className="text-primary">Progress.</span><br />Performance.</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-secondary-foreground/80 sm:text-lg">Professional coaching for riders and horses who want correct foundations, clear direction, and confidence that carries into every arena.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link to="/contact">Book a lesson <ArrowRight /></Link></Button><Button asChild size="lg" variant="inverse"><Link to="/training-programs">View training programs</Link></Button></div>
      </div></div>
      <a href="#method" className="absolute bottom-6 right-6 hidden items-center gap-3 text-[.62rem] font-bold uppercase tracking-[.18em] text-secondary-foreground/70 md:flex">Discover the method <ArrowDown className="h-4 w-4" /></a>
    </section>

    <section className="border-b border-border bg-background"><div className="site-container grid divide-y divide-border md:grid-cols-[1.5fr_1fr_1fr] md:divide-x md:divide-y-0"><div className="py-7 md:pr-8"><p className="eyebrow">Proudly sponsored by</p><p className="mt-2 font-display text-3xl font-semibold">Antarès Sellier USA</p></div><div className="py-7 md:px-8"><p className="text-2xl font-semibold">Eventing foundation</p><p className="mt-1 text-sm text-muted-foreground">Flatwork · jumping · cross-country</p></div><div className="py-7 md:pl-8"><p className="text-2xl font-semibold">Individual pathways</p><p className="mt-1 text-sm text-muted-foreground">Horse and rider considered together</p></div></div></section>

    <section id="method" className="py-20 lg:py-32"><div className="site-container"><SectionIntro eyebrow="The Titanium method" title="Train the whole partnership." copy="Eventing asks for precision, bravery, adaptability, and trust. Those same qualities make every horse and rider better—whatever their eventual discipline." /><div className="mt-14 grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">{pillars.map(({ number, title, text, icon: Icon }) => <article key={title} className="group border-b border-border py-9 last:border-0 md:border-0 md:px-8 md:first:pl-0 md:last:pr-0"><div className="flex items-center justify-between"><span className="number-rule">{number}</span><Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:-translate-y-1" /></div><h3 className="mt-12 font-display text-4xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>

    <section className="bg-muted py-20 lg:py-32"><div className="site-container"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><SectionIntro eyebrow="Ways to train" title="A program for the work ahead." /><Button asChild variant="dark"><Link to="/training-programs">Explore all programs <ArrowRight /></Link></Button></div><div className="mt-14 grid gap-px bg-border lg:grid-cols-3">{programs.slice(0,3).map(({ number, title, category, forWho }) => <Link to="/training-programs" hash={title.toLowerCase().replaceAll(" ", "-")} key={title} className="group bg-background p-7 sm:p-9"><span className="number-rule">{number}</span><p className="mt-12 text-[.65rem] font-bold uppercase tracking-[.16em] text-primary">{category}</p><h3 className="mt-3 font-display text-4xl font-semibold leading-none">{title}</h3><p className="mt-5 text-sm leading-6 text-muted-foreground">{forWho}</p><span className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">View program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>

    <section className="overflow-hidden bg-secondary py-20 text-secondary-foreground lg:py-32"><div className="site-container grid gap-14 lg:grid-cols-2 lg:items-center"><div className="relative"><img src={trainerImage} alt="Professional eventing trainer schooling a horse in flatwork" width={1200} height={1408} loading="lazy" className="diagonal-image aspect-[4/5] w-full object-cover" /><div className="absolute -bottom-5 right-0 grid h-32 w-32 place-items-center rounded-full border border-primary/50 bg-secondary text-center text-[.58rem] font-bold uppercase tracking-[.16em] text-primary">Coach the rider<br />Train the horse</div></div><div><SectionIntro inverse eyebrow="Meet the trainer" title="Serious coaching. Thoughtfully delivered." copy="Titanium Equestrian brings an athlete’s discipline and a teacher’s eye to every session. The work is direct, encouraging, and always grounded in the horse’s understanding." /><p className="mt-8 border-l-2 border-primary pl-5 text-sm leading-7 text-secondary-foreground/65">Trainer biography, certifications, competition record, and years of experience will be added when verified owner details are supplied.</p><Button asChild size="lg" className="mt-9"><Link to="/about">Discover the philosophy <ArrowRight /></Link></Button></div></div></section>

    <section className="py-20 lg:py-32"><div className="site-container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><SectionIntro eyebrow="Proof in progress" title="Confidence is built, not wished for." /><div className="mt-9 flex gap-2"><Button variant="outline" size="icon" aria-label="Previous testimonial" onClick={() => move(-1)}><ChevronLeft /></Button><Button variant="outline" size="icon" aria-label="Next testimonial" onClick={() => move(1)}><ChevronRight /></Button></div></div><blockquote className="relative border-l border-primary pl-8 sm:pl-12"><Quote className="h-10 w-10 text-primary" /><p className="mt-7 font-display text-3xl font-medium leading-tight sm:text-5xl">“{current.quote}”</p><footer className="mt-7"><p className="font-bold">{current.name}</p><p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{current.detail} · sample copy</p></footer></blockquote></div></section>

    <section className="bg-muted py-20 lg:py-28"><div className="site-container"><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><SectionIntro eyebrow="Your next chapter" title="Designed to meet you where you are." /></div><div className="grid gap-px bg-border sm:grid-cols-2">{audiences.map((item) => <article key={item.title} className="bg-background p-7"><Check className="h-5 w-5 text-primary" /><h3 className="mt-8 font-display text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></article>)}</div></div><img src={trainingImage} alt="Trainer coaching a rider through gymnastic pole work" width={1408} height={1008} loading="lazy" className="mt-14 aspect-[16/7] w-full object-cover" /></div></section>
    <FinalCta />
  </>;
}