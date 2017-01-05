/*Invocar el modo JavaScript 'strict'*/
'use strict';

/*cargar el módulo Mongoose y el objeto Schema */
var mongoose = require ('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

/*Definir un nuevo UserSchema*/
var UserSchema = new Schema ({
  nombre: String,
  apellido: String,
  email: {
    type: String,
    match: [/.\@.+\..+/, "POr favor escribe una direccion de email correcta"]
  },
  usuario: {
    type: String,
    //Configurar un unico valor index 'usuario'
    unique: true,
    //validad que si se lleno el campo
    required: 'Nombre de usuario es obiligatorio',
    //trim el campo 'usuario' ej "  hello", or "hello  ", or "  hello  " = "hello"
    trim: true
  },
  password: {
    type: String,
    validate: [
      function (password) {
          return password && password.length > 6;
      }, 'La contraseña debe ser mas larga'
    ]
  },
  salt:{
    type: String,
  },
  provider: {
    type:String,
    required: 'Provider es obigatorio'
  },
  providerId:String,
  providerData:{},
  created:{
    type: Date,
    default: Date.now
  }
},{collection : 'users'}); ///cambiar por cualquier base de datos

//usar middleware pre-save para hash la contaseña
UserSchema.pre('save', function(next){
  if(this.password){
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'),'base64');
    this.password = this.hashPassword(this.password);
  }
  next();
})

//Crear un metodo instania para hashin uyna contraseña
UserSchema.methods.hashPassword = function(password){
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
}

//Crear un metodo instancia para autentificar usuario
UserSchema.methods.authenticate = function(password){
  return this.password === this.hashPassword(password);
}

//Encontrar posibles username no usados
UserSchema.statics.findUniqueUsername = function(username, suffix, callback){
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
}

/*crear el modelo 'user' a partir de 'UserSchema'*/
mongoose.model('User', UserSchema);
