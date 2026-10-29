import { cn } from "../lib/utils";

interface ImagePlaceholderProps {
  src?: string | null;
  alt: string;
  className?: string;
  imgClassName?: string;
}

/** Mostra a imagem quando existe; senão, um espaço reservado da marca. */
export function ImagePlaceholder({
  src,
  alt,
  className,
  imgClassName,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover opacity-100 brightness-100",
          imgClassName,
          className,
        )}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${alt} — imagem em breve`}
      className={cn(
        "w-full h-full flex flex-col items-center justify-center gap-2 bg-secondary border border-dashed border-foreground/30 text-foreground/60",
        className,
      )}
    >
      <span className="text-xs uppercase tracking-widest font-mono">TOŪ</span>
      <span className="text-xs opacity-75">{alt}</span>
    </div>
  );
}
