import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { getPost, posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Artigo não encontrado" }] };
    return {
      meta: [
        { title: `${post.title} — Blog · Jessica Schneider` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.cover },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          image: post.cover,
          datePublished: post.date,
          author: { "@type": "Person", name: "Jessica Schneider" },
        }),
      }],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl text-cocoa">Artigo não encontrado</h1>
        <Link to="/blog" className="mt-6 inline-block text-primary underline">
          Voltar ao blog
        </Link>
      </div>
    </Layout>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <Layout>
      <article>
        <header className="mx-auto max-w-3xl px-6 pt-20 text-center lg:px-10">
          <Link to="/blog" className="text-xs uppercase tracking-[0.28em] text-muted-foreground hover:text-cocoa">
            ← Blog
          </Link>
          <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-primary">
            {post.category}
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-cocoa md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })} · {post.readTime}
          </p>
        </header>

        <div className="mx-auto mt-14 max-w-5xl px-6 lg:px-10">
          <img
            src={post.cover}
            alt={post.title}
            className="aspect-[16/9] w-full rounded-2xl object-cover"
          />
        </div>

        <div className="mx-auto max-w-2xl px-6 py-16 lg:px-10">
          <div className="space-y-6 font-serif text-lg leading-[1.8] text-foreground/85 md:text-xl">
            {post.content.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
            <p className="font-serif text-2xl text-cocoa">
              Posso te apoiar nesse caminho?
            </p>
            <p className="mt-3 text-sm text-foreground/70">
              Atendimento online e presencial em Angra dos Reis.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppButton label="Agendar atendimento" />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
            <h2 className="font-serif text-3xl text-cocoa">Leia também</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-2xl">
                    <img src={p.cover} alt={p.title} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-cocoa group-hover:text-primary">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
}
