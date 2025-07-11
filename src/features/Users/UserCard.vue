<script setup lang="ts">
import type {User} from "@/features/Users/types/types.ts";

type Props = {
  user: User
  removeUser: (userID: number) => void
}
const {user, removeUser} = defineProps<Props>()

const removeHandler =(e: Event)=>{
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
          <svg
              class="card__remove"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M17 12C17 11.4477 16.5523 11 16 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H16C16.5523 13 17 12.5523 17 12Z"/>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
            />
          </svg>
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