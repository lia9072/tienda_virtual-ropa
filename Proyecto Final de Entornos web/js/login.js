
/* formulario */

const btnEnviar = document.querySelector('#btnEnviar');
const form = document.querySelector('#loginform');
const email = document.querySelector('#email');
const nombre = document.querySelector('#nombre');
const apellidos = document.querySelector('#apellido')
const contraseña = document.querySelector('#contraseña')
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



eventos();

function eventos(){

	//carga la app
	document.addEventListener('DOMContentLoaded', cargando)
	// campo del formulario
	email.addEventListener('blur', validar)
	nombre.addEventListener('blur', validar)
	apellidos.addEventListener('blur', validar)
	contraseña.addEventListener('blur', validar)


	// enviar formulario
form.addEventListener('submit', (e) => {
	e.preventDefault();
	//usernav.innerHTML =`<a target="_top" href="" id="cerrar" > ${nombre.value} </a> `
	const usuario = Array(
		{
			usuario: nombre.value,
			apellido: apellidos.value			
		}
	)
	localStorage.setItem('user', JSON.stringify(usuario))
	location.href ='login.html'
})

}

// imprimir al usuario

const user = JSON.parse(localStorage.getItem('user'))
if(user != null){
	const usernav = document.createElement('a')
	usernav.innerHTML =`<a target="_top" id='muestra' href="" > ${user[0].usuario} ${user[0].apellido} </a>	`
	document.querySelector('nav').removeChild(document.querySelector('#fars'))
	document.querySelector('nav').appendChild(usernav)

}



function cargando(){
	btnEnviar.disabled = true;
	btnEnviar.classList.add('cursor')
}

function validar(e){
	if(e.target.value.length > 0){	
		e.target.style.borderBottom =' 2px solid green'
			// eliminado el mensaje de error	
		const error = document.querySelector('p.error')
		if(error){
			error.remove();
		}
		
	}else{
		e.target.style.borderBottom =' 2px solid red'
		mensaje('Rellene todos los espacios vacios')
	}


	// validando email con los expresines regulares 
	if(e.target.type === 'email'){		
		if(er.test( e.target.value )){
			e.target.style.borderBottom =' 2px solid green'
			// eliminado el mensaje de error	
			const error = document.querySelector('p.error')
			if(error){
				error.remove();
			}
		}else{
			e.target.style.borderBottom =' 2px solid red'
			mensaje(' El email no valido ')
		}
	}


// verificar que ningun campo este vacio

if( er.test( e.target.value ) && nombre !== '' && apellidos !=='' && contraseña !==''  ){
	btnEnviar.classList.remove('cursor')
	btnEnviar.disabled = false;

}


}

function mensaje(mensaje){
	const p = document.createElement('p')
	p.textContent = mensaje;
	p.classList.add('mensaje', 'error')

	// para que ejecute el mensaje sin repetir 
	const errores = document.querySelectorAll('.error')
	if(errores.length === 0){
		form.appendChild(p)
	}


}


