"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, TrendingUp, Zap, Shield, BarChart3, ArrowRight, CheckCircle2, Headphones, Bot, Receipt, ChevronDown, Play } from "lucide-react";
import { useState } from "react";

const steps = [
  { step: "01", icon: Phone, title: "Doorschakelen", desc: "Schakel uw telefoonnummer door naar SpeechCloud. Tijdens piekuren, buiten openingstijden, of altijd \u2014 u kiest. Setup in 15 minuten." },
  { step: "02", icon: Bot, title: "AI neemt op", desc: "Onze AI beantwoordt de telefoon in natuurlijk Nederlands. Neemt de bestelling op, bevestigt details, en doet slimme bijverkoop." },
  { step: "03", icon: Receipt, title: "Bestelling binnen", desc: "De bestelling wordt direct geplaatst via uw kassasysteem of bestelwebsite. Uw team hoeft alleen te bakken." },
];

const benefits = [
  { icon: Clock, title: "24/7 bereikbaar", desc: "Buiten openingstijden, in het weekend, tijdens de lunch-rush \u2014 elke oproep wordt beantwoord." },
  { icon: TrendingUp, title: "Meer omzet", desc: "Gemiddeld 25% meer telefonische bestellingen door nul gemiste oproepen en slimme bijverkoop." },
  { icon: Zap, title: "Direct geplaatst", desc: "Bestellingen gaan direct naar uw kassa of bestelplatform. Geen handmatig overtypen." },
  { icon: Shield, title: "Natuurlijk Nederlands", desc: "Geen robotstem. Onze AI spreekt vloeiend Nederlands \u2014 alsof uw beste medewerker opneemt." },
  { icon: BarChart3, title: "Inzicht in alles", desc: "Dashboard met gesprekken, omzet per uur, populaire producten en gemiddelde bestelwaarde." },
  { icon: Phone, title: "Onbeperkt gelijktijdig", desc: "Geen bezettoon meer. 100 klanten tegelijk? Geen probleem." },
];

