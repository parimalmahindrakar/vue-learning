const app = Vue.createApp({
  data() {
    return {
      title: "This is the title fromt the vue js file",
      age: 12
    }
  },
  methods: {
    changeStatement() {
      this.title = "Hello, statement is changed !"
    }
  }
})
app.mount("#app")
