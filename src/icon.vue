<template>
  <svg>
    <use :xlink:href="'#' + symbol"></use>
  </svg>
</template>

<script>
{
  const _require = require.context('tb-icons/lib/svgs', true, /\.svg$/)
  console.log(_require.keys())
  _require.keys().forEach(key => _require(key))
}

export default {
  name: 'icon',

  props: {
    symbol: String
  }
}
</script>

<style>
</style>
