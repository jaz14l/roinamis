import { describe, expect, it } from "vitest";
import { filterPreviewProducts, previewProducts } from "@/data/preview-products";

describe("preview collection", () => {
  it("includes only the top from the green design", () => {
    const green = previewProducts.find(product => product.id === "green-wave-crewneck");
    expect(green?.pieces).toEqual(["top"]);
    expect(green?.category).toBe("tops");
  });
  it("filters by garment category", () => {
    expect(filterPreviewProducts("outerwear").map(product => product.id)).toEqual(["utility-wave-jacket", "ombre-wave-knit"]);
  });
  it("searches names and colours without case sensitivity", () => {
    expect(filterPreviewProducts("all", " SAGE ").map(product => product.id)).toEqual(["green-wave-crewneck"]);
    expect(filterPreviewProducts("all", "nonexistent")).toEqual([]);
  });
});