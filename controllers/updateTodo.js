const Todo = require("../models/todo"); // import schema 

exports.updateTodo = async(req, res) => { // this is route handler to handle the data by user
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id : id},
            {title, description, updatedAt : Date.now()}
        )

        res.status(200).json({
        success : true,
        data : todo,
        message : "updated successfully"
      })

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