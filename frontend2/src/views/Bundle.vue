<template>
    <div>
        <section class="section-profile-cover section-shaped my-0" :style="'background-image: url(\'' +  this.img + '\') !important;'">
            <div class="shape shape-style-5 shape-primary shape-skew alpha-4">
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
                            <div class="row">
                                <h1 class="col-lg-9 col-md-8 mt-4">{{ this.title }}<br>
                                <small>{{ totalPrice }}€</small>
                                </h1>

                                <base-button @click="addBundleToCart" type="default" class="add-all col-lg-2 col-md-3 btn btn-default mt-lg-4 ml-lg-5">Adicionar <i class="fa fa-fw fa-shopping-cart"></i></base-button>
                            </div>
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
        <modal :show.sync="modal">
            <h6 slot="header" class="modal-title" id="modal-title-default">Sucesso</h6>
            <p>Os produtos do bundle foram adicionados ao carrinho!</p>
            <p class="text-center">
                <span><i class="fa fa-check fa-5x text-success"></i></span>
            </p>
            <template slot="footer">
                    <a href="https://www.continente.pt/pt-pt/private/Pages/checkout.aspx#/1" target="_blank">
                        <base-button type="primary">Ver o Carrinho <i class="fa fa-shopping-cart"></i></base-button>
                    </a>
                    <base-button type="link" class="ml-auto" @click="modal = false">Fechar</base-button>
            </template>
        </modal>
    </div>
</template>

<script>
    import Lists from './Lists'
    import Modal from '../components/Modal'
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
            Lists,
            Modal
        },
        data() {
            return {
                bundle: [],
                title: 'John Doe\'s Bundle',
                description: 'This is a description',
                img: '',
                modal: false
            }
        },
        mounted() {
            this.$localAPI.get('/bundles/' + this.$route.params.id).then((response) => {
                if (response.status == 200) {
                    this.bundle = response.data.products;
                    this.title = response.data.title;
                    this.description = response.data.description;
                    this.img = response.data.img;
                    console.log('img is ' + response.data.img);
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
                            "Brand",
                            "Description"
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
        },
        methods: {
            addBundleToCart: function() {
                let Products = this.bundle.map((elem) => {
                    return {
                        "ProductId": elem.ProductCode + "(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)",
                        "VariantId": null,
                        "Quantity": 1,
                        "RequestedSalesUnity": "Unit",
                        "CustomerNotes": "",
                        "NumberOfItemsToReturn": 10
                    }
                })
                let body = {
                    "Products": Products,
                    "ContextKey": "Continente"
                }
                console.log(body);
                this.$continenteAPI.post('/continenteOnline/shopping/addProducts', body).then((response) => {
                    console.log('YAY')
                    this.modal = true;
                });
            }
        },
        computed: {
            totalPrice: function() {
                console.log('olaaaa')
                let sum = 0.0
                this.bundle.forEach((elem) => {
                    console.log(elem)
                    sum += parseFloat(elem.OriginalListPrice)
                })
                return sum;
            }
        }
    }
</script>

<style>
    button.add-all {
        height: 50%;
        align-self: right;
        margin: 1rem;
    }
    button.add-all * {
        vertical-align: middle;
    }
    button.add-all>span>i {
        padding-left: 1rem;
    }
</style>
