<script>
    import skyline from '$lib/assets/skyline.png';
    import htstext from '$lib/assets/htstext.png';

    export let data;
    console.log(data)
    // pad with 0

    $: dollars = Math.floor(data.balance.balance_cents / 100) + "." + (data.balance.balance_cents % 100).toString().padStart(2, '0');
</script>

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

<div class="w-screen h-auto p-5 flex-col">

    <div>
        <h1 class="flex splashtext">HACK THE</h1>
        <h1 class="flex splashtext">SKYLINE</h1>
        <!--
        How do I change the line spacing on the text? I want to make them closer vertically help me out here
        -->
    </div>
    <div class="mx-auto flex gap-8 pt-5 justify-center">
        <button class="border-4 rounded-xl text-sky-200 p-2 border-whsite bg-white font-bold">SIGN UP</button>
        <button class="border-4 rounded-xl text-white p-2 border-white">DONATE</button>
        <button class="border-4 rounded-xl text-white p-2 border-white">ABOUT</button>
    </div>
    <div class="container">
        <img src="{skyline}" alt="Skyline" class="image left">
        <img src="{skyline}" alt="Skyline" class="image right">
    </div>

</div>