const faqs = [
  { q: "Hoe klinkt de AI?", a: "Onze AI spreekt vloeiend Nederlands met een natuurlijke stem. Geen robotachtige spraak \u2014 klanten merken vaak niet dat ze met AI praten." },
  { q: "Hoe worden bestellingen geplaatst?", a: "Wij koppelen direct met uw kassasysteem via API, of plaatsen bestellingen via uw bestaande bestelwebsite. Beide opties werken naadloos." },
  { q: "Wat als de AI een vraag niet begrijpt?", a: "Bij complexe vragen of klachten wordt het gesprek automatisch doorverbonden naar uw medewerker. De AI geeft duidelijk aan wanneer menselijke hulp nodig is." },
  { q: "Hoe snel kan ik live?", a: "Binnen 48 uur. Wij configureren uw menu, trainen de AI op uw producten, en testen samen voordat u live gaat." },
  { q: "Wat kost het?", a: "Vanaf \u20AC149 per maand, vast bedrag. Geen verborgen kosten, geen kosten per gesprek. Maandelijks opzegbaar." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left">
        <span className="text-base font-medium pr-4">{q}</span>
        <ChevronDown className={`h-5 w-5 text-[#EE2B47] flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-5 text-sm text-neutral-400 leading-relaxed">{a}</div>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
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
            <a href="#faq" className="text-sm text-neutral-400 hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity">
            Demo aanvragen <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#EE2B47]/15 via-[#EE2B47]/5 to-transparent blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4d65ff]/5 blur-3xl rounded-full" />
          <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#EE2B47]/5 blur-3xl rounded-full" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-8">
                <span className="h-2 w-2 rounded-full bg-[#EE2B47] animate-pulse" />
                <span className="text-neutral-300">Al actief bij meerdere restaurants</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
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
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition-opacity">
                  <Play className="h-4 w-4" /> Luister live
                </a>
                <a href="#vergelijk" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors">
                  Bereken uw gemiste omzet
                </a>
              </div>
            </div>

            {/* Right side - Phone mockup / visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-b from-[#EE2B47]/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative w-[300px] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#EE2B47] to-[#ff6b6b] flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">SpeechCloud AI</div>
                      <div className="text-xs text-green-400 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Actief
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-sm">
                      Welkom bij Pizza Roma! Waarmee kan ik u helpen?
                    </div>
                    <div className="rounded-2xl rounded-tr-sm bg-[#EE2B47]/20 px-4 py-3 text-sm ml-8">
                      Ik wil graag een pizza margherita bestellen
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-sm">
                      Uitstekend! In welk formaat? We hebben medium en large. En wilt u er drankjes bij?
                    </div>
                    <div className="rounded-2xl rounded-tr-sm bg-[#EE2B47]/20 px-4 py-3 text-sm ml-8">
                      Large graag, en doe maar een cola
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-sm">
                      Top! Dat wordt een large margherita en een cola. Totaal: {"\u20AC"}14,50. Komt u afhalen?
                    </div>
                  </div>
                  {/* Sound wave animation */}
                  <div className="mt-4 flex items-center justify-center gap-1 py-2">
                    {[3,5,8,12,8,15,10,6,12,8,5,10,7,4,8,12,6,9,5,3].map((h, i) => (
                      <div key={i} className="w-1 rounded-full bg-[#EE2B47]" style={{ height: h, opacity: 0.4 + Math.random() * 0.6, animation: `pulse 1.5s ease-in-out ${i * 0.1}s infinite` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            {[
              ["24/7", "Altijd bereikbaar"],
              ["<2s", "Reactietijd"],
              ["\u20AC0,20", "Per gesprek"],
              ["99%", "Nauwkeurigheid"],
            ].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] bg-clip-text text-transparent">{v}</div>
                <div className="mt-1 text-sm text-neutral-400">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="hoe-het-werkt" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#EE2B47]/3 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-4">
              <Zap className="h-3.5 w-3.5 text-[#EE2B47]" />
              <span className="text-neutral-300">Hoe het werkt</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Drie stappen. Live in 48 uur.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-[#EE2B47]/30 hover:bg-white/[0.05] transition-all duration-300">
                <div className="absolute top-6 right-6 text-5xl font-bold text-white/[0.04] group-hover:text-[#EE2B47]/10 transition-colors">{s.step}</div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EE2B47]/20 to-[#EE2B47]/5 border border-[#EE2B47]/20">
                  <s.icon className="h-6 w-6 text-[#EE2B47]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
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
              <div key={b.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#EE2B47]/20 transition-all duration-300">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EE2B47]/10">
                  <b.icon className="h-5 w-5 text-[#EE2B47]" />
                </div>
                <h3 className="mb-1.5 font-semibold">{b.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4d65ff]/3 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-4">
              <Zap className="h-3.5 w-3.5 text-[#4d65ff]" />
              <span className="text-neutral-300">Integratie</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Werkt met elk restaurant.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Zap, color: "#EE2B47", title: "API-koppeling", desc: "Directe koppeling met uw kassasysteem. Bestellingen verschijnen binnen 2 seconden.", items: ["Realtime synchronisatie", "Volledige menukaart", "Prijzen altijd actueel"] },
              { icon: Shield, color: "#4d65ff", title: "Website-integratie", desc: "Geen API? Onze AI bestelt via uw bestaande bestelwebsite \u2014 alsof een medewerker het doet.", items: ["Geen technische aanpassingen", "Werkt met elk platform", "Binnen 48 uur live"] },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-white/20 transition-all">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${c.color}15`, borderColor: `${c.color}30`, borderWidth: 1 }}>
                  <c.icon className="h-6 w-6" style={{ color: c.color }} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{c.title}</h3>
                <p className="mb-5 text-neutral-400 text-sm">{c.desc}</p>
                <ul className="space-y-2.5">{c.items.map((i) => <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-300"><CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: c.color }} />{i}</li>)}</ul>
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
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-8">
              <h3 className="mb-6 text-xl font-semibold text-red-400">Zonder SpeechCloud</h3>
              <ul className="space-y-4">
                {["Personeel: \u20AC800 \u2013 \u20AC1.200/maand", "Gemiste oproepen tijdens piek", "Fouten bij bestellingen", "Niet bereikbaar buiten uren", "Geen inzicht in gemiste omzet"].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-400"><span className="mt-0.5 text-red-400 font-bold">{"\u2715"}</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#EE2B47]/30 bg-[#EE2B47]/[0.03] p-8 ring-1 ring-[#EE2B47]/10">
              <h3 className="mb-6 text-xl font-semibold text-[#EE2B47]">Met SpeechCloud</h3>
              <ul className="space-y-4">
                {["Vanaf \u20AC149/maand \u2014 vast bedrag", "Elke oproep beantwoord, altijd", "99% nauwkeurigheid", "24/7 beschikbaar, ook feestdagen", "Volledig dashboard met analytics"].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[#EE2B47] flex-shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-14">
            <div className="mb-6 text-5xl">{"\uD83C\uDF55"}</div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
              {"\u201C"}De AI neemt perfect op. Mijn team kan focussen op wat ze het beste doen: geweldig eten maken. We missen geen enkele bestelling meer.{"\u201D"}
            </blockquote>
            <div className="mt-6 text-neutral-400"><span className="font-semibold text-white">Franchise-eigenaar</span><span className="mx-2">{"\u00B7"}</span>Pizzaketen in Noord-Holland</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Veelgestelde vragen</h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8">
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#EE2B47]/20 via-[#EE2B47]/5 to-[#4d65ff]/10" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative border border-white/10 rounded-3xl p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Klaar om elke bestelling<br />
                <span className="bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] bg-clip-text text-transparent">binnen te halen?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
                Plan een gratis demo met uw eigen menu. Wij laten u in 15 minuten horen hoe de AI uw restaurant vertegenwoordigt.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:info@speechcloud.nl" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EE2B47] to-[#ff6b6b] px-8 py-4 text-base font-medium text-white hover:opacity-90 transition-opacity">
                  Plan een demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:+31612345678" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-colors">
                  <Phone className="h-4 w-4" /> Bel ons direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-[#EE2B47] to-[#ff6b6b]"><Phone className="h-3 w-3 text-white" /></div>
            <span className="text-sm font-semibold">SpeechCloud</span>
          </div>
          <p className="text-sm text-neutral-500">{"\u00A9"} 2026 SpeechCloud. AI voice ordering voor de horeca.</p>
          <a href="mailto:info@speechcloud.nl" className="text-sm text-neutral-500 hover:text-white transition-colors">info@speechcloud.nl</a>
        </div>
      </footer>
    </main>
  );
}
