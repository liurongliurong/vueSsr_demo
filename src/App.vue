<template>
    <div id="app" class="container">
        <win-header></win-header>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
import WinHeader from '@/components/header'
export default {
  name: 'app',
  components: {
    WinHeader
  }
}
</script>

<style>
</style>
