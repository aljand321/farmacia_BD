import model from '../models';


const { ajustesPositivos } = model;

class AjustesPositivos {
    static crearAjustesP(req,res){
       const { gestion,establecimiento,farmacia,tipoTransaccion,busqueda,vigente,tipoImpresora,claseNotas,listaAnulados } = req.body 
       return ajustesPositivos
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
           message: 'datos enviados a la tabla Ajustes positivos',
           data
       }))
    }
    static verAjusteP (req,res){
        return ajustesPositivos
        .findAll()
        .then(data => res.status(200).send(data))
    }
}



export default AjustesPositivos;