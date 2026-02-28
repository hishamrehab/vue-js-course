const { createApp } = Vue;

createApp({
    data() {
        return {
         name : "Ahmed",
         students: [
            {
                name: "Ahmed",
                id: 1, 
                age: 15
            },
                {
                name: "Salem",
                id: 2, 
                age: 16
            },
              {
                name: "Ahmed",
                id: 3, 
                age: 17
            },

                {
                name: "Mohamed",
                id: 4, 
                age: 20
            },
         ],
        };
    }
}).mount("#app-root");


