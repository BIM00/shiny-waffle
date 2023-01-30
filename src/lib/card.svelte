<script>

    (window.cardCounter ||= 0);

    let caca = (window.cardCounter+=1);
    caca = caca % 2 ? -1: 1
    export let title = undefined;
</script>

<div class="card" style="--transpeople: skew({caca}deg, {caca*2}deg)">
    {#if title}<h1>{title}</h1>{/if}

    <slot/>
</div>

<style>
    .card {
        padding: 1rem;
        justify-content: center;
        border-radius: 1rem;
        background-color: aquamarine;
        transition: all 400ms;
        transform: scale(1.0);
        z-index: 3;
        border :1px solid black;
        max-width: 80vw;
    }

    .card:hover {
        transform: scale(1.1) var(--transpeople);
        z-index: 4;
    }
</style>