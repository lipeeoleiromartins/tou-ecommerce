/** Configurações públicas do site TOŪ. */

/** Domínio final (ex.: https://toudecora.com.br). Defina VITE_SITE_URL no .env / Vercel. */
export const SITE_URL: string = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");

export const WHATSAPP_DISPLAY = "(11) 98507-0276";
export const WHATSAPP_NUMBER = "5511985070276";
export const INSTAGRAM_HANDLE = "toudecora";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}