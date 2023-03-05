const express = require("express");
const { addTransaction,  getAllTransaction } = require("../controllers/transController");

//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transection", addTransaction);


//get transections
router.post("/get-transection", getAllTransaction);

module.exports = router;