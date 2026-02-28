const { createApp } = Vue;

createApp({
    data() {
        return {
           products: [
            {
                title: "Lizerd Shoes",
                descrption: "This is a very cool shoes with  a cool color",
                price: "50$",
                brand: "Adidass",
                img: "./images/image1.png",
                id: 1,
            },
                 {
                title: "Girl bag",
                descrption: "This is a very cool girl bag with  a cool color",
                price: "70$",
                brand: "Nike",
                img: "./images/image2.png",
                id: 2,
            },

                 {
                title: "Lneovo labtop",
                descrption: "This is a very cool labtop with  many tecnologies",
                price: "800$",
                brand: "Lenovo",
               img: "./images/image3.png",
                id: 3,
            },


                 {
                title: "Apple Watch",
                descrption: "This is a very cool Watch with  a cool color",
                price: "500$",
                brand: "Apple",
               img: "./images/image4.png",
                id: 4,
            },


           ]
        };
    }
}).mount("#app-root");


