import paciente from "../models/paciente.js";
export const getPaciente = async(resizeBy,res) => {
    try {
        const paciente = await paciente.find();
        res.json(paciente);
    } catch (error) {
        res.json({ error: error.message });
    } 


}
export const createPaciente = async (req, res, next) => {
    try {
        const { id, nombres,apellido1,apellido2,fecha } = req.body;
        const  paciente = new paciente({
            id,
            nombres,
            apellido1,
            apellido2,
            fecha,


        });

        const savepaciente = await savepaciente.save();
        return res.json(savepaciente);
    } catch (error) {
        next(error);
    }
};
export const updatePaciente = async (req, res, next) => {
    try {
        const {  id, nombres,apellido1,apellido2,fecha} = req.body;
        const pacienteUpdate = await paciente.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    id,
                    nombres,
                    apellido1,
                    apellido2,
                    fecha
        

                },
            },
            {
                new: true,
            }
        );

        return res.json(pacienteUpdate);
    } catch (error) {
        next(error);
    }
};