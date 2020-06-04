<template>
  <b-container>
    <b-row align-h="center">
      <b-col>
        <span class="eyebrow"
          >@{{ detallesEvento.hora }} el
          {{ detallesEvento.fecha | fecha }}</span
        >
        <h1 class="text-center">{{ detallesEvento.titulo }}</h1>
        <h2 class="h5">
          Organizado por
          {{ detallesEvento.organizador ? detallesEvento.organizador : '' }}
        </h2>
        <h3 class="h5">Categoría: {{ detallesEvento.categoria }}</h3>
      </b-col>
    </b-row>

    <b-row class="mt-3" align-v="center">
      <b-col cols="1" class="text-center">
        <b-icon icon="geo-alt" class="h4 geo-icono"></b-icon>
      </b-col>

      <b-col cols="11">
        <h2 class="h4">Localización</h2>
      </b-col>

      <b-col cols="11" offset="1">
        <address>{{ detallesEvento.locacion }}</address>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h2 class="h4">Detalles del evento</h2>
        <p>{{ detallesEvento.descripcion }}</p>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col>
        <h2 class="h4">
          Participantes
          <b-badge variant="success" class="-fill-gradient">{{
            detallesEvento.participantes
              ? detallesEvento.participantes.length
              : 0
          }}</b-badge>
        </h2>
        <ul class="list-group">
          <li
            v-for="(participante, index) in detallesEvento.participantes"
            :key="index"
            class="list-item"
          >
            <b>{{ participante }}</b>
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState: eventosState } = createNamespacedHelpers('eventos');

export default {
  computed: {
    ...eventosState(['detallesEvento'])
  }
};
</script>

<style lang="scss" scoped>
.eyebrow {
  font-size: 1rem;
}

.badge {
  display: inline-flex;
  height: 26px;
  width: auto;
  padding: 0 7px;
  margin: 0 5px;
  background: transparent;
  border-radius: 13px;
  font-size: 13px;
  font-weight: 400;
  line-height: 26px;
}
.badge.-fill-gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #fff;
}

.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}

.geo-icono {
  color: red;
}
</style>
