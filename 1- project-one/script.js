const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "Ahmed",
            age: 20,
            email: "ahmed@gmail.com",
            link: "https://www.google.com",
        };
    },
    methods: {
        sayHi(time, name) {
            return "Good " + time + ", " + name;
        },
        // sayTest: function () {

        // }
    }
}).mount("#app-root");

