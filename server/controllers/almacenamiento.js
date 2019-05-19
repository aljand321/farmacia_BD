import model from '../models';

const { almacenamientos } = model;
class Almacen{
    static crearAlmacen(req,res){
        const { gestion,establecimiento,farmacia,tipoTransaccion,busqueda,vigente,tipoImpresora,claseNotas,listaAnulados } = req.body
        return almacenamientos
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
            message: 'datos enviados a la tabla almacenamiento',
            data
        }))
    }
    //servcio para poder ver datos del almacen
    static verAlmacen(req,res){
        return almacenamientos
        .findAll()
        .then(data => res.status(200).send(data));
    }
}
 
export default Almacen