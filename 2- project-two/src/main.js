import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const vueApp = createApp(App);
vueApp.use(router).mount("#app");

vueApp.directive("maxSize" , (el , order) => {
 el.style.fontSize= order.value + "px";
});

vueApp.directive("changeColor" , (el , order) => {
    el.style.color = order.value;
})