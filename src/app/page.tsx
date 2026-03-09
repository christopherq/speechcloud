import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, TrendingUp, Zap, Shield, BarChart3, ArrowRight, CheckCircle2, Headphones, Bot, Receipt } from "lucide-react";

const steps = [
  { step: "01", icon: Phone, title: "Doorschakelen", desc: "Schakel uw telefoonnummer door naar SpeechCloud. Tijdens piekuren, buiten openingstijden, of altijd — u kiest." },
  { step: "02", icon: Bot, title: "AI neemt op", desc: "Onze AI beantwoordt de telefoon in natuurlijk Nederlands. Neemt de bestelling op, bevestigt details, en stelt bijverkoop voor." },
  { step: "03", icon: Receipt, title: "Bestelling binnen", desc: "De bestelling wordt direct geplaatst via uw kassasysteem of bestelwebsite. Uw team hoeft alleen te bakken." },
];

const benefits = [
  { icon: Clock, title: "24/7 bereikbaar", desc: "Buiten openingstijden, in het weekend, tijdens de lunch-rush — elke oproep wordt beantwoord." },
  { icon: TrendingUp, title: "Meer omzet", desc: "Gemiddeld 25% meer telefonische bestellingen door nul gemiste oproepen en slimme bijverkoop." },
  { icon: Zap, title: "Direct geplaatst", desc: "Bestellingen gaan direct naar uw kassa of bestelplatform. Geen handmatig overtypen." },
  { icon: Shield, title: "Natuurlijk Nederlands", desc: "Geen robotstem. Onze AI spreekt vloeiend Nederlands en begrijpt dialecten en straattaal." },
  { icon: BarChart3, title: "Inzicht in alles", desc: "Dashboard met aantal gesprekken, omzet per uur, populaire producten en gemiddelde bestelwaarde." },
  { icon: Phone, title: "Onbeperkt gelijktijdig", desc: "Geen bezettoon meer. 100 klanten tegelijk? Geen probleem. Elke beller wordt direct geholpen." },
];

