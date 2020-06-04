// Dado que el navegador solo necesita una instancia de Axios, la creamos en este archivo. E importamos las llamdas que necesite la app comom funciones.
import axios from 'axios';
import qs from 'qs';

// Insta
const axiosCall = axios.create({
  baseURL: `http://localhost:80`,
  withCredentials: true,
  headers: {
    credentials: 'same-origin'
  }
});

// API calls
export default {
  // GET Calls --------------------------------------------
  async getMainPage() {
    const response = await axiosCall({
      method: 'GET',
      url: '/',
      headers: {
        credentials: 'same-origin'
      }
    });

    // console.log(response.data);
    return response.data;
  },

  async verificarSesion() {
    const respuesta = await axiosCall({
      method: 'GET',
      url: '/usuario',
      headers: {
        credentials: 'same-origin'
      }
    });
    return respuesta.data;
  },
  // POST Calls --------------------------------------------
  async ingresarUsuario(nombre, contraseña) {
    const respuesta = await axiosCall({
      method: 'post',
      url: '/login',
      data: qs.stringify({
        usuario: nombre,
        contraseña: contraseña
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    });

    return respuesta.data;
  },

  async cerrarSesion() {
    await axiosCall({
      method: 'POST',
      url: '/cerrar-sesion'
    });
  }
};
