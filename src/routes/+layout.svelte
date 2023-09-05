<script>
  import Icon from "$lib/ui/Icon.svelte";

</script>

<div class="h-full flex-col p-15+10">
  <div class="flex-center p-10">
    <img src="logo.svg" alt="miniaika" class="h-20">
  </div>

  <div class="grow">
    <slot />
  </div>


  <div class="flex-space px-25">
    <a href="/"><Icon name="home" active /></a>
    <a href="/"><Icon name="search" /></a>
    <a href="/"><Icon name="add"    /></a>
    <a href="/"><Icon name="notify" /></a>
    <a href="/"><Icon name="user"   /></a>
  </div>

</div>