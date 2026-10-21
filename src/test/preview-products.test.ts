import { describe, expect, it } from "vitest";
import { filterPreviewProducts, previewProducts } from "@/data/preview-products";

describe("preview collection", () => {
  it("includes only the top from the green design", () => {
    const green = previewProducts.find(product => product.id === "green-wave-crewneck");
    expect(green?.pieces).toEqual(["top"]);
    expect(green?.category).toBe("tops");
  });
  it("filters by garment category", () => {
    expect(filterPreviewProducts("outerwear").map(product => product.id)).toEqual(["utility-wave-jacket", "ombre-wave-knit", "navy-wave-jacket", "burgundy-wave-jacket"]);
  });
  it("searches names and colours without case sensitivity", () => {
    expect(filterPreviewProducts("all", " SAGE ").map(product => product.id)).toEqual(["green-wave-crewneck"]);
    expect(filterPreviewProducts("all", "nonexistent")).toEqual([]);
  });
  it("adds two jackets and two jeans, with close-ups belonging to the jackets", () => {
    expect(previewProducts).toHaveLength(8);
    expect(previewProducts.find(product => product.id === "navy-wave-jacket")?.gallery).toHaveLength(1);
    expect(previewProducts.find(product => product.id === "burgundy-wave-jacket")?.gallery).toHaveLength(3);
    expect(filterPreviewProducts("bottoms").map(product => product.id)).toEqual(["charcoal-contour-jeans", "charcoal-wave-jeans"]);
    expect(filterPreviewProducts("bottoms").every(product => product.pieces.length === 1 && product.pieces[0] === "pants")).toBe(true);
  });
});