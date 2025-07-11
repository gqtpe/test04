<script setup lang="ts">
import Users from "@/features/Users/Users.vue";
import useAppToasts from "@/features/Application/hooks/useAppToasts.ts";

useAppToasts();
</script>

<template>
  <RouterView/>
</template>

<style scoped>

</style>
