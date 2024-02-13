<script setup lang="ts">
import ModalCard from '../atoms/ModalCard.vue'
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores'

const store = useModalStore()
const { isModalActive } = storeToRefs(store)
</script>

<template>
  <div class="modal-wrapper" v-show="isModalActive">
    <ModalCard />
  </div>
</template>

<style scoped>
.modal-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(60, 60, 60, 0.5);
}
</style>
