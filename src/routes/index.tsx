import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/black-mj-hero.jpg";
import diningImage from "@/assets/showroom-dining.jpg";
import loungeImage from "@/assets/showroom-lounge.jpg";
import deliveryImage from "@/assets/delivery-team.jpg";
import campaignSeal from "@/assets/selo-black-mj.png.asset.json";
import logo from "@/assets/logo-mj-home.png.asset.json";

const VIP_LINK = "#GRUPO_VIP";

const stores = [
  ["São Paulo — Moema", "Av. Jurucê, 488 — Moema — São Paulo/SP"],
  ["Campinas — Shopping Iguatemi", "Av. Iguatemi, 777 — Vila Brandina — Campinas/SP"],
  ["Campinas — Nova Campinas", "Av. Dr. Hermas Braga, 717 — Nova Campinas — Campinas/SP"],
  ["Paulínia", "Rua José Dresdi, 35 — Nova Paulínia — Paulínia/SP"],
];

const testimonials = [
  ["Renata Alves", "São Paulo — Moema", "Comprei na MJ Home Moema e a experiência foi impecável do começo ao fim. Atendimento atencioso e móveis lindos."],
  ["Marcelo Tavares", "Campinas — Shopping Iguatemi", "O consultor do Shopping Iguatemi me ajudou a escolher cada peça com muito cuidado. Ficou exatamente como eu imaginei."],
  ["Camila Ribeiro", "Campinas — Nova Campinas", "Fiz a reforma da sala inteira com a MJ Home Nova Campinas. Qualidade excelente e entrega no prazo certinho."],
  ["Diego Fontana", "Paulínia", "Atendimento de perto, sem pressa, e um resultado que superou o que eu esperava. Recomendo de olhos fechados."],
];

