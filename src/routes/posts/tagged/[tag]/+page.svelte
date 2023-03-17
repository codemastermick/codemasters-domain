<script>
  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import Tags from '$components/tags.svelte'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { marked } from 'marked'
  import { onMount } from 'svelte'
  export let data
  let pathname

  onMount(async () => {
    pathname = $page.url.pathname
  })

  const {
    siteUrl,
    name: siteName,
    openGraphDefaultImage,
  } = $siteMetadataStore || []
</script>

<Head
  title={`Blog posts! · ${siteName}`}
  description={`A list of blog posts tagged with ${$page.params.tag}.`}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}${pathname}`}
/>

<h1 class="text-4xl mb-10 font-extrabold">
  Blog posts tagged with "{$page.params.tag}"
</h1>

{#if data.posts.length > 0}
  {#each data.posts as { title, slug, content, coverImage, tags }}
    <div class="card text-center shadow-2xl mb-20">
      <figure class="">
        <img
          class=""
          src={coverImage.url}
          alt={`Cover image for ${title}`}
        />
      </figure>
      <div class="card-body prose">
        <h2 class="title">{title}</h2>
        <div>
          {@html marked(content).slice(0, 150)}
        </div>
        <Tags {tags} />
        <div class="justify-center card-actions">
          <a
            href={`/posts/${slug}`}
            class="btn btn-outline btn-primary">Read &rArr;</a
          >
        </div>
      </div>
    </div>
  {/each}
{:else}
  <p>
    Sorry, we couldn't find any posts tagged with "{$page.params
      .tag}". You could try browsing for content instead?
  </p>
  <a href="/">All posts</a>
{/if}
