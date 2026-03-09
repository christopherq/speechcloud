"use client";
import { Phone, Clock, TrendingUp, Zap, Shield, BarChart3, ArrowRight, CheckCircle2, Bot, ChevronDown, Play, X, Headphones, Users } from "lucide-react";
import { useState } from "react";

const steps = [
  { step: "01", title: "Doorschakelen", desc: "Schakel uw telefoonnummer door naar SpeechCloud. Tijdens piekuren, buiten openingstijden, of altijd — u kiest.", img: "/ai-handoff.jpg" },
  { step: "02", title: "AI neemt op", desc: "Onze AI beantwoordt de telefoon in natuurlijk Nederlands. Neemt de bestelling op, bevestigt details, en doet slimme bijverkoop.", img: "/hero-pizzamaker.jpg" },
  { step: "03", title: "Bestelling binnen", desc: "De bestelling wordt direct geplaatst via uw kassasysteem of bestelwebsite. Uw team hoeft alleen te bakken.", img: "/ai-dashboard.jpg" },
];

const benefits = [
  { icon: Clock, title: "24/7 bereikbaar", desc: "Buiten openingstijden, in het weekend, tijdens de lunch-rush — elke oproep wordt beantwoord." },
  { icon: TrendingUp, title: "Meer omzet", desc: "Gemiddeld 25% meer telefonische bestellingen door nul gemiste oproepen en slimme bijverkoop." },
  { icon: Zap, title: "Direct geplaatst", desc: "Bestellingen gaan direct naar uw kassa of bestelplatform. Geen handmatig overtypen." },
  { icon: Shield, title: "Natuurlijk Nederlands", desc: "Geen robotstem. Onze AI spreekt vloeiend Nederlands — alsof uw beste medewerker opneemt." },
  { icon: BarChart3, title: "Inzicht in alles", desc: "Dashboard met gesprekken, omzet per uur, populaire producten en gemiddelde bestelwaarde." },
  { icon: Users, title: "Onbeperkt gelijktijdig", desc: "Geen bezettoon meer. 100 klanten tegelijk? Geen probleem." },
];

