# TOÜ — site

Vitrine da TOÜ. React + Vite + Tailwind.

## Rodar localmente

```sh
npm i
npm run dev
```

Testes de preços: `npx vitest run`

## Publicar na Vercel (via GitHub)

1. No Lovable: Configurações do projeto → Git → conectar GitHub (cria um repositório privado sincronizado).
2. Na Vercel: Add New → Project → importe o repositório.
   - Framework: **Vite** (detectado automaticamente)
   - Build command: `npm run build`
   - Output directory: `dist`
3. Variáveis de ambiente (Settings → Environment Variables):
   - `VITE_SITE_URL` = domínio final, ex.: `https://toudecora.com.br` (opcional até o domínio existir)
4. Deploy. Cada alteração enviada ao GitHub publica uma nova versão automaticamente.
5. Domínio: Settings → Domains → adicione o domínio e configure o DNS conforme a Vercel indicar. Depois faça um novo deploy para aplicar `VITE_SITE_URL`.

`vercel.json` já redireciona todas as rotas para `index.html`, então links diretos (ex.: `/work/cabideiro`) funcionam.
