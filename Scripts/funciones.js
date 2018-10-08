
function Sumar(valor1,valor2) {
    
         var suma = parseInt(valor1) + parseInt(valor2);
	 return suma ;

        }

function valorTotalProducto(can,vlr){

	var totalvalorproducto 
	totalvalorproducto = can*vlr ;
	return totalvalorproducto ;
}

function valorCalcularIva(vlriva,vlr){

	var totalvaloriva ;
	totalvaloriva = ((vlriva *vlr)/100);
	return totalvaloriva ;
}


function sumarProductosBasicos(){
	
	var totalleche = valorTotalProducto(document.getElementById('leche').value,document.getElementById('oleche').value);
	var totalpan = valorTotalProducto(document.getElementById('pan').value,document.getElementById('opan').value);
	var totalhuevos = valorTotalProducto(document.getElementById('huevos').value,document.getElementById('ohuevos').value);
	var subtotalbasicos = parseInt(totalleche) + parseInt(totalpan) + parseInt(totalhuevos );
	
	document.getElementById('stbasico').value = subtotalbasicos;
	
	document.getElementById('ivabasico').value =  valorCalcularIva (document.getElementById('oivabasico').value,document.getElementById('stbasico').value);

	
	var totaljabon = valorTotalProducto(document.getElementById('jabon').value,document.getElementById('ojabon').value);
	var totalshampoo = valorTotalProducto(document.getElementById('shampoo').value,document.getElementById('oshampoo').value);
	var totalcrema = valorTotalProducto(document.getElementById('crema').value,document.getElementById('ocrema').value);
	var subtotalaseo= parseInt(totaljabon ) + parseInt(totalshampoo) + parseInt(totalcrema);
	
	document.getElementById('staseo').value = subtotalaseo;

 	document.getElementById('ivaaseo').value = valorCalcularIva (document.getElementById('oivaaseo').value, document.getElementById('staseo').value);

	
	document.getElementById('stfactura').value = Sumar(document.getElementById('stbasico').value ,document.getElementById('staseo').value);
	document.getElementById('ivafactura').value = Sumar(document.getElementById('ivabasico').value ,document.getElementById('ivaaseo').value);
	document.getElementById('total').value = Sumar(	document.getElementById('stfactura').value,document.getElementById('ivafactura').value);
	
}

function valida(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
// Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function limpiarFormulario() {
    document.getElementById("fmitienda").reset();
  }



