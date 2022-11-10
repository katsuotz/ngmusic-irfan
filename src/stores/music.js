import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from "@/router/index.js";

export const useMusicStore = defineStore('music', () => {
  const music = ref([])
  const search = ref('')
  function getMusic() {
    router.push('/about')
  }

  return { music, search, getMusic }
})
