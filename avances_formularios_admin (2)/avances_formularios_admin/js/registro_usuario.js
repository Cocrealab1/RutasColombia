var v=true;
        $("span.help-block").hide();

        function verificar_usuario(){

            var v1=0,v2=0,v3=0,v4=0,v5=0,v6=0;
            v1=validar('nombres');
            v2=validar('apellidos');
			v3=validar('email');
            v4=validar('pass');
			v5=validar('pass1');
			v6=validar('check');
                        
            if (v1===false || v2===false || v3===false || v4===false || v5===false || v6===false) {
                 $("#positivo").hide();
				 $("#mal").hide();
				 $("#herror").hide();
				 $("#correonovalido").hide();
                 $("#negativo").show();
            }
			else {
				if (!(/\S+@\S+\.\S+/.test(email))) {
                      $("#negativo").hide();
					  $("#positivo").hide();
					  $("#mal").hide();
					  $("#herror").hide();
					  $("#correonovalido").show();  
                    }
				
			else {
				if (pass != pass1) {
				$("#negativo").hide();
				$("#positivo").hide();
				$("#correonovalido").hide();
				$("#herror").hide();
                $("#mal").show();
				
				}
				else {
				if (!check.checked ) {
				$("#negativo").hide();
				$("#positivo").hide();
				$("#mal").hide();
				$("#correonovalido").hide();
                $("#herror").show();
				
				}
				
				else{
                $("#negativo").hide();
				$("#mal").hide();
				$("#herror").hide();
				$("#correonovalido").hide();
                $("#positivo").show();
                  }  
                } 
            }
			}
		
			
		}	
        
        function validar(campo){
               if (campo==='nombres'){
                nombres = document.getElementById(campo).value;
                if( nombres == null || nombres.length == 0 || /^\s+$/.test(nombres) ) {
                    
                    $("#glypcn"+campo).remove();
                    $('#'+campo).parent().parent().attr("class", "form-group has-errores has-feedback");
                    $('#'+campo).parent().children('span').text("Ingrese sus nombres").show();
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
			
			if (campo==='apellidos'){
                apellidos = document.getElementById(campo).value;
                if( apellidos == null || apellidos.length == 0 || /^\s+$/.test(apellidos) ) {
                    
                    $("#glypcn"+campo).remove();
                    $('#'+campo).parent().parent().attr("class", "form-group has-errores has-feedback");
                    $('#'+campo).parent().children('span').text("Ingrese sus apellidos").show();
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
			if (campo==='email'){
                email = document.getElementById(campo).value;
                if( email == null || email.length == 0 || /^\s+$/.test(email) ) {
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

            
					
           if (campo==='pass'){
                pass = document.getElementById(campo).value;
                if( pass == null || pass.length == 0 || /^\s+$/.test(pass) ) {
                    
                    $("#glypcn"+campo).remove();
                    $('#'+campo).parent().parent().attr("class", "form-group has-errores has-feedback");
                    $('#'+campo).parent().children('span').text("Ingrese una contraseña").show();
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
			if (campo==='pass1'){
                pass1 = document.getElementById(campo).value;
                if( pass1 == null || pass1.length == 0 || /^\s+$/.test(pass1) ) {
                    
                    $("#glypcn"+campo).remove();
                    $('#'+campo).parent().parent().attr("class", "form-group has-errores has-feedback");
                    $('#'+campo).parent().children('span').text("Ingrese nuevamente su contraseña").show();
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