import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Layout } from "@/components/site/Layout";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SITE } from "@/lib/site";
import onlineImg from "@/assets/jessica-online.jpg";

export const Route = createFileRoute("/terapia-online")({
  head: () => ({
    meta: [
      {
        title:
          "Terapia Online com Psicóloga Especializada em Ansiedade e Autoestima | Jessica Schneider",
      },
      {
        name: "description",
        content:
          "Terapia online com psicóloga CRP 05/86249 para ansiedade, autoestima, relacionamentos e saúde emocional. Atendimento psicológico online por vídeo, sigiloso, humano e baseado em evidências. Agende pelo WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "terapia online, psicóloga online, atendimento psicológico online, psicoterapia online, ansiedade, autoestima, saúde emocional, relacionamentos, terapia por vídeo",
      },
      {
        property: "og:title",
        content:
          "Terapia Online com Psicóloga Especializada em Ansiedade e Autoestima",
      },
      {
        property: "og:description",
        content:
          "Atendimento psicológico online por vídeo, com sigilo, acolhimento e foco em ansiedade, autoestima e saúde emocional.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terapia-online" },
    ],
    links: [{ rel: "canonical", href: "/terapia-online" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Jessica Schneider — Psicóloga",
          medicalSpecialty: "Psychiatric",
          description: "Terapia online com psicóloga CRP 05/86249.",
          areaServed: "BR",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Como funciona a terapia online?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "O atendimento acontece por videochamada, em ambiente sigiloso, com sessões estruturadas e conduzidas com base na Terapia Cognitivo-Comportamental.",
              },
            },
            {
              "@type": "Question",
              name: "Terapia online funciona mesmo?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sim. A terapia online tem eficácia comparável ao atendimento presencial para muitos quadros emocionais, como ansiedade, autoestima e estresse.",
              },
            },
            {
              "@type": "Question",
              name: "O atendimento é sigiloso?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sim. O atendimento é sigiloso e segue os princípios éticos da psicologia, com uso de plataforma segura e orientações para um ambiente reservado.",
              },
            },
            {
              "@type": "Question",
              name: "Como agendar?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Basta clicar em falar no WhatsApp para combinar a conversa inicial e verificar horários disponíveis.",
              },
            },
            {
              "@type": "Question",
              name: "O atendimento é para todo o Brasil?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sim. A terapia online atende pessoas de todo o Brasil e também brasileiros no exterior, desde que haja uma conexão estável.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: TerapiaOnlinePage,
});

