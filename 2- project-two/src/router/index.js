import { createRouter, createWebHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";
import AboutPage from "@/views/AboutPage.vue"
import PorfilePage from "@/views/PorfilePage.vue";
import MyLearnings from "@/views/MyLearnings.vue";
import MyWishlist from "@/views/MyWishlist.vue";
import NotFound from "@/views/NotFound.vue";


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
    }
  },
   {
    name: "my_profile",
    path: "/profile/:userId/userName",
    component: PorfilePage,
      meta: {
      title: "Profile"
    },
       children: [
      {
        name: "MyLearnings",
        path: "my_learnings",
        component: MyLearnings,
      },
         {
        name: "MyWishlist",
        path: "my-wishlist",
        component: MyWishlist,
      },
    ]
  },
  {
    name: "not_found",
    path:"/:pathMatch(.*)*",
    component:NotFound
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
