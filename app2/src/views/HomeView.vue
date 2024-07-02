<template>
  <el-container>
    <el-header>这里是app2的首页</el-header>
    <el-header>vue2 + vite</el-header>
    <el-header><el-button @click="pageGo">页面跳转测试</el-button></el-header>
    <el-main>
      <h3>组件测试</h3>
      <form-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormView from '@/components/FormView.vue';

@Component({ name: 'Index', components: { FormView } })
export default class Index extends Vue {
  public pageGo() {
    this.$router.push('/next')
  }
}
</script>

<style lang="scss" scoped></style>
