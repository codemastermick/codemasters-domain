<script>
  export let tags
</script>

<div class="flex justify-center mt-5 space-x-2">
  {#each tags as tag}
    <a
      href={`/posts/tagged/${tag}`}
      class="btn btn-primary text-white no-underline"
    >
      {tag}
    </a>
  {/each}
</div>
