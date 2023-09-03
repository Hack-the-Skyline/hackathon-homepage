<script>
    export let name;
    export let role;
    export let description;
    export let image;

</script>
    

<div class="group relative rounded-3xl  space-y-6 overflow-hidden">
    <img
            class="mx-auto h-[26rem] w-full object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            src={image}
            alt="person!!"
            loading="lazy"
            width="640"
            height="805"
    />
    <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
        <div>
            <h4 class="text-xl font-semibold dark:text-gray-700 text-white">{name}</h4>
            <span class="block text-sm text-gray-500">{role}</span>
        </div>
        <p class="mt-8 text-gray-300 dark:text-gray-600">{description}</p>
    </div>

</div>
