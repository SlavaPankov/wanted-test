import regeneratorRuntime from "regenerator-runtime";

export async function getBlogData() {
  const response = await fetch('../blog_posts.json');
  const data = await response.json();

  return data;
}