const without = ["Personeel: \u20AC800 \u2013 \u20AC1.200/maand", "Gemiste oproepen tijdens piek", "Fouten bij bestellingen", "Niet bereikbaar buiten uren", "Geen inzicht in gemiste omzet"];
const withSC = ["Vanaf \u20AC149/maand \u2014 vast bedrag", "Elke oproep beantwoord, altijd", "99% nauwkeurigheid", "24/7 beschikbaar, ook feestdagen", "Volledig dashboard met analytics"];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500"><Phone className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold tracking-tight">SpeechCloud</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#hoe-het-werkt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hoe het werkt</a>
            <a href="#voordelen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Voordelen</a>
            <a href="#vergelijk" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Vergelijk</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white" asChild><a href="#contact">Demo aanvragen</a></Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm border-emerald-500/20">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Al actief bij meerdere restaurants in Nederland
          </Badge>
          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
            AI neemt de telefoon op.<br /><span className="text-emerald-400">Uw klant bestelt.</span><br />U draait omzet.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            Nooit meer een gemiste bestelling. Onze AI beantwoordt elk telefoontje, neemt de bestelling op en plaatst deze direct in uw systeem — 24/7.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white text-base px-8 h-12" asChild>
              <a href="#contact">Demo aanvragen<ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
              <a href="#luister"><Headphones className="mr-2 h-4 w-4" />Luister naar een gesprek</a>
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/40 pt-8">
            {[["24/7","Altijd bereikbaar"],["<2s","Reactietijd"],["\u20AC0,20","Per gesprek"]].map(([v,l])=>(
              <div key={l}><div className="text-3xl font-bold text-emerald-400">{v}</div><div className="mt-1 text-sm text-muted-foreground">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio */}
      <section id="luister" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10"><Headphones className="h-5 w-5 text-emerald-400" /></div>
                <div><h3 className="text-lg font-semibold">Luister naar een echt gesprek</h3><p className="text-sm text-muted-foreground">Onze AI bestelt een pizza — volledig in het Nederlands</p></div>
              </div>
              <div className="rounded-xl bg-secondary/50 p-8 flex items-center justify-center">
                <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-5 w-5" /><span className="text-sm">Demo binnenkort beschikbaar — neem contact op voor een live demonstratie</span></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section id="hoe-het-werkt" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <Badge variant="secondary" className="mb-4">Hoe het werkt</Badge>
            <h2 className="text-3xl font-bold md:text-5xl tracking-tight">Drie stappen. Geen gedoe.</h2>
            <p className="mt-4 text-lg text-muted-foreground">Binnen 48 uur operationeel — zonder technische kennis</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <Card key={s.step} className="relative overflow-hidden border-border/50 bg-card/50">
                <CardContent className="p-8">
                  <span className="absolute top-4 right-4 text-6xl font-bold text-emerald-500/10">{s.step}</span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10"><s.icon className="h-6 w-6 text-emerald-400" /></div>
                  <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="voordelen" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <Badge variant="secondary" className="mb-4">Voordelen</Badge>
            <h2 className="text-3xl font-bold md:text-5xl tracking-tight">Uw meest betrouwbare medewerker</h2>
            <p className="mt-4 text-lg text-muted-foreground">Altijd aanwezig. Nooit moe. Nooit ziek. Perfect getraind.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <Card key={b.title} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10"><b.icon className="h-5 w-5 text-emerald-400" /></div>
                  <h3 className="mb-2 font-semibold">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <Badge variant="secondary" className="mb-4">Integratie</Badge>
            <h2 className="text-3xl font-bold md:text-5xl tracking-tight">Werkt met elk restaurant</h2>
            <p className="mt-4 text-lg text-muted-foreground">Twee manieren om bestellingen direct in uw systeem te krijgen</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { icon: Zap, title: "API-koppeling", desc: "Directe koppeling met uw kassasysteem of bestelplatform via API. Bestellingen verschijnen binnen 2 seconden.", items: ["Realtime synchronisatie", "Volledige menukaart", "Prijzen altijd actueel"] },
              { icon: Shield, title: "Website-integratie", desc: "Geen API beschikbaar? Geen probleem. Onze AI bestelt via uw bestaande bestelwebsite — alsof een medewerker het doet.", items: ["Geen technische aanpassingen nodig", "Werkt met elk bestelplatform", "Binnen 48 uur live"] },
            ].map((c) => (
              <Card key={c.title} className="border-border/50 bg-card/50">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10"><c.icon className="h-6 w-6 text-emerald-400" /></div>
                  <h3 className="mb-2 text-xl font-semibold">{c.title}</h3>
                  <p className="mb-4 text-muted-foreground">{c.desc}</p>
                  <ul className="space-y-2">{c.items.map((i) => <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />{i}</li>)}</ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section id="vergelijk" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <Badge variant="secondary" className="mb-4">Vergelijk</Badge>
            <h2 className="text-3xl font-bold md:text-5xl tracking-tight">Wat kost het u nu?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-red-500/20 bg-card/50"><CardContent className="p-8">
              <h3 className="mb-6 text-xl font-semibold text-red-400">Zonder SpeechCloud</h3>
              <ul className="space-y-4 text-muted-foreground">{without.map((i) => <li key={i} className="flex items-start gap-3"><span className="mt-0.5 text-red-400 font-bold">{"\u2715"}</span>{i}</li>)}</ul>
            </CardContent></Card>
            <Card className="border-emerald-500/30 bg-card/50 ring-1 ring-emerald-500/20"><CardContent className="p-8">
              <h3 className="mb-6 text-xl font-semibold text-emerald-400">Met SpeechCloud</h3>
              <ul className="space-y-4 text-muted-foreground">{withSC.map((i) => <li key={i} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 flex-shrink-0" />{i}</li>)}</ul>
            </CardContent></Card>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Card className="bg-card/50 border-border/50"><CardContent className="p-8 md:p-12">
            <div className="mb-6 text-4xl">{"\uD83C\uDF55"}</div>
            <blockquote className="text-xl font-medium md:text-2xl leading-relaxed">
              {"\u201C"}Ik hoef me geen zorgen meer te maken over gemiste bestellingen. De AI neemt perfect op en mijn team kan focussen op wat ze het beste doen: geweldig eten maken.{"\u201D"}
            </blockquote>
            <div className="mt-6 text-muted-foreground"><span className="font-semibold text-foreground">Franchise-eigenaar</span><span className="mx-2">{"\u00B7"}</span><span>Pizzaketen in Noord-Holland</span></div>
          </CardContent></Card>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Card className="bg-gradient-to-br from-emerald-500/10 via-card to-card border-border/50"><CardContent className="p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl tracking-tight">Klaar om elke bestelling<br /><span className="text-emerald-400">binnen te halen?</span></h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Plan een gratis demo met uw eigen menu. Wij laten u in 15 minuten horen hoe de AI uw restaurant vertegenwoordigt.</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white text-base px-8 h-12" asChild><a href="mailto:info@speechcloud.nl">Plan een demo<ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild><a href="tel:+31612345678"><Phone className="mr-2 h-4 w-4" />Bel ons direct</a></Button>
            </div>
          </CardContent></Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2"><div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500"><Phone className="h-3 w-3 text-white" /></div><span className="text-sm font-semibold">SpeechCloud</span></div>
          <p className="text-sm text-muted-foreground">{"\u00A9"} 2026 SpeechCloud. AI voice ordering voor de horeca.</p>
          <a href="mailto:info@speechcloud.nl" className="text-sm text-muted-foreground hover:text-foreground transition-colors">info@speechcloud.nl</a>
        </div>
      </footer>
    </main>
  );
}
