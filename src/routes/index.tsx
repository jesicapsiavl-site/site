import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SITE } from "@/lib/site";

import heroImg from "@/assets/jessica-hero.jpg";
import onlineImg from "@/assets/jessica-online.jpg";
import ebookCover from "@/assets/ebook-cover.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Jessica Schneider — Psicóloga · Terapia Cognitivo-Comportamental",
      },
      {
        name: "description",
        content:
          "Psicoterapia baseada na ciência, com acolhimento e escuta ativa. Atendimento presencial em Angra dos Reis e online para todo o Brasil. CRP 05/86249.",
      },
      { property: "og:title", content: "Jessica Schneider — Psicóloga" },
      {
        property: "og:description",
        content:
          "Psicoterapia com base na ciência, acolhimento e leveza.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  useEffect(() => {
    const elfsightScript = document.createElement("script");
    elfsightScript.src = "https://elfsightcdn.com/platform.js";
    elfsightScript.async = true;

    document.body.appendChild(elfsightScript);

    return () => {
      document.body.removeChild(elfsightScript);
    };
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.93_0.035_60)_0%,transparent_55%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.05fr_1fr] md:items-center md:pt-24 lg:gap-20 lg:px-10 lg:pb-28">
          <div className="fade-up">
            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Psicologia · CRP 05/86249
            </p>

            <h1 className="font-serif text-[2.6rem] leading-[1.05] text-cocoa md:text-[3.5rem] lg:text-[4rem]">
              Saúde mental é a base de uma{" "}
              <em className="italic text-primary">vida leve</em>.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
              Se você sente que é hora de olhar para si com mais carinho e
              clareza, estou aqui para te acompanhar. A terapia baseada na
              ciência é uma grande aliada no cuidado emocional, no
              autoconhecimento e na construção de uma vida mais equilibrada.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppButton label="Agendar atendimento" size="lg" />

              <Link
                to="/sobre"
                className="text-sm tracking-wide text-primary underline-offset-4 hover:underline"
              >
                Conhecer meu trabalho →
              </Link>
            </div>

            <a
              href={SITE.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cocoa"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              {SITE.city}
            </a>
          </div>

          <div className="fade-up delay-2 relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card shadow-[0_30px_60px_-30px_oklch(0.32_0.025_50/0.35)]">
              <img
                src={heroImg}
                alt="Jessica Schneider — psicóloga"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TCC */}
      <section className="border-y border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Abordagem
          </p>

          <h2 className="mt-5 font-serif text-4xl text-cocoa md:text-5xl">
            Afinal, o que é a TCC?
          </h2>

          <p className="mt-8 text-base leading-relaxed text-foreground/80 md:text-lg">
            A Terapia Cognitivo-Comportamental é uma abordagem reconhecida que
            explora a relação entre pensamentos, emoções e comportamentos.
            Ativa e colaborativa, ela envolve uma parceria entre terapeuta e
            paciente para identificar e transformar padrões que causam
            sofrimento — promovendo mudanças duradouras e uma vida mais
            equilibrada.
          </p>
        </div>
      </section>

      {/* ATENDIMENTOS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Atendimento
            </p>

            <h2 className="mt-4 font-serif text-4xl text-cocoa md:text-5xl">
              Como nosso trabalho acontece
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {[
              {
                title: "Meu público",
                body: "Pessoas com ansiedade, depressão, estresse, baixa autoestima, relações disfuncionais e outros sintomas emocionais.",
              },
              {
                title: "Frequência",
                body: "Protocolos individuais. As sessões podem ser semanais ou quinzenais conforme demanda e disponibilidade.",
              },
              {
                title: "Modalidade",
                body: "Presencial em Angra dos Reis ou online para todo o mundo, com a mesma qualidade de tratamento.",
              },
              {
                title: "Tratamento",
                body: "Após uma conversa inicial sobre sintomas e demandas, traçamos juntos um caminho de evolução.",
              },
            ].map((c) => (
              <article key={c.title} className="bg-card p-8">
                <h3 className="font-serif text-2xl text-cocoa">
                  {c.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TERAPIA ONLINE */}
      <section className="border-y border-border/60 bg-secondary/30 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[1fr_1.05fr] md:items-center lg:gap-20 lg:px-10">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent/40 blur-2xl" />

            <img
              src={onlineImg}
              alt="Jessica Schneider — atendimento online"
              className="aspect-[4/5] w-full rounded-[2.5rem] border border-border/60 object-cover shadow-[0_30px_60px_-30px_oklch(0.32_0.025_50/0.35)]"
              loading="lazy"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Terapia online
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-cocoa md:text-5xl">
              Cuidado emocional{" "}
              <em className="italic text-primary">
                onde você estiver
              </em>.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
              A terapia online oferece a mesma profundidade e qualidade do
              atendimento presencial — com o conforto de acontecer no seu
              espaço, no seu tempo. Uma alternativa segura, sigilosa e baseada
              em evidências para quem busca continuidade no cuidado, mesmo com
              uma rotina cheia ou morando longe.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-foreground/80">
              {[
                "Sessões por vídeo em ambiente protegido",
                "Flexibilidade de horários para sua rotina",
                "Atendimento para todo o Brasil e exterior",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <WhatsAppButton
                label="Agendar sessão online"
                size="lg"
              />

              <Link
                to="/terapia-online"
                className="text-sm tracking-wide text-primary underline-offset-4 hover:underline"
              >
                Saber mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Instagram
            </p>

            <h2 className="mt-5 font-serif text-4xl text-cocoa md:text-5xl">
              Conteúdos sobre saúde mental e vida leve
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/75">
              Reflexões, orientações e conteúdos pensados para aproximar você
              do autocuidado de forma leve, acessível e baseada em ciência.
            </p>
          </div>

          <div
            className="elfsight-app-d52d4f12-4429-4495-8119-506c6e99dab4"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      {/* E-BOOK */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.55_0.05_55)_0%,transparent_60%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:items-center lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-primary-foreground/70">
              Gratuito · Para você
            </p>

            <h2 className="mt-5 font-serif text-4xl text-primary-foreground md:text-5xl">
              Um e-book para começar a olhar para si com mais clareza.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-primary-foreground/85 md:text-base">
              Reuni aqui reflexões e práticas pensadas para apoiar o seu
              primeiro movimento de cuidado. Um material leve, baseado em
              ciência, feito com carinho.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.ebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm tracking-wide text-cocoa transition-transform hover:-translate-y-[1px]"
              >
                Acessar e-book gratuito →
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary-foreground/10 blur-2xl" />

            <img
              src={ebookCover}
              alt="Capa do e-book Reconectar — Jessica Schneider"
              className="aspect-[3/4] w-full rotate-[-3deg] rounded-2xl object-cover shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <h2 className="font-serif text-4xl text-cocoa md:text-5xl">
          Vamos conversar?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-foreground/75">
          O primeiro passo costuma ser o mais delicado — e também o mais
          transformador. Estou aqui para te acolher.
        </p>

        <div className="mt-10">
          <WhatsAppButton label="Falar no WhatsApp" size="lg" />
        </div>
      </section>
    </Layout>
  );
}