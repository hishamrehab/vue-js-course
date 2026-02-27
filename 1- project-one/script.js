const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "Ahmed",
            age: 20,
            email: "ahmed@gmail.com",
        }
    }
}).mount("#app-root");

const name = "Ahmed";