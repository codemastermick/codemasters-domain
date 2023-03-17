<script>
  import Footer from '$components/footer.svelte'
  import Navbar from '$components/navbar.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  onMount(async () => {
    themeChange(false)
  })
</script>

<div class="flex flex-col h-screen">
  <Navbar />
  <main class="container max-w-3xl mx-auto px-4 mb-20 flex-grow">
    <slot />
  </main>
  <Footer />
</div>
