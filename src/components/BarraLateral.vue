
<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo">
    </h1>
    <Button :evento-click="alterarTema" :class="button">
      {{ labelButton }}
    </Button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from "@/components/Button.vue";

export default defineComponent({
  name: 'BarraLateral',
  components: {Button},
  emits: ['aoTemaAlterado'],
  data() {
    return {
      temaEscuro: false,
    }
  },
  computed: {
    labelButton () {
      return this.temaEscuro ? 'Desativar modo escuro' : 'Ativar modo escuro'
    },
  },
  methods: {
    alterarTema() {
      this.temaEscuro = !this.temaEscuro
      this.$emit('aoTemaAlterado', this.temaEscuro)
    }
  }
})
</script>

<style scoped>
  header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }

</style>