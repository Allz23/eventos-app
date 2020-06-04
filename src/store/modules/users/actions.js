// Las acciones son funciones asincronas que llaman mutaciones
import router from '@/router/index';
import servicioAxios from '@/services/ServicioAxios';

export default {
  aggInfoUsuario: async ({ commit }, datos) => {
    try {
      const { nombre, contraseña } = datos;
      const dataUsuario = await servicioAxios.ingresarUsuario(
        nombre,
        contraseña
      );

      const { _id, usuario } = dataUsuario;

      const payload = {
        _id,
        usuario
      };

      commit('DATOS_USUARIO', payload);

      router.replace({ name: 'principal' });
    } catch (error) {
      console.error(`Ha ocurrido un error: ${error}`);
    }
  },

  mantenerSesionUsuario: async ({ commit }) => {
    try {
      const dataUsuario = await servicioAxios.verificarSesion();

      if (dataUsuario) {
        const { _id, usuario } = dataUsuario;

        const payload = {
          _id,
          usuario
        };

        commit('DATOS_USUARIO', payload);
      }
    } catch (error) {
      console.error(`Ha ocurrido un error: ${error}`);
    }
  },

  cerrarSesion: async ({ commit }) => {
    await servicioAxios.cerrarSesion();
    commit('REMOVER_USUARIO');
    router.replace({ name: 'bienvenida' });
  }
};
