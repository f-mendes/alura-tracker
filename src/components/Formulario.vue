<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Formulario',
  data(){
    return {
      temporizador: 0,
      intervaloId: 0,
    }
  },
  computed:{
    tempoFormatado(): string {
      return new Date(this.temporizador * 1000).toISOString().substr(11,8);
    }
  },
  methods:{
    iniciarTarefa(){
      this.intervaloId = setInterval(() => {
        this.temporizador++
      }, 1000);
    },
    pararTarefa(){
      clearInterval(this.intervaloId);

    }
  }
});
</script>

<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <strong>{{ tempoFormatado }}</strong>
          <button class="button" @click="iniciarTarefa">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="pararTarefa">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>