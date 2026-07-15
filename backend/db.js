const Database = require("better-sqlite3");
const path = require("path");

const DB_PATH =
  process.env.BLOG_DB_PATH || path.join(__dirname, "..", "data", "blog.db");

// data/ dizininin var olduğundan emin ol
const fs = require("fs");
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(DB_PATH);

// n8n ile eşzamanlı erişim için WAL modu
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
db.pragma("encoding = 'UTF-8'");

// Tabloyu oluştur (yoksa)
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    slug         TEXT NOT NULL UNIQUE,
    title        TEXT NOT NULL,
    description  TEXT NOT NULL,
    content      TEXT NOT NULL,
    tags         TEXT DEFAULT '',
    published    INTEGER DEFAULT 0,
    published_at TEXT DEFAULT NULL,
    created_at   TEXT DEFAULT (datetime('now')),
    updated_at   TEXT DEFAULT (datetime('now'))
  )
`);

module.exports = db;
