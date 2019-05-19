import model from '../models';

const { distribucion } = model;

class Distr {
    static crearDist(req,res){
       const { gestion,establecimiento,farmacia,tipoTransaccion,busqueda,vigente,tipoImpresora,claseNotas,listaAnulados } = req.body 
       return distribucion
       .crete({
        gestion,
        establecimiento,
        farmacia,
        tipoTransaccion,
        busqueda,
        vigente,
        tipoImpresora,
        claseNotas,
        listaAnulados
       })
       .then(data => res.status(200).send({
           message: 'datos enviados a la tabla distribucion',
           data
       }))
    }
    static verDist (req,res){
        return distribucion
        .findAll()
        .then(data => res.status(200).send(data))
    }
}

export default Distr