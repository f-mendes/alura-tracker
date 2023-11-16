<script lang="ts">
import {defineComponent} from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'Projetos',
  props: {
    id: String
  },
  mounted() {
    if(this.id){
     const projeto = this.store.state.projetos.find(projeto => projeto.id === this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data() {
    return {
      nomeDoProjeto: '',
    }
  },
  methods: {
    salvar() {
      if(this.id){
        this.store.commit('ATUALIZAR_PROJETO', {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      }else{
        this.store.commit('ADICIONAR_PROJETOS', this.nomeDoProjeto)
      }

      this.nomeDoProjeto = ''
      this.$router.push('/projetos')
    }
  },
  setup(){
    const store = useStore()
    return {
      store,
    }
  }
})
</script>

<template>
  <section >
    <form @submit.prevent="salvar">
      <div class="field">
        <label class="label" for="nomeDoProjeto">Nome do projeto</label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
      </div>
      <div class="field">
        <button class="button" type="submit">Criar projeto</button>
      </div>
    </form>

  </section>
</template>
