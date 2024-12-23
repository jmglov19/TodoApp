const router = require('express').Router()

const Todo = require("../models/Todo")
// Routes

router.post("/add/todo", (req, res) => {

    
    const {todo} = req.body;
    const newTodo = new Todo({todo})

    // save the todo

    newTodo.save()
    .then(() => {
        console.log("Successfully saved the todo!");
        res.redirect("/")
    })
    .catch((err) => console.log(err));
})

.get("/delete/todo/:_id", (req, res) => {
    const {_id} = req.params;
    //console.log(_id);
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Deleted Todo Successfully");
        res.redirect("/");
    })
    .catch((err) => console.log(err));
})

module.exports = router