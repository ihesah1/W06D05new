const usersModel = require("../../db/models/usersSchema");

//create user


const createUserFun = (req, res) => {
  const { name, age } = req.body;
  const user = new usersModel({
    name,
    age,
  });

  user
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

/////delete 
const deleteuserFun = (req, res) => {
  const id = req.params.id;
  usersModel.deleteOne({ _id :id  }, function (err) {
    if (err) return handleError(err);
  });
  usersModel
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

////read users

const readFunc = (req, res) => {
  usersModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { createUserFun, deleteuserFun, readFunc };