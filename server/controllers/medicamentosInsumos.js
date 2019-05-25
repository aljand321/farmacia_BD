import model from '../models';

const { MedicamentosInsumos } = model;

class Medicamento{
    static createMed(req, res){
        const { grupoAsignacion, codificacion, nombre, generico, unidadMedida, presentacion, concentracion} = req.body
        return MedicamentosInsumos
        .create({
            grupoAsignacion, 
            codificacion, 
            nombre, 
            generico,
            unidadMedida, 
            presentacion, 
            concentracion
        })
        .then(data => res.status(201).send({
            message: 'se envio los datos con exito a la tabla medicamentos',
            data
          }))
    }
    static verMEd(req, res) {
        return MedicamentosInsumos
          .findAll()
          .then(data => res.status(200).send(data));
      }
}

export default Medicamento