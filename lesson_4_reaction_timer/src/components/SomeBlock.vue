<template>
  <div class="blockcss" v-if="showBlock" @click="endTimer">
    click me
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      rectionTime: 0
    }
  },
  mounted() {
    setTimeout(()=> {
      this.showBlock = true
      this.startTimer()
    }, this.delay)
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.rectionTime += 10
      }, 10)
    },
    endTimer(){
      clearInterval(this.timer)
      this.$emit("end", this.rectionTime)
    }
  }
}
</script>

<style>

.blockcss {
  width: 400px;
  border-radius: 20px;
  background: #0fa8f7;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}

</style>