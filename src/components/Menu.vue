<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navigation">
    <h1 class="mainHeader">
      <RouterLink class="mainHeader__link" to="/">Volley-stats</RouterLink>
    </h1>
    <ul class="mainMenu">
      <li>
        <RouterLink class="mainMenu__link" to="/tabela">Tabela</RouterLink>
      </li>
      <li><RouterLink class="mainMenu__link" to="/mecze">Mecze</RouterLink></li>
      <li><RouterLink class="mainMenu__link" to="/kluby">Kluby</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mainHeader__link {
  text-decoration: none;
  color: black;
  font-size: 32px;
}
.mainMenu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
  margin-right: 20px;
  list-style: none;
}
.mainMenu__link {
  color: black;
  text-decoration: none;
  font-size: 20px;
}
</style>
