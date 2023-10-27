<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    eventoClick: Function,
    temporizadorRodando: Boolean,
  }
})
</script>

<template>
  <button class="button" @click="eventoClick" :disabled="temporizadorRodando">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>