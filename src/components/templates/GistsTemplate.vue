<script setup lang="ts">
import router from '@/router'
import { logout } from '@/services'
import { RouteNames } from '@/enums'

const onLogout = async () => {
  await logout()

  router.push('/')
}
</script>

<template>
  <div>
    <nav class="bg-green-500 text-white mb-8">
      <div class="flex items-center container mx-auto">
        <h1 class="text-xl font-bold">The Great Gist Manager</h1>

        <div class="flex flex-grow ml-3">
          <button @click="router.push({ name: RouteNames.GISTS })" class="px-5 py-3 hover:bg-green-700">
            Gists
          </button>
          <button @click="router.push({ name: RouteNames.CREATE })" class="px-5 py-3 hover:bg-green-700">
            Create new Gist
          </button>
        </div>

        <button @click="onLogout" class="px-5 py-3 hover:bg-green-700">Logout</button>
      </div>
    </nav>
    <div class="container mx-auto">
      <slot></slot>
    </div>
  </div>
</template>
