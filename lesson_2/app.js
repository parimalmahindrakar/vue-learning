const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      title: "This is the title fromt the vue js file",
      x: 0,
      y: 0,
      books: [
        {title: "some title 1", author: "some author 1", imglink: "./assets/1.jpeg", isFav: true },
        {title: "some title 2", author: "some author 2", imglink: "./assets/2.png" , isFav: false },
        {title: "some title 3", author: "some author 3", imglink: "./assets/3.jpeg", isFav: true },
        {title: "some title 4", author: "some author 4", imglink: "./assets/1.jpeg", isFav: false }
      ]
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
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    // the computed property depends on the other's data, when the computed property changes,
    // the following function will be triggered, i.e. will return the filtered books where isFav is set to true
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})
app.mount("#app")
