import model from '../models';

const { almacen } = model

class Alm{
    static createAlm(req, res){
        const { nombre, establecimiento, distribucionPaciente, lapsoR, nivleMinimo, nivelReserva, nivelMaximo, periodoR, metodoCosteo } = req.body
        return almacen
        .create({
            nombre, 
            establecimiento, 
            distribucionPaciente, 
            lapsoR, 
            nivleMinimo, 
            nivelReserva, 
            nivelMaximo, 
            periodoR, 
            metodoCosteo
        })
        .then(data => res.status(201).send({
            message: 'se envio datos a la tabla almacen',
            data
          }))
    }
    static verAlm(req, res) {
        return almacen
          .findAll()
          .then(data => res.status(200).send(data));
      }
}
export default Alm