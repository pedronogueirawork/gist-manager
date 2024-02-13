<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGistsList, filterGistsByName } from '@/reducers'
import type { Gist } from '@/types'
import GistTemplate from '../components/templates/GistsTemplate.vue'
import GistListItem from '../components/atoms/GistListItem.vue'
import GistFilters from '../components/molecules/GistFilters.vue'

const gists = ref<Gist[]>()
const filteredGists = ref<Gist[]>()

const loadGistsList = async () => {
  const gistsData = await useGistsList()
  gists.value = filterGistsByName(gistsData, '')
  filteredGists.value = filterGistsByName(gistsData, '')
}

const onFiltersChanged = (search: string) => {
  filteredGists.value = filterGistsByName(gists.value!, search)
}

onMounted(() => {
  loadGistsList()
})
</script>

<template>
  <GistTemplate>
    <GistFilters @filters-changed="onFiltersChanged" />
    <GistListItem
      v-for="gist in filteredGists"
      @reload-list="loadGistsList"
      :key="gist.id"
      :gist="gist"
    />
  </GistTemplate>
</template>
