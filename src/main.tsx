import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SITE_URL } from "./config/site";
import "./index.css";

// Domínio configurável (VITE_SITE_URL): define a URL canónica quando informado.
if (SITE_URL) {
  const link = document.createElement("link");
  link.rel = "canonical";
  link.href = SITE_URL + window.location.pathname;
  document.head.appendChild(link);
  const og = document.createElement("meta");
  og.setAttribute("property", "og:url");
  og.content = SITE_URL;
  document.head.appendChild(og);
}

createRoot(document.getElementById("root")!).render(<App />);