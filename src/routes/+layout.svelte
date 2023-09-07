<script>
	import { store } from '$lib/js/store.js';
  import Icon from "$lib/ui/Icon.svelte";

</script>

<div class="h-full flex-col">
  {#if $store.header ?? true}
    <div class="flex-center h-10%">
      <img src="/logo.svg" alt="miniaika" class="h-20">
    </div>
  {/if}
  

  <div class="h-80%">
    <slot />
  </div>



  <div class="jc-se ai-c h-10%">
    <a href="/"><Icon name="home" active /></a>
    <a href="/"><Icon name="search" /></a>
    <a href="/"><Icon name="add"    /></a>
    <a href="/"><Icon name="notify" /></a>
    <a href="/"><Icon name="user"   /></a>
  </div>

</div>