<script setup>
import {useMusicStore} from "@/stores/music.js";

const music = useMusicStore()
music.search = ''
music.inputSearch = ''
</script>

<template>
  <div class="inset-y-0 w-screen relative bg-gradient-to-b from-primary to-primary-light">
    <img class="absolute inset-x-0 mx-auto inset-y-0 my-auto pointer-events-none" src="../assets/logo.png" alt="ngmusic logo">

    <form @submit.prevent="() => music.handleMusicRouter()" class="absolute bottom-0 p-5 flex flex-col gap-4 left-0 right-0">
      <input type="text" class="text-center rounded-full w-full py-2 px-4 placeholder-blue-gray-500" placeholder="Artist / Album / Title" v-model.trim="music.inputSearch"/>
      <button class="bg-opacity-20 bg-white text-white rounded-full w-full py-2 px-4" type="submit">Search</button>
    </form>
  </div>
</template>
