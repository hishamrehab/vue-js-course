const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "Ahmed",
            age: 20,
            email: "ahmed@gmail.com",
        };
    },
    methods: {
        sayHi(time, name) {
            return "Good " + time + ", " + name;
        }
    }
}).mount("#app-root");

