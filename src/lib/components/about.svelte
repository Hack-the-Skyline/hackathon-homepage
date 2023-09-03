<script>
    import jordan from "$lib/assets/team/jordan clickbait.jpg";
    import nicole from "$lib/assets/team/nicole05.jpg";
    import ling from "$lib/assets/team/kevinleonardo.jpg";
    import warren from "$lib/assets/team/warren.jpg";

	import Personcard from "./personcard.svelte";
</script>

<div class="py-20">
    <div class="xl:container mx-auto px-6 md:px-12">
        <div class="mb-16 md:w-2/3 lg:w-1/2">
            <h2 class="mb-4 text-2xl font-bold text-gray-800 dark:text-cyan-400 md:text-4xl">
                Hack the Skyline Team
            </h2>
            <p class="text-white dark:text-white">
                We are a group of high school students looking to impact the computer science scene in our community.
                We want to make computer science more accessible for all students, and encourage them to explore the field by providing them with the resources they need to build and create.
            </p>
        </div>
        <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Personcard name="Ling Zheng" image={ling} role="Organizer, Developer and Outreach"></Personcard>
        <Personcard name="Jordan Krishnayah" image={jordan} role="Organizer, Developer and Outreach"></Personcard>
        <Personcard name="Nicole Leung" image={nicole} role="Organizer, Developer and Outreach"></Personcard>
        <Personcard name="Warren Yun" image={warren} role="Organizer, Developer and Outreach"></Personcard>
        
        </div>
        

           
        </div>
    </div>
