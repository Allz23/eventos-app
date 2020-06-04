<template>
  <b-container>
    <b-row class="mt-3" align-v="center">
      <b-col>
        <img
          src="../assets/img/undraw_unlock_24mb.svg"
          alt="inicio sesion"
          height="450"
          width="450"
        />
      </b-col>

      <b-col>
        <b-row>
          <b-col>
            <h2 class="text-center">¡Bienveni@!</h2>
            <h3 class="h5 text-center">
              Ingrese sus datos para iniciar sesión:
            </h3>
            <b-form @submit.prevent="ingresoUsuario">
              <b-form-row align-h="center">
                <b-col>
                  <BaseInput
                    etiqueta="Usuario"
                    type="text"
                    v-model="formulario.nombre"
                    icono="person-fill"
                  />
                </b-col>
              </b-form-row>

              <b-form-row align-h="center">
                <b-col>
                  <BaseInput
                    etiqueta="Contraseña"
                    type="password"
                    v-model="formulario.contraseña"
                    icono="lock-fill"
                  />
                </b-col>
              </b-form-row>

              <b-form-row class="mt-3">
                <b-col cols="2" offset="10">
                  <b-button type="submit" variant="outline-success" class="mx-2"
                    >Ingresar</b-button
                  >
                </b-col>
              </b-form-row>
            </b-form>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
// Importamos las acciones del módulo "usuarios"
const {
  mapActions: usuarioActions,
  mapState: usuarioState
} = createNamespacedHelpers('usuarios');

import BaseInput from '@/components/BaseInput';
export default {
  computed: {
    ...usuarioState(['sesion'])
  },
  components: {
    BaseInput
  },
  data() {
    return {
      formulario: {
        nombre: '',
        contraseña: ''
      }
    };
  },
  methods: {
    ...usuarioActions(['aggInfoUsuario']),
    async ingresoUsuario() {
      try {
        // Llamamos a la accion, y le pasamos los datos del formulario.
        this.aggInfoUsuario(this.formulario);

        this.formulario = {
          nombre: '',
          contraseña: ''
        };
      } catch (error) {
        console.log(error);
      }
    }
  },
  title: 'Vue Mastery App | Iniciar sesión'
};
</script>

<style></style>
