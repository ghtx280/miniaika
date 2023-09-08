<script>
	import Img  from '$lib/ui/img.svelte';
  import Icon from "$lib/ui/Icon.svelte";
  
  export let title, id, url, thumbnailUrl

  // user ||= {}
  // post ||= {}
</script>

<div class="r-20 p-15+5 rel gap-15 flex-col slide">
  <div class="flex-space px-15">
    <a href="/u/{title.split(" ")[0]}" class="gap-10 ai-c">
      <Img src="{thumbnailUrl}" alt="sashka" class="round sq-30 ava_img" />
      <p class="fs-12 fw-500">{title.split(" ")[0]}</p>
    </a>
    <button class="invisible"> <Icon name="menu"/> </button>
  </div>

  <a href="/p/{id}">
    <Img src="{url}" def="no_post.svg" class="w-full h-35vh r-15 post_img" alt />

    <div class="px-15 gap-15 flex-col grow mt-15">

      <p class="fs-18 fw-600 clamp-1">
        {title}
      </p>

      <div class="grow">
        <p class="fs-12 op-50 clamp-3">
          {title.repeat(5)}
        </p>
      </div>

      <!-- <div flex="15">
        <a href="/p/{id}" class="bg-#EA8B56 r-10 h-40 w-full c-#232931 fs-14 bold flex-center">
          Відкрити
        </a>

        <button class="bg-#EA8B56 r-10 h-40 w-40 shrink-0 flex-center">
          <Icon name="like" color="#232931"/>
        </button>
      </div> -->

    </div>
  </a>
</div>
