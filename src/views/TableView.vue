<script setup lang="ts">
import type { singleGame, gamesResponse } from "@/types";
import { ref, type Ref } from "vue";
import SortedTable from "@/components/SortedTable.vue";

const games: Ref<singleGame[]> = ref([]);

const getData = async () => {
  try {
    const res = await fetch(
      "https://api-volleyball.p.rapidapi.com/games?league=113&season=2023",
      {
        headers: {
          "x-rapidapi-key":
            "df10653d8bmsh4483ed61b853b26p135ae4jsn28f7cc6f2c6e",
        },
      }
    );
    const data: gamesResponse = await res.json();
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
