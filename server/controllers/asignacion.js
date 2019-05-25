import model from '../models';
 
const { asignacioAlmacen } = model
class Asignacion {
    static createAsignacion(req,res){
        const { codigo, descripcion } = req.body
        return asignacioAlmacen
        .create({
            codigo,
            descripcion
        })
        .then(data => res.status(201).send({
            message: 'se enviaron los daros a la tabla asignacion',
            data
          }))
    }
    static verAsignacion(req, res) {
        return asignacioAlmacen
          .findAll()
          .then(books => res.status(200).send(books));
    }
}
export default Asignacion