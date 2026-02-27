const { createApp } = Vue;

createApp({
    data() {
        return {
            number: 0
        };
    },
    methods: {
        testFunction() {
            this.number++;
        },
        testMe() {
            console.log("test once");
        }
    }
}).mount("#app-root");

