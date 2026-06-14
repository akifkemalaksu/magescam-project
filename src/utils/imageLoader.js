// Load all carousel images using Vite's globEager (Vite 2.x compatible)
const modules = import.meta.globEager("../assets/images/carousel/*.{webp,svg}");

/**
 * Parse filename like "dusakabin-kose-1.webp" into { category: "dusakabin-kose", index: 1 }
 */
function parseFilename(path) {
  const basename = path.split("/").pop().replace(/\.\w+$/, "");
  const match = basename.match(/^(.+)-(\d+)$/);
  if (!match) return null;
  return { category: match[1], index: parseInt(match[2], 10) };
}

// Organize images by category
const imageMap = {};

for (const [path, mod] of Object.entries(modules)) {
  const parsed = parseFilename(path);
  if (!parsed) continue;
  const { category, index } = parsed;
  if (!imageMap[category]) imageMap[category] = [];
  // In Vite 2, globEager returns raw module objects; default export is the URL
  imageMap[category].push({ src: mod.default || mod, index });
}

// Sort each category by index
for (const cat of Object.keys(imageMap)) {
  imageMap[cat].sort((a, b) => a.index - b.index);
}

/**
 * Get image array for a given ana-model (e.g. "dusakabin", "cam", "ayna")
 * @param {string} anaModel - e.g. "dusakabin", "cam", "ayna", "balkon", "dograma"
 * @returns {Object<string, Array<{src: string, index: number}>>}
 */
export function getCategoryImages(anaModel) {
  const result = {};
  for (const [cat, images] of Object.entries(imageMap)) {
    if (cat.startsWith(anaModel + "-") || cat === anaModel) {
      const altName = cat.replace(anaModel + "-", "");
      result[altName] = images;
    }
  }
  return result;
}

export { imageMap };
