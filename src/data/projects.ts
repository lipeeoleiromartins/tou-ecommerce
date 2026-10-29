/**
 * Catálogo TOŪ.
 * Atualizado com caminhos dinâmicos baseados no BASE_URL do Vite.
 */

export interface PriceOption {
  label: string;
  price: number;
  startingAt?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  size: string;
  prices: PriceOption[];
  description: string | null;
  coverImage: string | null;
  images: string[];
}

export const DISCLAIMER_TEXT =
  "* Imagens meramente ilustrativas. As estampas, artes, cores de tecidos e acabamentos podem ser totalmente personalizados conforme o gosto e projeto do cliente.";

// Função auxiliar para resolver o caminho correto considerando a subrota do Vite (Tipagem segura sem 'any')
const getAssetPath = (path: string | null) => {
  if (!path) return null;
  const meta = import.meta as unknown as { env?: { BASE_URL?: string } };
  const base = meta.env?.BASE_URL || "/";
  // Remove barra duplicada se houver
  return `${base.endsWith("/") ? base.slice(0, -1) : base}${path}`;
};

export function formatPrice(p: PriceOption): string {
  const formatted = p.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return p.startingAt ? `A partir de ${formatted}` : formatted;
}

export function lowestPrice(project: Project): PriceOption {
  return project.prices.reduce(
    (min, curr) => (curr.price < min.price ? curr : min),
    project.prices[0],
  );
}

export const projects: Project[] = [
  {
    id: "trio-20x20",
    title: "Trio 20x20 cm",
    category: "Decoração",
    tags: ["Trio", "Arte Contemporânea", "Moldura"],
    size: "20x20 cm cada",
    prices: [{ label: "Conjunto com 3", price: 169.9 }],
    description:
      "Composição de três quadros em tamanho compacto. As artes e molduras são 100% personalizáveis de acordo com a preferência do cliente (imagens meramente ilustrativas).",
    coverImage: getAssetPath("/trio-botanico.jpg"),
    images: [getAssetPath("/trio-botanico.jpg")].filter(Boolean) as string[],
  },
  {
    id: "trio-30x30",
    title: "Trio 30x30 cm",
    category: "Decoração",
    tags: ["Trio", "Arte Contemporânea", "Moldura"],
    size: "30x30 cm cada",
    prices: [{ label: "Conjunto com 3", price: 198.0 }],
    description:
      "Trio de proporções equilibradas para ambientes sofisticados. Artes e acabamentos customizáveis conforme o gosto do cliente (imagens ilustrativas).",
    coverImage: getAssetPath("/trio-botanico.jpg"),
    images: [getAssetPath("/trio-botanico.jpg")].filter(Boolean) as string[],
  },
  {
    id: "trio-40x50",
    title: "Trio 40x50 cm",
    category: "Decoração",
    tags: ["Trio", "Arte Contemporânea", "Grandes Formatos"],
    size: "40x50 cm cada",
    prices: [{ label: "Conjunto com 3", price: 389.0 }],
    description:
      "Peças de destaque em grande formato para paredes principais. Escolha as artes e paleta de cores do seu projeto (imagens ilustrativas).",
    coverImage: getAssetPath("/trio-grandes-formatos.jpg"),
    images: [getAssetPath("/trio-grandes-formatos.jpg")].filter(
      Boolean,
    ) as string[],
  },
  {
    id: "trio-essencial",
    title: "Trio Essencial",
    category: "Decoração",
    tags: ["Trio", "Essencial", "Minimalista"],
    size: "Variados",
    prices: [{ label: "Conjunto Essencial", price: 125.9 }],
    description:
      "A seleção essencial da TOŪ, unindo versatilidade e estética refinada. Composição e artes feitas sob medida para você (imagens ilustrativas).",
    coverImage: getAssetPath("/quadros-abstratos.jpg"),
    images: [getAssetPath("/quadros-abstratos.jpg")].filter(
      Boolean,
    ) as string[],
  },
  {
    id: "almofadas-lisas",
    title: "Almofadas Lisas 45x45",
    category: "Têxtil",
    tags: ["Almofadas", "Têxtil", "Conforto"],
    size: "45x45 cm",
    prices: [{ label: "Unidade", price: 39.9 }],
    description:
      "Almofadas em tecido nobre e toque suave. As cores dos tecidos, estampas e composições são ajustadas ao gosto do cliente (imagens ilustrativas).",
    coverImage: getAssetPath("/almofadas-ambientacao.jpg"),
    images: [
      getAssetPath("/almofadas-ambientacao.jpg"),
      getAssetPath("/manta-almofadas.jpg"),
    ].filter(Boolean) as string[],
  },
  {
    id: "cabideiro",
    title: "Cabideiro Exclusivo",
    category: "Utilidades",
    tags: ["Cabideiro", "Organização", "Design"],
    size: "Sob medida",
    prices: [
      { label: "Modelo Simples", price: 15.0 },
      { label: "Com suporte guarda-chuva", price: 22.9 },
    ],
    description:
      "Funcionalidade e design alinhados em um cabideiro robusto e elegante em madeira. Medidas e detalhes adaptáveis ao seu espaço (imagens ilustrativas).",
    coverImage: getAssetPath("/cabideiro-detalhes.jpg"),
    images: [
      getAssetPath("/cabideiro-detalhes.jpg"),
      getAssetPath("/panos-cabideiro.jpg"),
    ].filter(Boolean) as string[],
  },
  {
    id: "kit-3-cabideiros",
    title: "Kit 3 Cabideiros",
    category: "Utilidades",
    tags: ["Kit", "Cabideiro", "Organização"],
    size: "Conjunto",
    prices: [
      { label: "Kit Simples", price: 42.9 },
      { label: "Kit com suporte guarda-chuva", price: 65.9 },
    ],
    description:
      "Kit com três unidades para harmonizar ambientes privativos ou de entrada. Opções de personalização de acabamento em madeira (imagens ilustrativas).",
    coverImage: getAssetPath("/cabideiro-detalhes.jpg"),
    images: [
      getAssetPath("/cabideiro-detalhes.jpg"),
      getAssetPath("/panos-cabideiro.jpg"),
    ].filter(Boolean) as string[],
  },
  {
    id: "porta-maternidade",
    title: "Porta-Maternidade Personalizado",
    category: "Personalizados",
    tags: ["Maternidade", "Personalizado", "Exclusivo"],
    size: "Personalizado",
    prices: [{ label: "A partir de", price: 49.9, startingAt: true }],
    description:
      "Peças afetivas e exclusivas criadas sob encomenda para celebrar momentos únicos. Escolha temas, nomes e elementos decorativos (imagens ilustrativas).",
    coverImage: getAssetPath("/porta-maternidade.jpg"),
    images: [getAssetPath("/porta-maternidade.jpg")].filter(
      Boolean,
    ) as string[],
  },
];
