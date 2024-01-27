<template>
  <q-layout view="hHh Lpr lFr">
    <q-header elevated>
      <q-toolbar class="bg-grey-1">

        <q-toolbar-title>
          <a href="/">
            <img src="../assets/PCcomputoLogo.svg" height="70">
          </a>
        </q-toolbar-title>

        <q-btn class="text-black" flat dense round icon="menu" aria-label="Menu" @click="drawerRight = !drawerRight" />
      </q-toolbar>
    </q-header>

    <q-drawer side="right" v-model="drawerRight" show-if-above bordered>

      <q-list>
        <q-item-label header>
        </q-item-label>

        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            INICIO
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/aspel">
          <q-item-section avatar>
            <q-icon>
              <img src="../assets/aspel.svg">
            </q-icon>
          </q-item-section>
          <q-item-section>
            ASPEL
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/cctv">
          <q-item-section avatar>
            <q-icon>
              <img src="../assets/cctv.svg">
            </q-icon>
          </q-item-section>
          <q-item-section>
            CCTV
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/alarmas">
          <q-item-section avatar>
            <q-icon>
              <img src="../assets/alarmas.svg">
            </q-icon>
          </q-item-section>
          <q-item-section>
            ALARMAS
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/gps">
          <q-item-section avatar>
            <q-icon>
              <img src="../assets/gps.svg">
            </q-icon>
          </q-item-section>
          <q-item-section>
            GPS'S
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/redes">
          <q-item-section avatar>
            <q-icon>
              <img src="../assets/redes.svg">
            </q-icon>
          </q-item-section>
          <q-item-section>
            REDES
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/impresoras">
          <q-item-section avatar>
            <q-icon>
              <img src="../assets/impresoras.svg">
            </q-icon>
          </q-item-section>
          <q-item-section>
            IMPRESORAS
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/reparacion">
          <q-item-section avatar>
            <q-icon>
              <img src="../assets/computadoras.svg">
            </q-icon>
          </q-item-section>
          <q-item-section>
            REPARACION
          </q-item-section>
        </q-item>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'



export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup() {
    return {
      drawerRight: ref(false)
    }
  }
})
</script>
