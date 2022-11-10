import { ref } from 'vue'
import { defineStore } from 'pinia'
import {useRoute, useRouter} from "vue-router";
import api from "@/lib/api.js";

export const useMusicStore = defineStore('music', () => {
  const route = useRoute()
  const router = useRouter()

  const musicList = ref([])
  const search = ref(route.query.search || '')
  const inputSearch = ref(route.query.search || '')
  const offset = ref(0)
  const limit = 4
  const loading = ref(false)

  function handleMusicRouter () {
    router.push({
      path: '/search',
      query: {
        search: search.value,
      }
    })
  }

  async function getMusic(page = 1) {
    if (page === 1) {
      musicList.value = []
      offset.value = 0
    }

    search.value = inputSearch.value
    loading.value = true

    handleMusicRouter()

    offset.value = (page - 1) * limit

    let res = await api.get('/search', {
      params: {
        term: search.value,
        limit,
        offset: offset.value,
      }
    })

    musicList.value = [
      ...musicList.value,
      ...res.results,
    ]

    loading.value = false
  }

  return { musicList, search, inputSearch, getMusic, handleMusicRouter, loading }
})
