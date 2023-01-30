<script>
    import etoile from '/etoile.png?url'
    import Anilist from "./lib/anilist.svelte"
    import Gif from "./lib/gif.svelte"
    import Card from "./lib/card.svelte"
    import FloppEgg from "./lib/floppEgg.svelte";
</script>
<div class="zizizicaciac">
<main style="background-image: url({etoile})">
    <Card >
        <h1>TG T2006</h1>
        <p>Ferme ta guele</p>
    </Card>

    <Card title="LISTE DU PUANT">
        <Anilist userId={parseInt(import.meta.env.VITE_ANILIST_ID)} defaultFetchCount={1} perPage={20}/>
    </Card>

    <Card title="BIBMO">
        <Gif />
    </Card>

    <FloppEgg />
</main>

<style>
    .zizizicaciac {
        min-height: 100vh;
        transition: all 800ms ;
        transform: skew(0deg, 0deg);
    }

    .zizizicaciac:hover {
        transform: skew(0deg, 0deg);
    }

    main {
        min-height: 100vh;
        background-color: #6262ff;
        background-repeat: repeat;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        padding: 2rem 1rem;
        transition: all 800ms;
        transform: scale(1.0) ;

    }

    main:hover {
        transform: scale(1.05) ;

    }

    h1 {
        font-size: 4rem;
    }



</style>
