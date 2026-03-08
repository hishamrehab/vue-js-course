import { createRouter, createWebHashHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";
import AboutPage from "@/views/AboutPage.vue"

const routes = [
  {
    name: "Home",
    path:"/" , 
    component: MyMain,
    meta: {
      title: "My About Component",
      description: "This is a desc for my page",
      age: 29
    },
  },
  {
    name: "About",
    path: "/about",
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
