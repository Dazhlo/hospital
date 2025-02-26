import mongoose from "mongoose";

const medico = new mongoose.Schema({
    nombres:String,
    apellidos:String,
});

export default mongoose.model('Medico',medico);