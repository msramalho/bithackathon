<template>
    <div>
        <card class="prod border-3" hover shadow style="border-radius: 20px;">
            <div class="prod-img">
                <img class="img-fluid" :src="'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=' + id + '(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=180&height=170&defaultOptions=1'"/>
            </div>
            <h6 class="prod-name text-primary text-uppercase">{{ name }}</h6>
            <p class="prod-desc">{{ description }}</p>
            <div class="d-flex justify-content-between">
                <div>
                <base-button type="link" size="sm"><i class="fa fa-2x fa-plus-circle"></i></base-button>
                </div>
                <div>
                <span class="text-right lead">{{ price }}€</span>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            id: String,
            brand: String,
            price: String,
            description: String,
        }
    }
</script>

<style>
    .prod {
        height: 90%;
    }
    .prod-img {
        text-align: center;
    }
    .prod-name {
        text-align: left;
        padding-top: 1em;
        font-weight: 700;
        display: block; /* or inline-block */
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
        height: 5em;
        line-height: 1.8em;
    }
    .prod-desc {
        height: 4rem;
    }
</style>
