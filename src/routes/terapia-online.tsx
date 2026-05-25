import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/terapia-online")({
  head: () => ({
    meta: [
      { title: "Terapia Online com Psicóloga — Atendimento por Vídeo | Jessica Schneider" },
      {
        name: "description",
        content:
          "Terapia online com psicóloga CRP 05/86249. Atendimento por vídeo seguro, sigiloso e baseado em evidências para ansiedade, depressão, autoestima e mais. Agende pelo WhatsApp.",
      },
      { name: "keywords", content: "terapia online, psicóloga online, psicologia online, terapia por vídeo, ansiedade, depressão, TCC online" },
      { property: "og:title", content: "Terapia Online com Psicóloga — Jessica Schneider" },
      { property: "og:description", content: "Cuidado psicológico onde você estiver. Atendimento online por vídeo, com acolhimento e ciência." },
      { property: "og:url", content: "/terapia-online" },
    ],
    links: [{ rel: "canonical", href: "/terapia-online" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "Jessica Schneider — Psicóloga",
        medicalSpecialty: "Psychiatric",
        description: "Terapia online com psicóloga CRP 05/86249.",
        areaServed: "BR",
      }),
    }],
  }),
  component: TerapiaOnlinePage,
});

function TerapiaOnlinePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.93_0.035_60)_0%,transparent_60%)]" />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <p className="fade-in text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Terapia Online · Brasil e exterior
          </p>
          <h1 className="fade-up delay-1 mt-6 font-serif text-[2.6rem] leading-[1.05] text-cocoa md:text-[3.8rem]">
            Cuidado psicológico onde você <em className="italic text-primary">estiver</em>.
          </h1>
          <p className="fade-up delay-2 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            Atendimento online por vídeo, seguro e sigiloso, com a mesma
            qualidade do consultório. Para quem busca acolhimento, leveza e
            resultados sustentados pela ciência da Terapia Cognitivo-Comportamental.
          </p>
          <div className="fade-up delay-3 mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton label="Iniciar atendimento" size="lg" />
            <a
              href="#beneficios"
              className="inline-flex items-center text-sm tracking-wide text-primary underline-offset-4 hover:underline"
            >
              Como tfunciona →
            </a>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="border-y border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Por que online
            </p>
            <h2 className="mt-4 font-serif text-4xl text-cocoa md:text-5xl">
              Os mesmos resultados, mais flexibilidade
            </h2>
            <p className="mt-6 text-foreground/75">
              Pesquisas demonstram que a terapia online tem eficácia comparável
              ao formato presencial para a maioria dos quadros emocionais.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {[
              { t: "Conforto e privacidade", b: "Você escolhe um espaço seguro e familiar. Sem deslocamento, sem trânsito, com mais tempo para si." },
              { t: "Acesso onde estiver", b: "Continuidade no cuidado mesmo em viagens, mudanças ou rotinas exigentes. Basta uma boa conexão." },
              { t: "Sigilo profissional", b: "Atendimento por plataforma segura, com todo o respaldo ético do Conselho Federal de Psicologia." },
              { t: "Eficácia comprovada", b: "Estudos clínicos apontam resultados equivalentes ao presencial em ansiedade, depressão e outros quadros." },
              { t: "Flexibilidade de horários", b: "Horários planejados conforme sua rotina, com possibilidade de sessões em momentos do dia diferentes." },
              { t: "Mesma qualidade técnica", b: "Atendimento conduzido com a abordagem TCC, estruturado, ativo e colaborativo." },
            ].map((c) => (
              <article key={c.t} className="bg-card p-8">
                <h3 className="font-serif text-2xl text-cocoa">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Como funciona
          </p>
          <h2 className="mt-4 font-serif text-4xl text-cocoa md:text-5xl">
            Quatro passos simples
          </h2>
        </div>

        <ol className="mt-16 space-y-10">
          {[
            { n: "01", t: "Contato pelo WhatsApp", b: "Você envia uma mensagem e conversamos brevemente para entender sua demanda e agendar a primeira sessão." },
            { n: "02", t: "Primeira sessão de acolhimento", b: "Um encontro para te conhecer, escutar sua história e desenhar juntos o caminho terapêutico." },
            { n: "03", t: "Sessões regulares por vídeo", b: "Semanais ou quinzenais, em plataforma segura, com duração aproximada de 50 minutos cada." },
            { n: "04", t: "Evolução acompanhada", b: "Revisamos juntos avanços e ajustes ao longo do processo, sempre com base em evidências e nas suas necessidades." },
          ].map((s) => (
            <li key={s.n} className="grid gap-4 border-b border-border/60 pb-8 md:grid-cols-[auto_1fr] md:gap-10">
              <span className="font-serif text-5xl text-primary/40">{s.n}</span>
              <div>
                <h3 className="font-serif text-2xl text-cocoa">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-foreground/75">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <WhatsAppButton label="Quero começar agora" size="lg" />
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="border-y border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                Para quem
              </p>
              <h2 className="mt-4 font-serif text-4xl text-cocoa md:text-5xl">
                A terapia online pode te apoiar
              </h2>
            </div>
            <ul className="space-y-4 text-base text-foreground/80">
              {[
                "Ansiedade, preocupação excessiva e crises",
                "Quadros de tristeza persistente e desânimo",
                "Estresse, esgotamento e dificuldades de rotina",
                "Baixa autoestima e autocrítica intensa",
                "Relações disfuncionais e dificuldades afetivas",
                "Momentos de transição: carreira, maternidade, luto",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
        <h2 className="font-serif text-3xl text-cocoa md:text-4xl">
          Sobre a terapia online com psicóloga
        </h2>
        <div className="prose prose-neutral mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            A terapia online é uma modalidade de psicoterapia realizada por
            videochamada, regulamentada pelo Conselho Federal de Psicologia.
            Ela oferece o mesmo rigor técnico do atendimento presencial,
            mantendo o sigilo, a ética e a aliança terapêutica que sustentam
            todo bom processo psicológico.
          </p>
          <p>
            Como psicóloga clínica, conduzo o atendimento dentro da abordagem
            da Terapia Cognitivo-Comportamental (TCC), reconhecida
            internacionalmente por sua eficácia no tratamento de ansiedade,
            depressão, transtornos do humor, dificuldades de autoestima e
            outras questões emocionais.
          </p>
          <p>
            A TCC trabalha com a relação entre pensamentos, emoções e
            comportamentos, ajudando você a identificar padrões que
            sustentam o sofrimento e a construir, com método e acolhimento,
            novas formas de viver. É uma abordagem ativa, colaborativa e
            focada em resultados sustentáveis.
          </p>
          <p>
            Se você procura uma <strong className="text-cocoa">psicóloga online</strong> de
            confiança, com formação sólida e olhar humano, conte comigo. Os
            atendimentos são particulares e podem ser agendados diretamente
            pelo WhatsApp.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center lg:px-10">
        <div className="rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-14">
          <h2 className="font-serif text-3xl text-primary-foreground md:text-4xl">
            Pronto(a) para o primeiro passo?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Envie uma mensagem agora e vamos conversar sobre como posso te apoiar.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5532991464640&text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.18em] text-cocoa transition-transform hover:-translate-y-[1px]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
