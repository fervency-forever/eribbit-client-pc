<template>
  <!-- 首页入口（分类 + 广告） -->
  <div class="home-entry">
      <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
    <xtxSkeleton width="200px" height="200px" bg="red" animated />
  </div>
  <!-- 新鲜好物 -->
  <HomeNew />
  <!-- 人气推荐 -->
  <HomeHot />
  <!-- 使用transition组件 -->
  <button @click="show=true">显示｜创建</button>
  <button @click="show=false">隐藏｜移除</button>
  <Transition>
    <div v-show="show" style="width:100px;height:100px;background:red"></div>
  </Transition>
  <Transition name="h">
    <div v-show="show" style="width:100px;height:100px;background:red"></div>
  </Transition>
</template>

<script>
import { ref } from 'vue'
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot'
export default {
  name: 'HomePage',
  components :{
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
  },
  setup() {
    const show = ref(true)
    return { show }
  }
}
</script>

<style scoped lang="less">
// 如果需要多组动画，给transition加上name属性 name="xxx"
// 其他6个类型写法：xxx-enter-from xxx-enter-active xxx-enter-to
// --------------- xxx-leave-from xxx-leave-active xxx-leave-to
// 进入 vue2.0 v-enter v-enter-active v-enter-to
// 进入 vue3.0 v-enter-from v-enter-active v-enter-to
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: all 2s;
}
.v-enter-to {
  opacity: 1;
}
// 离开 v-leave v-leave-active v-leave-to
// 离开 vue3.0 v-leave v-leave-active v-leave-to
.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: all 2s;
}
.v-leave-to {
  opacity: 0;
}
// h 的动画
.h-enter-from {
  height: 0;
  opacity: 0;
}
.h-enter-active {
  transition: all 2s;
}
.h-enter-to {
  height: 100px;
  opacity: 1;
}
// 离开 v-leave v-leave-active v-leave-to
// 离开 vue3.0 v-leave v-leave-active v-leave-to
.h-leave-from {
  height: 100px;
  opacity: 1;
}
.h-leave-active {
  transition: all 2s;
}
.h-leave-to {
  height: 0px;
  opacity: 0;
}
</style>