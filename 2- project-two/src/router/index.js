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
      title: "Home"
    },
  },
  {
    name: "About",
    path: "/about",
    component: AboutPage,
     meta: {
      title: "About"
    },
  },
   {
    name: "my_profile",
    path: "/profile",
    component: PorfilePage,
      meta: {
      title: "Profile"
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to , from , next) => {
 document.title = to.meta.title
  next();
})

export default router;
