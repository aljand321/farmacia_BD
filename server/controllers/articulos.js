import model from '../models';

const { articulos }= model;

class Articulos {
    static createArt(req,res){
        const { grupoAsignacion, codificacion, nombre, unidadMedida} = req.body
        return articulos
        .create({
            grupoAsignacion, 
            codificacion, 
            nombre, 
            unidadMedida
        })
        .then(data => res.status(200).send({
            message: 'se introdujo datos a la tabla Articulos',
            data
        }))
    }
    static verArt(req, res) {
        return articulos
          .findAll()
          .then(data => res.status(200).send(data));
      }
    
}

export default Articulos