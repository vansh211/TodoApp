const express = require('express');
const router = express.Router();

// imort controllller

const {createTodo} = require('../controllers/createTodo')


// define APi
router.post("/create", createTodo);

module.exports = router;