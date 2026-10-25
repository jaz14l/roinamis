import { describe, expect, it } from "vitest";
import { filterPreviewProducts, previewProducts } from "@/data/preview-products";

describe("preview collection", () => {
  it("includes only the top from the green design", () => {
    const green = previewProducts.find(product => product.id === "green-wave-crewneck");
    expect(green?.pieces).toEqual(["top"]);
    expect(green?.category).toBe("tops");
  });
  it("filters by garment category", () => {
    expect(filterPreviewProducts("outerwear").map(product => product.id)).toEqual(["utility-wave-jacket", "ombre-wave-knit", "wave-jacket"]);
  });
  it("searches names and colours without case sensitivity", () => {
    expect(filterPreviewProducts("all", " SAGE ").map(product => product.id)).toEqual(["green-wave-crewneck"]);
    expect(filterPreviewProducts("all", "nonexistent")).toEqual([]);
  });
  it("groups navy and burgundy jackets as one product with colour-specific close-ups", () => {
    expect(previewProducts).toHaveLength(6);
    const jacket = previewProducts.find(product => product.id === "wave-jacket");
    expect(jacket?.variants?.map(variant => variant.color)).toEqual(["Navy", "Burgundy"]);
    expect(jacket?.variants?.[0].gallery).toHaveLength(1);
    expect(jacket?.variants?.[1].gallery).toHaveLength(3);
    expect(filterPreviewProducts("all", "burgundy").map(product => product.id)).toEqual(["wave-jacket"]);
  });
  it("removes contour jeans and keeps wave jeans", () => {
    expect(previewProducts.some(product => product.id === "charcoal-contour-jeans")).toBe(false);
    expect(filterPreviewProducts("bottoms").map(product => product.id)).toEqual(["charcoal-wave-jeans"]);
    expect(filterPreviewProducts("bottoms").every(product => product.pieces.length === 1 && product.pieces[0] === "pants")).toBe(true);
  });
  it("gives the utility jacket the leather design with three detail photos", () => {
    const utility = previewProducts.find(product => product.id === "utility-wave-jacket");
    expect(utility?.description).toContain("leather-look");
    expect(utility?.details).toContain("Leather-look washed olive finish");
    expect(utility?.gallery).toHaveLength(3);
    expect(utility?.gallery?.map(photo => photo.alt)).toEqual(expect.arrayContaining([
      expect.stringContaining("back"),
      expect.stringContaining("stand collar"),
    ]));
  });
});