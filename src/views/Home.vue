<template>
  <div class="home">
    <Slider/>
    <ListProducto/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import ListProducto from '@/components/ListProducto.vue'


export default {
  name: 'home',
  components: {
    Slider,
    ListProducto
  }
}
</script>
