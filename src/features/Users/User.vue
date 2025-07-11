<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useUsersStore} from "@/features/Users/usersStore.ts";
import {useRoute} from "vue-router";
import type {User} from "@/features/Users/types/types.ts";



const usersStore = useUsersStore()
const user = ref<null|User>(null)
const route = useRoute()
onMounted(async ()=>{
  user.value = await usersStore.getSingleUser(Number(route.params.id)) as User
})
</script>

<template>
  <div v-if="!user" class="loader"/>
  <div v-else class="flex flex-col items-center">
    <div class="w-[30vh]">
      <img class="w-full h-full rounded-full" :src="user.avatar" alt="user-avatar">
    </div>
    <h1 class="title">{{user.first_name}} {{user.last_name}}</h1>
    <h2 class="subtitle">email: {{user.email}}</h2>
  </div>
</template>

<style scoped>
.title{
  font-size: clamp(4rem, 6vh, 6rem);
  color: var(--color-heading)
}
.subtitle{
  font-size: clamp(2rem, 6vh, 3rem);
}
</style>