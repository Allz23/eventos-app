<template>
  <div>
    <b-row>
      <h2>Creación de eventos</h2>
    </b-row>

    <b-form @submit.prevent="guardarEvento">
      <b-form-row>
        <b-col>
          <b-form-row>
            <b-col cols="10">
              <h3 class="mt-4 h4">¿De que categoria es su evento?</h3>
              <b-form-select
                v-model="valorForm.seleccionado"
                :options="opciones"
                size="sm"
                class="mt-3"
              ></b-form-select>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="10">
              <h3 class="mt-4 h4">Dele nombre y describa su evento</h3>
              <BaseInput
                etiqueta="Titulo"
                type="text"
                v-model="valorForm.titulo"
                icono="card-heading"
              />
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="10">
              <BaseInput
                etiqueta="Descripción"
                type="text"
                v-model="valorForm.descripcion"
                icono="card-text"
              />
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="10">
              <h3 class="mt-4 h4">¿Donde es su evento?</h3>
              <BaseInput
                etiqueta="Localización"
                type="text"
                v-model="valorForm.localizacion"
                icono="geo"
              />
            </b-col>
          </b-form-row>
        </b-col>

        <b-col>
          <b-form-row align-v="center">
            <b-col cols="10">
              <h3 class="mt-4 h4">¿Cuando es su evento?</h3>
              <b-form-datepicker
                placeholder="Seleccione una fecha"
                id="example-datepicker"
                v-model="valorForm.fecha"
                class="my-3"
              ></b-form-datepicker>

              <b-form-timepicker
                placeholder="Seleccione una hora"
                v-model="valorForm.hora"
                locale="en"
                class="my-3"
              ></b-form-timepicker>
            </b-col>
          </b-form-row>

          <b-form-row class="mt-1" align-h="center">
            <b-col cols="4">
              <b-button type="submit" variant="outline-success" class="mx-2"
                >Guardar evento</b-button
              >
            </b-col>
          </b-form-row>

          <b-row class="mt-3" align-h="center" align-v="center">
            <img
              src="../assets/img/undraw_events_2p66.svg"
              alt="Eventos"
              height="300"
              width="400"
            />
          </b-row>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput';
export default {
  components: {
    BaseInput
  },
  data() {
    return {
      valorForm: {
        fecha: '',
        hora: '',
        titulo: '',
        descripcion: '',
        localizacion: '',
        seleccionado: null
      },
      opciones: [
        { value: null, text: 'Seleccione una categoría' },
        { value: 'Evento Animal', text: 'Evento Animal' },
        { value: 'Naturaleza', text: 'Naturaleza' },
        { value: 'Cumpleaños', text: 'Cumpleaños' },
        { value: 'Trabajo', text: 'Trabajo' }
      ]
    };
  },
  methods: {
    async guardarEvento() {
      console.log(this.valorForm);
    }
  },
  title: 'Vue Mastery App | Crear Evento'
};
</script>

<style></style>
