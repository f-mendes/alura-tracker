<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro  from './Cronometro.vue';
import Button from "./Button.vue";

export default defineComponent({
  name: 'Temporizador',
  components: {
    Cronometro,
    Button
  },
  emits: ['aoTemporizador'],
  data(){
    return {
      temporizador: 0,
      intervaloId: 0,
      temporizadorRodando: false,
    }
  },
  methods:{
    iniciarTarefa(){
      this.temporizadorRodando = true;
      this.intervaloId = setInterval(() => {
        this.temporizador++
      }, 1000)
    },
    pararTarefa(){
      this.temporizadorRodando = false;
      clearInterval(this.intervaloId);
      this.$emit('aoTemporizador', this.temporizador)
      this.temporizador = 0

    }
  }
});
</script>

<template>
  <div class="column">
    <div class="is-flex is-align-items-center is-justify-content-space-between">
      <Cronometro :temporizador="temporizador"/>
      <Button :eventoClick="iniciarTarefa" :temporizadorRodando="temporizadorRodando" >
          <span class="icon">
              <i class="fas fa-play"></i>
          </span>
          <span>play</span>
      </Button>
      <Button :eventoClick="pararTarefa" :temporizadorRodando="!temporizadorRodando" >
          <span class="icon">
              <i class="fas fa-stop"></i>
          </span>
        <span>stop</span>
      </Button>
    </div>
  </div>
</template>

<style scoped>

</style>