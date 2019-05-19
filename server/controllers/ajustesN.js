import model from '../models';


const { ajustesNegativos } = model;

class AjustesNegativos {
    static crearAjustesN(req,res){
       const { gestion,establecimiento,farmacia,tipoTransaccion,busqueda,vigente,tipoImpresora,claseNotas,listaAnulados } = req.body 
       return ajustesNegativos
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
           message: 'datos enviados a la tabla Ajustes negativos',
           data
       }))
    }
    static verAjusteN (req,res){
        return ajustesNegativos
        .findAll()
        .then(data => res.status(200).send(data))
    }
}



export default AjustesNegativos;