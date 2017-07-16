var v=true;
        $("span.help-block").hide();

        function verificar(){

            var v1=0,v2=0;
            v1=validacion('usuario');
            v2=validacion('password');
            
            if (v1===false || v2===false) {
                 $("#exito").hide();
                 $("#error").show();
            }
            else {
				if (!(/\S+@\S+\.\S+/.test(usuario))) {
                      $("#error").hide();
					  $("#exito").hide();
					   $("#usuarionovalido").show();  
                    }
			    
        else{
                $("#error").hide();
				 $("#usuarionovalido").hide();  
                $("#exito").show();
            }
			} 
		} 
        function validacion(campo){
            
            
			if (campo==='usuario'){
                usuario = document.getElementById(campo).value;
                if(  usuario == null ||  usuario.length == 0 || /^\s+$/.test( usuario) ) {
                    $("#glypcn"+campo).remove();
                    $('#'+campo).parent().parent().attr("class", "form-group has-errores has-feedback");
                    $('#'+campo).parent().children('span').text("Ingrese algun Email").show();
                    $('#'+campo).parent().append("<span id='glypcn"+campo+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
                      
                    return false;
                    
                }
                  else{
                        $("#glypcn"+campo).remove();
                        $('#'+campo).parent().parent().attr("class", "form-group has-suc has-feedback");
                        $('#'+campo).parent().children('span').hide();
                        $('#'+campo).parent().append("<span id='glypcn"+campo+"' class='glyphicon glyphicon-ok form-control-feedback'></span>");
                    
                        return true;
                    }
                }

            
           if (campo==='password'){
                password = document.getElementById(campo).value;
                if( password == null || password.length == 0 || /^\s+$/.test(password) ) {
                    
                    $("#glypcn"+campo).remove();
                    $('#'+campo).parent().parent().attr("class", "form-group has-errores has-feedback");
                    $('#'+campo).parent().children('span').text("Ingrese su contraseña").show();
                    $('#'+campo).parent().append("<span id='glypcn"+campo+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");
                    return false;
                    
                }
                else{
                    $("#glypcn"+campo).remove();
                    $('#'+campo).parent().parent().attr("class", "form-group has-suc has-feedback");
                    $('#'+campo).parent().children('span').hide();
                    $('#'+campo).parent().append("<span id='glypcn"+campo+"' class='glyphicon glyphicon-ok form-control-feedback'></span>");
                    return true;
                    
                } 
            }
        }