<template>
    <div>
        <card class="prod border-3" hover shadow style="border-radius: 20px;">
            <div class="prod-img">
                <img class="img-fluid" :src="'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=' + id + '(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=180&height=170&defaultOptions=1'"/>
            </div>
            <h6 class="prod-name text-primary text-uppercase">{{ name }}</h6>
            <p class="description mt-3">{{ price }}€</p>
                <div class="row justify-content-md-center">
                <button type="button" class="float-left add-all btn btn-default">
                    <span>Add</span>
                    <span class="icon"><i class="fa fa-plus-circle"></i></span>
                </button>
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
    .description {
        text-align: right;
    }
</style>
