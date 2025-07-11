<script setup lang="ts">
import type {User} from '@/features/Users/types/types.ts';
import RemoveIcon from './remove.svg?component';

type Props = {
  user: User
  removeUser: (userID: number) => void
}
const {user, removeUser} = defineProps<Props>()

const removeHandler = (e: Event) => {
  e.preventDefault();
  removeUser(user.id)
}
</script>

<template>
  <RouterLink class="card" :to="`/user/${user.id}`">
    <div class="card__image image-wp">
      <img :src="user.avatar" alt="user-ava">
    </div>
    <div class="flex justify-between">
      <div class="card__title">{{ user.first_name }} {{ user.last_name }}</div>
      <button @click="removeHandler">
        <RemoveIcon class="card__remove"/>
      </button>
    </div>
    <div class="card__subtitle">{{ user.email }}</div>
  </RouterLink>

</template>

<style>
.card {
  .card__title {
    color: var(--color-heading);
    font-size: 1.5rem;
  }
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  background: var(--color-background-mute);
  flex-direction: column;

  .card__remove {
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-text);
    cursor: pointer;
    transition: fill, 0.2s ease-in-out;

    &:hover {
      fill: tomato;
    }
  }

  .card__image {
    border-radius: 1rem;
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>