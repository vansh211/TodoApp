const express = require('express');
const router = express.Router();

// imort controllller

const {createTodo} = require('../controllers/createTodo.js');
const {getTodo} = require('../controllers/getTodo.js');
const {getTodoById} = require('../controllers/getTodo.js');
const {updateTodo} = require('../controllers/updateTodo.js')
const {deleteTodo} = require('../controllers/deleteTodo.js')



// define APi
router.post("/create", createTodo);
router.get("/get", getTodo);
router.get("/getById/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;