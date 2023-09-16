<script lang="ts">
	import icon from '../js/icon';

  
  export let name: keyof (typeof icon),
  size: any = 24,
  color: any = "inherit",
  stroke: any = 2
  
  const ic: any  = icon
  const nm: any = name

  const sn: any = {
    find:   "search",
    add:    "plusCircle",
    menu:   "moreHorizontal",
    like:   "heart",
    change: "refreshCw"
  }

</script>


{#if !name}
  {"<Icon />"} must contain name attribute
{:else}
  {@html 
    ic[sn[nm] || nm]?.(size, color, stroke)
    ||
    `icon '${nm}' not found`
  }
{/if}