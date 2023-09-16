<script>
	import fetch          from '$lib/js/fetch.js';
	import Slide           from '$lib/comps/slide.svelte';
	import { store      } from '$lib/js/store.js';
  import { initSlider } from "$lib/js/slider"
  import { onMount    } from 'svelte';

  export let data

  $store.posts = data.posts || []


  // async function get() {
  //   if (!$store.posts) {
  //     $store.posts = await fetch.json(
  //       "https://jsonplaceholder.typicode.com/photos?albumId=2&_limit=50"
  //     )
  //   }    
  // }
  // get()

  let ok = false

  function setupSlider(node) {
    initSlider(node, {
      len: $store.len,
      onchange(len) { $store.len = len }
    })
  }

  onMount(()=>{
    ok = true
  })
  

</script>


  {#if ok && $store.posts}

    <div class="slider sq-full flex-center over-hidden" use:setupSlider>
      {#each $store.posts || [] as item (item.id)}
        <Slide {...item} />
      {/each}

      <div class="r-20 p-15+5 rel gap-15 flex-col flex-center">
        <p>Ви подивилися всі пропозиції</p>
      </div>
    </div>

  {:else}
    <div class="sq-full flex-center bg-##393E46">
      <p class="fs-24 bold">Зачекайте...</p>
    </div>
  {/if}



