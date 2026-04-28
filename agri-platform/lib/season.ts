export type Region = "IN" | "US";

export type ProductCode = "wheat" | "gram" | "green_peas" | "mustard";

export const seasonalCalendar: Record<Region, Record<ProductCode, number[]>> = {
  IN: {
    wheat: [3, 4, 5],
    gram: [2, 3, 4],
    green_peas: [11, 12, 1, 2],
    mustard: [12, 1, 2]
  },
  US: {
    wheat: [7, 8, 9],
    gram: [8, 9, 10],
    green_peas: [5, 6, 7],
    mustard: [9, 10, 11]
  }
};

export function isInSeason(productCode: ProductCode, month: number, region: Region) {
  return seasonalCalendar[region][productCode].includes(month);
}
