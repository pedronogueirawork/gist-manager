<script setup lang="ts">
import { useModalStore } from '@/stores'
import { storeToRefs } from 'pinia'

const store = useModalStore()
const { modalContent } = storeToRefs(store)
const { toggleModal } = store
</script>

<template>
  <div class="bg-white w-96 mx-auto p-4 rounded mt-14">
    <div class="text-2xl font-bold pb-1 border-b">{{ modalContent?.title }}</div>
    <div class="py-2">{{ modalContent?.content }}</div>
    <div class="pt-3 border-t flex">
      <div class="flex space-x-2 flex-grow">
        <button
          v-if="modalContent?.type === 'error'"
          @click="modalContent.callback"
          class="p-2 border bg-red-600 rounded text-white"
        >
          {{ modalContent.errorButtonText }}
        </button>
        <button
          v-if="modalContent?.type === 'success'"
          @click="modalContent.callback"
          class="p-2 border rounded bg-green-600 text-white"
        >
          {{ modalContent.successButtonText }}
        </button>
      </div>
      <button @click="toggleModal" class="p-2 border rounded">Close</button>
    </div>
  </div>
</template>
