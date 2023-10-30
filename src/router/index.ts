import { createRouter, createWebHistory } from "vue-router";

import GamesView from "../views/GamesView.vue";
import HomeView from "../views/HomeView.vue";
import TableView from "../views/TableView.vue";
import TeamsView from "../views/TeamsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tabela",
      name: "table",
      component: TableView,
    },
    {
      path: "/mecze",
      name: "games",
      component: GamesView,
    },
    {
      path: "/kluby",
      name: "teams",
      component: TeamsView,
    },
  ],
});

export default router;
