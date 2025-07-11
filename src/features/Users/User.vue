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
  console.log(user.value)
})
</script>

<template>
  <div v-if="!user" class="loader"/>
  <div v-else>
    <div>
      <img :src="user.avatar" alt="user-avatar">
    </div>
    <div>{{user.first_name}} {{user.last_name}}</div>
    <div>email: {{user.email}}</div>
  </div>
</template>

<style scoped>

</style>