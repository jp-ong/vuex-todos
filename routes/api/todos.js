const router = require("express").Router();
const axios = require("axios");

router.get("/allTodos", (req, res) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then((response) => res.json({ todos: response.data }))
    .catch((error) =>
      res.json({
        msg: "Something went wrong.",
        status: error.response.status,
        error,
      })
    );
});

router.get("/filtered/:value", (req, res) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then((response) => {
      const todos = response.data;
      switch (req.params.value) {
        case "completed":
          return res
            .status(response.status)
            .json({ todos: todos.filter((todo) => todo.completed) });
        case "incomplete":
          return res
            .status(response.status)
            .json({ todos: todos.filter((todo) => !todo.completed) });
        case "odd":
          return res
            .status(response.status)
            .json({ todos: todos.filter((todo) => todo.id % 2 !== 0) });
        case "even":
          return res
            .status(response.status)
            .json({ todos: todos.filter((todo) => todo.id % 2 === 0) });
        default:
          return res.status(response.status).json({ todos });
      }
    })
    .catch((error) =>
      res.json({
        msg: "Something went wrong.",
        status: error.response.status,
        error,
      })
    );
});

module.exports = router;
