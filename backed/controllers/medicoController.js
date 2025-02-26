//import medico from "../models/medico.js";
import Medico from "../models/medico.js";
export const deleteMedico = async (req, res, next) => {
    try {
        const medicoDeleted = await Medico.findByIdAndDelete(req.params.id);
        if (!medicoDeleted) {
            return res.status(404).json({ message: "Médico no encontrado" });
        }
        return res.json({ message: "Médico eliminado exitosamente" });
    } catch (error) {
        next(error);
    }
};


export const getMedicos = async (req, res) => {
    try {

        const medicos  = await Medico.find();
        res.json(medicos);
    } catch (error) {
        res.json({ error: error.message });
    }
}

export const createMedico = async (req, res, next) => {
    try {
        const { id, nombres, apellidos } = req.body;
        const newMedico = new Medico({ id, nombres, apellidos });
        await newMedico.save();
        return res.json(newMedico);
    } catch (error) {
        next(error);
    }
};


// export const createMedico = async (req, res, next) => {
//     try {
//         const { id, nombres,apellidos } = req.body;
//         const newMedico = new Medico({   id, nombres, apellidos,  });
//        await newMedico.save();
//         return res.json(newMedico);
//     } catch (error) {
//         next(error);
//     }
// };

export const updateMedico = async (req, res, next) => {
    try {
        const { nombres, apellidos } = req.body;
        const medicoUpdate = await Medico.findByIdAndUpdate(
            req.params.id,
            {
                $set: { nombres, apellidos },
            },
            { new: true }
        );
        return res.json(medicoUpdate);
    } catch (error) {
        next(error);
    }
};

// export const updateMedico = async (req, res, next) => {
//     try {
//         const {  nombres,apellidos } = req.body;
//         const medicoUpdate = await Medico.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: {
//                     nombres,
//                     apellidos,

//                 },
//             },
//             {
//                 new: true,
//             }
//         );

//         return res.json(medicoUpdate);
//     } catch (error) {
//         next(error);
//     }
    
// };