const express = require("express");
const postsRouter = require("./routes/posts");

const app = express();
const PORT = process.env.PORT || 3001;

// CORS — sadece kendi domain
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://magescam.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use(express.json());

app.use("/api/blog", postsRouter);
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// GET /api/sitemap.xml — dinamik sitemap (statik route'lar + blog post'ları)
app.get("/api/sitemap.xml", (req, res) => {
  const db = require("./db");
  const posts = db
    .prepare(
      `SELECT slug, published_at FROM posts WHERE published = 1 ORDER BY published_at DESC`
    )
    .all();

  const today = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: "https://magescam.com/", priority: "1.0", changefreq: "daily" },
    { loc: "https://magescam.com/hakkimizda", priority: "0.8", changefreq: "monthly" },
    { loc: "https://magescam.com/iletisim", priority: "0.7", changefreq: "monthly" },
    { loc: "https://magescam.com/blog", priority: "0.8", changefreq: "weekly" },
    ...posts.map((p) => ({
      loc: `https://magescam.com/blog/${p.slug}`,
      priority: "0.6",
      changefreq: "monthly",
      lastmod: p.published_at || today,
    })),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod || today}</lastmod>\n    <priority>${u.priority}</priority>\n    <changefreq>${u.changefreq}</changefreq>\n  </url>`
    ),
    "</urlset>",
  ].join("\n");

  res.set("Content-Type", "application/xml");
  res.send(xml);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Blog API running on port ${PORT}`);
});
