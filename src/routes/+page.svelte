<script>
    import skyline from '$lib/assets/skyline.png';
    import htstext from '$lib/assets/htstext.png';

    export let data;
    console.log(data)
    // pad with 0

    $: dollars = Math.floor(data.balance.balance_cents / 100) + "." + (data.balance.balance_cents % 100).toString().padStart(2, '0');
</script>

<style>
    .text-center {
        font-size: 4rem;

    }
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
</style>

<div class="w-screen h-auto p-5 flex-col">

    <div>
        <h1 class="text-center">HACK THE</h1>
        <h1 class="text-center">SKYLINE</h1>
    </div>
    <div class="mx-auto flex gap-8 pt-5 justify-center">
        <button class="border-4 rounded-xl text-sky-200 p-2 border-white bg-white font-bold">SIGN UP</button>
        <button class="border-4 rounded-xl text-white p-2 border-white">DONATE</button>
        <button class="border-4 rounded-xl text-white p-2 border-white">ABOUT</button>
    </div>
    <div class="container">
        <img src="{skyline}" alt="Skyline" class="image left">
        <img src="{skyline}" alt="Skyline" class="image right">
    </div>

</div>