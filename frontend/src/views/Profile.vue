<template>
    <div class="profile-page">
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
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="img" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4">Seguir</base-button>
                                    <base-button type="default" size="sm" class="float-right">Mensagem</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">{{this.followers.length}}</span>
                                        <span class="description">Seguidores</span>
                                    </div>
                                    <div>
                                        <span class="heading">{{this.bundles.length}}</span>
                                        <span class="description">Listas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>{{this.name}}
                                <span class="font-weight-light">, {{this.age}}</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Porto, Portugal</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>{{this.description}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        data() {
            return {
                id: null,
                name: '',
                description: '',
                age: 27,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDiq-PAumHiPE0OKOxdUGo_-Y-AEw0-RYNc2XF1sVB8bJU5rj',
                followers: [],
                bundles: [],
            }
        },
        mounted() {
            // Fetch profile info
            this.$localAPI.get('/users/myProfile').then((res) => {
                console.log(res);
                if (res.status == 200) {
                    this.id = res.data._id;
                    this.name = res.data.name;
                    this.description = res.data.description;
                    if (res.data.img !== undefined && res.data.img != '') {
                        this.img = res.data.img;
                    }
                }
            }).then(() => {
                if (this.id === null) return;

                // Fetch followers
                this.$localAPI.get('/follow-relations?filter[where][followee]=' + this.id)
                    .then((res) => {
                        console.log(res);
                        if (res.status == 200) {
                            this.followers = res.data.map(el => el.follower);
                        }
                    });
            })

            // Fetch own bundles
            this.$localAPI.get('/bundles')
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        this.bundles = res.data;
                    }
                });
        },
    };
</script>

<style>

</style>
