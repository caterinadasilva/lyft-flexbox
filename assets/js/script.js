(function hiddenMenu() {
	var lastScrollTop = 0;
	window.addEventListener("scroll", function() {
		var currentScroll = window.pageYOffset || document.body.scrollTop;
		if (currentScroll > lastScrollTop) {
			document.getElementById("navigation").classList.remove("no-bg");
			document.getElementById("signUpBtn").classList.remove("hidden-btn");
		} else {
			document.getElementById("navigation").classList.remove("no-bg");
			if ( currentScroll <= 2 ) {
				document.getElementById("navigation").classList.add("no-bg");
				document.getElementById("signUpBtn").classList.add("hidden-btn");
			}
		}
		lastScrollTop = currentScroll;
	}, false);
})();
(function hiddenInputs() {
	var inputs = Array.from(document.getElementsByClassName("hidden"));
	document.getElementById('toggle').addEventListener("click", function(event){
  		inputs.forEach(function(input) {
  			input.classList.remove('hidden');
  		})
  		event.preventDefault();
	});
})();

// // VALIDACIÓN FORMULARIO // //
(function validateForm(){
	document.getElementById('driverBtn').addEventListener('click', function(event) {
		event.preventDefault();
	// ELIMINAR spanS DE VALIDACIONES ANTERIORES
		document.querySelectorAll(".form-input span").forEach(function(span) {span.remove()});
	// VALORES VALUE
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var phone = document.getElementById('phone').value;
		var city = document.getElementById('city').value;
		var validaciones = true;
	// CARACTERES VÁLIDOS // REGULAR EXPRESSIONS
		var validName = /^[A-Za-z]*/;
		var validPhone = /^56(?=[1-9]\d{0,2}[1-9])(?=\d{2,15}$)\d+$/;
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	////// NOMBRE
		// VERIFICACIÓN DE CAMPO OBLIGATORIO
		if (name === "") {
			document.getElementsByClassName('form-input')[0].appendChild(labelErr());
			console.log("Nombre:" + name);
			validaciones = validaciones && false;
		} else {
		// IMPRIMIR
			console.log("Nombre:" + name);
			validaciones = validaciones && true;
		}
	////// EMAIL
		// VERIFICACIÓN DE CAMPOS VACÍOS	
		if (email === "") {
			document.getElementsByClassName('form-input')[1].appendChild(labelErr());
			console.log("Correo: " + email);
			validaciones = validaciones && false;
		}
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		else if(!validEmail.test(email)) {
			document.getElementsByClassName('form-input')[1].appendChild(labelErr());
			console.log("Correo: " + email + ". Tiene caracteres no permitidos.");
			validaciones = validaciones && false;
		}
		// IMPRIMIR
		else {
			console.log("Correo: " + email);
			validaciones = validaciones && true;
		}
	////// TELÉFONO
		// VERIFICACIÓN DE CAMPOS VACÍOS	
		if (phone === "") {
			document.getElementsByClassName('form-input')[2].appendChild(labelErr());
			console.log("Phone: " + phone);
			validaciones = validaciones && false;
		}
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		else if(!validPhone.test(phone)) {
			document.getElementsByClassName('form-input')[2].appendChild(labelErr());
			console.log("Teléfono: " + phone + ". Tiene caracteres no permitidos.");
			validaciones = validaciones && false;
		}
		// IMPRIMIR
		else {
			console.log("Teléfono: " + phone);
			validaciones = validaciones && true;
		}
	////// Ciudad
		// VERIFICACIÓN DE CAMPO OBLIGATORIO	
		if (city === "") {
			document.getElementsByClassName('form-input')[3].appendChild(labelErr());
			console.log("Ciudad:" + city);
			validaciones = validaciones && false;
		} else {
		// IMPRIMIR
			console.log("Ciudad:" + city);
			validaciones = validaciones && true;
		}
	////// VACIAR CAMPOS
		if (validaciones == true) {
			document.getElementById('name').value = "";
			document.getElementById('email').value = "";
			document.getElementById('phone').value = "";
			document.getElementById('city').value = "";
		}

		function labelErr() {
			var labelError = document.createElement('span');
			labelError.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
			labelError.classList.add('label', 'error');
			return labelError;
		}
	////// FIN
	});
})();
