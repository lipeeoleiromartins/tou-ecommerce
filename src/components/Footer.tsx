interface FooterProps {
  variant?: "default" | "echelon";
}

export function Footer({ variant = "default" }: FooterProps) {
  return (
    <footer className="border-t border-border py-8 bg-background text-foreground/70 text-sm">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} TOŪ — Todos os direitos reservados.</p>
        <p className="text-xs tracking-widest uppercase font-mono">
          {variant === "echelon"
            ? "Edição Especial Echelon"
            : "Arte & Ambientação"}
        </p>
      </div>
    </footer>
  );
}
