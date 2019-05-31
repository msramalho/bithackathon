<template>
    <div>
        <section class="section-profile-cover section-shaped my-0 bg-gradient-default">
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
                            </div>
                            <div class="bundle-list" :key="bundle.id" v-for="bundle in bundles">
                                <router-link :to="`/bundle/${bundle._id}`">
                                    <card shadow class="shadow-lg--hover mt-5" style="border-radius: 20px;">
                                        <div class="bundle d-flex px-3">
                                            <div class="bundle-image">
                                                <img :src="bundle.img" :alt="bundle.title" class="img">
                                            </div>
                                            <div class="text pl-4">
                                                <h5 class="title text-primary">{{ bundle.title }}</h5>
                                                <p class="text-darker">{{ bundle.description }}</p>
                                                <span class="text-primary">Learn more</span>
                                            </div>
                                        </div>
                                    </card>
                                </router-link>
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
        components: {
            Lists
        },
        data() {
            return {
                bundles: [],
                title: 'Bundles da Maria'
            }
        },
        mounted() {
            console.log('olaaa');
            this.$localAPI.get('/bundles/').then((response) => {
                console.log('cenas')
                if (response.status == 200) {
                    this.bundles = response.data
                    console.log(response.data)
                }
            })
        }
    }
</script>

<style>
    .bundle-list:last-child {
        margin-bottom: 2em;
    }
    .bundle div.text {
        display: grid;
    }
    .bundle div.text * {
        margin: 0.5em;
    }
    .bundle div.text p {
        height: 5em;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .bundle img {
        height: 12em;
        width: 20em;
        object-fit: cover;
        white-space: nowrap;
    }
    .bundle-image {
        width: 20em;
    }
</style>
