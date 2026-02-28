const { createApp } = Vue;

createApp({
    data() {
        return {
            isActive: false,
            age: 29,
            newUser: {
                name: "",
                email: "",
                password: "",
            },
            myArr: [
                { name: "ahmed", age: 200 },
                { name: "yasser", age: 25 }
            ],

        };
    },
    methods: {
        sendData() {
            console.log(this.newUser);
        }
    },
}).mount("#app-root");


