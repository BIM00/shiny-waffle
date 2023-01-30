<script>
    import { timeAgo} from "../anilist"



    export let activity

    const TRACDXCYUTIONS = {
        "watched episode": "LE GROS PUANT a regatrdfé l'piséode",
        "read chapter": "LE GROS PUANT à lu le chapiter",
        "completed": "LE GROS PUANT n'est paxs sorrti de cheza lui pour teérminer l'amineé",
        "dropped": "Bravo, il a arréeter cet aneimé",
        "plans to read": "LEgroa puat veut lmrioe",
        "plans to watch": "Il veytr regarédé ça:"
    }



</script>

<div class="caca">
    <div class="fosse">
    <img alt="animCover" src={activity.media.coverImage.large} />
    <div class="sex">
        <span>{ TRACDXCYUTIONS[activity.status] ?? activity.status}</span>
        <a href="https://anilist.com/{activity.type === 'ANIME_LIST' ? 'anime' : 'manga'}/{activity.media.id}"><strong>{activity.media.title.userPreferred}</strong></a>
    </div>
    </div>
    <div class="zizi">
        <div>
            {timeAgo.format(activity.createdAt * 1000 )}
        </div>
        <div class="like">{activity.likeCount} LIKE</div>
    </div>
</div>

<style>


    .caca {
        display: flex;

        justify-content: space-between;

    }

    .fosse {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .zizi {
        display: flex;
        flex-direction: column;
        justify-self: flex-end;
        justify-content: space-between;
    }



    .like {
        align-self: flex-end;
    }

    img {
        width: 50px;
        height: 70px;
    }
</style>