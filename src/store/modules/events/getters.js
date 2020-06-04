export default {
  obtenerEventoPorId: state => id => {
    return state.eventos.find(evento => evento._id === id);
  }
};
