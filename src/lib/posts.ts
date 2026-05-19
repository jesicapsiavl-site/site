export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "ansiedade-como-cuidar",
    title: "Ansiedade: como reconhecer e cuidar com gentileza",
    excerpt:
      "Quando o pensamento acelera e o corpo entra em alerta, há caminhos baseados em evidências para retomar o equilíbrio.",
    date: "2025-04-12",
    readTime: "5 min de leitura",
    category: "Ansiedade",
    cover:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80&auto=format&fit=crop",
    content: [
      "A ansiedade é uma resposta natural do organismo diante de situações percebidas como ameaçadoras. Em doses equilibradas, ela nos protege e mobiliza. O desafio aparece quando esse alerta passa a soar com frequência, intensidade ou duração que comprometem o cotidiano.",
      "Na Terapia Cognitivo-Comportamental (TCC), trabalhamos juntos para identificar os padrões de pensamento que alimentam o ciclo ansioso e construímos, passo a passo, recursos práticos para regular emoções, organizar a rotina e reencontrar segurança interna.",
      "Cuidar da ansiedade não é silenciar o que sentimos — é aprender a escutar com mais clareza e responder com mais escolha.",
    ],
  },
  {
    slug: "terapia-online-funciona",
    title: "Terapia online realmente funciona?",
    excerpt:
      "Estudos mostram resultados equivalentes aos do atendimento presencial. Entenda o que torna o processo eficaz à distância.",
    date: "2025-03-02",
    readTime: "4 min de leitura",
    category: "Terapia Online",
    cover:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=1200&q=80&auto=format&fit=crop",
    content: [
      "A modalidade online ampliou o acesso à psicoterapia com qualidade. Pesquisas recentes apontam eficácia comparável ao formato presencial para diversos quadros, incluindo ansiedade e depressão.",
      "O que sustenta um bom processo é a aliança terapêutica, a constância e um espaço seguro de escuta — elementos que se mantêm intactos no atendimento por vídeo.",
      "Se você mora em outra cidade, tem uma rotina intensa ou simplesmente prefere o conforto de casa, a terapia online pode ser o caminho certo para iniciar o seu cuidado.",
    ],
  },
  {
    slug: "autoestima-construcao-diaria",
    title: "Autoestima é uma construção diária",
    excerpt:
      "Falar bonito consigo, escolher ambientes que acolhem e reconhecer pequenas conquistas: como cultivar uma base mais firme.",
    date: "2025-02-08",
    readTime: "6 min de leitura",
    category: "Autoconhecimento",
    cover:
      "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=1200&q=80&auto=format&fit=crop",
    content: [
      "Autoestima não nasce pronta, tampouco se conquista de uma só vez. Ela é fruto de uma relação cotidiana: como você fala consigo, quais ambientes frequenta, que limites estabelece.",
      "A psicoterapia ajuda a investigar as crenças que sustentam a autoimagem — muitas delas formadas ainda na infância — e a construir novas referências, mais coerentes com quem você é hoje.",
      "Pequenos gestos diários, repetidos com consistência, formam o solo onde a confiança floresce.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
