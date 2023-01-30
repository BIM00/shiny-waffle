<script>

    function rand(min, max) {
        return Math.round(min + Math.random() * (max - min))
    }

    let random = rand(100, 828)

    let image;
    $: fetch('https://api.codetabs.com/v1/proxy/?quest=' + ('http://107.170.214.49/media/' + random)).then(caca => caca.text()).then(html => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const img = doc.querySelector('img');
        loading = true
        image = img.src;
    })

    let loading = false;

</script>


{#if image}
    <p> EN fait tua peux lcllquer <br/> sur liamge pour chjanger</p>

    <img data-cacaimagefloppa="{random}" on:click={() => random = rand(100, 828)} on:load={()=>loading = false}
         width="250" draggable="false" src="{image}"/>
    {#if loading}
        <p>CHARGME?NT DE LI4AMG <br /> SUVINTA EN COURCS</p>
    {/if}
{/if}


<style>
    img {
        cursor: pointer;
    }

</style>