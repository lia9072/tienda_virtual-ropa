

/* eventos */
	
document.querySelector('.bolso').addEventListener('mouseover', ()=>{
    document.querySelector('.bolso').style.transform = "scale(1)"
    document.querySelector('.bolso').style.transition ="all 1s"
}
)
document.querySelector('.bolso').addEventListener('mouseout', ()=>{
    document.querySelector('.bolso').style.transform = "scale(.9)"
    document.querySelector('.bolso').style.transition ="all 1s"
}
)

document.querySelector('.img').addEventListener('mouseover', ()=>{
    document.querySelector('.img').style.transform = "scale(1)"
    document.querySelector('.img').style.transition ="all 1s"
}
)
document.querySelector('.img').addEventListener('mouseout', ()=>{
    document.querySelector('.img').style.transform = "scale(.98)"
    document.querySelector('.img').style.transition ="all 1s"
}
)


document.querySelector('.img1').addEventListener('mouseover', ()=>{
    document.querySelector('.img1').style.transform = "scale(1)"
    document.querySelector('.img1').style.transition ="all 1s"
}
)
document.querySelector('.img1').addEventListener('mouseout', ()=>{
    document.querySelector('.img1').style.transform = "scale(.98)"
    document.querySelector('.img1').style.transition ="all 1s"
}
)



const fila = document.querySelector('.contenedor-carousel');
const card_carrusel = document.querySelectorAll('.card_carrusel');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

});


flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
});




card_carrusel.forEach((cardcarrusel) => {
	cardcarrusel.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			card_carrusel.forEach(card_carrusel => card_carrusel.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	card_carrusel.forEach(card_carrusel => card_carrusel.classList.remove('hover'));
});


