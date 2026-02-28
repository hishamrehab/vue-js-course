const { createApp } = Vue;

createApp({
    data() {
        return {
            name: "Ahmed",
            city: "Cairo"
        };
    },
    methods: {
        testFunction() {
            this.number++;
        },
        testMe() {
            console.log("test once");
        },
        printMyName() {
            console.log("ahmed");
        },
        updateValue() {
            this.name = document.getElementById("textInp").value;
        }
    },
}).mount("#app-root");


