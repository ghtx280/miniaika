<script>
  import { showPass   } from "../../lib/js/showPass";
	import { store      } from "../../lib/js/store.js";
  import { cookie     } from "../../lib/js/cookie";
  import { db         } from "../../lib/js/db";
  import { inputValid } from '../../lib/js/valid';




 
  async function login(params) {
    let { data, error } = await db.auth.signin($store.email, $store.passw);
    
    console.log(data);

    if (error) return alert(error)
  }
   

  

</script>

<div class="h-full r-20 bg-$primary flex-col p-20">

  <div flex="15 col center grow">

    <h5 class="mb-20">Вхід</h5>

    <input type="text"     placeholder="Пошта"  bind:value={$store.email} use:inputValid={"email"}>
    <input type="password" placeholder="Пароль" bind:value={$store.passw} use:inputValid={"passw"} use:showPass autocomplete="new-password" >

    <div class="mt-10 fs-14 op-50">
      <a href="#/">Забув пароль</a>
      <span class="mx-20">|</span>
      <a href="/signup">Створити аккаунт</a>
    </div>
  </div>

  <button class="btn" on:click={login}>Увійти</button>

</div>
