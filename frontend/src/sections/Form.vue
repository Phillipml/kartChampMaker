<script setup lang="ts">
import { ref } from "vue";
import { addRacer, getAllRacers } from "../services/racerService";
import type { Racer } from "../services/racerService";

const newRacer = ref("");
const racers = ref<Racer[]>([]);
const emit = defineEmits(["racer-added"]);

const handleAdd = async () => {
  if (!newRacer.value.trim()) return;
  racers.value = await getAllRacers();
  if (racers.value.length >= 24) {
    alert("Min 10 and max 24 racers!");
    return;
  }
  try {
    await addRacer(newRacer.value.toUpperCase());
    newRacer.value = "";
    emit("racer-added");
  } catch (err) {
    console.error("Error:", err);
  }
};
</script>

<template>
  <div>
    <form
      class="flex flex-col items-center w-5/6 m-auto"
      @submit.prevent="handleAdd"
    >
      <input
        v-model="newRacer"
        type="text"
        name="newRacer"
        id="newRacer"
        placeholder="New Racer"
        class="text-center w-80 mt-2 py-1 border-2 border-black rounded-lg"
      />
      <Button :txtBtn="'Register'" />
    </form>
  </div>
</template>

<style scoped></style>
