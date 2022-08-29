let totalCompra = 0
let selectedItem = parseInt(prompt('Ingresa el numero del producto que quieres comprar entre: 1.Anillo - 2.Collar - 3.Pulsera - 4.Tobillera - 5.Reloj'))
let seguirComprando = true
let choice

while (seguirComprando === true) {
    if (selectedItem === 1) {
        totalCompra = totalCompra + 70000
    } else if (selectedItem === 2) {
        totalCompra = totalCompra + 95000
    } else if (selectedItem === 3) {
        totalCompra = totalCompra + 65000
    } else if (selectedItem === 4) {
        totalCompra = totalCompra + 40000
    } else if (selectedItem === 5) {
        totalCompra = totalCompra + 250000
    } else{
        selectedItem = parseInt(prompt('Ingresaste un valor erroneo. 1.Anillo - 2.Collar - 3.Pulsera - 4.Tobillera - 5.Reloj'))
        continue
    }


    choice = parseInt(prompt('¿Quieres agregar algo mas? 1.Si - 2.No'))
    if (choice === 1) {
        selectedItem = parseInt(prompt('Ingresa el nombre del producto que quieres comprar entre: 1.Anillo - 2.Collar - 3.Pulsera - 4.Tobillera - 5.Reloj'))
    } else if (choice === 2) {
        seguirComprando = false
    }
}

alert('el valor total sin descuento ni impuesto es: '+ totalCompra)

function calcularPrecioConDescuento(valor){
let descuento = 0
if(valor<=100000){
    descuento = 10
}   else if(valor>100000 && valor<=200000){
    descuento = 15
}   else if(valor>200000){
    descuento = 20
}
let valorDescuento = valor *(descuento/100)
valor = valor - valorDescuento
return valor
}
let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert('El total con descuento sin impuestos es: '+valorConDescuento)

function calcularPrecioConImpuesto(valor){
    const impuestos = valor * (9/100)
    return valor + impuestos
}

let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
alert('El precio total incluyendo impuesto y descuento es de: ' + valorFinalConImpuesto)