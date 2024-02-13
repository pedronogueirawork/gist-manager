<script setup lang="ts">
import type { Gist } from '@/types'
import router from '@/router'
import { deleteGist } from '@/services'
import { RouteNames } from '@/enums'
import { useModalStore } from '@/stores'

const { setModal, toggleModal } = useModalStore()

defineProps<{
  gist: Gist
}>()

const emit = defineEmits(['reloadList'])

const onEditGist = async (id: string) => {
  router.push({
    name: RouteNames.EDIT,
    params: {
      id
    }
  })
}

const onDeleteGist = async (id: string) => {
  setModal({
    title: 'Warning!',
    content: 'Are you sure you want to delete this Gist?',
    type: 'error',
    errorButtonText: 'Delete',
    callback: async () => {
      await deleteGist(id)
      toggleModal()
      emit('reloadList')
    }
  })

  toggleModal()
}
</script>
<template>
  <div class="bg-white p-2 mb-5 rounded flex">
    <img width="100" src="../../assets/github.svg" />
    <div class="px-3 grow flex flex-col justify-between">
      <div class="flex flex-col">
        <span class="text-xl font-bold mb-1">{{ gist.file.fileName }}</span>
        <span class="text-sm">{{ gist.file.description }}</span>
      </div>
      <div class="flex text-xs justify-between">
        <span>Created At: {{ gist.createdAt }}</span>
        <span>Last Update At: {{ gist.updatedAt }}</span>
      </div>
    </div>
    <div class="flex space-x-2 justify-center px-3">
      <button @click="onEditGist(gist.id)">
        <img width="20" src="../../assets/edit.svg" alt="Edit Item" />
      </button>
      <button @click="onDeleteGist(gist.id)">
        <img width="20" src="../../assets/delete.svg" alt="Delete Item" />
      </button>
    </div>
  </div>
</template>
