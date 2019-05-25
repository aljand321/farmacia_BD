import model from '../models';

const { servicio } = model;

class Servicio {
    static createServicio(req, res){
        const { grupoAsignacion, codificacion, nombre, descripcion} = req.body
        return servicio
        .create({
            grupoAsignacion, 
            codificacion, 
            nombre,
            descripcion
        })
        .then(data => res.status(201).send({
            message: 'se inserto datos a la tabla servicio',
            data
          }))
    }
    static verServicio(req, res) {
        return servicio
          .findAll()
          .then(data => res.status(200).send(data));
      }
}

export default Servicio;