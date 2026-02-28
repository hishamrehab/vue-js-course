const { createApp } = Vue;

createApp({
    data() {
        return {
            numberOne: 0,
            numberTwo: 0,
            inputValue: ""
        };
    },
    methods: {

    },
    computed: {
        numOneChange() {
            return this.numberOne * 2;
        },
        numTwoChange() {
            return this.numberTwo + 10;
        },
    }
}).mount("#app-root");


