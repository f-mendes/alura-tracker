<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Cronometro',
    props: {
      temporizador: {
        type: Number,
        default: 0
      }
    },
    computed:{
      tempoFormatado(): string {
        return new Date(this.temporizador * 1000).toISOString().substr(11,8);
      }
    },
  })
</script>

<template>
  <strong>{{ tempoFormatado }}</strong>
</template>

<style scoped>

</style>