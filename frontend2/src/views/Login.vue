<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small><img slot="icon" src="img/brand/continente.png" style="height:16px;"> Entrar com conta Continente</small>
                            </div>
                            <form 
                                @submit="login"
                                role="form">
                                <base-input 
                                            v-model="email"
                                            alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input v-model="password"
                                            alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <input type="submit">
                                <!--
                                <div class="text-center">
                                    <base-button 
                                    type="submit"
                                    class="my-4">Entrar
                                    </base-button>
                                </div>
                                -->
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'

export default {


			data () {
				return {
                    email: '',
                    password: '',
				}
			},

      methods: {
        login: function (e) {
          this.$http.post('/users/login', {
            password: this.password,
            email: this.email
          }).then((response) => {

              console.log(response);
            if (response.status === 200 && 'jwtToken' in response.data && 'serviceToken' in response.data) {
                console.log('inside');

                let { jwtToken, serviceToken } = response.data;

              this.$session.start()
              this.$session.set('jwtToken', jwtToken)
              this.$session.set('serviceToken', serviceToken)

              // Token for Continente's API
              this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + serviceToken;

              // Token for our API
              this.axios.defaults.headers.common['JWT'] = jwtToken;

              console.log('Logged in! (?)');
              this.$router.push('/profile');
            }
          }, function (err) {
            console.log('err', err)
          })

          e.preventDefault();
          
        }
    }
};
</script>
<style>
</style>
