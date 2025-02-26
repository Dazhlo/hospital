import medico from "../models/medico.js";
export const getMedicos = async(req,res) => {
    try {
        const medico = await medico.find();
        res.json(medico);
    } catch (error) {
        res.json({ error: error.message });
    } 


}
export const createMedico = async (req, res, next) => {
    try {
        const { id, nombres,apellidos } = req.body;
        const newMedico = new medico({   id, nombres, apellidos,  });
       await newMedico.save();
        return res.json(newMedico);
    } catch (error) {
        next(error);
    }
};
export const updateMedico = async (req, res, next) => {
    try {
        const {  nombres,apellidos } = req.body;
        const medicoUpdate = await medico.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    nombres,
                    apellidos,

                },
            },
            {
                new: true,
            }
        );

        return res.json(medicoUpdate);
    } catch (error) {
        next(error);
    }
};