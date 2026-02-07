const Todo = require("../models/todo"); // import schema 

exports.getTodo = async(req, res) => { // this is route handler to handle the data by user
    try{
       // fetch all todo from database
       const todods = await Todo.find({});

        //respmse status set
        res.status(200).json({
            success : true,
            data : todods,
            message : "All todos are fetched"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            data : "internal server error",
            message : err.message
        })
    }
}

exports.getTodoById = async(req, res) => { // this is route handler to handle the data by user
    try{
      const id = req.params.id;
      const todo = await Todo.findById({_id : id});

      if(!todo) {
        return res.status(404).json({
            status : false,
            data : "Not found",
            message : "not found"
        })
      }

      res.status(200).json({
        success : true,
        data : todo,
        message : "Todo is fetched"
      })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            data : "internal server error",
            message : err.message
        })
    }
}