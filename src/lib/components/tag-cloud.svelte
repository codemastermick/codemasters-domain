<script>
  export let allTags
  console.log(allTags)
</script>

{#if allTags}
  <div class="flex columns-auto space-x-2">
    {#each allTags as tag}
      <a
        href={`/posts/tagged/${tag}`}
        class="btn btn-primary text-white"
      >
        {tag}
      </a>
    {/each}
  </div>
{/if}
