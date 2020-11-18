<template>
  <div class="todos">
    <select @change="selectChange">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="incomplete">Incomplete</option>
      <option value="odd">Odd</option>
      <option value="even">Even</option>
    </select>
    <Todo v-for="todo in todos" v-bind:todo="todo" :key="todo.id" />
  </div>
</template>

<script>
import Todo from "./Todo";
import { mapActions, mapState } from "vuex";
export default {
  components: { Todo },
  computed: { ...mapState({ todos: (state) => state.todos.todos }) },
  methods: {
    ...mapActions(["fetchTodos", "fetchFilteredTodos"]),
    selectChange(e) {
      this.fetchFilteredTodos(e.target.value);
    },
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style></style>
