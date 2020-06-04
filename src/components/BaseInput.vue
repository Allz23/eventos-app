<template>
  <div>
    <b-row class="text-center align-items-center">
      <b-col class="input-div" :class="{ focus: enfoque }">
        <b-row>
          <!-- Icono -->
          <b-col cols="2" class="i text-center h3">
            <b-icon :icon="icono"> </b-icon>
          </b-col>

          <!-- Textbox -->
          <b-col cols="10">
            <div class="d-flex">
              <h5 v-if="etiqueta">{{ etiqueta }}</h5>
              <b-form-input
                class="input"
                @focus="onFocus"
                @blur="onBlur"
                v-bind="$attrs"
                v-on="$listeners"
                v-model="data"
                :value="data"
              ></b-form-input>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mixinFormulario } from '../mixins/mixinFormulario';
export default {
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.actualizarValor
      };
    }
  },
  data() {
    return {
      data: '',
      enfoque: false
    };
  },
  methods: {
    onFocus() {
      this.enfoque = true;
    },
    onBlur() {
      if (this.data === '') {
        this.enfoque = false;
      }
    }
  },
  mixins: [mixinFormulario]
};
</script>

<style lang="scss" scoped>
.i {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0;
}

.i svg {
  color: #d9d9d9;
  transition: 0.3s;
}

.input-div {
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
  position: relative;
}

.input-div div > h5 {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 18px;
  transition: 0.3s;
}

.input-div > div {
  position: relative;
  height: 40px;
}

/* When the input is focused */
.input-div.focus .i svg {
  color: #38d39f;
}

.input-div.focus div > h5 {
  top: -12px;
  font-size: 15px;
}

.input-div.focus::before,
.input-div.focus::after {
  width: 50%;
}

/* --- Line below the input ---*/
.input-div::before,
.input-div::after {
  content: '';
  position: absolute;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: #38d39f;
  transition: 0.3s;
}

.input-div::before {
  left: 50%;
}

.input-div::after {
  right: 50%;
}
/* -------------------------- */

.input {
  position: absolute;
  width: 90%;
  height: 90%;
  top: 0;
  left: 0;
  border: none;
  outline: none;
  background: none;
  color: #555;
}

.form-control:focus {
  background-color: transparent;
}

@media (min-width: 992px) {
}
</style>
