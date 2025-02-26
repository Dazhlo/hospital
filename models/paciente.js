import mongoose from "mongoose";

const paciente = new mongoose.Schema({
    nss:String,
    apellido1:String,
    apellido2:String,
    nombres:String,
    fecha:Date,
    
 
});

export default mongoose.model('paciente',paciente);