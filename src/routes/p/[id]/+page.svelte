<script>
  import { store } from '$lib/js/store.js';
  import { page } from "$app/stores";
  import { onDestroy } from 'svelte';
  import Img  from '$lib/ui/img.svelte';
	import Icon from '$lib/ui/Icon.svelte';

  const id = $page.params.id

  export let data

  let { title, thumbnailUrl, url } = data.post[0]
  console.log();


</script>

<!-- <div class="sq-full flex"> -->
  <div class="bg-$primary r-20 h-full over-hidden flex-col">

    <div class="h-full flex-col rel over-y-scroll">

      <div class="flex-space p-15">
        <div class="gap-10 ai-c">
          <Img src="{ thumbnailUrl }" class="round sq-30 ava_img" />
          <p class="fs-12 fw-500">{title.split(" ")[0]}</p>
        </div>
        <button> <Icon name="menu"/> </button>
      </div>
  
      <Img src="{ url }" def="/no_post.svg" class="w-full h-35vh post_img" alt />
  
      <div class="px-15 mt-15 gap-15 flex-col grow">
  
        <p class="fs-18 fw-600">
          { title }
        </p>
  
        <div class="grow">
          <p class="fs-12 opacity-50">
            { title.repeat(50) }
          </p>
        </div>
  
      </div>

    </div>

    <div class="gap-15 p-15">
      <a href="/p/{id}" class="bg-#EA8B56 r-10 h-40 w-full c-#232931 fs-14 bold flex-center">
        Обмінятися
      </a>

      <button class="bg-#EA8B56 r-10 h-40 w-40 shrink-0 flex-center">
        <Icon name="like" color="#232931"/>
      </button>
    </div>

  </div>
<!-- </div> -->