import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'nprogress/nprogress.css';
// Estilos personalizados --------------------------
import './assets/scss/index.scss';

// Configuracion de Boostrap-Vue --------------------------
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Filtros -----------------------------------------
import filtroFecha from './filters/fecha';
Vue.filter('fecha', filtroFecha);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Configuración de los mixins globales -------------------
import mixinTitulo from './mixins/cambiarTitulo';
Vue.mixin(mixinTitulo);

Vue.config.productionTip = false;

async function main() {
  store.dispatch('usuarios/mantenerSesionUsuario');

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}

// Llamanos a la funcion principal
main();
