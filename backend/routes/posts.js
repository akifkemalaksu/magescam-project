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
