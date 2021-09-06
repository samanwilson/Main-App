<template>
  <transition name="fade" appear>
  <router-view v-slot="{Component}">
    <Component :is="Component" ></Component>
  </router-view>
  </transition>
</template>
<script>

  export default {
    data() {
        return {
        }
    }
  }
</script>

<style>

  .fade-enter-from{
    opacity: 0;
    transform: scale(3);
  }
  .fade-enter-to{
    opacity: 1;
    transform: scale(1);
  }
  .fade-enter-active{
    transition: 2s ease;
  }
</style>
