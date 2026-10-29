import { useState } from "react";
import { Link } from "react-router-dom";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface ProjectListItemProps {
  id: string;
  title: string;
  tags: string[];
  price: string;
  image: string | null;
  index: number;
}

export function ProjectListItem({ id, title, tags, price, image }: ProjectListItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const displayImage = image || "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop";

  return (
    <Link
      to={`/work/${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block border-b border-separator transition-colors duration-300 hover:bg-accent/50 py-6 md:py-8"
    >
      <div className="container-wide flex flex-col md:flex-row md:items-center justify-between gap-4 relative">
        {/* Título & Tags */}
        <div className="space-y-1 z-10">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Preço / Detalhes & Imagem Flutuante Maior à Direita */}
        <div className="flex items-center justify-between md:justify-end gap-8 z-10">
          {/* Imagem com tamanho aumentado (w-72 h-48) */}
          <div 
            className={`hidden lg:block w-72 h-48 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ease-out ${
              isHovered ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4 pointer-events-none"
            }`}
          >
            <ImagePlaceholder
              src={displayImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-sm md:text-base font-medium text-foreground/80">
            {price}
          </span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  );
}