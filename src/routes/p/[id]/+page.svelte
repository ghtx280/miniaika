<script>
  import {    page   } from "$app/stores";
  import {    goto   } from '$app/navigation';
  import { onDestroy } from 'svelte';
  
  import { clickOutside } from '$lib/js/clickOutside.js';
  import {    store     } from '$lib/js/store.js';

  import Img  from '$lib/ui/img.svelte';
	import Icon from '$lib/ui/Icon.svelte';
  
  export let data

  const id = $page.params.id

  let menu
  let post = data.post[0]

  let title    = post.title
  let userIcon = post.thumbnailUrl
  let postImg  = post.url


 
</script>

{#if menu}


  <div class="fullscreen bg-black/30 z-9999" use:clickOutside={()=> menu = false}>
    <div class="bg-$dark p-20 r-10 abs top-12% right-15 fs-12 flex-col gap-15 last:c-#FF5454">
      <button on:click={() => console.log('/edit') }>Редагувати</button>
      <button on:click={() => console.log("del") }>Архівувати</button>
      <button on:click={() => console.log("del") }>Скопіювати</button>
      <button on:click={() => console.log("del") }>Видалити</button>
    </div>
  </div>

{/if}

<div class="bg-$primary r-20 h-full over-hidden flex-col">

  <div class="h-full flex-col rel over-y-scroll">

    <div class="flex-space p-15">
      <a href="/u/{title.split(" ")[0]}" class="gap-10 ai-c">
        <Img src="{ userIcon }" class="round sq-30 ava_img" />
        <p class="fs-12 fw-500">{title.split(" ")[0]}</p>
      </a>
      <button on:click={() => menu = true }> <Icon name="menu"/> </button>
    </div>

    <Img src="{ postImg }" def="/no_post.svg" class="w-full h-35vh post_img" alt />

    <div class="px-15 mt-15 gap-15 flex-col grow">

      <div class="jc-sb ai-s">
        <p class="fs-18 fw-600">
          {title.repeat(1)}
        </p>

        <div class=">:flex >:ai-c >:gap-5 flex fs-12 gap-10 op-50 ml-10">
          <div> <Icon name="eye"    stroke=2 size=18 /> <p> 56 </p> </div>
          <div> <Icon name="like"   stroke=2 size=18 /> <p> 5  </p> </div>
          <div> <Icon name="change" stroke=2 size=18 /> <p> 6  </p> </div>
        </div>
      </div>

      <div class="flex-space fs-12">
        <p><span class="op-50">Категорія:</span> Електроніка, телефони</p>
        <p>3 дні тому</p>
      </div>

      <div class="grow">
        <p class="fs-12 op-50">
          { title.repeat(10) }
        </p>
      </div>

    </div>

  </div>

  <div class="gap-15 p-15">
    <a href="#/" class="bg-#EA8B56 r-10 h-40 w-full c-#232931 fs-14 bold flex-center">
      Обміняти
    </a>

    <button class="bg-#EA8B56 r-10 h-40 w-40 shrink-0 flex-center">
      <Icon name="like" color="#232931"/>
    </button>
  </div>

</div>
