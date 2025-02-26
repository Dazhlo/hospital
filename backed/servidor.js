
import express from "express";
import cors from "cors";
import hospitalRoutes from "./routes/hospital.routes.js"; 
import "./models/conexion.js";
import env from "dotenv";

env.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", hospitalRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});


