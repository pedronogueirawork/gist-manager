<script setup lang="ts">
import { authenticateToken } from '@/services'
import router from '@/router'
import { RouteNames } from '@/enums'

const authToken = defineModel('authToken')

const authTokenLogin = async () => {
  authenticateToken(authToken.value as string)
  router.push({ name: RouteNames.GISTS })
}
</script>

<template>
  <div class="main-wrapper flex flex-col items-center justify-center">
    <img src="../assets/github.svg" class="mb-12" />
    <div class="bg-white p-12 rounded">
      <div class="mb-6 text-3xl text-center">The Great Gist Manager</div>
      <div class="token-box">
        <div class="border rounded border-slate-300 p-2 mb-3">
          <input
            type="text"
            class="w-full bg-transparent p-2 border border-slate-300 rounded focus:outline-none mb-2"
            placeholder="Your token here"
            v-model="authToken"
          />
          <button class="w-full p-2 bg-green-500 rounded text-white" @click="authTokenLogin">
            Login using token
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  height: 100vh;
}
.token-box {
  width: 400px;
}
</style>
