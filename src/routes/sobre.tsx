import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import heroImg from "@/assets/jessica-hero.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Jessica Schneider — Psicóloga CRP 05/86249" },
      {
        name: "description",
        content:
          "Psicóloga clínica formada com Pós-Graduação em Terapia Cognitivo-Comportamental. Atende em Angra dos Reis e online desde 2020.",
      },
      { property: "og:title", content: "Sobre Jessica Schneider" },
      { property: "og:description", content: "Psicologia com escuta ativa, ciência e acolhimento." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="fade-up order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Quem é Jessica
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-cocoa md:text-5xl">
              Psicologia com ciência, escuta e <em className="italic text-primary">presença</em>.
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                <strong className="font-medium text-cocoa">CRP 05/86249</strong> · Sou
                formada em Psicologia, com Pós-Graduação em Terapia
                Cognitivo-Comportamental e diversos cursos complementares na área.
              </p>
              <p>
                Atuo desde 2020 como psicóloga clínica, tendo auxiliado centenas
                de pessoas ao longo da minha trajetória. Meu propósito é oferecer,
                além das ferramentas baseadas na ciência, acolhimento, escuta
                ativa e empatia — tratando cada caso com individualidade,
                importância e comprometimento.
              </p>
            </div>

            {/* AVISO PARTICULAR */}
            <div className="mt-10 rounded-3xl border border-border bg-cream/60 px-6 py-8 md:px-8 md:py-10">
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                Informação importante
              </p>
              <p className="mt-3 font-serif text-xl leading-snug text-cocoa md:text-2xl">
                Os atendimentos são <em className="italic text-primary">particulares</em>.
              </p>
              <p className="mt-2 text-sm text-foreground/70 md:text-base">
                No momento não realizamos atendimentos por planos de saúde ou SUS.
                Acreditamos em um cuidado dedicado, individual e contínuo.
              </p>
            </div>

            <div className="mt-10">
              <WhatsAppButton label="Agendar uma conversa" size="lg" />
            </div>
          </div>
          <div className="fade-up delay-2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent/40 blur-2xl" />
              <img
                src={heroImg}
                alt="Jessica Schneider"
                className="aspect-[4/5] w-full rounded-[2.5rem] border border-border/60 object-cover shadow-[0_30px_60px_-30px_oklch(0.32_0.025_50/0.35)]"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
