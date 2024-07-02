// src/utils/generate-slug.ts
function generateSlug(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}

export {
  generateSlug
};
