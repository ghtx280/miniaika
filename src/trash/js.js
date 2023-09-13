import categories from "$lib/js/categ_arr.json";

function getCateg(main, sub) {
  return [categories[main][0] || null, categories[main][1][sub] || null];
}

console.log(getCateg(1, -1));
