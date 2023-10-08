<template>
  <div class="backdrop" @click.self="emitCloseEvent">
    <div class="modal" :class="{ sale: theme === 'sales' }">
      <slot></slot>
      <!-- this is the default slot -->

      <slot name="links"></slot>

    </div>
  </div>
</template>

<script>

export default {
  props: ['theme'],
  methods: {
    emitCloseEvent() {
      this.$emit("close")
    }
  }
}

</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
  color:wheat;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.sale {
  background: rgb(216, 59, 59);
}

</style>
