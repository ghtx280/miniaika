<script>
  export let src, def = "/no_user.svg", alt = ""

  // let loc_src = src

  if (typeof Image !== "undefined" && src) {
    const img = new Image();
  
    img.src = src 
    img.onerror = () => src = def
  }
  else {
    src = def
  }
</script>

<img src={src} {alt} class={$$props.class}>

