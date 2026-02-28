const { createApp } = Vue;

createApp({
    data() {
        return {
         myFont: 12
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


