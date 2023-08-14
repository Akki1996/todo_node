const userModel = require("../models/index");

const postList = async (req, res) => {
  const { item } = req.body;

  try {
    const listData = new userModel({ item });
    await listData.save();
    res.send(listData);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getList = async (req, res) => {
  const userList = await userModel.find({});
  try {
    res.send({ data: userList, message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const delList = async (req, res) => {
  var id = req.params.id;
  const user = await userModel.findByIdAndDelete({ _id: id });
  try {
    res.send({ message: "delete success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateList = async (req, res) => {
  var id = req.params.id;
  const { item } = req.body;
  const response = await userModel.findOneAndUpdate({ _id: id }, { item });
  try {
    res.send({ data: response, message: "update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  postList,
  getList,
  delList,
  updateList,
};
