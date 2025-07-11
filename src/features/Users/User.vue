<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUsersStore } from "@/features/Users/usersStore.ts";
import { useRoute } from "vue-router";
import type { User } from "@/features/Users/types/types.ts";

const usersStore = useUsersStore();
const user = ref<null | User>(null);
const route = useRoute();

onMounted(async () => {
  user.value = await usersStore.getSingleUser(Number(route.params.id)) as User;
});
</script>

<template>
  <div v-if="!user" class="loader" />

  <div v-else class="user-detail">
    <div class="user-detail__avatar">
      <img
          class="user-detail__img"
          :src="user.avatar"
          :alt="`${user.first_name} ${user.last_name}`"
      />
    </div>
    <h1 class="user-detail__name">{{ user.first_name }} {{ user.last_name }}</h1>
    <h2 class="user-detail__email">Email: {{ user.email }}</h2>
  </div>
</template>

<style scoped>
.user-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2rem 1rem;
  text-align: center;
}

.user-detail__avatar {
  width: clamp(120px, 30vh, 200px);
  aspect-ratio: 1 / 1;
}

.user-detail__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.user-detail__name {
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: var(--color-heading);
  margin: 0;
}

.user-detail__email {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: var(--color-text, #555);
  margin: 0;
}
</style>
