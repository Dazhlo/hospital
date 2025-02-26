import { Router } from "express";
import {getMedicos,createMedico,updateMedico} from "../controllers/medicoController.js";
import {createPaciente,updatePaciente, getPaciente} from "../controllers/pacienteController.js";
import express from 'express';
const router = express.Router();



router.get("/Medicos", getMedicos );
//router.get("/getMedicos/:id", getMedicos );
router.post("/Medico", createMedico);
//router.delete("/deleteCancion/:id", deleteCancion);
router.put("/updateMedico/:id", updateMedico);

router.get("/Paciente", getPaciente );
//router.get("/getPaciente/:id", getMedicos );
router.post("/Pacientes", createPaciente);
//router.delete("/deleteCancion/:id", deleteCancion);
router.put("/updatePaciente/:id", updatePaciente);

export default router;