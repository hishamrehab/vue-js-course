import { createRouter, createWebHashHistory } from "vue-router";
import MyMain from "../views/MyMain.vue";
import AboutPage from "@/views/AboutPage.vue";


const routes = [
  {
    name: "my-main",
    path: "/test",
    component: MyMain,
  },

    {
    name: "about_page",
    path: "/about",
    component: AboutPage,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
