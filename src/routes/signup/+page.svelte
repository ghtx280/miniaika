<script>
	import { page } from '$app/stores';
  
  import { showPass               } from "$lib/js/showPass";
	import { store                  } from '$lib/js/store';
  import { checkValid, inputValid } from '$lib/js/valid';

  // code
  
</script>


<div class="h-full r-20 bg-$primary flex-col p-20">

  {#if $page.url.hash === "#confirm"}

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

  {:else if $page.url.hash === "#error"}

    <div flex="15 col center grow">
      <p>ERROR</p>
    </div>

  {:else}

    <div flex="15 col center grow">
      <h5 class="mb-20">Реєстрація</h5>

      <input type="text"     placeholder="Логін"   bind:value={$store.login} use:inputValid={"login"}>
      <input type="email"    placeholder="Е-Пошта" bind:value={$store.email} use:inputValid={"email"}>
      <input type="password" placeholder="Пароль"  bind:value={$store.passw} use:inputValid={"passw"} use:showPass autocomplete="new-password">

      <div class="mt-10 fs-14 op-50">
        <a href="/login">У мене вже є аккаунт</a>
      </div>
    </div>

    <a href="#confirm" class="btn">Далі</a>
    <!-- <button class="btn">Далі</button> -->

  {/if}

</div>


