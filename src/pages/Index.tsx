import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Palette, Layers, Sparkles } from "lucide-react";
import { Layout } from "../components/Layout";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Button } from "../components/ui/button";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const gridImages = [
    "/trio-botanico.jpg",
    "/almofadas-ambientacao.jpg",
    "/quadros-abstratos.jpg",
    "/cabideiro-detalhes.jpg",
    "/manta-almofadas.jpg",
    "/porta-maternidade.jpg",
    "/panos-cabideiro.jpg",
    "/trio-grandes-formatos.jpg",
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = (e.clientX - rect.left - centerX) / centerX;
    const y = (e.clientY - rect.top - centerY) / centerY;

    setMousePosition({ x, y });
  };

  return (
    <Layout showEchelonFooter headerRevealMode>
      {/* 1. Hero Section Interativa com Estética Refinada */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden py-16 px-4 bg-background"
      >
        {/* Grelha de fundo com opacidade 100% para máxima nitidez */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 opacity-100 pointer-events-none">
          {gridImages.map((img: string, index: number) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-48 md:h-64 transition-transform duration-300 ease-out shadow-sm border border-foreground/10"
              style={{
                transform: `translate(${mousePosition.x * (index % 2 === 0 ? 12 : -12)}px, ${mousePosition.y * (index % 3 === 0 ? 12 : -12)}px)`,
              }}
            >
              <ImagePlaceholder
                src={img}
                alt={`TOŪ Arte ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Bloco central com moldura sólida e contraste perfeito */}
        <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto p-8 md:p-12 rounded-3xl bg-card border border-border shadow-xl shadow-black/[0.04]">
          <span className="text-xs uppercase tracking-[0.25em] text-foreground font-bold animate-fade-in-up">
            Decoração & Arte Contemporânea
          </span>

          <h1
            className="text-display md:text-7xl lg:text-8xl tracking-tight font-normal text-foreground animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            TOŪ
          </h1>

          <p
            className="text-base md:text-xl text-foreground font-normal max-w-xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Exclusividade e identidade para transformar a sua ambientação.
          </p>

          <div
            className="pt-4 flex flex-wrap gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 shadow-md hover:scale-105 transition-all font-semibold"
            >
              <Link to="/work">
                Explorar Catálogo <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 hover:bg-muted transition-all font-semibold border-foreground/20 text-foreground"
            >
              <Link to="/contact">Encomenda Sob Medida</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 2. Secção: Processo Criativo & Arte Sob Medida */}
      <section className="border-t border-border py-24 bg-background">
        <div className="container-wide space-y-12">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
              Como Trabalhamos
            </p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">
              Arte Feita para o Seu Espaço
            </h2>
            <p className="text-foreground/90 font-normal leading-relaxed">
              Criamos peças únicas que conversam com a arquitetura e a
              iluminação do seu ambiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-card rounded-2xl space-y-4 shadow-sm hover:border-primary transition-all">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                1. Concept & Paleta
              </h3>
              <p className="text-sm text-foreground/90 font-normal leading-relaxed">
                Analisamos as cores, texturas e proporções do seu ambiente para
                definir o conceito ideal da obra.
              </p>
            </div>

            <div className="p-8 border border-border bg-card rounded-2xl space-y-4 shadow-sm hover:border-primary transition-all">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                2. Produção Artesanal
              </h3>
              <p className="text-sm text-foreground/90 font-normal leading-relaxed">
                Cada tela, almofada ou peça decorativa é confecionada com
                materiais de alta durabilidade e acabamento rigoroso.
              </p>
            </div>

            <div className="p-8 border border-border bg-card rounded-2xl space-y-4 shadow-sm hover:border-primary transition-all">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                3. Entrega & Instalação
              </h3>
              <p className="text-sm text-foreground/90 font-normal leading-relaxed">
                Embalagem de proteção profissional e envio para todo o país,
                prontos para valorizar a sua casa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
