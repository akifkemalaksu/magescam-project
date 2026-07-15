const API_BASE =
  import.meta.env.VITE_API_BASE || "https://magescam.com";

export async function fetchPosts() {
  const res = await fetch(`${API_BASE}/api/blog/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function fetchPost(slug) {
  const res = await fetch(`${API_BASE}/api/blog/posts/${slug}`);
  if (!res.ok) throw new Error("Post not found");
  return res.json();
}
