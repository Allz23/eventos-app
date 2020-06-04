<template>
  <div>
    <!-- Pagina de bievenida -->
    <template>
      <Bienvenida />
    </template>
  </div>
</template>

<script>
import Bienvenida from './PaginaBienvenida';

import { createNamespacedHelpers } from 'vuex';
// Importamos las acciones del módulo "usuarios"
const { mapState: usuarioState } = createNamespacedHelpers('usuarios');
export default {
  components: {
    Bienvenida
  },
  computed: {
    ...usuarioState(['sesion'])
  }
};
</script>

<style lang="scss" scoped></style>
