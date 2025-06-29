
export function normalizeText(text) {
  if (!text) return "";
  // Remove acentos
  let normalized = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // Remove vírgulas
  normalized = normalized.replace(/,/g, "");
  // Deixa em minúsculo
  normalized = normalized.replace(" ", "%");

  normalized = normalized.toLowerCase();
  return normalized;
}