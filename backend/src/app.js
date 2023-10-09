const express = require('express')
const cors = require('cors')
const app = express()
const UserRoutes = require('./routes/userRoutes')
const path = require("path");
require('./database/connection')
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use("/auth",UserRoutes)
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
console.log(__dirname)
const PORT = process.env.PORT
app.listen(PORT,()=>{
  console.log("api rodando na porta",PORT)
})


