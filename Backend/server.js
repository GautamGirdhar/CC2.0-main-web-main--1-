const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const registrationRouter = require("./routers/registrationRouter"); // ✅ Import the router

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
const connectDB = require("./Config/db");
connectDB();

// app.get("*", (req, res) => {
//   res.send("API is running");
// });

// ✅ Use the registration router
app.use("/api", registrationRouter); // ✅ This must be here!

console.log(PORT);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
