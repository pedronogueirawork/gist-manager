<script setup lang="ts">
import { useGistItem } from '@/reducers'
import { updateGist } from '@/services'
import { useModalStore } from '@/stores'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import { RouteNames } from '@/enums'
import GistTemplate from '../components/templates/GistsTemplate.vue'

const { setModal, toggleModal } = useModalStore()

const route = useRoute()
const gistId = ref<string>()
const gistFileName = ref<string>()
const gistDescription = ref<string>()
const gistContent = ref<string>()

onMounted(async () => {
  const gist = await useGistItem(route.params.id as string)

  gistId.value = gist.id
  gistFileName.value = gist.file.fileName
  gistDescription.value = gist.file.description
  gistContent.value = gist.file.content
})

const onUpdateGist = () => {
  setModal({
    title: 'Warning!',
    content: 'Are you sure you want to save the changes on this Gist?',
    type: 'success',
    successButtonText: 'Update',
    callback: async () => {
      await updateGist(gistId.value!, {
        content: gistContent.value!,
        description: gistDescription.value!,
        fileName: gistFileName.value!
      })

      toggleModal()
      router.push({ name: RouteNames.GISTS })
    }
  })

  toggleModal()
}
</script>

<template>
  <GistTemplate>
    <div class="flex flex-col">
      <div class="flex flex-col">
        <span>Description</span>
        <input v-model="gistDescription" type="text" class="p-2 rounded focus:outline-none mb-2" />
      </div>
      <div class="flex flex-col">
        <span>Content</span>
        <textarea v-model="gistContent" class="p-2 h-80 rounded focus:outline-none mb-5"></textarea>
      </div>
      <button class="w-full p-2 bg-green-500 rounded text-white" @click="onUpdateGist">
        Update Gist
      </button>
    </div>
  </GistTemplate>
</template>
