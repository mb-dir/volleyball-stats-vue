<script setup lang="ts">
import { calculatePoints, updateTablePoints } from "@/helpers";
import type { TeamData, TeamPoints, singleGame } from "@/types";
import { ref, type Ref } from "vue";

const props = defineProps<{
  games: singleGame[];
}>();

const table: Ref<TeamData[]> = ref([]);

const teams = [...new Set(props.games.map(game => game.teams.home.name))];

const teamPoints: TeamPoints = {};
teams.forEach(team => {
  teamPoints[team] = 0;
});

const tablePoints: TeamPoints = { ...teamPoints };

teams.forEach(team => {
  props.games.forEach(game => {
    if (game.week.length >= 3) {
      return;
    }
    if (team === game.teams.home.name) {
      const points = calculatePoints(game.scores);
      updateTablePoints(tablePoints, team, points, game.teams.away.name);
    } else if (team === game.teams.away.name) {
      const points = calculatePoints({
        home: game.scores.away,
        away: game.scores.home,
      });
      updateTablePoints(tablePoints, team, points, game.teams.home.name);
    }
  });
});

const sortedTable: TeamData[] = Object.entries(tablePoints)
  .sort(([, pointsA], [, pointsB]) => pointsB - pointsA)
  .map(([team, points]) => ({ team, points }));

table.value = sortedTable;
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>LP.</th>
        <th>Team</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in table" class="table__row" :key="index">
        <td class="table__cell table__cell--small">{{ index + 1 }}</td>
        <td class="table__cell">{{ item.team }}</td>
        <td class="table__cell">{{ item.points }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  width: 80%;
  border-spacing: 3px;
}
.table__row {
  background-color: azure;
}
.table__row:nth-child(2n) {
  background-color: rgb(1, 168, 168);
  color: azure;
}
.table__cell {
  padding: 3px;
}
.table__cell--small {
  width: 25px;
}
</style>
