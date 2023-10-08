const app = Vue.createApp({
  data() {
    return {
      title: "This is the title fromt the vue js file",
      x: 0,
      y: 0
    }
  },
  methods: {
    handleEvent(e, data) {
      if (e.type == "mouseover") {
        this.title = "Mouse over event is occured"
      } else if(e.type == "mouseleave") {
        this.title = "Mouse leave event is occured"
      }  else if(e.type == "dblclick") {
        this.title = "Double click event is occured"
      }
      console.log(data)
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})
app.mount("#app")
