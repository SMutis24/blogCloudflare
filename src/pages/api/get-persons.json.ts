import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const person = {
    name: "Santiago",
    age: 23,
  };
  return new Response(JSON.stringify(person), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};
