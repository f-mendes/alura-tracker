<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: 'Formulario',
  components: {
    Temporizador
  },
  data(){
    return {
      descricao: ''
    }
  },
  methods:{
    finalizarTarefa(tempo: number): void{
      console.log('tempo da tarefa', tempo)
      console.log('descrição da tarefa', this.descricao)
      this.descricao = ''
    }
  }

});
</script>

<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
      </div>
      <Temporizador @aoTemporizador="finalizarTarefa"/>
    </div>
  </div>
</template>

<style scoped>

</style>