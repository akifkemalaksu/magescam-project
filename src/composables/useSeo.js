import { useHead } from "@unhead/vue";

// Kanonik alan index.html ile tutarlı: non-www magescam.com
export const SITE = {
  url: "https://magescam.com",
  name: "Mages Cam",
  ogImage: "https://magescam.com/og-image.png",
};

/**
 * Sayfa başına SEO meta etiketlerini (title, description, canonical, OG, Twitter)
 * tek yerden yönetir. index.html'deki statik değerleri rota bazında override eder.
 *
 * @param {Object} opts
 * @param {string} opts.title       Sekme başlığı
 * @param {string} opts.description Meta açıklama
 * @param {string} opts.path        Kanonik yol, ör. "/hakkimizda" (ana sayfa için "/")
 * @param {boolean} [opts.noindex]  true ise robots noindex
 */
export function usePageSeo({ title, description, path, noindex = false }) {
  const canonical = path === "/" ? SITE.url : `${SITE.url}${path}`;

  useHead({
    title,
    link: [{ rel: "canonical", href: canonical }],
    meta: [
      { name: "description", content: description },
      { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
      // Open Graph (index.html'deki statik değerleri override eder)
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: SITE.ogImage },
      // Twitter
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SITE.ogImage },
    ],
  });
}
