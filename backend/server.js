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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Blog API running on port ${PORT}`);
});
