<script>
	import { store } from '$lib/js/store.js';
	import { href } from '$lib/js/href';
	import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  // let email
  let hash

  function showPass(node) {
    const rect = node.getBoundingClientRect()
 
    let top = rect.top
    let right = innerWidth - rect.right
    let size = node.clientHeight
    let status


    let eye = document.createElement("button")

    eye.style = `
    position: absolute;
    top:    ${top}px;
    right:  ${right}px;
    width:  ${size}px;
    height: ${size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    opacity: 0.7;
    `

    eye.innerText = "🙈"
    
    eye.addEventListener("click", () => {
      node.type = status ? "password" : "text"
      eye.innerText = status ? "🙈" : "🐵" 

      status = !status
    })

    // let img = document.createElement("img")
    // img.src = ""

    // eye.append(img)
    node.after(eye)
  }


  onMount(() => {
    hash = location.hash.slice(1)
      addEventListener("hashchange", () => {
        hash = location.hash.slice(1)
      })
  })
  
</script>


<div class="h-full r-20 bg-$primary flex-col p-20">

  {#if hash === "confirm"}

    <div flex="15 col center grow" text="*:center">
      <h5 text="center">
        Підтвердження
      </h5>

      <p class="op-50 fs-14">
        Ми відправили лист з посиланням на вказану електронну пошту
      </p>

      <a class="btn mt-50" href="http://{$store.email}" target="_blank">
        Відкрити пошту
      </a>

      <a href="#/" class="op-50 fs-14 mt-20 underline">
        Змінити електронну пошту
      </a>
    </div>

  {:else if  hash === "error"}

    <div flex="15 col center grow">
      <p>ERROR</p>
    </div>

  {:else}

    <div flex="15 col center grow">
      <h5 class="mb-20">Реєстрація</h5>

      <input type="text"     placeholder="Логін"   bind:value={$store.login}>
      <input type="email"    placeholder="Е-Пошта" bind:value={$store.email}>
      <input type="password" placeholder="Пароль"  bind:value={$store.passw} use:showPass  autocomplete="new-password">

      <div class="mt-10 fs-14 op-50">
        <a href="/signin">У мене вже є аккаунт</a>
      </div>
    </div>

    <a href="#confirm" class="btn">Далі</a>
    <!-- <button class="btn">Далі</button> -->

  {/if}

</div>


