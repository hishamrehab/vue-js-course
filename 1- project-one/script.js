const { createApp } = Vue;


const data = {
    age: 29,
    name : "Ahmed",
}



const my_component = {
    template: `<h2>Hello form my forst component.</h2>
     <h3>My Name is {{name}} </h3>
    <h3>My Age is {{age}} </h3>
    <button @click="changeAge">click me</button>
` , 
data() {
    return data
},
methoods: {
    changeAge() {
        this.age++;
    }
}
};

const vue_1 = createApp({
    data() {
       return  {}
    },
    components : {
        my_component,
    }
}).mount("#app_root");



const vue_2 = createApp({
    data() {
      return {} 
    },
    components : {
        my_component,
    }
}).mount("#app_root_2");


