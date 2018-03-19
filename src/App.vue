<template>
  <div id="app">
    <btn icon="menu"></btn>
    <btn icon="remove"></btn>

    <icon symbol="menu"></icon>
    <icon symbol="remove"></icon>

    <svg>
      <use xlink:href="#twitter"></use>
    </svg>
  </div>
</template>

<script>
import Btn from './btn.vue'
import Icon from './icon.vue'

export default {
  name: "app",
  components: {
    Btn,
    Icon
  }
};
</script>

<style>
</style>
