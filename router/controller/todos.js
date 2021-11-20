const todosModel = require("../../db/models/todosSchema");

////create todos


const createTodoFun = (req, res) => {
  const { name } = req.body;
  const todos = new todosModel({
    name,
  });

  todos
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

////delete
const deleteTodoFun = (req, res) => {
  const { name } = req.body;
  todosModel.deleteOne({ name: name }, function (err) {
    if (err) return handleError(err);
  });
  todosModel
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

/////update name

const updateTodoFun = (req, res) => {
  const { id, name } = req.body;
  todosModel.updateOne({ id: id }, { name: name }, function (err) {
    //id?
    if (err) return handleError(err);
  });
  todosModel
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//read todos
const readFunc = (req, res) => {
  todosModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};



module.exports = {
  createTodoFun,
  readFunc,
  deleteTodoFun,
  updateTodoFun,
  // readTFunc,
};