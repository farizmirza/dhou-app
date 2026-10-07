export type ArabicVariety = "fusha" | "egyptian" | "levantine";

export type NavTab = "learn" | "video" | "ai" | "review";

export interface UserStats {
  streak: number;
  energy: number;
  selectedVariety: ArabicVariety;
}
