const { createApp } = Vue;

const vue_1 = createApp({
    data() {
        return {
            name:"Ali",
            age: 15,
           products: [
            {
                title: "Lizerd Shoes",
                descrption: "This is a very cool shoes with  a cool color",
                price: "50$",
                brand: "Adidass",
                img: "./images/image1.png",
                colors: ["red" , "green" , "blue" , "yellow"],
                id: 1,
            },
                 {
                title: "Girl bag",
                descrption: "This is a very cool girl bag with  a cool color",
                price: "70$",
                brand: "Nike",
                 colors: ["yellow" , "green" , "blue" , "yellow"],
                img: "./images/image2.png",
                id: 2,
            },

                 {
                title: "Lneovo labtop",
                descrption: "This is a very cool labtop with  many tecnologies",
                price: "800$",
                brand: "Lenovo",
                 colors: ["red" , "green" , "blue" , "yellow"],
               img: "./images/image3.png",
                id: 3,
            },


                 {
                title: "Apple Watch",
                descrption: "This is a very cool Watch with  a cool color",
                price: "500$",
                brand: "Apple",
                 colors: ["red" , "green" , "blue" , "yellow"],
               img: "./images/image4.png",
                id: 4,
            },


           ]
        };
    }
}).mount("#app-root");



const vue2 = createApp({
data() {
    return {
        name : "Ahmed",
        students: ["Ahmed" , "Samir" , "Moiaz"]
    };
},
    methods: {
        increaseAge(){
          vue_1.age++
        }
    }
}).mount("#app_root_2");
