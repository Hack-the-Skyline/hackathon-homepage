<script>
    import skyline from '$lib/assets/skyline.png';
    import htstext from '$lib/assets/htstext.png';

    export let data;
    console.log(data)
    // pad with 0

    $: dollars = Math.floor(data.balance.balance_cents / 100) + "." + (data.balance.balance_cents % 100).toString().padStart(2, '0');
</script>


<div class="w-screen h-auto p-5 flex-col"> 
   
    <img src={htstext} width="30%" height="30%" class="transition mx-auto invert"/>
    <div class="mx-auto flex gap-8 pt-5 justify-center">
        <button class="border-4 rounded-xl text-sky-200 p-2 border-white bg-white font-bold">Sign up!</button>
        <button class="border-4 rounded-xl text-white p-2 border-white">Donate</button>
    </div>
    <img src={skyline} width="100%" height="100%" class="transition opacity-80"/>
    
</div>