const faqs = [
  { q: "Hoe klinkt de AI?", a: "Onze AI spreekt vloeiend Nederlands met een natuurlijke stem. Geen robotachtige spraak — klanten merken vaak niet dat ze met AI praten." },
  { q: "Hoe worden bestellingen geplaatst?", a: "Wij koppelen direct met uw kassasysteem via API, of plaatsen bestellingen via uw bestaande bestelwebsite. Beide opties werken naadloos." },
  { q: "Wat als de AI een vraag niet begrijpt?", a: "Bij complexe vragen of klachten wordt het gesprek automatisch doorverbonden naar uw medewerker. De AI geeft duidelijk aan wanneer menselijke hulp nodig is." },
  { q: "Hoe snel kan ik live?", a: "Binnen 48 uur. Wij configureren uw menu, trainen de AI op uw producten, en testen samen voordat u live gaat." },
  { q: "Wat kost het?", a: "Vanaf \u20AC149 per maand, vast bedrag. Geen verborgen kosten, geen kosten per gesprek. Maandelijks opzegbaar." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left">
        <span className="text-base font-medium pr-4">{q}</span>
        <ChevronDown className={`h-5 w-5 text-[#EE2B47] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}>
        <p className="text-sm text-neutral-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#EE2B47] to-[#ff6b6b]">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">SpeechCloud</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#hoe-het-werkt" className="text-sm text-neutral-400 hover:text-white transition-colors">Hoe het werkt</a>
            <a href="#voordelen" className="text-sm text-neutral-400 hover:text-white transition-colors">Voordelen</a>
            <a href="#vergelijk" className="text-sm text-neutral-400 hover:text-white transition-colors">Vergelijk</a>
            <a href="#faq" className="text-sm text-neutral-400 hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#EE2B47]/20">
            Demo aanvragen <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#EE2B47]/12 via-[#EE2B47]/4 to-transparent blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4d65ff]/5 blur-3xl rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-8 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#EE2B47] animate-pulse" />
                <span className="text-neutral-300">Al actief bij meerdere restaurants in Nederland</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
                Elke oproep{" "}
                <span className="bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] bg-clip-text text-transparent">beantwoord.</span>
                <br />
                Elke bestelling{" "}
                <span className="bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] bg-clip-text text-transparent">binnen.</span>
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-lg">
                De AI-telefoonagent die klinkt als uw beste medewerker. Neemt 24/7 op, plaatst bestellingen direct in uw systeem, en laat geen enkele klant meer wachten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] px-7 py-3.5 text-base font-semibold text-white hover:opacity-90 transition-opacity shadow-xl shadow-[#EE2B47]/25">
                  Gratis demo aanvragen <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#hoe-het-werkt" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <Play className="h-4 w-4" /> Bekijk hoe het werkt
                </a>
              </div>
              <div className="mt-10 flex gap-8">
                {[["24/7", "Bereikbaar"], ["<2s", "Reactietijd"], ["99%", "Nauwkeurig"]].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] bg-clip-text text-transparent">{v}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#EE2B47]/20 via-transparent to-[#4d65ff]/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img src="/ai-owner.jpg" alt="Restaurant eigenaar" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#EE2B47] to-[#ff6b6b] flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">SpeechCloud AI is actief</div>
                      <div className="text-xs text-neutral-400">Laatste bestelling: 14 seconden geleden</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[4,7,10,14,10,16,12,8,14,10,7,12,9,5,10].map((h, i) => (
                        <div key={i} className="w-0.5 rounded-full bg-[#EE2B47] animate-pulse" style={{ height: h, animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/ai-busy-kitchen.jpg" alt="Drukke keuken" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent" />
              <div className="absolute top-4 right-4 rounded-full bg-red-500/90 backdrop-blur px-4 py-2 flex items-center gap-2 animate-pulse">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">3 gemiste oproepen</span>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-sm mb-6">
                <X className="h-3.5 w-3.5 text-red-400" />
                <span className="text-red-300">Het probleem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Elke gemiste oproep is een{" "}
                <span className="text-red-400">gemiste bestelling.</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Tijdens piekuren gaat de telefoon continu. Uw team is druk met bakken, inpakken en klanten helpen. Wie neemt op? Niemand. Die klant belt de concurrent.
              </p>
              <ul className="space-y-3">
                {["Gemiddeld 23% van telefoontjes wordt niet beantwoord", "\u20AC200\u2013\u20AC500 omzet per dag verdampt door gemiste oproepen", "Personeel raakt gestrest door multitasken", "Fouten bij handmatig opnemen van bestellingen"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral-300">
                    <span className="mt-1 text-red-400 text-lg leading-none">{"\u2715"}</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#EE2B47]/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm mb-6">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-300">De oplossing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                SpeechCloud neemt op.{" "}
                <span className="bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] bg-clip-text text-transparent">Altijd.</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Onze AI-telefoonagent beantwoordt elke oproep, neemt bestellingen op in vloeiend Nederlands, en plaatst ze direct in uw systeem. Uw team focust op wat ze het beste doen: geweldig eten maken.
              </p>
              <ul className="space-y-3">
                {["Elke oproep beantwoord, ook om 3 uur \u2019s nachts", "Bestellingen direct in uw kassa \u2014 geen fouten", "Slimme bijverkoop verhoogt gemiddelde bestelwaarde", "Volledig dashboard met inzichten en analytics"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl order-1 lg:order-2">
              <img src="/ai-dashboard.jpg" alt="Dashboard analytics" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/20 to-transparent" />
              <div className="absolute top-4 left-4 rounded-full bg-emerald-500/90 backdrop-blur px-4 py-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">+25% omzet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="hoe-het-werkt" className="py-24 relative">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-4">
              <Zap className="h-3.5 w-3.5 text-[#EE2B47]" />
              <span className="text-neutral-300">Hoe het werkt</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Live in 48 uur.</h2>
            <p className="mt-4 text-lg text-neutral-400">Drie simpele stappen. Geen technische kennis nodig.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="group relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-[#EE2B47]/30 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#EE2B47] to-[#ff6b6b] text-sm font-bold shadow-lg">
                    {s.step}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="voordelen" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-4">
              <Shield className="h-3.5 w-3.5 text-[#EE2B47]" />
              <span className="text-neutral-300">Voordelen</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Uw meest betrouwbare medewerker.</h2>
            <p className="mt-4 text-lg text-neutral-400">Altijd aanwezig. Nooit moe. Nooit ziek. Perfect getraind.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#EE2B47]/20 hover:bg-white/[0.04] transition-all duration-300">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#EE2B47]/20 to-[#EE2B47]/5 border border-[#EE2B47]/15">
                  <b.icon className="h-5 w-5 text-[#EE2B47]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4d65ff]/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-4">
              <Zap className="h-3.5 w-3.5 text-[#4d65ff]" />
              <span className="text-neutral-300">Integratie</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Werkt met elk restaurant.</h2>
            <p className="mt-4 text-lg text-neutral-400">Twee integratie-opties. Altijd een passende oplossing.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Zap, color: "#EE2B47", title: "API-koppeling", desc: "Directe koppeling met uw kassasysteem. Bestellingen binnen 2 seconden op uw scherm.", items: ["Realtime synchronisatie", "Volledige menukaart automatisch", "Prijzen altijd actueel", "Toast, Square, Lightspeed en meer"] },
              { icon: Shield, color: "#4d65ff", title: "Website-integratie", desc: "Geen API? Onze AI bestelt via uw bestaande bestelwebsite \u2014 alsof een medewerker het doet.", items: ["Geen technische aanpassingen nodig", "Werkt met elk bestelplatform", "Thuisbezorgd, eigen site, of anders", "Binnen 48 uur operationeel"] },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 transition-all duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border" style={{ background: `${c.color}10`, borderColor: `${c.color}25` }}>
                  <c.icon className="h-6 w-6" style={{ color: c.color }} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{c.title}</h3>
                <p className="mb-6 text-neutral-400 text-sm leading-relaxed">{c.desc}</p>
                <ul className="space-y-3">{c.items.map((i) => <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-300"><CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: c.color }} />{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section id="vergelijk" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Wat kost het u nu?</h2>
            <p className="mt-4 text-lg text-neutral-400">De verborgen kosten van gemiste telefoonbestellingen.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-8">
              <h3 className="mb-6 text-xl font-semibold text-red-400">Zonder SpeechCloud</h3>
              <ul className="space-y-4">
                {["Personeel: \u20AC800 \u2013 \u20AC1.200/maand extra", "23% gemiste oproepen tijdens piek", "Fouten bij handmatige bestellingen", "Niet bereikbaar buiten openingstijden", "Geen inzicht in gemiste omzet"].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm"><span className="mt-0.5 text-red-400 font-bold">{"\u2715"}</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#EE2B47]/30 bg-[#EE2B47]/[0.03] p-8 ring-1 ring-[#EE2B47]/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-[#EE2B47]">Met SpeechCloud</h3>
                <span className="text-xs font-medium bg-[#EE2B47]/20 text-[#EE2B47] rounded-full px-3 py-1">Aanbevolen</span>
              </div>
              <ul className="space-y-4">
                {["Vanaf \u20AC149/maand \u2014 vast bedrag", "Elke oproep beantwoord, 24/7/365", "99% nauwkeurigheid bij bestellingen", "Slimme bijverkoop = hogere bestelwaarde", "Volledig dashboard met analytics"].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[#EE2B47] flex-shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/hero-pizza.jpg" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-14">
            <div className="mb-6 text-5xl">{"\uD83C\uDF55"}</div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed italic">
              {"\u201C"}De AI neemt perfect op. Mijn team kan focussen op wat ze het beste doen: geweldig eten maken. We missen geen enkele bestelling meer.{"\u201D"}
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#EE2B47] to-[#ff6b6b] flex items-center justify-center text-lg font-bold">F</div>
              <div className="text-left">
                <div className="font-semibold">Franchise-eigenaar</div>
                <div className="text-sm text-neutral-400">Pizzaketen in Noord-Holland</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audio demo */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-4">
              <Headphones className="h-3.5 w-3.5 text-[#EE2B47]" />
              <span className="text-neutral-300">Luister zelf</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Hoor het verschil.</h2>
            <p className="mt-4 text-lg text-neutral-400">Een echt gesprek met onze AI. Geen script, geen nabewerking.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-[#EE2B47] to-[#ff6b6b] flex items-center justify-center shadow-xl shadow-[#EE2B47]/20">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Voorbeeldgesprek: Pizza bestelling</h3>
                <p className="text-neutral-400 text-sm mb-4">Klant belt om een pizza margherita en cola te bestellen. De AI neemt op, bevestigt de bestelling, en doet bijverkoop.</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] rounded-full" />
                  </div>
                  <span className="text-xs text-neutral-500">0:26</span>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-neutral-500 mt-6">Audio demo binnenkort beschikbaar. <a href="#contact" className="text-[#EE2B47] hover:underline">Vraag een live demo aan</a> om het zelf te horen.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Veelgestelde vragen</h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-8">
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img src="/hero-food.jpg" alt="" className="w-full h-full object-cover opacity-15" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#EE2B47]/10 via-transparent to-[#4d65ff]/5" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative border border-white/10 rounded-3xl p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Klaar om elke bestelling<br />
                <span className="bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] bg-clip-text text-transparent">binnen te halen?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
                Plan een gratis demo met uw eigen menu. Wij laten u in 15 minuten horen hoe de AI uw restaurant vertegenwoordigt.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:info@speechcloud.nl" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity shadow-xl shadow-[#EE2B47]/25">
                  Plan een demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:+31612345678" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-colors">
                  <Phone className="h-4 w-4" /> Bel ons direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#EE2B47] to-[#ff6b6b]"><Phone className="h-3.5 w-3.5 text-white" /></div>
            <span className="text-sm font-bold">SpeechCloud</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a href="#hoe-het-werkt" className="hover:text-white transition-colors">Hoe het werkt</a>
            <a href="#voordelen" className="hover:text-white transition-colors">Voordelen</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="text-center md:text-right">
            <a href="mailto:info@speechcloud.nl" className="text-sm text-neutral-500 hover:text-white transition-colors">info@speechcloud.nl</a>
            <p className="text-xs text-neutral-600 mt-1">{"\u00A9"} 2026 SpeechCloud</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
