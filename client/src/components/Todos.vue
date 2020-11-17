<template>
  <div class="todos">
    <button @click="buttonClicked('all')">All</button>
    <button @click="buttonClicked('completed')">Completed</button>
    <button @click="buttonClicked('incomplete')">Incomplete</button>
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
    buttonClicked(value) {
      if (value === "all") {
        this.fetchTodos();
      } else {
        this.fetchFilteredTodos(value);
      }
    },
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style></style>
