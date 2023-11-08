<script lang="ts">
import { defineComponent, computed } from 'vue';
import Temporizador from "./Temporizador.vue";
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  name: 'Formulario',
  components: {
    Temporizador
  },
  emits: ['aoSalvar'],
  data(){
    return {
      descricao: '',
      idProjeto: ''
    }
  },
  methods:{
    finalizarTarefa(tempo: number): void{
      this.$emit('aoSalvar', {
        tempo: tempo,
        descricao: this.descricao,
        projeto: this.projetos.find(projeto => projeto.id === this.idProjeto)
      })
      this.descricao = ''
    }
  },
  setup(){
    const store = useStore(key)
    return {
      projetos: computed(() => store.state.projetos)
    }
  }

});
</script>

<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
                :value="projeto.id"
                v-for="projeto in projetos"
                :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <Temporizador @aoTemporizador="finalizarTarefa"/>
    </div>
  </div>
</template>

<style>

.formulario{
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>