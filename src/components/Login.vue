<template>
<div class="login">

  <b-jumbotron class="m-3" bg-variant="info" text-variant="white">
    <h3>Iniciar Sesión</h3>


        <input class="my-3" type="text" name="correo" v-model="input.correo" placeholder="Correo Usuario" /><br>
        <input type="password" name="password" v-model="input.password" placeholder="Contraseña" /><br>
      
        <b-button variant="secondary" class="m-4" v-on:click="login()">Login</b-button>
        
    
  </b-jumbotron>

</div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    correo: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.correo != "" && this.input.password != "") {
                    if(this.input.correo == this.$parent.mockAccount.correo && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The correo and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    .login {
        max-width: 100%;
    }
</style>