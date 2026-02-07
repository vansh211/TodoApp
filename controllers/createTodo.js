const Todo = require("../models/todo"); // import schema 

exports.createTodo = async(req, res) => { // this is route handler to handle the data by user
    try{
       const {title, description} = req.body;
       const response = await Todo.create({title, description});

       res.status(200).json( // sedning a green status of json to identify data added
        {
            success : true,
            data : response,
            message : "Entry created"
        }
    )
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status : false,
            data : "internal error",
            message : err.message
        })
    }
}