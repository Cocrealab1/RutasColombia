//tipos de enrutamiento express
//app.router(path).verb(callback)
//app.verb(path, callback)

exports.render = function (req, res){
  /*if (req.session.lastVisit){
    console.log(req.session.lastVisit);
  }

  req.session.lastVisit = new Date();*/

  res.render('index',{
    title:'hola Mundo',
    userFullName: req.user ? req.user.fullName: ''
  });
};
