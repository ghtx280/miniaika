<script>
  import { page      } from "$app/stores";
  import { goto      } from '$app/navigation';
  import { onDestroy } from 'svelte';
  
  import { dropMenu     } from '$lib/js/dropMenu.js';
  import { clickOutside } from '$lib/js/clickOutside.js';
  import { store        } from '$lib/js/store.js';
  
	import Card from '$lib/comps/card.svelte';
  import Img  from '$lib/ui/img.svelte';
	import Icon from '$lib/ui/Icon.svelte';
  
  export let data

  const user_name = $page.params.name

  // let menu
  // let post = data.post?.[0] || {}

  const menuFields = {
    "Скопіювати": () => 0,
    "Поділитися": () => {},
    "Поскаржитися": () => {},
  }
  

  
</script>

<!-- {#if menu}

  <div class="fullscreen bg-black/30 z-9999" use:clickOutside={()=> menu = false}>
    <div class="bg-$dark p-20 r-10 abs top-12% right-15 fs-12 flex-col gap-15 last:c-#FF5454">
      <button on:click={() => console.log('/edit') }>Редагувати</button>
      <button on:click={() => console.log("del")   }>Архівувати</button>
      <button on:click={() => console.log("del")   }>Скопіювати</button>
      <button on:click={() => console.log("del")   }>Видалити</button>
    </div>
  </div>

{/if} -->

<!-- <h1>hello</h1> -->

<div class="h-full r-20 over-y-auto flex-col w-full">
  
  <div class="p-20">
    <div flex="15 ai-c">
      <img class="r-99" src="/sashka.png" alt="sashka">
      <div flex="5 col">
        <p text="bold">Сашка Какашка</p>
        <p text="12" class="op-50">м. Київ</p>
      </div> 
    </div>

    <div flex="evenly" class="my-20">
      <div flex="col center">
        <p text="bold">10</p>
        <p text="12" class="op-50">Пропозицій</p>
      </div>
      <div flex="col center">
        <p text="bold">6</p>
        <p text="12" class="op-50">Успішних</p>
      </div>
      <div flex="col center">
        <p text="bold">4.5</p>
        <p text="12" class="op-50">Рейтинг</p>
      </div>
    </div>

    <div flex="15">

      <button class="h-40 w-full bg-$brand r-10 flex-center" text="12 bold $dark">
        Написати
      </button>

      <button class="sq-40 bg-$brand r-10 flex-center shrink-0" use:dropMenu={menuFields}>
        <Icon name="menu" color="var(--dark)" stroke=2.5 />
      </button>

    </div>


  </div>

  <div class="bg-$primary r-20 p-10 flex-col grow">
    
    {#if true}
      <p text="14 bold center" class="my-5">
        Пропозиції користувача
      </p>

      <Card href="/p/123"/>
      <Card href="/p/123"/>
      <Card href="/p/123"/>
      <Card href="/p/123"/>
      <Card href="/p/123"/>
      <Card href="/p/123"/>
      <Card href="/p/123"/>
      <Card href="/p/123"/>
      <Card href="/p/123"/>
    {/if}
  </div>
</div>

<!-- <div class="bg-$primary r-20 h-full over-hidden flex-col">

  <div class="h-full flex-col rel over-y-scroll">

    <div class="flex-space p-15">
      <a href="/u/{user_name}" class="gap-10 ai-c">
        <Img src="{ post.userIcon }" class="round sq-30 ava_img" />
        <p class="fs-12 fw-500">{ post.title?.split(" ")[0] }</p>
      </a>
      <button on:click={() => menu = true }> <Icon name="menu"/> </button>
    </div>

    <Img src="{ post.postImg }" def="/no_post.svg" class="w-full h-35vh post_img" alt />

    <div class="px-15 mt-15 gap-15 flex-col grow">

      <div class="jc-sb ai-s">
        <p class="fs-18 fw-600">
          { post.title }
        </p>

        <div class=">:flex >:ai-c >:gap-5 flex fs-12 gap-10 op-50 ml-10">
          <div> <Icon name="eye"    stroke=2 size=18 /> <p> 56 </p> </div>
          <div> <Icon name="like"   stroke=2 size=18 /> <p> 5  </p> </div>
          <div> <Icon name="change" stroke=2 size=18 /> <p> 6  </p> </div>
        </div>
      </div>

      <div class="flex-space fs-12">
        <p><span class="op-50">Категорія:</span> Електроніка, телефони</p>
        <p title="Вт 06.09.2023 10:56">3 дні тому</p>
      </div>

      <div class="grow">
        <p class="fs-12 op-50">
          { post.title?.repeat(10) }
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

</div> -->
