<script>
    import etoile from '/etoile.png?url'
    import Anilist from "./lib/anilist.svelte"
    import Gif from "./lib/gif.svelte"
    import Card from "./lib/card.svelte"
    import FloppEgg from "./lib/floppEgg.svelte";
</script>

<main >
    <div class="zizizicaciac" style="background-image: url({etoile})" >

    </div>
    <div class="eEASTERegg">
        <p>SI TUV AEU AVOIRT L4ESTEREAGG FLOPPPA TUPEUX FAIRE LE CONANMIR CODE SUR LA PGAE</p>
        <p>QSIT TU SAIS PAU4 CEQUE SIATU : HATU HATU BNAS BAS GAUDRCHE GAUDGHR DROITREE DROTIE BA</p>
    </div>
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
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        background-color: #6262ff;
        background-repeat: repeat;
        transition: transform 800ms;
        transform: scale(1.0) ;
        z-index: 0;
    }

    .zizizicaciac:hover {

        transform: scale(1.05) ;


    }

    main {
        min-height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        padding: 2rem 1rem;

        overflow-x: hidden;
        z-index: 2;
    }





    h1 {
        font-size: 4rem;
    }

    .eEASTERegg {
        position: absolute;
        bottom: 0;
        right: 0;
    }



</style>
