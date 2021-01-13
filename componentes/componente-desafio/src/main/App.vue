<template>
  <v-app>
    <app-menu />
    <app-toolbar />
    <app-carousel />
    <app-footer />
  </v-app>
</template>

<script>
import Menu from '@/components/template/Menu.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Footer from '@/components/template/Footer.vue'

export default {
  components: {
    'app-menu': Menu, 
    'app-carousel': Carousel, 
    'app-toolbar': Toolbar, 
    'app-footer': Footer    
    }
}
</script>
