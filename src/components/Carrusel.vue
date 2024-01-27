<template>
  <q-responsive>
    <div class="q-pa-md">
      <q-carousel animated v-model="slide" arrows navigation infinite height="700px">
        <q-carousel-slide :name="1" img-src="../assets/servicio_aspel.svg" height="700px" />
        <q-carousel-slide :name="2" img-src="../assets/servicio_cctv.svg" height="700px" />
        <q-carousel-slide :name="3" img-src="../assets/servicio_alarmas.svg" height="700px" />
        <q-carousel-slide :name="4" img-src="../assets/servicio_redes.svg" height="700px" />
        <q-carousel-slide :name="5" img-src="../assets/servicio_gps.svg" height="700px" />
        <q-carousel-slide :name="6" img-src="../assets/servicio_impresoras.svg" height="700px" />
        <q-carousel-slide :name="7" img-src="../assets/servicio_reparacion.svg" height="700px" />
      </q-carousel>
    </div>
  </q-responsive>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Carrusel',
  setup() {
    return {
      slide: ref(1)
    }
  },
})
</script>