function TerapiaOnlinePage() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.93_0.035_60)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="fade-in text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Terapia Online · Atendimento psicológico online para todo o Brasil
            </p>
            <h1 className="fade-up delay-1 mt-6 font-serif text-[2.7rem] leading-[1.02] text-cocoa md:text-[4rem] lg:text-[4.4rem]">
              Terapia online com psicóloga especializada em ansiedade, autoestima e
              <em className="italic text-primary"> saúde emocional</em>.
            </h1>
            <p className="fade-up delay-2 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg lg:mx-0">
              Atendimento psicológico online por vídeo, com escuta humana, sigilo
              e direção clínica baseada em evidências. Um espaço elegante,
              acolhedor e objetivo para quem busca terapia online com foco em
              ansiedade, autoestima, relacionamentos e saúde emocional.
            </p>

            <div className="fade-up delay-3 mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <WhatsAppButton label="Agendar conversa inicial" size="lg" />
              <a
                href="#beneficios"
                className="inline-flex items-center rounded-full border border-border/70 px-6 py-3 text-sm tracking-wide text-primary transition-colors hover:bg-card"
              >
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pt-6">
            <div className="relative mx-auto max-w-[520px]">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent/35 blur-2xl" />
              <div className="overflow-hidden rounded-[2.75rem] border border-border/60 bg-card shadow-[0_30px_70px_-32px_oklch(0.32_0.025_50/0.42)]">
                <img
                  src={onlineImg}
                  alt="Jessica Schneider, psicóloga, em atendimento online"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="mx-6 -mt-8 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-[0_20px_40px_-24px_oklch(0.32_0.025_50/0.4)] backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Atendimento particular
                    </p>
                    <p className="mt-1 font-serif text-lg text-cocoa">
                      Online, sigiloso e com foco em resultados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="beneficios" className="border-y border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Por que escolher terapia online
            </p>
            <h2 className="mt-4 font-serif text-4xl text-cocoa md:text-5xl">
              Uma forma prática de cuidar da sua saúde emocional
            </h2>
            <p className="mt-6 text-foreground/75">
              A psicoterapia online facilita o acesso ao cuidado, melhora a
              continuidade do processo e mantém a mesma seriedade clínica do
              atendimento presencial para a maioria dos quadros emocionais.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {[
              { t: "Conforto e privacidade", b: "Você escolhe um espaço seguro e familiar. Sem deslocamento, com mais tempo para si e para a sua rotina." },
              { t: "Acesso onde estiver", b: "Continuidade no cuidado mesmo em viagens, mudanças ou períodos mais intensos. Basta uma conexão estável." },
              { t: "Sigilo profissional", b: "Atendimento por plataforma segura, com respaldo ético e orientações para um ambiente reservado." },
              { t: "Boa experiência para o paciente", b: "Processo claro, objetivo e humano, pensado para quem busca terapia online com facilidade de acesso." },
              { t: "Flexibilidade de horários", b: "Sessões planejadas conforme sua rotina, facilitando o início e a manutenção do tratamento." },
              { t: "Abordagem com direção", b: "Atendimento conduzido com TCC, estrutura, acolhimento e foco em resultados sustentáveis." },
            ].map((c) => (
              <article key={c.t} className="bg-card p-8">
                <h3 className="font-serif text-2xl text-cocoa">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Como funciona
          </p>
          <h2 className="mt-4 font-serif text-4xl text-cocoa md:text-5xl">
            Quatro passos simples para começar
          </h2>
        </div>

        <ol className="mt-16 space-y-10">
          {[
            { n: "01", t: "Agendar conversa inicial", b: "Você envia uma mensagem e combinamos um primeiro contato para entender sua demanda e explicar o formato do atendimento." },
            { n: "02", t: "Primeira sessão de acolhimento", b: "Um encontro para te conhecer, escutar sua história e definir o melhor caminho terapêutico com segurança e clareza." },
            { n: "03", t: "Sessões regulares por vídeo", b: "Atendimento psicológico online semanal ou quinzenal, em plataforma segura, com duração aproximada de 50 minutos." },
            { n: "04", t: "Acompanhamento da evolução", b: "Revisamos avanços, ajustes e próximos passos ao longo do processo, sempre de forma colaborativa e personalizada." },
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
          <WhatsAppButton label="Agendar atendimento online" size="lg" />
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                Para quem a terapia online é indicada?
              </p>
              <h2 className="mt-4 font-serif text-4xl text-cocoa md:text-5xl">
                Quando a vida pede apoio, clareza e direção
              </h2>
              <p className="mt-6 text-foreground/75">
                A terapia online é uma boa escolha para quem quer iniciar ou
                manter o cuidado psicológico com flexibilidade, privacidade e
                um processo sério para fortalecer a saúde emocional.
              </p>
            </div>
            <ul className="grid gap-4 text-base text-foreground/80 md:grid-cols-2">
              {[
                "Ansiedade, preocupação excessiva e sensação de alerta constante",
                "Baixa autoestima, autocrítica intensa e insegurança para se posicionar",
                "Relacionamentos difíceis, padrões repetitivos e sofrimento afetivo",
                "Sobrecarga emocional, cansaço mental e dificuldade de desacelerar",
                "Necessidade de autoconhecimento e construção de mais equilíbrio",
                "Mudanças de vida, rotina intensa, trabalho, maternidade ou luto",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
        <h2 className="font-serif text-3xl text-cocoa md:text-4xl">
          Sobre a terapia online com psicóloga
        </h2>
        <div className="prose prose-neutral mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
          <p>
            A terapia online é uma modalidade de psicoterapia realizada por
            videochamada, regulamentada pelo Conselho Federal de Psicologia.
            Ela mantém o rigor técnico do atendimento presencial, com sigilo,
            ética e uma relação terapêutica consistente para apoiar a mudança.
          </p>
          <p>
            Como psicóloga clínica, conduzo o atendimento dentro da abordagem
            da Terapia Cognitivo-Comportamental (TCC), reconhecida
            internacionalmente por sua eficácia no tratamento de ansiedade,
            autoestima baixa, depressão, transtornos do humor e outras questões
            emocionais.
          </p>
          <p>
            A TCC trabalha com a relação entre pensamentos, emoções e
            comportamentos, ajudando você a identificar padrões que sustentam o
            sofrimento e a construir, com método e acolhimento, novas formas de
            viver. É uma abordagem ativa, colaborativa e focada em resultados
            sustentáveis.
          </p>
          <p>
            Se você procura uma <strong className="text-cocoa">psicóloga online</strong> de
            confiança, com formação sólida e olhar humano, conte comigo. Os
            atendimentos são particulares, feitos com foco em saúde emocional e
            podem ser agendados diretamente pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Atendimento sigiloso",
              body: "Processo protegido, ético e pensado para garantir privacidade desde o primeiro contato.",
            },
            {
              title: "Condução com clareza",
              body: "Uma experiência objetiva, acolhedora e premium, com foco em decisão e continuidade.",
            },
            {
              title: "Para todo o Brasil",
              body: `Terapia online para quem mora em qualquer região do país ou está fora do Brasil e deseja manter o cuidado.`,
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/60 bg-card p-8 shadow-[0_18px_40px_-28px_oklch(0.32_0.025_50/0.35)]">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Confiança</p>
              <h3 className="mt-3 font-serif text-2xl text-cocoa">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-14">
          <h2 className="font-serif text-3xl text-primary-foreground md:text-4xl">
            Pronto(a) para agendar sua conversa inicial?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Se faz sentido para você, este pode ser o primeiro passo para cuidar
            da sua saúde emocional com mais leveza, sigilo e direção.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton label="Falar no WhatsApp" size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-cocoa" />
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.18em] text-cocoa transition-transform hover:-translate-y-[1px]"
            >
              Agendar atendimento online
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-4xl text-cocoa md:text-5xl">
            Perguntas frequentes sobre terapia online
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
            Respostas rápidas para tirar dúvidas comuns antes de começar seu
            atendimento psicológico online.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-border/60 bg-card px-6 py-2 md:px-8">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Como funciona a terapia online?",
                a: "Você agenda a conversa inicial pelo WhatsApp, recebe as orientações necessárias e realiza as sessões por vídeo em um ambiente reservado. O processo é estruturado, acolhedor e adaptado à sua demanda.",
              },
              {
                q: "Terapia online funciona mesmo?",
                a: "Sim. Para muitos casos, a psicoterapia online apresenta resultados comparáveis ao atendimento presencial, especialmente quando há vínculo, constância e um plano terapêutico bem conduzido.",
              },
              {
                q: "O atendimento é sigiloso?",
                a: "Sim. O sigilo é parte central do trabalho psicológico. Além da ética profissional, as sessões acontecem em plataforma segura e com recomendações para preservar sua privacidade.",
              },
              {
                q: "Como agendar?",
                a: "Basta clicar em Agendar conversa inicial ou Falar no WhatsApp. A partir dali, alinhamos disponibilidade e iniciamos o atendimento online.",
              },
              {
                q: "O atendimento é para todo o Brasil?",
                a: "Sim. O atendimento psicológico online é oferecido para pessoas de todo o Brasil e também para brasileiros no exterior, desde que haja conexão estável.",
              },
            ].map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`}>
                <AccordionTrigger className="py-5 text-left font-serif text-xl text-cocoa hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-4 text-sm leading-relaxed text-foreground/75 md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <WhatsAppButton label="Agendar conversa inicial" size="lg" />
        </div>
      </section>
    </Layout>
  );
}
