const mongoose = require('mongoose')

const url = "mongodb+srv://lucas:lucas@banco.tubwvrc.mongodb.net/teste?retryWrites=true&w=majority"
const connect = ()=>{
  mongoose.connect(url)
  const connection = mongoose.connection;
  connection.on("error",()=>{
    console.log("erro ao conectar no banco")
  })
  connection.on("open",()=>{
    console.log("conectado ao banco")
  })
}
connect()