export type Orb = "lavender" | "rose" | "mint" | "peach";

export interface PageSection {
  id: string;
  label: string;
  orb: Orb;
}

export const homeSections: PageSection[] = [
  { id: "work", label: "Work", orb: "lavender" },
  { id: "experience", label: "Experience", orb: "rose" },
  { id: "open-source", label: "Open source", orb: "mint" },
  { id: "contact", label: "Contact", orb: "peach" },
];

export const caseSections: PageSection[] = [
  { id: "overview", label: "Overview", orb: "lavender" },
  { id: "decisions", label: "Decisions", orb: "rose" },
  { id: "results", label: "Results", orb: "mint" },
  { id: "more", label: "More", orb: "peach" },
];
