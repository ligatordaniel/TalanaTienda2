<template>
<div class="CrearCuenta">

  <b-jumbotron class="m-3" bg-variant="info" text-variant="white">
    <h3>Crear Cuenta</h3>


        <input class="my-3" type="text" name="correo" v-model="input.nombre" placeholder=" Nombre" /><br>
        <input class="my-3" type="text" name="apellido" v-model="input.apellido" placeholder=" Apellidos" /><br>
        <input class="my-3" type="text" name="fechanacimiento" v-model="input.fechanacimiento" placeholder="Nacimiento 30-12-1991" /><br>
        <input class="my-3" type="text" name="correo" v-model="input.correo" placeholder="Correo Usuario" /><br>
        <input class="m-2" type="password" name="password" v-model="input.password" placeholder="Contraseña" /><br>
        <input type="password" name="password" v-model="input.password" placeholder="Contraseña" /><br>
      
        <b-button variant="secondary" class="m-4" v-on:click="CreateAccount()">Enviar</b-button>
        
    
  </b-jumbotron>

</div>
</template>

<script>
    export default {
        name: 'CreateAccount',
        data() {
            return {
                input: {
                    nombre: "",
                    apellidos: "",
                    fechanacimineto: "",
                    tarjeta: "",
                    correo: "",
                    password: ""

                }
            }
        }
    }
</script>

<style scoped>
    .CrearCuenta {
        max-width: 100%;
    }
</style>