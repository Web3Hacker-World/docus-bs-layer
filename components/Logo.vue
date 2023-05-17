<script setup lang="ts">
const { config } = useDocus()
</script>
<template>
  <div text-green-500 font-bold text-2xl>
    {{ config.title }}
  </div>
</template>