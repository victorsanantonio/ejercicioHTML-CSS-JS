function validar(){
	if(dniCorrecto() && longitudesCorrecto() && emailCorrecto() && terminosCorrecto()){
		alert("Usuario registrado correctamente");
	}
}

function cambiaDias(){
	var meses = document.getElementById('mes');
	var dias = document.getElementById('dia');
	var i;
	var arr=1;
	if(meses.options.namedItem('Febrero')){
		dias.options.remove(32);
		dias.options.remove(31);
		dias.options.remove(30);
	}
	else if(meses.options.namedItem('Noviembre') || meses.options.namedItem('Abril') || meses.options.namedItem('Junio') || meses.options.namedItem('Septiembre')){
		for(i=1; i<=30; i++){
			arr++;
		}
	}
	else{
		for(i=1; i<=31; i++){
			arr++;
		}
	}
	dias.innerHTML = arr;
}

function emailCorrecto() {
	var email = document.getElementById('email').value;
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (regex.test((String(email).toLowerCase()))){
		alert("La direccion de email " + email + " es correcta.");
		return true;
	} else {
		alert("La dirección de email es incorrecta.");
		return false;
	}
}

function terminosCorrecto(){
	if(document.getElementById('terminos').checked){
		return true;
	}
	else{
		alert("Debes de aceptar los terminos y condiciones");
		return false;
	}
}

function dniCorrecto() {
	var letra = document.getElementById('dni_letra').value;
	var numero = document.getElementById('dni').value;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
	var dni='', letr='';
    letra = letra.toUpperCase();
	dni = numero + letra;
	

    if(expresion_regular_dni.test(dni) === true){
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        letr = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != letr) {
            alert('Dni erroneo, la letra del NIF no se corresponde');
            return false;
        }else{
            alert('Dni correcto');
            return true;
        }
    }else{
        alert('Dni erroneo, formato no valido');
        return false;
    }
	alert(letra);
}

function longitudesCorrecto(){
	var codigoPostal = document.getElementById('codigo_postal').value;
	var telefono = document.getElementById('telefono').value;
	var movil = document.getElementById('movil').value;
	var correcto = true;
	
	if(codigoPostal.length>5){
		alert("El campo Código postal no puede ser mayor de 5");
		correcto=false;
	}
	if(telefono.length>9){
		alert("El campo teléfono no puede ser mayor de 9");
		correcto=false;
	}
	if(movil.length>9){
		alert("El campo móvil no puede ser mayor de 9");
		correcto=false;
	}
	return correcto;
}