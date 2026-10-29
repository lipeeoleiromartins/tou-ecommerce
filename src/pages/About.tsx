import { Layout } from "../components/Layout";
import { Sparkles, Palette, Truck, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <Layout showEchelonFooter>
      {/* Cabeçalho da Página Sobre */}
      <section className="container-wide pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-foreground font-semibold">
            A Essência da Marca
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight text-foreground">
            Sobre
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-normal leading-relaxed">
            Nossa prioridade é entregar exclusividade através de arte estilizada, dando a identidade e toque final que sua ambientação merece.
          </p>
        </div>
      </section>

      {/* História & Manifesto */}
      <section className="border-t border-border/60 py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl space-y-8 text-foreground leading-relaxed text-lg font-normal">
            <p>
              A TOŪ nasceu da paixão pelo design de interiores aliado à curadoria de peças que contam histórias. Cada projeto e produto é pensado para transformar espaços frios em refúgios cheios de personalidade.
            </p>
            <p>
              Trabalhamos com coleções limitadas e produções personalizadas, garantindo que o seu ambiente reflita perfeitamente o seu estilo e essência.
            </p>
          </div>
        </div>
      </section>

      {/* O Que Fazemos (Categorias em Destaque) */}
      <section className="py-20 border-t border-border/60 bg-background">
        <div className="container-wide space-y-12">
          <div className="max-w-xl space-y-2">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Categorias</p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">O Que Fazemos</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {["Quadros", "Almofadas", "Cabideiros", "Porta-maternidade", "Arte personalizada"].map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border text-center flex flex-col items-center justify-center gap-2 hover:border-primary transition-all shadow-sm"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações & Condições (Cartões de Destaque) */}
      <section className="py-20 border-t border-border/60 bg-background">
        <div className="container-wide space-y-12">
          <div className="max-w-xl space-y-2">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Condições</p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">Informações & Condições</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-card rounded-2xl space-y-4 shadow-sm hover:border-primary transition-all">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Arte exclusiva</h3>
              <p className="text-sm text-foreground/90 leading-relaxed font-normal">
                Cada peça pode receber arte personalizada. Temas específicos possuem taxa de criação/ajuste.
              </p>
            </div>

            <div className="p-8 border border-border bg-card rounded-2xl space-y-4 shadow-sm hover:border-primary transition-all">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Envio</h3>
              <p className="text-sm text-foreground/90 leading-relaxed font-normal">
                Entrega / frete a combinar diretamente com o vendedor para garantir segurança no transporte.
              </p>
            </div>

            <div className="p-8 border border-border bg-card rounded-2xl space-y-4 shadow-sm hover:border-primary transition-all">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Pagamento</h3>
              <p className="text-sm text-foreground/90 leading-relaxed font-normal">
                Facilidade e segurança com opções via PIX, boleto bancário ou cartão de crédito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}