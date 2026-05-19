import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title:
          "Blog — Reflexões sobre psicologia e bem-estar | Jessica Schneider",
      },
      {
        name: "description",
        content:
          "Conteúdos sobre saúde mental, terapia online, autocuidado e bem-estar emocional com Jessica Schneider.",
      },
      {
        property: "og:title",
        content: "Blog — Jessica Schneider",
      },
      {
        property: "og:description",
        content:
          "Conteúdos sobre saúde mental, terapia online, autocuidado e bem-estar emocional.",
      },
      {
        property: "og:url",
        content: "/blog",
      },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
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
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Diário · Psicologia
          </p>

          <h1 className="mt-5 font-serif text-5xl leading-tight text-cocoa md:text-6xl">
            Reflexões sobre saúde mental e{" "}
            <em className="italic text-primary">vida leve</em>.
          </h1>

          <p className="mt-6 text-foreground/75">
            Conteúdos escritos com cuidado, baseados em ciência, para te apoiar
            no caminho do autoconhecimento.
          </p>
        </div>

        {/* Instagram Feed */}
        <div className="mt-20">
          <div
            className="elfsight-app-a9277baa-6676-4517-931e-6c5c52ddfce0"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
    </Layout>
  );
}