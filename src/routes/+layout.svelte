<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import About from "$lib/components/about.svelte";
    import Clouds from "$lib/components/clouds.svelte"
    import "@fontsource/passion-one";
</script>

  
  <Navbar/>
  <Clouds></Clouds>
  <slot/>
  <About/>