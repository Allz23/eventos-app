export const mixinFormulario = {
  inheritAttrs: false,
  props: {
    etiqueta: {
      type: String,
      default: 'Etiqueta'
    },
    valor: [String, Number],
    icono: {
      type: String,
      default: 'Bootstrap'
    }
  },
  methods: {
    actualizarValor(event) {
      this.$emit('input', event.target.value);
    }
  }
};
