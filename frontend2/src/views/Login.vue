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
                                <div class="text-center">
                                    <base-button 
                                    type="submit"
                                    class="my-4">Entrar
                                    </base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {


			data () {
				return {
                    email: '',
                    password: '',
				}
			},

      methods: {
        login: function () {
          this.$http.post('http://localhost:3000/users/login', {
            password: this.password,
            email: this.email
          }).then(function (response) {
            if (response.status === 200 && 'token' in response.body && 'serviceToken' in response.body) {
              this.$session.start()
              this.$session.set('jwt', response.body.token)
              this.$session.set('serviceToken', response.body.token)

              Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.serviceToken
              Vue.http.headers.common['JWT'] = response.body.jwt

              //this.$router.push('/panel/search')
            }
          }, function (err) {
            console.log('err', err)
          })
        }
    }
};
</script>
<style>
</style>
