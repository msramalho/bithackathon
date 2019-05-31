<template>
    <div>
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-3 shape-primary shape-skew alpha-4">
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
                                <h1 class="col-lg-9 col-md-8 mt-4">{{ this.title }}</h1>
                                <button type="button" class="add-all col-lg-2 col-md-3 btn btn-default mt-lg-4 ml-lg-5">
                                    <span> Add All  </span>
                                    <span class="icon"><i class="fa fa-plus-circle"></i></span>
                                </button>
                            </div>
                            <p class="lead">
                                {{ this.description }}
                            </p>
                            <div :key="bundle.id" v-for="bundle in bundles" >
                                <card shadow class="shadow-lg--hover mt-5">
                                    <div class="d-flex px-3">
                                        <div>
                                            <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                                                rounded></icon>
                                        </div>
                                        <div class="pl-4">
                                            <h5 class="title text-success">Awesome Support</h5>
                                            <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                                every summer, and that process will continue whatever happens.</p>
                                            <a href="#" class="text-success">Learn more</a>
                                        </div>
                                    </div>
                                </card>
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
                bundles: [],
                title: 'John Doe\'s Bundle',
                description: 'This is a description',
            }
        },
        mounted() {
            console.log('olaaa');
            this.$localAPI.get('/bundles/',{withCredentials: true}).then((response) => {
                console.log('cenas')
                if (response.status == 200) {
                    console.log(response.data)
                }
            })
        }
    }
</script>

<style>
button.add-all {
    height: 50%;
    align-self: right;
    margin: 1rem;
}
button.add-all *{
    vertical-align: middle;
}

button.add-all > span > i {
    padding-left: 1rem;
}
</style>
