<template>
    <div>
        <card class="prod border-3" hover shadow body-classes="py-5">
            <div class="prod-img">
                <img class="img-fluid" :src="'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=' + id + '(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=180&height=170&defaultOptions=1'"
                />
            </div>
            <h6 class="prod-name text-primary text-uppercase">{{ name }}</h6>
            <p class="description mt-3">{{ price }}€</p>
            <div class="icon">
                <i class="fa fa-plus-circle"></i>
            </div>
        </card>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            id: String,
            price: Number,
        }
    }
</script>

<style>
    .prod {
        margin: 0.5rem;
    }
    .prod-img {
        text-align: center;
    }
    .prod-name {
        text-align: left;
        padding-top: 1em;
        font-weight: 700;
    }
    .description {
        text-align: right;
    }
</style>
