import Users from '../controllers/user';
import Books from '../controllers/book';

import Cotizacion from '../controllers/cotizaciones';
import CuadroComparativos from '../controllers/cuadroComparativo';
import ActoAdjudicacions from '../controllers/adjudicacion';
import REGemergencia from '../controllers/regEmergencia';
import Almacen from '../controllers/almacenamiento';
import Distribucion from '../controllers/distribuciones';
import AjustesPositivos from '../controllers/ajustesP';
import AjustesNegativos from '../controllers/ajustesN';
import Distr from '../controllers/distribucion';
import Suministros from '../controllers/suministros';
import AjustesNegativosDIST from '../controllers/ajustesNegativosDistribucion';


//tablas almacen
import Medicamento from '../controllers/medicamentosInsumos';
import Articulos from '../controllers/articulos';
import Servicio from '../controllers/servicio';
import Asignacion from '../controllers/asignacion';
import Alm from '../controllers/almacenes'
import Proveedores from '../controllers/proveedores';

export default (app) => {

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the bookStore API!',
}));

app.post('/api/users', Users.signUp); // API route for user to signup
app.post('/api/users/:userId/books', Books.create); // API route for user to create a book
app.get('/api/users', Users.list); // API route for user to get all books in the database


//libros
app.get('/api/books', Books.list); // API route for user to get all books in the database
app.put('/api/books/:bookId', Books.modify); // API route for user to edit a book
app.delete('/api/books/:bookId', Books.delete); // API route for user to delete a book
app.get('/api/idLib/:id', Books.listOne);

//cotizaciones crud
app.post('/api/cotizacion', Cotizacion.createCot);
app.get('/api/cotizacion', Cotizacion.verCotizacion);

//cuadro conparativo
app.post('/api/cuadroComp', CuadroComparativos.createCComp);
app.get('/api/cuadroComp', CuadroComparativos.createCComp);

//adjudicacion crud
app.post('/api/adjudicacion', ActoAdjudicacions.ceateAdjudicacion);
app.get('/api/adjudicacion', ActoAdjudicacions.verAdjudicacion);

//reg Emergencias
app.post('/api/emergencia', REGemergencia.createEmergencia);
app.get('/api/emergencia', REGemergencia.verEmergencia);

//almacen
app.post('/api/almacen', Almacen.crearAlmacen);
app.get('/api/almacen', Almacen.verAlmacen);

//distribuciones
app.post('/api/distribucion', Distribucion.crearDistribucion);
app.get('/api/distribucion', Distribucion.verDistribuciones);

//ajustes
app.post('/api/ajusteP', AjustesPositivos.crearAjustesP);
app.get('/api/ajusteP', AjustesPositivos.verAjusteP);

//ajustes negativos
app.post('/api/ajusteN', AjustesNegativos.crearAjustesN);
app.get('/api/ajusteN', AjustesNegativos.verAjusteN);

//Dist 
app.post('/api/Dist', Distr.crearDist);
app.get('/api/Dist', Distr.verDist);

//tabla suministros
app.post('/api/Sum', Suministros.crearSum);
app.get('/api/Sum', Suministros.verSum);

// ajustes negativos de distribucion
app.post('/api/AjusteNDIST', AjustesNegativosDIST.crearAjustesNDIST);
app.get('/api/AjusteNDIST', AjustesNegativosDIST.verAjusteNDIST);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// empisea las tablas de almacen
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//medicamentos
app.post('/api/medicamento', Medicamento.createMed);
app.get('/api/medicamento', Medicamento.verMEd);

//articulos
app.post('/api/articulos', Articulos.createArt);
app.get('/api/articulos', Articulos.verArt);

//servicio
app.post('/api/servicio', Servicio.createServicio);
app.get('/api/servicio', Servicio.verServicio);

//asignacion
app.post('/api/asignacion', Asignacion.createAsignacion);
app.get('/api/asignacion', Asignacion.verAsignacion);

//almacenes
app.post('/api/Alm', Alm.createAlm);
app.get('/api/Alm', Alm.verAlm);

//proveedores
app.post('/api/proveedores', Proveedores.createProveedores);
app.get('/api/proveedores', Proveedores.verProveedores);




};