<template>
  <q-page>
    <div class="q-pa-md">
      <Carrusel />
    </div>
  </q-page>
</template>

<script>
import Carrusel from 'src/components/Carrusel.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {

    };
  },
  components: { Carrusel }
})
</script>
