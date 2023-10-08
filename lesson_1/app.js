const app = Vue.createApp({
  data() {
    return {
      title: "This is the title fromt the vue js file",
      age: 12,
      toShow: false
    }
  },
  methods: {
    changeStatement() {
      this.title = "Hello, statement is changed !"
    },
    toShowDiv() {
      this.toShow = !this.toShow
    }
  }
})
app.mount("#app")
