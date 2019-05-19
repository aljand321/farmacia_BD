import model from '../models';

const { distribuciones } = model;

class Distribucion {
    static crearDistribucion(req,res){
       const { gestion,establecimiento,farmacia,tipoTransaccion,busqueda,vigente,tipoImpresora,claseNotas,listaAnulados } = req.body 
       return distribuciones
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
    static verDistribuciones (req,res){
        return distribuciones
        .findAll()
        .then(data => res.status(200).send(data))
    }
}

export default Distribucion