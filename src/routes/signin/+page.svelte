<script>
	import { store } from '$lib/js/store.js';
</script>

<div class="h-full r-20 bg-$primary flex-col p-20">

  <div flex="15 col center grow">

    <h5 class="mb-20">Вхід</h5>



    <input type="text"     placeholder="Пошта"  bind:value={$store.email}>
    <input type="password" placeholder="Пароль" bind:value={$store.passw} autocomplete="new-password" >

    <div class="mt-10 fs-14 op-50">
      <a href="#/">Забув пароль</a>
      <span class="mx-20">|</span>
      <a href="/signup">Створити аккаунт</a>
    </div>
  </div>

  <button class="btn">Увійти</button>

</div>
