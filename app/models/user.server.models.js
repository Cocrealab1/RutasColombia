/*Invocar el modo JavaScript 'strict'*/
'use strict';

/*cargar el módulo Mongoose y el objeto Schema */
var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

// var password_validation = {
//   validator: function(p){
//     return this.password_confirmation == p;
//   },
//   message: "las contraseñas no son iguales"
// }

/*Definir un nuevo UserSchema*/
var UserSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: {
        type: String,
        unique: true,
        match: [/.\@.+\..+/, "POr favor escribe una direccion de email correcta"]
    },

    contrasenia: {
        type: String,
        //minlength:[6,"la contraseña es muy corta"],
        validate: {
            validator: function(p) {
                return this.confirmacionContrasenia == p;
            },
            message: "las contraseñas no son iguales"
        }
        // validate: [
        //   function (password) {
        //       return password && password.length > 6;
        //   }, 'La contraseña debe ser mas larga'
        // ]
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

UserSchema.virtual("confirmacionContrasenia").get(function() {
    return this.c_C;
}).set(function(contrasenia) {
    this.c_C = contrasenia;
});
//usar middleware pre-save para hash la contaseña
UserSchema.pre('save', function(next) {
    if (this.contrasenia) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.contrasenia = this.hashPassword(this.contrasenia);
    }
    next();
})

//Crear un metodo instania para hashin uyna contraseña
UserSchema.methods.hashPassword = function(contrasenia) {
    return crypto.pbkdf2Sync(contrasenia, this.salt, 10000, 64).toString('base64');
}

//Crear un metodo instancia para autentificar usuario
UserSchema.methods.authenticate = function(contrasenia) {
    return this.contrasenia === this.hashPassword(contrasenia);
}

//Encontrar posibles username no usados
/*UserSchema.statics.findUniqueUsername = function(username, suffix, callback){
  var _this = this;

  var possibleUsername = username + (suffix || '');

  _this.findOne({
    username: possibleUsername
  }, function(err, user){
    if (!err){
      if (!user){
        callback(possibleUsername);
      }else{
        return _this.findUnicqueUsername(username, (suffix || '') + 1 , callback);
      }
    }
  })
}*/

/*crear el modelo 'user' a partir de 'UserSchema'*/
mongoose.model('User', UserSchema);
