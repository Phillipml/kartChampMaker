<script setup lang="ts">
defineProps<{ txtBtn: string }>();
</script>

<template>
  <button
    type="submit"
    class="px-8 py-1 mx-auto mt-8 mb-4 text-2xl bg-white border-2 border-black rounded-lg transition duration-200"
  >
    {{ txtBtn }}
  </button>
</template>

<style scoped></style>
