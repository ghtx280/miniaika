<script>
  import Img from '$lib/ui/img.svelte';

  export let href 


</script>

<a href="{href}" class="bg-$dark p-5 r-20 mt-15 gap-10 ai-c">
  <Img src="" def="/no_post.svg" class="sq-100 contrast-1.1 r-15" alt />
  
  <div>
    <h6>Назва товару</h6>
    <p text="12" class="op-50 mt-10 clamp-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, reprehenderit recusandae ab perferendis quibusdam molestiae et quae illo molestias ut nihil ipsa nostrum repellendus expedita cumque odio facere earum accusamus.
    </p>
  </div>
</a> 