<script>
  import { page } from "$app/stores";

  const id = $page.params.id

  // console.log(id);
</script>

<h1> product {id} </h1>

<button on:click={()=>history.back()}>dfdgd</button>