<script>
	import { cookie } from '$lib/js/cookie.js';
  import { page    } from '$app/stores';
  import { onMount } from 'svelte';

  import Icon from "$lib/ui/Icon.svelte";
  // import icon from '$lib/js/icon';




  let header_status = false
  let header_hide_paths  = ['/u']



  

  function checkPaths(path) {
    return !header_hide_paths.every(e => path.startsWith(e))
  }

  $: header_status = checkPaths($page.url.pathname)

  // onMount(()=>{
  //   addEventListener("nload", async ()=>{
  //     document.title = "nazad syka"
  //     // localStorage.fffdddd = "syka"
  //     await fetch("https://test.ghtx280.repl.co/?q=offline")
  //   })
  //   addEventListener("blur", async ()=>{
  //     document.title = "nazad syka"
  //     // localStorage.fffdddd = "syka"
  //     await fetch("https://test.ghtx280.repl.co/?q=offline")
  //   })
  //   addEventListener("focus", async ()=>{
  //     document.title = "maladets"
  //     // localStorage.fffdddd = ""
  //     await fetch("https://test.ghtx280.repl.co/?q=online")
  //   })
  // })

</script>

<div class="h-full flex-col">
  {#if header_status}
    <header class="flex-center py-20 shrink-0">
      <img src="/logo.svg" alt="miniaika" class="h-20">
    </header>
  {/if}
  

  <main class="grow over-y-auto">
    <slot /> 
  </main>

  <footer class="jc-se ai-c py-20 shrink-0">
    <a href="/"       ><Icon name="home" /></a>
    <a href="/search" ><Icon name="find" /></a>
    <a href="/add"    ><Icon name="add"  /></a>
    <a href="/login"  ><Icon name="bell" /></a>
    <a href="/u/123"  ><Icon name="user" /></a>

  </footer>

</div>