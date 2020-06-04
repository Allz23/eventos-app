import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
// Componentes denominados vistas/paginas
import MostrarEvento from '@/views/MostrarEvento';
import CrearEvento from '@/views/CrearEvento';
import Principal from '@/views/PaginaBienvenida';
import ListaEventos from '@/views/ListaEventos';
import InicioSesion from '@/views/InicioSesion';

// import estadoUsuario from '../store/modules/users/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'bienvenida',
    component: Principal
  },
  {
    path: '/principal',
    name: 'principal',
    component: ListaEventos,
    meta: { privada: true }
  },
  {
    path: '/login',
    name: 'inicio-sesion',
    component: InicioSesion,
    meta: { visitante: true }
  },
  {
    path: '/evento/:id',
    name: 'evento',
    component: MostrarEvento,
    props: true,
    meta: { privada: true }
  },
  {
    path: '/crear',
    name: 'crear-evento',
    component: CrearEvento,
    meta: { privada: true }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Guardias de navegacion en las rutas
router.beforeEach((to, from, next) => {
  NProgress.start();
  // Es recomendado usar este metodo para verificar las rutas
  // if (to.matched.some(r => r.meta.privada) && !estadoUsuario.usuario) {
  //   next({
  //     name: 'inicio-sesion',
  //     // Usado para redirigir al usuario a su ruta deseada
  //     params: {
  //       wantedRoute: to.fullPath
  //     }
  //   });
  //   return;
  // }

  // if (to.matched.some(r => r.meta.visitante) && estadoUsuario.usuario) {
  //   next({ name: 'principal' });
  //   return;
  // }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
