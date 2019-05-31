<template>
    <div>
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew mt--300">
            <div class="container">
                <div class="card shadow" no-body>
                    <div class="px-4">
                        <div class="list">
                            <h1 class="mt-4">{{ this.title }}</h1>
                            <p class="lead">
                                {{ this.description }}
                            </p>
                            <div>
                                <Lists :products="bundle"></Lists>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Lists from './Lists'
    function parse_arr(arr_arr) {
        return arr_arr.map(arr_to_obj)
    }
    function arr_to_obj(arr) {
        let o = {}
        for (let i = 0; i < arr.length; i++) {
            o[arr[i]["Name"]] = arr[i]["Value"]
        }
        return o
    }
    export default {
        props: {
            id: Number,
            lists: Array
        },
        components: {
            Lists
        },
        data() {
            return {
                bundle: [],
                title: 'John Doe\'s Bundle',
                description: 'This is a description',
            }
        },
        mounted() {
            console.log('olaaa');
            this.$localAPI.get('/bundles/' + this.$route.params.id).then((response) => {
                console.log('cenas')
                if (response.status == 200) {
                    this.bundle = response.data.products;
                    this.title = response.data.title;
                    this.description = response.data.description;
                    let products = response.data.products.join(';');
                    console.log(products)
                    this.$continenteAPI.post('/continenteOnline/search/productId', {
                        "ProductId": products,
                        "NumberOfItemsToReturn": 10,
                        "CurrentPage": 1,
                        "PropertiesToReturn": [
                            "ProductCode",
                            "WebDisplayName",
                            "OriginalListPrice",
                            "Brand"
                        ],
                        "ContentTypes": [
                            "Product"
                        ],
                        "ContextKey": "Continente"
                    }).then((response) => {
                        console.log('OAAAA');
                        console.log(response);
                        console.log(response.data.SearchResultItems);
                        this.bundle = parse_arr(response.data.SearchResultItems);
                    }).catch((error) => {
                        console.log('erro')
                        console.log(error)
                    })
                }
            })
        }
    }
</script>



<style>

</style>
