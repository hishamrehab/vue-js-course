const { createApp } = Vue;

const vue_1 = createApp({
    data() {
      return {
        age: 10
      };
    },
    methods: {
        checkRefs() {
           this.age = this.$refs.myInput.value;
        }
    }
}).mount("#app-root");


