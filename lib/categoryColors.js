export const categoryColors = {
  "Communicatie":   { accent: "#8B5CF6", light: "rgba(139,92,246,0.09)", text: "#6D28D9" },
  "Huishouden":     { accent: "#F59E0B", light: "rgba(245,158,11,0.09)",  text: "#B45309" },
  "Productiviteit": { accent: "#10B981", light: "rgba(16,185,129,0.09)",  text: "#047857" },
  "Carrière":       { accent: "#06B6D4", light: "rgba(6,182,212,0.09)",   text: "#0E7490" },
  "Gezondheid":     { accent: "#EF4444", light: "rgba(239,68,68,0.09)",   text: "#B91C1C" },
  "Financiën":      { accent: "#EAB308", light: "rgba(234,179,8,0.09)",   text: "#854D0E" },
};

export function getCategoryColor(tag) {
  return categoryColors[tag] ?? { accent: "#2C5A85", light: "rgba(44,90,133,0.09)", text: "#1A3A57" };
}
