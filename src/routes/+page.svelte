<script>
    import skyline from '$lib/assets/skyline.png';
    import htstext from '$lib/assets/htstext.png';
    import About from '$lib/components/about.svelte';
    import CloudBack from '$lib/assets/clouds/cloudback.png';
    import CloudFront from '$lib/assets/clouds/cloudfront.png';
    export let data;
    console.log(data)
    // pad with 0

    $: dollars = Math.floor(data.balance.balance_cents / 100) + "." + (data.balance.balance_cents % 100).toString().padStart(2, '0');
    import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax';

</script>

<div class="w-screen h-auto flex-col">

    
    
    <Parallax sections={3} config={{stiffness: 1, damping: 1}}>
        <ParallaxLayer rate={1} offset={0}>
            <img src="{CloudFront}" alt="cloudfront" class="image left">
          </ParallaxLayer>
          
        <ParallaxLayer rate={-1} offset={0}>
            <img src="{skyline}" alt="Skyline" class="image left">
            <img src="{skyline}" alt="Skyline" class="image right">
          </ParallaxLayer>
          
        <ParallaxLayer rate={-1} offset={0}>
           
                <h1 class="flex splashtext">HACK THE</h1>
                
          </ParallaxLayer>
          
          <ParallaxLayer rate={-1} offset={0.15}>
           
            <h1 class="flex splashtext">SKYLINE</h1>
            <!--
            How do I change the line spacing on the text? I want to make them closer vertically help me out here
            -->
        
            <div class="mx-auto flex gap-8 pt-0 justify-center">
                <button class="border-4 rounded-xl text-sky-200 p-2 border-whsite bg-white font-bold">SIGN UP</button>
                <button class="border-4 rounded-xl text-white p-2 border-white">DONATE</button>
                <button class="border-4 rounded-xl text-white p-2 border-white">ABOUT</button>
            </div>
            
      </ParallaxLayer>

      <ParallaxLayer rate={0.75} offset={0.24}>
        <img src="{CloudBack}" alt="cloudback" class="image right">
      </ParallaxLayer>
          
   
    
   
    
</Parallax>

    <About/>
</div>




<style>
    .container {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .image {
        position: absolute;
        bottom: 0;
        width: 50%; /* Adjust the width as needed */
        height: auto;
        object-fit: contain;
    }

    .image.left {
        left: 0;
    }

    .image.right {
        /*transform: scaleX(-1);*/
        /*supposed to mirror the image but idk how to have it on the right when i do*/
        transform: translateX(100%);
    }
    .splashtext {
        top: 50%;
        left: 50%;
        font-family: 'Passion One', sans-serif;
        font-size: 10rem;
        font-weight: bold;
        font-style: italic;
        line-height: 1.5;
        text-shadow: 10px 10px 2px rgba(0, 0, 0, 0.5);
        -webkit-text-stroke: 2px white;
    }
    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
