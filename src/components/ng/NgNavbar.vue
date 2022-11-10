<script setup>

import IconMenu from "@/components/icons/IconMenu.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconX from "@/components/icons/IconX.vue";
import {useMusicStore} from "@/stores/music.js";
import {RouterLink} from 'vue-router'

const music = useMusicStore()
</script>

<template>
  <div class="fixed top-0 left-0 right-0">
    <nav class="custom-navbar flex justify-between items-center text-white">
      <IconMenu/>
      <RouterLink to="/"><img src="../../assets/logo-text.png" alt=""></RouterLink>
      <IconSearch data-bs-toggle="modal" data-bs-target="#modalSearch"/>
    </nav>
    <span class="custom-navbar-rounded"></span>
  </div>

  <!-- Modal -->
  <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-dialog" id="modalSearch" tabindex="-1" aria-labelledby="modalSearchTitle" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
      <IconX class="text-white absolute right-0 top-0 m-4" data-bs-dismiss="modal" aria-label="Close"/>
      <div class="modal-content relative flex flex-col w-full pointer-events-auto">
        <div class="modal-body relative px-10">
          <form @submit.prevent="() => music.getMusic(1)">
            <p class="text-white font-bold text-2xl text-center mb-8">Search</p>
            <input type="text" class="text-center rounded-full w-full py-2.5 px-4 placeholder-blue-gray-500 mb-4 font-medium" placeholder="Artist / Album / Title" v-model.trim="music.inputSearch"/>
            <button class="bg-gradient-to-r from-primary to-primary-light text-white rounded-full w-full py-2 px-4 font-medium" data-bs-dismiss="modal" aria-label="Search" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
