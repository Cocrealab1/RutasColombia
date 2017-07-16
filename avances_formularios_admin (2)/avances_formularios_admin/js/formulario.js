// jQuery
/*$(document).ready(function(){ 
  
    $('#alternar-respuesta').toggle( 
  
        // Primer click
        function(e){ 
            $('#respuesta').slideDown();
            $(this).text('Español');
            e.preventDefault();
        }, // Separamos las dos funciones con una coma
      
        // Segundo click
        function(e){ 
            $('#respuesta').slideUp();
			//mostrar este texto
            $(this).text('Ingles');
            e.preventDefault();
        }
  
    );
  
});
*/
$(document).ready(function(){
		$("#actualizardatos").hide();
	    $("#consultadatos").click(function() {	 
	     $("#actualizardatos").show();
		 $("#consultadatos").hide();
		 });
		 
		});

		
/*		
	$(function(){
	    $("#contenido-2").hide();
		$("#boton1").on("click",function() {	 
			if($(this).val()== "Español")
			{
			$("#contenido-2").hide(100, function(){
			$("#boton1").val("Ingles");	
			});			
			}    
		 else
		 {
		$("#contenido-2").show(100, function(){
			$("#boton1").val("Español");	 
			}); 
		 }
		 });
	   	});
			*/
	/*$(function(){
	  $("#boton").on("click",function() {
	  $("#contenido-1").toggle(1000, function(){
	  });
	});
	});  
*/
