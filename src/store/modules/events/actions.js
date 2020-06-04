// Las acciones son funciones asincronas que llaman mutaciones
import servicioAxios from '@/services/ServicioAxios';

export default {
  aggEventos: async ({ commit }) => {
    // Para poder usar la 'navigation guard' de la ruta, esta accion debe retornar una promesa
    return servicioAxios
      .getMainPage()
      .then(respuesta => {
        const payload = respuesta.datos;
        commit('AGREGAR_EVENTOS', payload);
      })
      .catch(error => {
        console.error(error);
      });
  },
  pasarEvento: async ({ commit, getters, state }, _id) => {
    if (_id === state.eventos._id) {
      return state.eventos;
    }

    let evento = getters.obtenerEventoPorId(_id);
    let id = _id;

    if (evento) {
      commit('SETEAR_EVENTO', evento);
      commit('RESALTAR_CARTA', id);
      return evento;
    }
  },
  clicEnContenedor: ({ commit }) => {
    commit('CHEQUEAR_CARTAS');
  }
};
