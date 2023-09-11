<div class="h-full r-20 bg-$primary flex-col p-20">

  <div flex="15 col center grow">
    <h5>Реєстрація</h5>

    <input type="text"     placeholder="Логін" >
    <input type="text"     placeholder="Пошта" >
    <input type="password" placeholder="Пароль" autocomplete="new-password" >

    <div class="mt-10 fs-14">
      <a href="#/">Забув пароль</a>
      <span class="mx-20">|</span>
      <a href="/signup">Створити акаунт</a>
    </div>
  </div>

  <button>Увійти</button>

</div>

<style>
  button {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    background-color: var(--brand);
    color: var(--dark);
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    background: none;
    color: var(--text);
    border-width: 1px;
    border-color: rgba(var(--text_rgb), 0.2);
  }
</style>