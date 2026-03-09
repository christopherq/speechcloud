"use client";
import { Phone, Clock, TrendingUp, Zap, Shield, BarChart3, ArrowRight, CheckCircle2, Bot, ChevronDown, Play, AlertTriangle, Headphones, Users } from "lucide-react";
import { useState } from "react";

const steps = [
  { step: "01", title: "Doorschakelen", desc: "Schakel uw telefoonnummer door naar SpeechCloud. Tijdens piekuren, buiten openingstijden, of altijd \u2014 u kiest. Setup in 15 minuten.", img: "/ai-handoff.jpg" },
  { step: "02", title: "AI neemt op", desc: "Onze AI beantwoordt de telefoon in natuurlijk Nederlands. Neemt de bestelling op, bevestigt details, en doet slimme bijverkoop.", img: "/hero-pizzamaker.jpg" },
  { step: "03", title: "Bestelling binnen", desc: "De bestelling wordt direct geplaatst via uw kassasysteem of bestelwebsite. Uw team hoeft alleen te bakken.", img: "/ai-dashboard.jpg" },
];

const benefits = [
  { icon: Clock, title: "24/7 bereikbaar", desc: "Buiten openingstijden, in het weekend, tijdens de lunch-rush \u2014 elke oproep wordt beantwoord." },
  { icon: TrendingUp, title: "Meer omzet", desc: "Gemiddeld 25% meer telefonische bestellingen door nul gemiste oproepen en slimme bijverkoop." },
  { icon: Zap, title: "Direct geplaatst", desc: "Bestellingen gaan direct naar uw kassa of bestelplatform. Geen handmatig overtypen." },
  { icon: Shield, title: "Natuurlijk Nederlands", desc: "Geen robotstem. Onze AI spreekt vloeiend Nederlands \u2014 alsof uw beste medewerker opneemt." },
  { icon: BarChart3, title: "Inzicht in alles", desc: "Dashboard met gesprekken, omzet per uur, populaire producten en gemiddelde bestelwaarde." },
  { icon: Users, title: "Onbeperkt gelijktijdig", desc: "Geen bezettoon meer. 100 klanten tegelijk? Geen probleem." },
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
    <div className="border-b border-gray-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left">
        <span className="text-base font-medium text-gray-900 pr-4">{q}</span>
        <ChevronDown className={`h-5 w-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}>
        <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center">
            <img src="/logo.png" alt="SpeechCloud" className="h-8" />
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#hoe-het-werkt" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Hoe het werkt</a>
            <a href="#voordelen" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Voordelen</a>
            <a href="#vergelijk" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Vergelijk</a>
            <a href="#faq" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
            Demo aanvragen <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero - with background image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="/hero-restaurant-ai.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm mb-8 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-gray-600">Al actief bij meerdere restaurants in Nederland</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6 text-gray-900">
              Elke oproep{" "}
              <span className="text-blue-600">beantwoord.</span>
              <br />
              Elke bestelling{" "}
              <span className="text-blue-600">binnen.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              De AI-telefoonagent die klinkt als uw beste medewerker. Neemt 24/7 op, plaatst bestellingen direct in uw systeem, en laat geen klant meer wachten.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25">
                Gratis demo aanvragen <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#hoe-het-werkt" className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm px-7 py-3.5 text-base font-medium text-gray-700 hover:bg-white transition-colors shadow-sm">
                <Play className="h-4 w-4" /> Bekijk hoe het werkt
              </a>
            </div>
            <div className="mt-10 flex gap-10">
              {[["24/7", "Bereikbaar"], ["<2s", "Reactietijd"], ["99%", "Nauwkeurig"]].map(([v, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-blue-600">{v}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 border-y border-gray-100">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Vertrouwd door restaurants door heel Nederland</p>
          <div className="flex items-center justify-center gap-12 opacity-30">
            {["Pizzeria\u2019s", "Bezorgservices", "Afhaalrestaurants", "Franchises"].map((t) => (
              <span key={t} className="text-lg font-bold text-gray-400 hidden sm:block">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem - neutral gray-blue, no red */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img src="/ai-busy-kitchen.jpg" alt="Drukke keuken" className="w-full h-[400px] object-cover" />
              <div className="absolute top-4 right-4 rounded-full bg-gray-900/80 backdrop-blur-sm px-4 py-2 flex items-center gap-2 shadow-lg">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">3 gemiste oproepen</span>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm mb-6 shadow-sm">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                <span className="text-gray-700 font-medium">Herkenbaar?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
                Elke gemiste oproep is een{" "}
                <span className="text-gray-500">gemiste bestelling.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Tijdens piekuren gaat de telefoon continu. Uw team is druk met bakken, inpakken en klanten helpen. Wie neemt op? Niemand. Die klant belt de concurrent.
              </p>
              <ul className="space-y-3">
                {["Gemiddeld 23% van telefoontjes wordt niet beantwoord", "\u20AC200\u2013\u20AC500 omzet per dag verdampt door gemiste oproepen", "Personeel raakt gestrest door multitasken", "Fouten bij handmatig opnemen van bestellingen"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-500 text-xs flex-shrink-0">{"\u2715"}</span>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - white */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm mb-6">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                <span className="text-blue-700 font-medium">De oplossing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
                SpeechCloud neemt op.{" "}
                <span className="text-blue-600">Altijd.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Onze AI-telefoonagent beantwoordt elke oproep, neemt bestellingen op in vloeiend Nederlands, en plaatst ze direct in uw systeem. Uw team focust op wat ze het beste doen: geweldig eten maken.
              </p>
              <ul className="space-y-3">
                {["Elke oproep beantwoord, ook om 3 uur \u2019s nachts", "Bestellingen direct in uw kassa \u2014 geen fouten", "Slimme bijverkoop verhoogt gemiddelde bestelwaarde", "Volledig dashboard met inzichten en analytics"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 order-1 lg:order-2">
              <img src="/ai-dashboard.jpg" alt="Dashboard analytics" className="w-full h-[400px] object-cover" />
              <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-4 py-2 flex items-center gap-2 shadow-lg">
                <TrendingUp className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">+25% omzet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - light blue tint */}
      <section id="hoe-het-werkt" className="py-24 bg-blue-50/40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm mb-4 shadow-sm">
              <Zap className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-gray-600">Hoe het werkt</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Live in 48 uur.</h2>
            <p className="mt-4 text-lg text-gray-500">Drie simpele stappen. Geen technische kennis nodig.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="group relative rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden hover:shadow-lg hover:ring-blue-300 transition-all duration-500">
                <div className="relative h-52 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md">
                    {s.step}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - white */}
      <section id="voordelen" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm mb-4">
              <Shield className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-gray-600">Voordelen</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Uw meest betrouwbare medewerker.</h2>
            <p className="mt-4 text-lg text-gray-500">Altijd aanwezig. Nooit moe. Nooit ziek. Perfect getraind.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="group rounded-2xl bg-white border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <b.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration - light gray */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm mb-4 shadow-sm">
              <Zap className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-gray-600">Integratie</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Werkt met elk restaurant.</h2>
            <p className="mt-4 text-lg text-gray-500">Twee integratie-opties. Altijd een passende oplossing.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Zap, title: "API-koppeling", desc: "Directe koppeling met uw kassasysteem. Bestellingen binnen 2 seconden op uw scherm.", items: ["Realtime synchronisatie", "Volledige menukaart automatisch", "Prijzen altijd actueel", "Toast, Square, Lightspeed en meer"] },
              { icon: Shield, title: "Website-integratie", desc: "Geen API? Onze AI bestelt via uw bestaande bestelwebsite \u2014 alsof een medewerker het doet.", items: ["Geen technische aanpassingen nodig", "Werkt met elk bestelplatform", "Thuisbezorgd, eigen site, of anders", "Binnen 48 uur operationeel"] },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <c.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{c.title}</h3>
                <p className="mb-6 text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                <ul className="space-y-3">{c.items.map((i) => <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-500" />{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare - white */}
      <section id="vergelijk" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Wat kost het u nu?</h2>
            <p className="mt-4 text-lg text-gray-500">De verborgen kosten van gemiste telefoonbestellingen.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="mb-6 text-xl font-semibold text-gray-500">Zonder SpeechCloud</h3>
              <ul className="space-y-4">
                {["Personeel: \u20AC800 \u2013 \u20AC1.200/maand extra", "23% gemiste oproepen tijdens piek", "Fouten bij handmatige bestellingen", "Niet bereikbaar buiten openingstijden", "Geen inzicht in gemiste omzet"].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-500"><span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-400 text-xs flex-shrink-0">{"\u2715"}</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-lg shadow-blue-600/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-blue-600">Met SpeechCloud</h3>
                <span className="text-xs font-semibold bg-blue-600 text-white rounded-full px-3 py-1">Aanbevolen</span>
              </div>
              <ul className="space-y-4">
                {["Vanaf \u20AC149/maand \u2014 vast bedrag", "Elke oproep beantwoord, 24/7/365", "99% nauwkeurigheid bij bestellingen", "Slimme bijverkoop = hogere bestelwaarde", "Volledig dashboard met analytics"].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600 flex-shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - blue */}
      <section className="py-24 bg-blue-600">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 text-5xl">{"\uD83C\uDF55"}</div>
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-white italic">
            {"\u201C"}De AI neemt perfect op. Mijn team kan focussen op wat ze het beste doen: geweldig eten maken. We missen geen enkele bestelling meer.{"\u201D"}
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-white">F</div>
            <div className="text-left">
              <div className="font-semibold text-white">Franchise-eigenaar</div>
              <div className="text-sm text-blue-100">Pizzaketen in Noord-Holland</div>
            </div>
          </div>
        </div>
      </section>

      {/* Audio demo */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm mb-4">
              <Headphones className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-gray-600">Luister zelf</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Hoor het verschil.</h2>
            <p className="mt-4 text-lg text-gray-500">Een echt gesprek met onze AI. Geen script, geen nabewerking.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="h-24 w-24 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 cursor-pointer hover:bg-blue-700 transition-colors">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Voorbeeldgesprek: Pizza bestelling</h3>
                <p className="text-gray-500 text-sm mb-4">Klant belt om een pizza margherita en cola te bestellen. De AI neemt op, bevestigt de bestelling, en doet bijverkoop.</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-blue-600 rounded-full" />
                  </div>
                  <span className="text-xs text-gray-400">0:26</span>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">Audio demo binnenkort beschikbaar. <a href="#contact" className="text-blue-600 hover:underline">Vraag een live demo aan</a> om het zelf te horen.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-blue-50/30">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Veelgestelde vragen</h2>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white px-8 shadow-sm">
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA - dark */}
      <section id="contact" className="py-24 bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Klaar om elke bestelling{" "}
            <span className="text-blue-400">binnen te halen?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
            Plan een gratis demo met uw eigen menu. Wij laten u in 15 minuten horen hoe de AI uw restaurant vertegenwoordigt.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:info@speechcloud.nl" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
              Plan een demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+31612345678" className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-8 py-4 text-base font-medium text-white hover:bg-gray-700 transition-colors">
              <Phone className="h-4 w-4" /> Bel ons direct
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center">
            <img src="/logo.png" alt="SpeechCloud" className="h-7 brightness-0 invert" />
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#hoe-het-werkt" className="hover:text-white transition-colors">Hoe het werkt</a>
            <a href="#voordelen" className="hover:text-white transition-colors">Voordelen</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="text-center md:text-right">
            <a href="mailto:info@speechcloud.nl" className="text-sm text-gray-500 hover:text-white transition-colors">info@speechcloud.nl</a>
            <p className="text-xs text-gray-600 mt-1">{"\u00A9"} 2026 SpeechCloud</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
