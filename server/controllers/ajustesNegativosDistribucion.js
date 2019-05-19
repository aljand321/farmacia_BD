import model from '../models';


const { ajustesNegativosDistribucion } = model;

class AjustesNegativosDIST {
    static crearAjustesNDIST(req,res){
       const { gestion,establecimiento,farmacia,tipoTransaccion,busqueda,vigente,tipoImpresora,claseNotas,listaAnulados } = req.body 
       return ajustesNegativosDistribucion
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
           message: 'datos enviados a la tabla Ajustes negativos',
           data
       }))
    }
    static verAjusteNDIST (req,res){
        return ajustesNegativosDistribucion
        .findAll()
        .then(data => res.status(200).send(data))
    }
}



export default AjustesNegativosDIST;