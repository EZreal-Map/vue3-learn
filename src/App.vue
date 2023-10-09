<script setup>
import { useUserStore } from '@/stores'

const userStore = useUserStore()
</script>

<template>
  <div>
    <el-button type="primary">{{ userStore.token }}</el-button>
    <el-button type="success" @click="userStore.setToken('hello')"
      >Success</el-button
    >
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<style scoped></style>
