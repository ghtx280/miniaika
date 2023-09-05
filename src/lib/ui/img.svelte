<script>
  export let src, def = "no_user.svg", alt = ""
  
  const img = new Image();
  
  img.src = src 
  img.onload = () => def = src
</script>

<img src={def} {alt} class={$$props.class}>

