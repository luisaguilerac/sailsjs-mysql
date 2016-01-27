/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
 	hola: function (req, res) {
 		return res.send("Hola mundo !!");
 	},
 	adios: function (req, res) {
 		return res.send("Nos vemos  !!");
 	},
 	ingresar: function (req, res) {
 		
 		//programamos nuestra lógica de ingreso de datos

 		return res.send("Ingresando usuario");
 	},
 	// y asís suscesivamente ....
 };

