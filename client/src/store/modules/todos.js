import axios from "axios";

// initial state
const state = () => ({
  todos: [],
  error: "",
});

// getters
const getters = {};

// actions
const actions = {
  fetchTodos({ commit }) {
    axios
      .get("http://localhost:5000/api/todos/allTodos")
      .then((response) => commit("setTodos", response.data.todos))
      .catch((error) => commit("setError", error.response.data.msg));
  },
  fetchFilteredTodos({ commit }, value) {
    axios
      .get(`http://localhost:5000/api/todos/filtered/${value}`)
      .then((response) => commit("setTodos", response.data.todos))
      .catch((error) => commit("setError", error.response.data.msg));
  },
};

// mutations
const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  setError: (state, error) => {
    state.error = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
