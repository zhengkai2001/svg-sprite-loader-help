<template>
  <button class="btn">
    <icon :symbol="this.icon"></icon>
    <slot></slot>
  </button>
</template>

<script>
import Icon from "./icon";

export default {
  name: "Btn",

  props: {
    icon: String    
  },

  components: {
    Icon
  }
};
</script>

<style>
</style>
