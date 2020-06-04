<template>
  <div class="-sombra my-3">
    <b-card
      :title="evento.titulo"
      :sub-title="'@' + evento.hora + ' el ' + evento.fecha"
      @click="seleccionado"
      :class="{ selected: seleccionCarta, 'seleccion--verde': seleccionCarta }"
    >
      <b-card-text>
        <b-icon icon="people-fill"></b-icon>
        {{ evento.participantes.length }} participantes.
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const {
  mapActions: eventosActions,
  mapState: eventosState
} = createNamespacedHelpers('eventos');

export default {
  computed: {
    seleccionCarta: function() {
      if (
        this.cartaSeleccionada._id === this.evento._id &&
        this.cartaSeleccionada.seleccionada === true
      ) {
        return true;
      } else {
        return false;
      }
    },
    ...eventosState(['cartaSeleccionada'])
  },
  props: {
    evento: Object
  },
  data() {
    return {};
  },
  methods: {
    ...eventosActions(['pasarEvento']),
    seleccionado() {
      this.pasarEvento(this.evento._id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/base/_variables.scss';

.card {
  transition: all 0.2s linear;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.selected {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(92, 4, 235, 0.25),
    0 1px 15px 0 rgba(1, 27, 255, 0.25);
}

div.seleccion--verde > div.card-body > h4.card-title {
  color: $green;
  transition: all 0.5s linear;
}
</style>
