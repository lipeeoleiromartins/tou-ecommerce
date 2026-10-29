import { describe, it, expect } from "vitest";
import { projects, formatPrice, lowestPrice } from "./projects";

const byId = (id: string) => projects.find((p) => p.id === id)!;
const prices = (id: string) => byId(id).prices.map(formatPrice);

describe("catálogo TOŪ - valores base", () => {
  it("Trio 20x20 cm custa R$ 169,90", () => expect(prices("trio-20x20")).toEqual(["R$ 169,90"]));
  it("Trio 30x30 cm custa R$ 198,00", () => expect(prices("trio-30x30")).toEqual(["R$ 198,00"]));
  it("Trio 40x50 cm custa R$ 389,00", () => expect(prices("trio-40x50")).toEqual(["R$ 389,00"]));
  it("Trio Essencial custa R$ 125,90", () => expect(prices("trio-essencial")).toEqual(["R$ 125,90"]));
  it("Almofadas Lisas 45x45 custam R$ 39,90", () => expect(prices("almofadas-lisas")).toEqual(["R$ 39,90"]));
  it("Cabideiro: simples R$ 15,00, com suporte guarda-chuva R$ 22,90", () =>
    expect(prices("cabideiro")).toEqual(["R$ 15,00", "R$ 22,90"]));
  it("Kit 3 Cabideiros: simples R$ 42,90, com porta guarda-chuva R$ 65,90", () =>
    expect(prices("kit-3-cabideiros")).toEqual(["R$ 42,90", "R$ 65,90"]));
  it("Porta-Maternidade a partir de R$ 49,90", () =>
    expect(prices("porta-maternidade")).toEqual(["A partir de R$ 49,90"]));
  it("listagem mostra o menor valor do cabideiro", () =>
    expect(lowestPrice(byId("cabideiro")).price).toBe(15));
});