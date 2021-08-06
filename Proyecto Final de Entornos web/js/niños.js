
const img = document.querySelector('._img')
setInterval(() => {    
    img.src ='img__niños/zapato_niño_1.jpg'
    setTimeout(() => img.src ='img__niños/zapato_niño.jpg', 1500);
}, 4000);


const cont10 = document.querySelector('#cont10')
const cont11 = document.querySelector('#cont11')
const cont12 = document.querySelector('#cont12')
const cont13 = document.querySelector('#cont13')
const cont14 = document.querySelector('#cont14')
const cont15 = document.querySelector('#cont15')
const cont16 = document.querySelector('#cont16')


cont10.addEventListener('mouseover', (e) => {
    e.target.src = 'img__niños/niña__1.jpg' 
    setTimeout(() => {
         e.target.src= 'img__niños/niña_1.jpg'
    }, 800);
})


cont11.addEventListener('mouseover', (e) => {
    e.target.src = 'img__niños/niña__2.jpg' 
    setTimeout(() => {
         e.target.src= 'img__niños/niña_2.jpg'
    }, 800);
})

cont12.addEventListener('mouseover', (e) => {
    e.target.src = 'img__niños/niño__2.jpg' 
    setTimeout(() => {
         e.target.src= 'img__niños/niño_1.jpg'
    }, 800);
})

cont13.addEventListener('mouseover', (e) => {
    e.target.src = 'img__niños/niño__3.jpg' 
    setTimeout(() => {
         e.target.src= 'img__niños/niño_3.jpg'
    }, 800);
})

cont14.addEventListener('mouseover', (e) => {
    e.target.src = 'img__niños/niña__4.jpg' 
    setTimeout(() => {
         e.target.src= 'img__niños/niña_4.jpg'
    }, 800);
})


cont15.addEventListener('mouseover', (e) => {
    e.target.src = 'img__niños/niña__5.jpg' 
    setTimeout(() => {
         e.target.src= 'img__niños/niña_5.jpg'
    }, 800);
})


cont16.addEventListener('mouseover', (e) => {
    e.target.src = 'img__niños/niña__6.jpg' 
    setTimeout(() => {
         e.target.src= 'img__niños/niña_6.jpg'
    }, 800);
})


