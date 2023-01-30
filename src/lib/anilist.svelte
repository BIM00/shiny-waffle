<script>
    import {client, GETACTIVITY, GETUSER} from "../anilist.js"
    import  AnilistActivity from "./anilistActivity.svelte"
    import {onMount} from "svelte";

    export let userId;
    export let perPage = 20;
    export let defaultFetchCount = 4;

    $: cacheKey = `GETUSER_${userId}`

    let data;

    let activity = null;
    let total = Infinity, current = 0;

    async function fNext() {
        fetching= true
        const {Page: {activities, pageInfo}} = await client.request(GETACTIVITY, {id: userId, page: current, perPage})
        fetching = false
        if (total === Infinity) total = pageInfo.total;
        current++;
        activity = [...(activity||[]), ...activities]
    }

    let fetching = false;

    onMount(async () => {
        data = JSON.parse(localStorage.getItem(cacheKey));

        await client.request(GETUSER, {id: userId}).then(d => data = d);


        localStorage.setItem(cacheKey, JSON.stringify(data))

        while (current < defaultFetchCount && current * perPage < total) {
            await fNext()
        }
    })

    $: console.log(data)
    $: console.log(activity)

    function scroll (e) {

        if (e.target.scrollTop > e.target.scrollHeight - 250 && !fetching) {
            fNext();
        }
    }

</script>

{#if data}
    <div class="mobilewrap">
        <div class="profile">
            <img src={data.User.avatar.large}/>

            <div class="meta">
                <a href="https://anilist.co/user/{data.User.name}"><h3>{data.User.name}</h3></a>
                <div class="about">
                    {@html data.User.about}
                </div>
            </div>
        </div>
        <div class="list" on:scroll={scroll}>
            {#if activity}
            <ul>
                {#each activity as act}
                    <li>
                        {#if ["ANIME_LIST", "MANGA_LIST"].includes( act.type) }
                            <AnilistActivity activity={act}/>
                        {/if}
                    </li>
                {/each}
            </ul>
                {:else}
                 CACA
                {/if}
        </div>
    </div>
{:else}
    CHARNGEMRTN DE ALA DONNER ERN COUR
{/if}

<style>



    a:visited, a:hover, a {
        color: black;
    }

    .profile {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        width: 40%;
    }

    .profile > img {
        border-radius: 35px;
        height: 160px;
        width: 160px;
    }

    .profile > .meta {
        align-self: flex-end;

    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .list {
        height: 200px;
        overflow-y:auto ;
        margin-left: 20px;
        width: 60%;
    }



    .list > ul > li {
        list-style-type: none;
    }

    .mobilewrap {
        display: flex;

    }

    @media screen and (max-width: 640px) {
        .mobilewrap {
            display: block;
        }
        .profile {
            flex-direction: column;
            justify-content: center;
            width: 100%;
        }
    }

</style>
