<template lang="html">
<div>

<b-container class="mt-2">
  <b-row>
    <b-col 
    cols="12" sm="12" md="4"
    v-for="(item, index) in productos" :key="index">
    <b-card class="m-2">
      <h2>{{item.name}}</h2>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
      <p><span>Stock:{{item.stock}}</span></p>
      <p>${{item.price}}</p>
      <b-button class="btn-warning btn-sm mx-2" @click="Comprar(item._id)">Comprar</b-button>
      <b-button class="btn-danger btn-sm mx-2" @click="AddToCart(item._id)">Agregar Carro</b-button>
    </b-card>
    </b-col>
  </b-row>
</b-container>


</div>
</template>

<script>
export default {
  name: 'ListProductos',
  data() {
    return {
      productos: [],
      
    };
  },
  created(){
    this.obtenerProductos();
  },
  methods:{
    obtenerProductos(){
      this.axios.get('product')
      .then((response) => {
        console.log(response.data)
        this.productos = response.data;
      })
      .catch((e)=>{
        console.log('error' + e);   //respuesta promesa en caso de error
      })
    }
  }
};
</script>