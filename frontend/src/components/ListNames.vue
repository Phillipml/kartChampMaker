<script setup lang="ts">
import { getAllRacers, deleteRacer } from "../services/racerService";
import type { Racer } from "../services/racerService";
import { ref, onMounted } from "vue";

const racers = ref<Racer[]>([]);

const loadRacers = async () => {
  racers.value = await getAllRacers();
};
onMounted(async () => {
  try {
    racers.value = await getAllRacers();
  } catch (err) {
    console.log("Can't get racers", err);
  }
});
const handleDelete = async (id: string) => {
  try {
    await deleteRacer(id);
    await loadRacers();
  } catch (err) {
    console.log("Erro ao deletar", err);
  }
};
</script>

<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <li
      class="flex items-center gap-2 px-8 py-2"
      v-for="racer in racers"
      :key="racer._id"
    >
      <img src="../../public/img/star.svg" alt="starDot" class="w-5" />
      <span class="flex-1 text-center">{{ racer.name }}</span>
      <button
        class="w-6 h-6 rounded-full text-red-500 bg-white flex items-center justify-center text-sm"
        title="Excluir"
        @click="handleDelete(racer._id)"
      >
        x
      </button>
    </li>
  </ul>
</template>

<style scoped></style>
