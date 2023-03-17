<script context="module">
  import {
    authorsStore,
    fetchAuthors,
    fetchSocials,
    socialsStore,
    siteMetadataStore,
  } from '$stores/site-metadata'
  import FacebookIcon from './icons/facebook-icon.svelte'
  import TwitterIcon from './icons/twitter-icon.svelte'
  import YouTubeIcon from './icons/you-tube-icon.svelte'
  import MastodonIcon from './icons/mastodon-icon.svelte'
  import InstagramIcon from './icons/instagram-icon.svelte'
  import LinkedinIcon from './icons/linkedin-icon.svelte'
  import SnapchatIcon from './icons/snapchat-icon.svelte'

  fetchAuthors()
  fetchSocials()
</script>

<script>
  const {
    twitterUrl,
    youTubeUrl,
    facebookUrl,
    mastodonUrl,
    instagramUrl,
    linkedInUrl,
    snapchatUrl,
  } = $socialsStore
  const { name: AuthorName } = $authorsStore
  const copydate =
    new Date().getFullYear() != $siteMetadataStore.establishedYear
      ? `${
          $siteMetadataStore.establishedYear
        } - ${new Date().getFullYear()}`
      : new Date().getFullYear()
</script>

<footer
  class="p-10 footer bg-primary text-primary-content footer-center"
>
  <div>
    <!-- Buy Me A Coffee widget -->
    <script
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="CodemasterMick"
      data-description="Support me on Buy me a coffee!"
      data-message="Buy the Codemaster a coffee and help keep the content coming!"
      data-color="#40DCA5"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
    ></script>

    <div class="grid grid-flow-col gap-4">
      {#if twitterUrl}
        <a href={twitterUrl}>
          <TwitterIcon />
        </a>
      {/if}
      {#if youTubeUrl}
        <a href={youTubeUrl}>
          <YouTubeIcon />
        </a>
      {/if}
      {#if facebookUrl}
        <a href={facebookUrl}>
          <FacebookIcon />
        </a>
      {/if}
      {#if mastodonUrl}
        <a href={mastodonUrl}>
          <MastodonIcon />
        </a>
      {/if}
      {#if instagramUrl}
        <a href={instagramUrl}>
          <InstagramIcon />
        </a>
      {/if}
      {#if linkedInUrl}
        <a href={linkedInUrl}>
          <LinkedinIcon />
        </a>
      {/if}
      {#if snapchatUrl}
        <a href={snapchatUrl}>
          <SnapchatIcon />
        </a>
      {/if}
    </div>

    <a href="rss.xml">Subscribe to get the latest updates</a>

    <p>
      Copyright &copy; {copydate} | All right reserved {AuthorName}
    </p>
  </div>
</footer>
