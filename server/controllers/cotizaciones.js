import model from '../models';

const { Cotizaciones } = model;

class Cotizacion {
    static createCot(req, res) {
        const { establecimiento,farmacia,gestion,busqueda,reporteTramite,farmacias,vigente,numSolicitud } = req.body
        return Cotizaciones
        .createCot({
            establecimiento,
            farmacia,
            gestion,
            busqueda,
            reporteTramite,
            farmacias,
            vigente,
            numSolicitud
        })
        .then(data => res.status(201).send({
            message: 'Se insrto con exito a la tabla Cotizacion',
            data
          }))
    }
    static verCotizacion(req,res){
        return Cotizaciones
        .findAll()
        .then(data => res.status(200).send(data));
    }
}

export default Cotizacion;