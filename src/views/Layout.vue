<template>
  <!-- 顶部通栏 -->
  <AppNavBar />
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 吸顶头部组件 -->
  <AppHeaderSticky />
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <RouterView />
  </div>
  <!-- 底部组件 -->
  <AppFooter />
</template>

<script>
import AppNavBar from "@/components/app-navbar.vue";
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import { useStore } from "vuex";
import AppHeaderSticky from '@/components/app-header-sticky.vue'
export default {
  name: "Layout",
  components: {
    AppNavBar,
    AppHeader,
    AppFooter,
    AppHeaderSticky,
  },
  // 获取下分类数据
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
};
</script>

<style>
  .app-body {
    min-height: 600px;
  }
</style>