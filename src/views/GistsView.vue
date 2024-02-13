<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGistsList } from '@/reducers'
import type { Gist } from '@/types'
import GistListItem from '../components/atoms/GistListItem.vue'
import GistTemplate from '../components/templates/GistsTemplate.vue'

const gists = ref<Gist[]>()

const loadGistsList = async () => {
  const gistsData = await useGistsList()
  gists.value = gistsData
}

onMounted(() => {
  loadGistsList()
})
</script>

<template>
  <GistTemplate>
    <GistListItem v-for="gist in gists" @reload-list="loadGistsList" :key="gist.id" :gist="gist" />
  </GistTemplate>
</template>
