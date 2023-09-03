<script>
	import Icon from './../comps/Icon.svelte';
  import { initSlider } from "$lib/slider"

  let count = 10

  let numberArray = Array.from({length: count}, (_, i) => i + 1)

</script>

<div class="h-full flex-col p-15+10">
  <div class="flex-center p-10">
    <img src="logo.svg" alt="miniaika" class="h-20">
  </div>


    <div class="slider grow flex-center over-hidden" use:initSlider>
      {#each numberArray as item}
        <div class="r-20 p-15+5 rel gap-15 flex-col">
          <div class="flex-space px-15">
            <div class="gap-10 ai-c">
              <img src="sashka.png" alt="sashka" class="round sq-30">
              <p class="fs-12 fw-500">Сашка Какашка</p>
            </div>
            <button>
              <Icon name="menu"/>
            </button>
          </div>

          <img src="img1.png" alt="">

          <div class="px-15 gap-15 flex-col">
            <p class="fs-18 fw-600">Телефон pixel 6</p>
            <p class="fs-12 opacity-50 clamp-3">
              Здравствуйте продам свой смартфон глобальный никаких костылей с прошивкой или разблокировкой можна сбрасывать экран в гидрогеле и чехол кто знает что такое Пиксель в представлении не нуждается...
            </p>
            <div flex="15">
              <button class="bg-#EA8B56 r-10 h-40 w-full c-#232931 fs-14 bold">
                Обміняти
              </button>
              <button class="bg-#EA8B56 r-10 h-40 w-40 shrink-0 flex-center">
                <Icon name="like" color="#232931"/>
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>


  <div class="flex-space px-25">
    <a href="#/"><Icon name="home" active /></a>
    <a href="#/"><Icon name="search" /></a>
    <a href="#/"><Icon name="add"    /></a>
    <a href="#/"><Icon name="notify" /></a>
    <a href="#/"><Icon name="user"   /></a>
  </div>
</div>

<style>



  .slider > div {
    position: absolute;
    width: 90%; 
    /* height: 60vh; */
    background-color: #393E46;
  }
  
</style>


