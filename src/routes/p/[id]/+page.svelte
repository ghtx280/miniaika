<script>
  import { page } from "$app/stores";

  const id = $page.params.id

  // console.log(id);
</script>

<h4 class="ta-center mt-50"> product {id} </h4>

<button class="mt-50 ta-center w-full" on:click={()=>history.back()}>go back</button>