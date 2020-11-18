<template>
  <div class="todos-row">
    <div class="todos-row-col">{{ todo.id }}</div>
    <div class="todos-row-col">{{ todo.title }}</div>
    <div class="todos-row-col">{{ todo.completed }}</div>
    <div class="todos-row-col">
      <button v-if="todo.completed" @click="buttonClicked">
        Complete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    buttonClicked() {
      console.log(this.todo.id);
    },
  },
};
</script>

<style scoped>
.todos-row {
  display: grid;
  grid-template-columns: 0.2fr 0.4fr 0.2fr 0.2fr;
}
</style>
