const mongoose = require("mongoose")

// onexion con base de dato de MONGO
const dbConnect = () => {
  const DB_URI = process.env.DB_URI
  console.log(DB_URI)
  mongoose.connect(DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }, (err, res) => {
      if(!err){
        console.log("*** CONEXION CORRECTA ***")
      }else{
        console.log("*** ERROR DE CONEXION ***")
      }
    })
}

module.exports = dbConnect