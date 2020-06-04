// Las mutaciones actualizan el estado de la aplicacion
export default {
  AGREGAR_EVENTOS: (state, payload) => {
    state.eventos = payload;
  },
  SETEAR_EVENTO: (state, payload) => {
    state.detallesEvento = payload;
  },
  RESALTAR_CARTA: (state, payload) => {
    if (
      state.cartaSeleccionada.seleccionada === true &&
      state.cartaSeleccionada._id === payload
    ) {
      state.cartaSeleccionada.seleccionada = false;
    } else {
      state.cartaSeleccionada.seleccionada = true;
    }

    state.cartaSeleccionada._id = payload;
  },
  CHEQUEAR_CARTAS: state => {
    if (state.cartaSeleccionada.seleccionada === true) {
      state.cartaSeleccionada.seleccionada = false;
    }
  }
};
