<template>
<div class="col-lg-3">
    <card class="product border-3" hover shadow body-classes="py-5">
        <img class="img-fluid" :src="'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=' + id + '(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=180&height=170&defaultOptions=1'" />
        <h6 class="product-name text-primary text-uppercase">{{ name }}</h6>
        <p class="description mt-3">{{ price }}€</p>
        <div align-self="center">
            <base-button tag="a" href="#" type="primary">
                Add to List
            </base-button>
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
    },

    data() {
        return {
            description: 'ola',
        }
    }
    
}
</script>

<style>
.product {
    margin-bottom: 2rem;
}

.product-name{
    text-align: left;
    padding-top: 1em;
    font-weight: 700;
}

.description{
    text-align: right;
}
</style>
