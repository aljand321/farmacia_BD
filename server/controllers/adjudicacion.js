import model from '../models';

const { actoAdjudicacions } = model

class ActoAdjudicacions{
    static ceateAdjudicacion(req,res){
        const{ gestion,establecimiento,almacen,busqueda,vigente,programa,numSolicitud } = req.body
        return actoAdjudicacions
        .create({
            gestion,
            establecimiento,
            almacen,
            busqueda,
            vigente,
            programa,
            numSolicitud    
        })
        .then(data => res.status(200).send({
            message: 'datos enviados a la tabla adjudicacion',
            data
        }))
    }
    //get tabala adjudicacion
    static verAdjudicacion (req,res){
        return actoAdjudicacions
        .findAll()
        .then(data => res.status(200).send(data));
    }
}

export default ActoAdjudicacions;