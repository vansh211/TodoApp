const Todo = require("../models/todo"); // import schema 

exports.deleteTodo = async(req, res) => { // this is route handler to handle the data by user
    try{
        const {id} = req.params;

        const todo = await Todo.findByIdAndDelete({_id : id})

        if(!todo) { 
            return res.status(404).json({
            success : false,
            data : todo,
            message : "not found any todi"
         })
        }

        res.status(200).json({
        success : true,
        data : todo,
        message : "deleted successfully"
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