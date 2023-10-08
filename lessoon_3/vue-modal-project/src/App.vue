<template>
  <div>
    <input type="text" ref="name">
    <button @click="handleClickEvent">Click me</button>
    <div v-if="showModal">
      <Modal :theme="theme" @close="toggleModal">
        <h1>Parimal's Giveaway</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque aut, esse adipisci nemo excepturi assumenda inventore facilis nesciunt molestias, perferendis quidem porro rem laborum minus neque. Consequuntur, explicabo aperiam?</p>


        <template v-slot:links>
          <a href="#">sign up</a> <br>
          <a href="#">More info</a>
        </template>
      </Modal>
    </div>
    <br><br>
    <button @click="toggleModal">Show Modal</button>
    <!-- this is the data binding props -->
  </div>
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App', // name is give to the component as our wish.
  components: {
    Modal
  }, // components which are nested inside this currnet component.
  data() {
    return {
      title: "This is the nice one",
      header: "This is the header",
      content: "This is the content",
      theme: "sales",
      showModal: false
    }
  },
  methods: {
    handleClickEvent() {
      console.log("Hello there !")
      let ele = this.$refs.name
      ele.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: white;
}
</style>
