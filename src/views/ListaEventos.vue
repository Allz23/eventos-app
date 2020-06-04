<template>
  <div>
    <b-row class="my-3">
      <b-col>
        <h1>Lista de Eventos</h1>
      </b-col>
    </b-row>

    <b-row>
      <!-- Mostraremos las cartas de cada evento en esta area -->
      <b-col cols="6">
        <CartaEvento
          v-for="evento in eventos"
          :key="evento._id"
          :evento="evento"
        />
      </b-col>

      <!-- Mostramos info detallada de cada evento en esta area -->
      <b-col cols="6" @click="onClick">
        <template v-if="detallesEvento.length === 0">
          <!--Mensaje inicial -->
          <b-row align-h="center">
            <b-icon icon="chat-quote" class="h1"></b-icon>
          </b-row>

          <b-row align-h="center" align-v="center" class="my-3">
            <h4 class=" text-center">
              Haga clic en la carta del evento que desee saber mas detalles.
            </h4>
          </b-row>
        </template>

        <template v-else>
          <b-row align-h="center">
            <DescripcionEvento />
          </b-row>
        </template>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import store from '@/store/index';
import { createNamespacedHelpers } from 'vuex';
// Importamos las acciones del módulo "usuarios"
const {
  mapActions: eventsActions,
  mapState: eventosState
} = createNamespacedHelpers('eventos');

import CartaEvento from '../components/CartaEvento';
import DescripcionEvento from '../components/DescripcionEvento';

function getPageEvents(routeTo, next) {
  store
    .dispatch('eventos/aggEventos')
    .then(() => {
      next();
    })
    .catch(error => {
      console.error(error);
    });
}

export default {
  title: 'Vue Mastery App | Eventos',
  components: {
    CartaEvento,
    DescripcionEvento
  },
  computed: {
    ...eventosState(['eventos', 'detallesEvento', 'cartaSeleccionada'])
  },
  methods: {
    ...eventsActions(['aggEventos', 'clicEnContenedor']),
    onClick() {
      this.clicEnContenedor();
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  }
};
</script>

<style lang="scss"></style>
