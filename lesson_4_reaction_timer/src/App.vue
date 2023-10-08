<template>
  <div>
    <h1>Parimal's reaction timer GAME</h1>
    <br>
    <button @click="start" :disabled="isPlaying">Play</button>
    <SomeBlock v-if="isPlaying" :delay="delay" @end="endGame" />
    <SomeResults v-if="showResults" :score="score"/>
  </div>
</template>

<script>

import SomeBlock from './components/SomeBlock.vue'
import SomeResults from './components/SomeResults.vue'

export default {
  name: 'App',
  components: {
    SomeBlock,
    SomeResults
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      this.isPlaying = true
      this.delay = 2000 + Math.random() * 5000
      this.showResults = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
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
  color: #444;
  margin-top: 60px;
}
</style>
