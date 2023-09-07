<script>
	import fetch from '$lib/js/fetch.js';
	import { store } from '$lib/js/store.js';
	import Card from '$lib/comps/card.svelte';
	// import Icon from './../comps/Icon.svelte';
  import { initSlider } from "$lib/js/slider"
  import { onMount } from 'svelte';


  async function get() {

    if (!$store.posts) {
      $store.posts = await fetch.json(
        "https://jsonplaceholder.typicode.com/photos?albumId=2&_limit=50"
      )
      // console.log($store.posts)
    }    

    
  }
  get()

 

  // export let data

  // console.log(data.posts );

  // let count = 3

  // let numberArray = Array.from({length: count}, (_, i) => i + 1)

  function setupSlider(node) {
    initSlider(node, {
      len: $store.len,
      onchange(len) {  $store.len = len }
    })
  }

  let ok = false

  onMount(()=>{
    ok = true
    // console.log("mounted")
    // return () => console.log("vse");
  })

</script>


  <!-- {#if ok && $store.posts} -->
    <div class="slider sq-full flex-center over-hidden" use:setupSlider>
      {#each $store.posts || [] as item (item.id)}
        <Card {...item} />
      {/each}
      <div class="r-20 p-15+5 rel gap-15 flex-col flex-center">
        <p>Ви подивилися всі пропозиції</p>
      </div>
    </div>

    <!-- <div class="over-y-scroll">
      {#each $store.posts || [1] as item (item.id)}
        <div>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <a href="/p/{item.id}">see more</a>
        </div>
      {/each}
    </div> -->
  <!-- {:else}
    <div class="sq-full flex-center bg-##393E46">
      <p class="fs-24 bold">Зачекайте...</p>
    </div>
  {/if} -->



