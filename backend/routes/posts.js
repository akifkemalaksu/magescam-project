const express = require("express");
const router = express.Router();
const db = require("../db");

// GET /api/blog/posts — yayındaki tüm post'lar (içerik hariç)
router.get("/posts", (req, res) => {
  const posts = db
    .prepare(
      `SELECT id, slug, title, description, tags, published_at
       FROM posts
       WHERE published = 1
       ORDER BY published_at DESC`
    )
    .all();
  res.json(posts);
});

// GET /api/blog/posts/:slug — tek post (içerik dahil)
router.get("/posts/:slug", (req, res) => {
  const post = db
    .prepare(
      `SELECT id, slug, title, description, content, tags, published_at, created_at, updated_at
       FROM posts
       WHERE slug = ? AND published = 1`
    )
    .get(req.params.slug);

  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

// POST /api/blog/posts — n8n'den yeni post ekleme
router.post("/posts", (req, res) => {
  const { slug, title, description, content, tags, published, published_at } =
    req.body;

  if (!slug || !title || !content) {
    return res.status(400).json({ error: "slug, title, content zorunlu" });
  }

  try {
    const result = db
      .prepare(
        `INSERT OR REPLACE INTO posts (slug, title, description, content, tags, published, published_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      )
      .run(
        slug,
        title,
        description || "",
        content,
        tags || "",
        published !== undefined ? published : 1,
        published_at || new Date().toISOString().split("T")[0]
      );

    res.status(201).json({
      id: result.lastInsertRowid,
      slug,
      message: "Post kaydedildi",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/blog/sitemap — dinamik sitemap için blog URL'leri
router.get("/sitemap", (req, res) => {
  const posts = db
    .prepare(
      `SELECT slug, published_at FROM posts WHERE published = 1 ORDER BY published_at DESC`
    )
    .all();
  res.json(posts);
});

module.exports = router;
