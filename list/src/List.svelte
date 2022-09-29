<script lang="ts">
  export let list:string[]= [];
</script>
<div>
  <ul class="">
    {#each list as item}
      <li class=" bg-red-100 odd:bg-gray-100">{item}</li>
    {/each}
  </ul>
  
</div>
