<template>
  <div class="todos-row">
    <div class="todos-row-col">{{ todo.id }}</div>
    <div class="todos-row-col">{{ todo.title }}</div>
    <div class="todos-row-col">{{ todo.completed }}</div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
};
</script>

<style scoped>
.todos-row {
  display: grid;
  grid-template-columns: 0.3fr 0.4fr 0.3fr;
}
</style>
