import model from '../models';

const { CuadroComparativos } = model

class cuadroComp{
    static createCComp(req,res){
        const { establecimiento,farmacia,busqueda,gestion,vigente,numSolicitud } = req.body
        return CuadroComparativos
        .create({
            establecimiento,
            farmacia,
            busqueda,
            gestion,
            vigente,
            numSolicitud 
        })
        .then(data => res.status(200).send({
            message: 'datos enviados a la tabla de cuadro conparativo',
            data
        }))
    }
    //servicio para poder ver todos los cuadros comparatativos
    static verCuadComp (req, res){
        return CuadroComparativos
        .findAll()
        .then(data => res.status(200).send(data))
    }
}


export default cuadroComp