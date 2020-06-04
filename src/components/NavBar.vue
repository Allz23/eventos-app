<template>
  <div>
    <b-navbar toggleable="lg" type="light" id="navBar">
      <b-navbar-brand>
        <b-icon icon="compass" class="texto--verde"></b-icon>
        <b><i> Eventos</i></b>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- Si aun no se ha iniciado la sesión -->
          <template v-if="!sesion">
            <b-nav-item :to="{ name: 'bienvenida' }" class="link" exact
              >Principal</b-nav-item
            >
            <b-nav-item :to="{ name: 'inicio-sesion' }" class="link" exact
              >Iniciar sesión</b-nav-item
            >
          </template>

          <!-- Sesión iniciada -->
          <template v-else>
            <b-nav-item :to="{ name: 'principal' }" class="link" exact
              >Principal</b-nav-item
            >
            <b-nav-item :to="{ name: 'crear-evento' }" class="link" exact
              >Crear Evento</b-nav-item
            >
            <!-- Dropdown -->
            <b-nav-item-dropdown right id="dropdown">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{ usuario.usuario }}</em>
              </template>
              <b-dropdown-item href="#">
                <b-icon icon="gear" class="texto--verde"></b-icon>
                Configuración
              </b-dropdown-item>
              <b-dropdown-item @click="cerrarSesion">
                <!-- <b-icon-x-circle></b-icon-x-circle> -->
                <b-icon icon="power" class="texto--verde"></b-icon>
                Salir
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
// Importamos las acciones del módulo "usuarios"
const {
  mapActions: usuarioActions,
  mapState: usuarioState
} = createNamespacedHelpers('usuarios');

export default {
  computed: {
    ...usuarioState(['sesion', 'usuario'])
  },
  methods: {
    ...usuarioActions(['cerrarSesion'])
  }
};
</script>

<style lang="scss">
@import '../assets/scss/base/_variables.scss';

#navBar ul.navbar-nav > li.nav-item.link > a.nav-link {
  position: relative;
}

// Linea en el borde inferior del enlace
#navBar ul.navbar-nav > li.nav-item.link > a.nav-link::before,
#navBar ul.navbar-nav > li.nav-item.link > a.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: $acento--verde-claro;
  transition: 0.3s;
}

#navBar ul.navbar-nav > li.nav-item.link > a.nav-link::before {
  left: 50%;
}

#navBar ul.navbar-nav > li.nav-item.link > a.nav-link::after {
  right: 50%;
}

// Cuando se selecciona el enlace o se pasa el mouse sobre el
#navBar ul.navbar-nav > li.nav-item.link > a.nav-link:hover::before,
#navBar ul.navbar-nav > li.nav-item.link > a.nav-link:hover::after {
  width: 50%;
}

#navBar
  ul.navbar-nav
  > li.nav-item.link
  > a.nav-link.router-link-active::before,
#navBar
  ul.navbar-nav
  > li.nav-item.link
  > a.nav-link.router-link-active::after {
  width: 50%;
}

// --------------------------------------------------
#navBar ul.navbar-nav > li.nav-item.link > a.nav-link:hover {
  color: $green;
}
#navBar ul.navbar-nav > li.nav-item.link > a.nav-link.router-link-active {
  color: $green;
}

.texto--verde {
  color: $green;
}
</style>
