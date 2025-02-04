const express = require("express");
const cors = require('cors');

// Importing the database configuration & user model
require('./Database/config'); 
const Users= require('./Database/Users');

// Creating the server and it is an instance of express which is used to define routes and middlewares.
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// make routes
app.post("/register",async(req,res) => {
  // create a new user instace using the user model
  let user = new Users(req.body);
  let result = await user.save();

  res.status(200).send(result);
});
// app.delete("/delete/:id",async(req,res) => {
//   const id = req.params.id;
//   let result = await Users.findByIdAndDelete(id);
  
//   res.send({
//     message:"User deleted successfully",
//     id:id
//   });
// });
 
//Middlewares
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
   