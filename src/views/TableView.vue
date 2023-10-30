<script setup lang="ts">
import type { singleGame, gamesResponse } from "@/types";
import { ref, type Ref } from "vue";
import SortedTable from "@/components/SortedTable.vue";
import axios from "../axios";
import { PLUSLIGA_DATA } from "../enums";
const games: Ref<singleGame[]> = ref([]);

const getData = async () => {
  try {
    const { data } = await axios.get<gamesResponse>("/games", {
      params: { league: PLUSLIGA_DATA.ID, season: PLUSLIGA_DATA.SEASON },
    });
    games.value = data.response;
  } catch (error) {
    console.log(error);
  }
};

getData();
</script>

<template>
  <main class="mainContainer">
    <SortedTable v-if="games.length" :games="games" />
    <p v-else>Loading...</p>
  </main>
</template>

<style scoped>
.mainContainer {
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
</style>
