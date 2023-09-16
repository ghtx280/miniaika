import fetch     from "$lib/js/fetch.js";
import { error } from "@sveltejs/kit";
import { store } from "$lib/js/store";



/** @type {import('./$types').PageServerLoad} */




export async function load({ params: { id } }) {

  let post = (await fetch.json(
    "https://jsonplaceholder.typicode.com/photos?id=" + id
  )).value

  if (post) {
    return { post }
  }
  throw error(500, "err getting posts");
}
