import { Layout } from "../components/Layout";
import { ProjectListItem } from "../components/ProjectListItem";
import { projects, formatPrice, lowestPrice } from "../data/projects";

export default function Work() {
  return (
    <Layout showEchelonFooter>
      {/* Cabeçalho Compacto & Elegante */}
      <section className="container-wide pt-12 pb-8 md:pt-16 md:pb-12 border-b border-border/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-foreground font-semibold">
              Catálogo Exclusivo
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-normal tracking-tight text-foreground">
              Projetos
            </h1>
          </div>
          <p className="max-w-md text-sm md:text-base text-foreground/90 font-normal leading-relaxed">
            Peças com arte estilizada e exclusiva. Temas específicos têm taxa de criação/ajuste.
          </p>
        </div>
      </section>

      {/* Lista de Projetos */}
      <section className="pb-24">
        <div className="space-y-2">
          {projects.map((project, index) => {
            const low = lowestPrice(project);
            const price =
              project.prices.length > 1 && !low.startingAt ? `A partir de ${formatPrice(low)}` : formatPrice(low);
            return (
              <div key={project.id} className="transition-all duration-300 hover:bg-card/50">
                <ProjectListItem
                  id={project.id}
                  title={project.title}
                  tags={project.tags}
                  price={price}
                  image={project.coverImage}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}