<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        :default-openeds="openeds"
      >
        <el-sub-menu v-for="sub in asideList" :key="sub.index" :index="sub.index">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ sub.name }}</span>
          </template>
          <el-menu-item-group v-for="group in sub.children" :key="group.name" :title="group.name">
            <el-menu-item
              v-for="item in group.children"
              :key="item.name"
              @click="handleChange(item)"
            >
              {{ item.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main>
      <div id="subapp-viewport"></div>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import router from '@/router'
import { ref } from 'vue'

const openeds = ref([1])

const asideList = ref([
  {
    index: 1,
    name: 'vue',
    children: [
      { name: 'vue2', children: [] },
      { name: 'vue3', children: [{ name: 'app1' }] }
    ]
  }
])

const handleChange = ({ name }: { name: string }) => {
    router.push(`${name}`)
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
</style>
