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
      if (req.params.value === "completed") {
        return res.json({
          todos: response.data.filter((todo) => todo.completed),
        });
      } else {
        return res.json({
          todos: response.data.filter((todo) => !todo.completed),
        });
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
