<script>
	import Icon from '$lib/ui/Icon.svelte';

  let error = true
</script>

<div class="h-full r-20 bg-$primary p-20" flex="col">

  {#if error}
    <div flex="15 col center grow" text="*:center">

      <div>
        <Icon name="smile" size=60 stroke=2 />
      </div>

      <h5 text="center">
        Пошту підтверджено
      </h5>

      <p class="op-50 fs-14">
        Тепер ви можете повноцінно користуватися сайтом
      </p>

      <a class="btn mt-50" href="/add">
        Створити перший обмін
      </a>

      <a href="/" class="op-50 fs-14 mt-20 underline">
        На головну
      </a>
    </div>

  {:else}
    <div flex="15 col center grow" text="*:center">

      <div>
        <Icon name="frown" size=60 />
      </div>

      <h5 text="center">
        Токен не знайдено
      </h5>

      <p class="op-50 fs-14">
        Щось пішло не так, спробуйте пізніше
      </p>

      <a class="btn mt-50" href="/signup">
        Спробувати ще раз
      </a>

      <a href="/" class="op-50 fs-14 mt-20 underline">
        На головну
      </a>
    </div>
  {/if}

  
</div>
