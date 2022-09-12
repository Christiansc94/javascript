let products = []
let basket = []
const selectItem = document.getElementById('list')

const anillo = {
    id:1,
    nombre:'Anillo',
    precio: 70000
}
products.push(anillo)

const collar = {
    id:2,
    nombre:'Collar',
    precio: 95000
}
products.push(collar)

const pulsera = {
    id:3,
    nombre:'Pulsera',
    precio: 65000
}
products.push(pulsera)

const tobillera = {
    id:4,
    nombre:'Tobillera',
    precio: 40000
}
products.push(tobillera)

const reloj = {
    id:5,
    nombre:'Reloj',
    precio: 250000
}
products.push(reloj)

products.forEach((product) => {
    const option = document.createElement('option')
    option.innerText = `${product.nombre}: $${product.precio}`
    option.setAttribute('id',`${product.id}`)
    selectItem.append(option)
})

const boton = document.createElement('button')
boton.innerText = 'SEGUIR COMPRANDO'
document.body.append(boton)

const boton2 = document.createElement('button') 
boton2.innerText = 'TERMINAR COMPRA'
document.body.append(boton2)

boton.onclick = ()=>{
    const selectedItem = products [selectItem.selectedIndex]
    basket.push(selectedItem)
}


boton2.onclick = ()=>{
    let totalCompra = 0
    basket.forEach((prod)=>{
        totalCompra = totalCompra + prod.precio
    })
    alert(`El valor a pagar es ${totalCompra}`)
}