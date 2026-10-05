import mongoose from "mongoose";
import  getDB  from "../config/db.js";


export const getDatas = (req, res) => {
  return res.status(200).json({ message: "Welcome to Express" });
};

export const getStudents = (req, res) => {
  return res.status(200).json({ name: "Arun", course: "MERN" });
};

export const addStudents = (req, res) => {
  const { name, email } = req.body;
  const datas = { name, email };

  if (!name || !email) {
    return res.status(400).json({ message: "Please provide name and email" });
  }

  return res
    .status(200)
    .json({ message: "Student added successfully", data: datas });
};

export const addProducts = async (req, res) => {
  try {
    const { productName, price, category } = req.body;
   
    const db = mongoose.connection.db;

    if (!productName || !price || !category) {
      return res
        .status(400)
        .json({ message: "Please provide productName, price and category" });
    }

    const result = await db.collection("products").insertOne({ productName, price, category });

    res.status(200).json({success: true, message: "Product added successfully", data: result });
  } catch (error) {
    return res.status(500).json({success:false, message: "Internal server error", error: error.message});
  }

};


export const showProducts = async(req,res) =>{

    try{

        const db = mongoose.connection.db;

        const products = await db.collection("products").find().toArray();

        res.status(200).json({success: true, message: "Products fetched successfully", data: products });

    }catch(error){
        res.status(500).json({success:false, message: "Internal server error", error: error.message});
    }
}