const faqs = [
  ["O que é a Black Friday MJ Home?", "Evento anual com descontos de até 70% OFF em peças a pronta-entrega."],
  ["É válido em todas as lojas?", "Sim. A Black MJ Home acontece em nossas 4 unidades: Moema, Nova Campinas, Shopping Iguatemi Campinas e Paulínia."],
  ["Posso levar na hora?", "Sim! Temos diversas opções a pronta-entrega."],
  ["Quais são as formas de pagamento?", "Cartão de crédito, boleto após análise e pagamento à vista."],
  ["A entrega é garantida?", "Sim, com equipe própria e especializada."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black MJ Home — Até 70% OFF" },
      { name: "description", content: "Black MJ Home: móveis de alto padrão com até 70% OFF, a pronta-entrega, nos dias 6, 7 e 8 de novembro." },
      { property: "og:title", content: "Black MJ Home — Até 70% OFF" },
      { property: "og:description", content: "Três dias de condições únicas em móveis de alto padrão a pronta-entrega." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function CampaignSeal({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={campaignSeal.url}
      alt="Black MJ Home — até 70% OFF"
      className={compact ? "w-28 sm:w-32" : "w-36 sm:w-44"}
      width={250}
      height={260}
    />
  );
}

function CampaignButton() {
  return (
    <Button asChild variant="whatsapp" size="campaign">
      <a href={VIP_LINK} aria-label="Entrar no grupo exclusivo da Black MJ Home no WhatsApp">
        <MessageCircle aria-hidden="true" />
        <span className="text-balance">Clique e entre no grupo exclusivo do WhatsApp!</span>
      </a>
    </Button>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground sm:text-base">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-gold text-gold">
            <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-xs font-bold uppercase text-gold">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-none text-foreground sm:text-6xl">{title}</h2>
      {copy ? <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{copy}</p> : null}
    </header>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-gold py-3 text-gold-foreground" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-8 text-xs font-bold uppercase">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index} className="flex items-center gap-8 whitespace-nowrap">
                Black MJ Home <Sparkles className="size-3" /> Até 70% OFF
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <section className="relative grid min-h-[92svh] overflow-hidden lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-10 lg:py-24 lg:pl-16 lg:pr-24 xl:pl-24">
          <img src={logo.url} alt="MJ Home" className="absolute left-5 top-6 w-20 sm:left-10 sm:top-8 sm:w-24 lg:left-16 xl:left-24" width={130} height={130} />
          <div className="mt-16 lg:mt-10">
            <h1 className="font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl xl:text-7xl">
              Black MJ Home
              <span className="mt-2 block text-gold">até 70% OFF</span>
            </h1>
            <p className="mt-7 flex items-center gap-3 text-base font-semibold text-foreground sm:text-lg">
              <Clock3 className="size-5 shrink-0 text-gold" aria-hidden="true" />
              <span>6, 7 e 8 de novembro <span className="text-gold">· Apenas 3 dias!</span></span>
            </p>
            <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              Móveis de alto padrão com até <strong className="font-semibold text-foreground">70% de desconto</strong>, em pronta-entrega e sob encomenda. <strong className="font-semibold text-foreground">Estoque limitado – peças exclusivas.</strong>
            </p>
            <div className="mt-9"><CampaignButton /></div>
          </div>
        </div>
        <div className="relative min-h-[420px] lg:min-h-0">
          <img src={heroImage} alt="Sala de estar contemporânea com móveis de alto padrão" className="absolute inset-0 size-full object-cover object-center lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]" width={1920} height={1280} fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:bg-none" />
          <div className="absolute bottom-6 left-5 sm:left-10 lg:bottom-auto lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/3">
            <CampaignSeal />
          </div>
        </div>
      </section>

      <section aria-label="Ambientes MJ Home" className="grid h-[70vh] min-h-[480px] grid-cols-2 grid-rows-2 gap-1 bg-border sm:h-[76vh] sm:grid-cols-3 sm:grid-rows-1">
        <figure className="col-span-2 overflow-hidden sm:col-span-1"><img src={loungeImage} alt="Sala com sofá e poltronas de design contemporâneo" className="size-full object-cover" width={1408} height={1056} loading="lazy" /></figure>
        <figure className="overflow-hidden"><img src={diningImage} alt="Sala de jantar com mesa em pedra natural" className="size-full object-cover" width={1408} height={1056} loading="lazy" /></figure>
        <figure className="overflow-hidden"><img src={heroImage} alt="Sala sofisticada com iluminação acolhedora" className="size-full object-cover object-right" width={1920} height={1280} loading="lazy" /></figure>
      </section>

      <Marquee />

      <section className="light-section px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionIntro eyebrow="Pronta-entrega" title="Sua casa pronta ainda em 2026" />
          <div className="mx-auto max-w-2xl"><CheckList items={["Design exclusivo e conforto premium com condições imperdíveis.", "Somente durante a Black MJ Home, em todas as lojas.", "Peças exclusivas, com condições que acontecem uma vez no ano."]} /></div>
          <div className="mt-10 text-center"><CampaignButton /></div>
        </div>
      </section>

      <section className="border-y border-border bg-surface px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro eyebrow="Nossa história" title="Há mais de 15 anos, transformamos ambientes em bem-estar." />
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Sparkles, "Referência", "Móveis soltos de alto padrão em São Paulo e Campinas."],
              [Users, "35.000+ clientes", "Mais de 15 anos criando casas que acolhem."],
              [Star, "Atendimento", "Consultoria especializada para cada ambiente."],
              [Truck, "Entrega própria", "Transporte seguro, cuidadoso e especializado."],
            ].map(([Icon, title, text]) => {
              const ItemIcon = Icon as typeof Sparkles;
              return <article key={String(title)} className="bg-surface p-7 sm:p-8"><ItemIcon className="mb-8 size-7 text-gold" strokeWidth={1.5} /><h3 className="font-display text-2xl font-semibold">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(text)}</p></article>;
            })}
          </div>
          <div className="mt-10 text-center"><CampaignButton /></div>
        </div>
      </section>

      <Marquee />

      <section className="light-section px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <img src={diningImage} alt="Mesa de jantar e cadeiras disponíveis a pronta-entrega" className="aspect-[4/3] size-full rounded-sm object-cover" width={1408} height={1056} loading="lazy" />
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-gold">Curadoria MJ Home</p>
            <h2 className="font-display text-4xl font-semibold leading-none sm:text-6xl">Uma grande seleção de móveis a pronta-entrega</h2>
            <div className="mt-8"><CheckList items={["Design contemporâneo com conforto e sofisticação.", "Consultoria de especialistas.", "Peças exclusivas com pronta-entrega."]} /></div>
            <div className="mt-9"><CampaignButton /></div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro eyebrow="Anote na agenda" title="BLACK MJ HOME — 6, 7 e 8 de novembro" copy="A maior oportunidade do ano acontece simultaneamente em nossas quatro lojas." />
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {stores.map(([name, address]) => <article key={name} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 bg-surface p-6 sm:p-8"><MapPin className="mt-1 size-5 shrink-0 text-gold" /><div className="min-w-0"><h3 className="font-display text-xl font-semibold">{name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{address}</p></div></article>)}
          </div>
          <div className="mt-10 text-center"><CampaignButton /></div>
        </div>
      </section>

      <section className="relative min-h-[680px] overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
        <img src={deliveryImage} alt="Equipe especializada realizando uma entrega cuidadosa" className="absolute inset-0 size-full object-cover" width={1600} height={1008} loading="lazy" />
        <div className="delivery-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[480px] max-w-6xl items-end">
          <div className="max-w-2xl">
            <Truck className="mb-6 size-9 text-gold" strokeWidth={1.5} />
            <p className="mb-3 text-xs font-bold uppercase text-gold">Entrega própria, rápida e segura</p>
            <h2 className="font-display text-4xl font-semibold leading-none text-hero-foreground sm:text-6xl">Montagem profissional, transporte cuidadoso e prazos seguros.</h2>
            <div className="mt-8"><CampaignButton /></div>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionIntro eyebrow="Oportunidade única no ano" title="Peças extraordinárias. Condições que não voltam." />
          <div className="mx-auto max-w-2xl"><CheckList items={["Sofás, poltronas, mesas de jantar, aparadores, cadeiras, mesas de centro, tapetes e muito mais.", "Até 70% OFF e pronta-entrega.", "Peças únicas, exclusivas e sem reposição.", "Condições únicas para os dias 6, 7 e 8 de novembro."]} /></div>
          <div className="mt-10 text-center"><CampaignButton /></div>
        </div>
      </section>

      <section className="light-section px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro eyebrow="Experiências reais" title="O que nossos clientes dizem" />
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
            {testimonials.map(([name, store, quote]) => <article key={name} className="min-w-[85%] snap-center rounded-lg border border-border bg-card p-6 sm:min-w-0"><div className="flex gap-1 text-gold" aria-label="5 estrelas">{Array.from({length: 5}).map((_, index) => <Star key={index} className="size-3.5 fill-current" />)}</div><blockquote className="mt-6 font-display text-xl leading-7">“{quote}”</blockquote><footer className="mt-8 border-t border-border pt-5"><p className="text-sm font-bold">{name}</p><p className="mt-1 text-xs text-muted-foreground">{store}</p></footer></article>)}
          </div>
          <div className="mt-10 text-center"><CampaignButton /></div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionIntro eyebrow="Dúvidas frequentes" title="Antes de escolher sua peça" />
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="py-6 text-left text-base font-semibold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-sm leading-6 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}
          </Accordion>
          <div className="mt-10 text-center"><CampaignButton /></div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface px-5 pb-28 pt-16 sm:px-8 sm:pb-16 sm:pt-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><img src={logo.url} alt="MJ Home" className="w-28" width={130} height={130} /><p className="mt-6 max-w-xs text-sm leading-6 text-muted-foreground">Móveis soltos e decoração de alto padrão há mais de 15 anos.</p><a href="https://instagram.com/mjhomeoficial" className="mt-5 inline-flex items-center gap-2 text-sm text-foreground hover:text-gold"><Instagram className="size-4" /> @mjhomeoficial</a></div>
          <div className="grid gap-6 sm:grid-cols-2">{stores.map(([name, address]) => <div key={name}><h3 className="text-sm font-bold">{name}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{address}<br />(19) 99788-0222</p></div>)}</div>
        </div>
        <div className="mx-auto mt-14 max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">MJ Home® — Todos os direitos reservados.</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-whatsapp-hover bg-background/95 p-3 backdrop-blur sm:hidden"><CampaignButton /></div>
    </main>
  );
}