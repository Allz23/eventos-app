import Vue from 'vue';
import Vuex from 'vuex';

// Modulos de la tienda
import eventos from './modules/events/index';
import usuarios from './modules/users/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    eventos,
    usuarios
  }
});
