<script setup>
import {RouterView} from "vue-router";
import NgNavbar from "@/components/ng/NgNavbar.vue";

</script>

<template>
  <NgNavbar/>
  <div class="pt-10">
    <RouterView/>
  </div>
</template>
