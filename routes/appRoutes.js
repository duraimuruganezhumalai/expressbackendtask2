import express from "express";
import { addProducts, addStudents, getDatas, getStudents, showProducts } from "../controllers/authController.js";

const route = express.Router()

route.get("/welcome", getDatas)
//OUTPUT - {  "message": "Welcome to Express"}

route.get("/studentData", getStudents)
// OUTPUT - {  "name": "Arun",  "course": "MERN"}

route.post("/addStudent", addStudents)
//OUTPUT - {  "message": "Student added successfully",  "data": {"name": "react",    "email": "test@gmail.com"  }}

route.post("/addProduct", addProducts)
//OUTPUT - { "success": true,  "message": "Product added successfully",  "data": {    "acknowledged": true,    "insertedId": "6ac28a46752f555738fd7ffd"  }}


route.get("/showProducts", showProducts)
// OUTPUT - 
// {
//   "success": true,
//   "message": "Products fetched successfully",
//   "data": [
//     {
//       "_id": "6ac28a46752f555738fd7ffd",
//       "productName": "iPhone 15",
//       "price": 79999,
//       "category": "Mobile"
//     },
//     {
//       "_id": "6ac28be5036221f45e9455cb",
//       "productName": "iPhone 15",
//       "price": 79999,
//       "category": "Mobile"
//     },
//     {
//       "_id": "6ac30f15af3f212f0e2278b5",
//       "productName": "vivo",
//       "price": 13500,
//       "category": "mobile"
//     }
//   ]
// }


export default route;

// http://localhost:5000/api/welcome
// http://localhost:5000/api/studentData

// http://localhost:5000/api/addStudent
// http://localhost:5000/api/addProduct
// http://localhost:5000/api/showProducts