<template>
  <el-button @click="pageToHome">前往主页</el-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const pageToHome = () => {
  router.push('/home')
}
</script>
