import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Layout } from "../components/Layout";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Button } from "../components/ui/button";
import { projects, formatPrice, PriceOption } from "../data/projects";
import { whatsappLink } from "../config/site";

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const orderMessage = `Olá! Tenho interesse no item "${project.title}" da TOŪ.`;

  return (
    <Layout noPadding headerRevealMode showEchelonFooter>
      {/* Hero / Capa do Projeto */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder src={project.coverImage} alt={project.title} className="border-0 w-full h-full object-cover filter brightness-95" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight text-foreground text-center px-4 animate-fade-in drop-shadow-sm">
            {project.title}
          </h1>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-10 container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/80 font-medium px-3 py-1.5 rounded-full bg-background/40 backdrop-blur-md border border-border/20">
              {project.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-background/40 backdrop-blur-md border border-foreground/20 text-foreground/80 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Informações & Especificações */}
      <section className="container-wide py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Caixa Lateral de Detalhes */}
          <div className="space-y-8 p-8 rounded-2xl bg-muted/20 border border-border/40 backdrop-blur-sm h-fit">
            <div className="border-b border-border/40 pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">Medidas</p>
              <p className="text-base font-medium">{project.size}</p>
            </div>
            
            <div className="border-b border-border/40 pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Valores</p>
              <ul className="space-y-2">
                {project.prices.map((option: PriceOption) => (
                  <li key={option.label} className="flex justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">{option.label}</span>
                    <span className="font-semibold text-foreground whitespace-nowrap">{formatPrice(option)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-b border-border/40 pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">Envio</p>
              <p className="text-sm text-muted-foreground">Entrega / frete a combinar com o vendedor</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">Pagamento</p>
              <p className="text-sm text-muted-foreground">PIX, boleto ou cartão de crédito</p>
            </div>
          </div>

          {/* Descrição & Botão de Ação */}
          <div className="md:col-span-2 space-y-8 flex flex-col justify-center">
            {project.description ? (
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light">{project.description}</p>
            ) : (
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground italic border-l-2 border-primary/40 pl-4 font-light">
                [Descrição em breve]
              </p>
            )}
            
            <p className="text-sm text-muted-foreground leading-relaxed bg-primary/5 p-4 rounded-xl border border-primary/10">
              💡 <span className="font-medium text-foreground">Nota:</span> Cada peça pode receber arte personalizada e exclusiva. Temas específicos possuem taxa de criação/ajuste.
            </p>

            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base shadow-lg hover:scale-105 transition-all">
                <a href={whatsappLink(orderMessage)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" /> Encomendar pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos Adicionais com Zoom Suave */}
      <section className="container-wide pb-28">
        <div className="space-y-12 md:space-y-16">
          {project.images.length > 0 ? (
            project.images.map((image: string, index: number) => (
              <div key={index} className="overflow-hidden rounded-2xl border border-border/40 shadow-sm group">
                <img 
                  src={image} 
                  alt={`${project.title} - ${index + 1}`} 
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
              </div>
            ))
          ) : (
            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <ImagePlaceholder alt={`Galeria ${project.title}`} />
            </div>
          )}
        </div>
      </section>

      {/* Botão de Voltar */}
      <section className="container-wide pb-24">
        <Link to="/work" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Voltar aos projetos</span>
        </Link>
      </section>
    </Layout>
  );
}