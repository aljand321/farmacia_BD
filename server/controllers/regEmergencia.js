import model from '../models';

const { regEmergencias } = model

class REGemergencia {
    static createEmergencia(req,res){
        const { establecimiento,farmacia,gestion,vigente,busqueda,numSolicitud } = req.body
        return regEmergencias
        .create({
            establecimiento,
            farmacia,
            gestion,
            vigente,
            busqueda,
            numSolicitud
        })
        .then(data => res.status(200).send({
            message: 'se envio datos a la tabla Registro Emergencia',
            data
        }))
    }
    static verEmergencia(req,res){
        return regEmergencias
        .finAll()
        .then(data => res.status(200).send(data));
    }
}

export default REGemergencia;