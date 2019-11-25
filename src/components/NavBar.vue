<template>


<div>
  <b-navbar toggleable="lg" type="dark" style="background-color: #98d7dc;">
    <b-navbar-brand><router-link to="/"><img class="splashartLogo mr-5" alt="logoGeneral" 
    src="@/assets/logopet.png"></router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      
        <b-nav-item  to="/">Inicio</b-nav-item>
        <b-nav-item to="/ListProducto">Productos</b-nav-item>
    
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form class="mx-2">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar.."></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>


        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <img class="icono" alt="LogoUser" src="@/assets/user.png"> Mi Cuenta 
          </template>
          <b-dropdown-item to="/Login">Iniciar Sesión</b-dropdown-item>
          <b-dropdown-item to="/CreateAccount">Crear Cuenta</b-dropdown-item>
        </b-nav-item-dropdown>

                <b-nav-item ><router-link to="/CarritoCompras">
        <img class="icono mx-3" alt="LogoCarrito" src="@/assets/shopping-cart.png">
        </router-link></b-nav-item> 
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    
</template>


<script>
export default {
    name: 'NavBar'
}
</script>