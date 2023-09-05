<script>
	import Card from '$lib/comps/card.svelte';
	// import Icon from './../comps/Icon.svelte';
  import { initSlider } from "$lib/js/slider"
  import { onMount } from 'svelte';

  export let data

  // console.log(data.posts );

  // let count = 3

  // let numberArray = Array.from({length: count}, (_, i) => i + 1)

  let ok = false

  onMount(()=>{
    ok = true
  })

</script>


  {#if ok}
    <div class="slider sq-full flex-center over-hidden" use:initSlider>
      {#each data.posts || [1] as item}
        <Card {...item} />
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



