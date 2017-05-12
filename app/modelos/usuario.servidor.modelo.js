/*Invocar el modo JavaScript 'strict'*/
'use strict';

/*cargar el módulo Mongoose y el objeto Schema */
var bcrypt = require('bcrypt-nodejs'),
  mongoose = require('mongoose'),
  crypto = require('crypto'),
  Schema = mongoose.Schema;


// var password_validation = {
//   validator: function(p){
//     return this.password_confirmation == p;
//   },
//   message: "las contraseñas no son iguales"
// }

/*Definir un nuevo UserSchema*/
var UsuarioSchema = new Schema({
  id: String,
  token: String,
  nombre: String,
  apellido: String,
  correo: {
    type: String,
    required:"El correo es requerido",
    unique: 'correo ya existente',
    match: [/.\@.+\..+/, "Por favor escribe una direccion de email correcta"]
  },
  contrasenia: {
    type: String,
    minlength: [6, "la contraseña es muy corta"],
    validate: {
      validator: function(p) {
        return this.confirmacionContrasenia == p;
      },
      message: "las contraseñas no son iguales"
    }
  },
  salt: {
    type: String,
  },
  provider: {
    type: String,
    required: 'Provider es obigatorio'
  },
  providerId: String,
  providerData: {},
  created: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'users'
}); ///cambiar por cualquier base de datos

UsuarioSchema.virtual("confirmacionContrasenia").get(function() {
  return this.c_C;
}).set(function(contrasenia) {
  this.c_C = contrasenia;
});

//usar middleware pre-save para hash la contaseña
UsuarioSchema.pre('save', function(next) {
    if (this.contrasenia) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.contrasenia = this.hashPassword(this.contrasenia);
    }
    next();
})

UsuarioSchema.methods.hashPassword = function(contrasenia) {
  return bcrypt.hashSync(contrasenia, bcrypt.genSaltSync(8), null);
}
//Crear un metodo instancia para autentificar usuario
UsuarioSchema.methods.authenticate = function(contrasenia) {
  return this.contrasenia === this.hashPassword(contrasenia);
}
UsuarioSchema.methods.validaContrasenia = function(contrasenia) {
  return bcrypt.compareSync(contrasenia, this.contrasenia);
}

/*crear el modelo 'user' a partir de 'UserSchema'*/
mongoose.model('User', UsuarioSchema);
