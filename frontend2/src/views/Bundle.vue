<template>
    <div>
        <h1>{{ $route.params.id }}</h1>
        <h2>{{ this.title }}</h2>
        <div>
            <ul>
                <li :key="item.ProductCode" v-for="item in bundle">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Product from '../components/Product'
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
            id: Number
        },
        components: {
            Product
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
