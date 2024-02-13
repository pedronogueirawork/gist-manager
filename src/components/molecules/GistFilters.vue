<script setup lang="ts">
import { ref, watch } from 'vue'

const search = ref<string>()
const emit = defineEmits(['filtersChanged'])

watch(search, () => {
  emit('filtersChanged', search.value)
})
</script>

<template>
  <div class="mb-5">
    <input
      v-model="search"
      class="w-full px-2 py-1 rounded focus:outline-none"
      type="text"
      placeholder="search"
    />
  </div>
</template>
