const transectionModel = require("../models/transaction");


const getAllTransaction = async (req, res) => {
 try {
   const transection = await transectionModel.find({});
   res.status(200).json(transection)
 } catch (error) {
   console.log(error)
   res.status(500).json(error);
 }
    
};



const addTransaction = async (req, res) => {
  try {
    // const newTransection = new transectionModel(req.body);
    const newTransection = new transectionModel(req.body);
    await newTransection.save();
    res.status(201).send("Transection Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
};
