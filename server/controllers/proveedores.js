import model from '../models';

const { proveedores } = model;

class Proveedores{
    static createProveedores(req,res){
        const { nombreProveedores, email, direccion, telefono, responsableAtencion } = req.body
        return proveedores
        .create({
            nombreProveedores, 
            email, 
            direccion, 
            telefono, 
            responsableAtencion
        })
        .then(data => res.status(201).send({
            message: 'se envio datos a la tabla proveedores',
            data
          }))
    }
    static verProveedores(req, res) {
        return proveedores
          .findAll()
          .then(data => res.status(200).send(data));
      }
}
export default Proveedores