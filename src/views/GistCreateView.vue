<script setup lang="ts">
import { createGist } from '@/services'
import { ref } from 'vue'
import router from '@/router'
import { RouteNames } from '@/enums'

const gistFileName = ref<string>()
const gistDescription = ref<string>()
const gistContent = ref<string>()

const onCreateGist = async () => {
  await createGist({
    content: gistContent.value!,
    description: gistDescription.value!,
    fileName: gistFileName.value!
  })

  router.push({ name: RouteNames.GISTS })
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <span>File Name</span>
      <input v-model="gistFileName" type="text" class="p-2 rounded focus:outline-none mb-2" />
    </div>
    <div class="flex flex-col">
      <span>Description</span>
      <input v-model="gistDescription" type="text" class="p-2 rounded focus:outline-none mb-2" />
    </div>
    <div class="flex flex-col">
      <span>Content</span>
      <textarea v-model="gistContent" class="p-2 h-80 rounded focus:outline-none mb-5"></textarea>
    </div>
    <button class="w-full p-2 bg-green-500 rounded text-white" @click="onCreateGist">
      Create Gist
    </button>
  </div>
</template>
