<script setup>
import {useMusicStore} from "@/stores/music.js";
import {ref} from "vue";
import MusicCard from "@/components/musics/MusicCard.vue";

const music = useMusicStore()
const page = ref(1)
music.getMusic(page.value)

const nextPage = () => {
  page.value++
  music.getMusic(page.value)
}

</script>

<template>
  <div class="p-5">
    <div class="text-center my-5">Search result for : <span class="text-primary text-xl font-bold ml-2">{{ music.search }}</span></div>

    <template v-if="!music.loading && music.musicList.length === 0">
      <p class="text-center">No music found</p>
    </template>
    <template v-else>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3" v-for="item in music.musicList" :key="item.collectionId">
          <MusicCard :item="item"/>
        </div>
      </div>

      <button class="bg-gray-200 text-blue-gray-500 font-medium text-sm rounded-full px-7 py-2 flex items-center mx-auto mt-5" @click="() => nextPage()">
        <span class="animate-ping inline-flex rounded-full bg-blue-gray-500 opacity-75 w-1.5 h-1.5 mr-2" v-if="music.loading"></span>
        {{ music.loading ? 'Loading' : 'Load More ' }}
      </button>
    </template>
  </div>
</template>
