import { createRouter, createWebHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";
import AboutPage from "@/views/AboutPage.vue"
import PorfilePage from "@/views/PorfilePage.vue";


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
  },
   {
    name: "my_profile",
    path: "/profile",
    component: PorfilePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
