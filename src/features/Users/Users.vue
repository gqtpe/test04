<script setup lang="ts">
import UserCard from "@/features/Users/UserCard.vue";
import {useUsersStore} from "@/features/Users/usersStore.ts";
import useEndlessLoading from "@/features/Application/hooks/useEndlessLoading.ts";

const usersStore = useUsersStore()
const triggerReached = () => {
    usersStore.fetchNewPortion()
}

const {trigger} = useEndlessLoading(triggerReached, usersStore.users)

</script>

<template>
  <div v-if="usersStore.loading === 'pending'" class="linear-loading"></div>
  <div class="users ">
    <div class="users__wrapper wrapper">
      <UserCard
          class="col-span-4 max-sm:col-span-12"
          v-for="user in usersStore.users"
          :user="user"
          :removeUser="usersStore.removeUser"
      />
    </div>
    <div v-if="!usersStore.hideTrigger" class="trigger" :ref="trigger">
      <div class="loader"/>
    </div>
  </div>
</template>

<style>
.users {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.trigger {
  padding: 0.5rem;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 50vh;
  gap: 1rem;
  padding: 1rem;
}
.linear-loading {
  height: 4px;
  background-color: var(--color-cyan-500);
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 6px;
    background-color: white;
    width: 50%;
    top: -1px;
    left: 0;
    animation: slide-away 3s infinite linear;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 6px;
    background-color: white;
    width: 25%;
    top: -1px;
    left: 0;
    animation: slide-away 2s infinite linear;
  }
}
@keyframes slide-away {
  0%   {transform: translate(-100%,0)}
  100% {transform: translate(400%,0)}
}

</style>