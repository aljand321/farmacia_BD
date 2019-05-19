import model from '../models';

const { suministrosFracionales } = model;

class Suministros {
    static crearSum(req,res){
       const { gestion,establecimiento,farmacia,tipoTransaccion,busqueda,vigente,tipoImpresora,claseNotas,listaAnulados } = req.body 
       return suministrosFracionales
       .create({
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
           message: 'datos enviados a la tabla suministros',
           data
       }))
    }
    static verSum (req,res){
        return suministrosFracionales
        .findAll()
        .then(data => res.status(200).send(data))
    }
}

export default Suministros