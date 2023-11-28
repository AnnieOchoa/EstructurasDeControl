/* Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario */

const buttons = document.querySelectorAll('button');

const discounts = {
    'Ford Fiesta' : 0.05,
    'Ford Focus': 0.10,
    'Ford Escape': 0.20
} 

buttons.forEach(button => {
    button.addEventListener('click' , ({target}) => {
        const card = target.parentElement
        const price = card.querySelector('p').textContent.slice(1,6)
        const name = card.querySelector('h2').textContent
        const newPrice = price - (price * discounts[name])
        alert(`Seleccionando este vehículo, has ganado un descuento. Revisa el nuevo precio`)
        card.querySelector('p').innerText = `$${newPrice},00`
    })
});