<script setup lang="ts">
import { ref } from "vue";
import Form from "./src/sections/Form.vue";
import Header from "./src/sections/Header.vue";
import RacerList from "./src/sections/RacerList.vue";

const racerListRef = ref();
const refreshRacers = () => {
  racerListRef.value?.loadRacers();
};
</script>

<template>
  <div class="min-h-screen w-5/6 m-auto">
    <Header />
    <Form @racer-added="refreshRacers" />
    <ListNames ref="racerListRef" />
    <RacerList />
  </div>
</template>
