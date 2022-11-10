<script setup>
import IconDollar from "@/components/icons/IconDollar.vue";

const props = defineProps({
  item: {
    type: Object
  },
})
</script>
<template>
  <div class="rounded-lg bg-white shadow-md p-4 flex gap-4">
    <div class="flex-100px">
      <img :src="props.item.artworkUrl100" :alt="props.item.trackName" class="rounded-lg ">
    </div>
    <div class="flex flex-col flex-grow gap-2">
      <div>
        <p class="text-xs font-medium mb-1">{{ props.item.artistName }}</p>
        <p class="font-bold">{{ props.item.trackName }}</p>
      </div>
      <div class="mt-auto flex items-center justify-between">
        <div class="rounded-full bg-green text-white px-4 py-1 text-xs">{{ props.item.primaryGenreName }}</div>
        <div class="flex items-center text-yellow">
          <IconDollar class="w-5 h-5"/>
          <span class="font-bold text-sm ml-2">{{ props.item.trackPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
