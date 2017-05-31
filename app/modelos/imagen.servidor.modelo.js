//llamado a Javascrip "strict"

'user strict';
//cargar mongoose y el Schema
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

//definir un nuevo schema
var ImagenesSchema = new Schema({

            nombre: {
                type: String,
                require: "Nombre del usuario es obligatoro"
            },

            descripcion: {
                type: String,
                require: "Nombre del usuario es obligatoro"
                   //validate: [
                    //function(descripcion) {
                      //  return descripcion.split(" ").lenght;
                    //}
                //]
            },
            departamento: {
                type: String
                //require: "Nombre del departamento obligatoro"
            },
            tipo: {
                type: String,
                require: "tipo de actividad obligatoro"
            },
            fecha: {
                type: Date,
                default: Date.now
            },

            telefono: {
                type: Number,
                min: 7
            },
            actividad: {
                type: String
            },
            geolocalizacionX: {
                type: Number
                //require:"Geolocalizacion en X es requerida"
            },
            geolocalizacionY: {
                type: Number
                //require:"Geolocalizacion en Y es requerida"
            }
        },{
    collection: 'imagenes'
});

      mongoose.model('Imagen', ImagenesSchema);
