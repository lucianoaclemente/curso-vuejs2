<template>
  <v-app>
    <app-menu />
    <app-toolbar />
    <app-carousel />
    <app-footer />
  </v-app>
</template>

<script>
import Menu from './Menu.vue'
import Carousel from './Carousel.vue'
import Toolbar from './Toolbar.vue'
import Footer from './Footer.vue'

export default {
  components: {
    'app-menu': Menu, 
    'app-carousel': Carousel, 
    'app-toolbar': Toolbar, 
    'app-footer': Footer    
    }
}
</script>
