<script>
	import Icon  from '$lib/ui/Icon.svelte';
  import categs from '$lib/js/categ.json';
  
  // console.log(categs);



  let post_title
  let post_desc
  let post_categ = []
  let post_images 
  let post_city

  let menu = {
    categ:  false,
    cities: false
  }

  let menu_level = {
    categ:  0,
    cities: 0
  }


  let categ = Object.keys(categs)
  // let categ_sub = []
  // let categ_level = 0

  function changeCategType(item) {
    post_categ = [item]
    categ = categs[item]
    menu_level.categ = 1

    // console.log( post_categ, categ, item );
  }

  function setPostCateg(item) {
    post_categ = [...post_categ, item]
    menu.categ = false
    categ = Object.keys(categs)
    menu_level.categ = 0

    // console.log( post_categ, categ );
  }

  function openCategMenu(params) {
    
  }

  function goBack() {
    if (menu_level.categ == 0) {
      menu.categ = false
    }
    else if (menu_level.categ == 1) {
      post_categ = []
      // menu_level.categ = 0
    }
  }

  function createPost(params) {
    console.table({
      title: post_title,
      description: post_desc,
      category: post_categ,
      images: post_images,
    });
  }
</script>



{#if menu.categ}
  <div class="fullscreen fixed bg-$primary p-30 over-y-auto">
    <div>
      <button on:click={goBack}>
        <Icon name="chevronLeft"/>
      </button>

      

      <div flex="15 col" class="mt-20">

        {#each categ as item (item)}
          <button class="p-20 r-10 bg-$dark" flex="space" on:click={()=>{
           
            !menu_level.categ ? changeCategType(item) : setPostCateg(item)
          }}>
            <span>{item}</span>
            <Icon name="chevronRight" stroke="1" />
          </button>
        {/each}

        <!-- {#if post_categ.length == 0}
          {#each categ_main as item (item)}
            <button class="p-20 r-10 bg-$dark" flex="space" on:click={()=>changeCategType(item)}>
              <span>{item}</span>
              <Icon name="chevronRight" stroke="1" />
            </button>
          {/each}
        {:else}
          {#each categ_sub as item (item)}
            <button class="p-20 r-10 bg-$dark" flex="space" on:click={()=>setPostCateg(item)}>
              <span>{item}</span>
              <Icon name="chevronRight" stroke="1" />
            </button>
          {/each}
        {/if} -->
      </div>

    </div>
  </div>
{/if}

<!-- {#if menu.cities}
  <div class="fullscreen fixed bg-$primary p-30 over-y-auto">
    <div>
      <button on:click={goBack}>
        <Icon name="chevronLeft"/>
      </button>

      

      <div flex="15 col" class="mt-20">
        {#if categ_level == 0}
          {#each categ_main as item (item)}
            <button class="p-20 r-10 bg-$dark" flex="space" on:click={()=>changeCategType(item)}>
              <span>{item}</span>
              <Icon name="chevronRight" stroke="1" />
            </button>
          {/each}
        {:else}
          {#each categ_sub as item (item)}
            <button class="p-20 r-10 bg-$dark" flex="space" on:click={()=>setPostCateg(item)}>
              <span>{item}</span>
              <Icon name="chevronRight" stroke="1" />
            </button>
          {/each}
        {/if}
      </div>

    </div>
  </div>
{/if} -->



<div class="h-full r-20 bg-$primary flex-col p-20 over-y-auto" >
  <div class="grow over-y-auto" flex="15 col">

    <h5 class="p-20" text="center">Створити обмін</h5>

    <input type="text" placeholder="Назва" bind:value={post_title}>
    <textarea class="resize-y h-100" placeholder="Опис" bind:value={post_desc} />

    <button class="inp" flex="space" on:click={() => menu.categ = true}>
      <span>{ post_categ?.join(" / ") || "Виберіть карегорію" }</span>
      <Icon name="chevronRight" stroke="1" />
    </button>

    <!-- <button class="inp" flex="space" on:click={() => menu.cities = true}>
      <span>{ post_categ?.join(" / ") || "Виберіть карегорію" }</span>
      <Icon name="chevronRight" stroke="1" />
    </button> -->
    
  </div>

  <div class="">
    <button class="btn" on:click={createPost}>Далі</button>
  </div>

</div>