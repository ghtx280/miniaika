import { error } from "@sveltejs/kit";
import fetch from "$lib/js/fetch.js";

// export const ssr = true

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let posts = await fetch.json(
    "https://jsonplaceholder.typicode.com/photos?albumId=2&_limit=5"
  )

  let posts0 = [
    {
      user: {
        avatar:
          "https://cdnn21.img.ria.ru/images/07e7/07/02/1881773736_0:148:3072:1876_1920x0_80_0_0_517475b07e32f2509d2f337116a87d2a.jpg",
        name: "чик-чирик",
      },
      post: {
        photo: [
          "https://www.gastronom.ru/binfiles/images/20220815/b8be9305.jpg",
          "https://www.gastronom.ru/binfiles/images/20221122/b9cf8b48.jpg",
        ],
        title: "Картошка 2кг",
        description: "отдам картоху даром, у меня пропадет",
      },
      favorite: true,
    },
    {
      user: {
        avatar:
          "https://cdnn21.img.ria.ru/images/07e7/07/02/1881773736_0:148:3072:1876_1920x0_80_0_0_517475b07e32f2509d2f337116a87d2a.jpg",
        name: "чик-чирик",
      },
      post: {
        photo: [
          "https://www.gastronom.ru/binfiles/images/20220815/b8be9305.jpg",
          "https://www.gastronom.ru/binfiles/images/20221122/b9cf8b48.jpg",
        ],
        title: "Картошка 1кг",
        description:
          "отдам картоху даром, отдам картоху даром, у меня пропадетотдам картоху даром, у меня пропадетотдам картоху даром, у меня пропадетотдам картоху даром, у меня пропадетотдам картоху даром, у меня пропадетотдам картоху даром, у меня пропадетотдам картоху даром, у меня пропадетотдам картоху даром, у меня пропадет меня пропадет отдам картоху даром, у меня пропадет отдам картоху даром, у меня пропадет отдам картоху даром, у меня пропадет",
      },
      favorite: true,
    },
    {
      user: {
        avatar:
          "https://cdnn21.img.ria.ru/images/07e7/07/02/1881773736_0:148:3072:1876_1920x0_80_0_0_517475b07e32f2509d2f337116a87d2a.jpg",
        name: "чик-чирик",
      },
      post: {
        photo: [
          "https://www.gastronom.ru/binfiles/images/20220815/b8be9305.jpg",
          "https://www.gastronom.ru/binfiles/images/20221122/b9cf8b48.jpg",
        ],
        title: "Картошка 4кг",
        description: "я лейсбі",
      },
      favorite: true,
    },
  ];

  if (posts) {
    return { posts: posts };
  }
  throw error(500, "err getting posts");
}
