import type { APIRoute } from "astro";
import { getCollection, getEntries, getEntry } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const posts = await getCollection("blog");

  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  if (slug) {
    const post = await getEntry("blog", slug);

    if (post) {
      return new Response(JSON.stringify(post), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ msg: `Post ${slug} not found` }), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 404,
      });
    }
  }

  return new Response(JSON.stringify(posts), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
};
