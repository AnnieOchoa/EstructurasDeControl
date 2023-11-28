/* Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%. */

const calculateDiscount = (origen, destino) => {

    let porcentaje = 0
    
    if(origen === 'Ciudad de Palma' && destino === 'La Costa del Sol'){
        porcentaje = 5
    } else if (origen === 'Ciudad de Palma' && destino === 'Panchimalco') {
        porcentaje = 10
    } else if (origen === 'Ciudad de Palma' && destino === 'Puerto del Trinfo') {
        porcentaje = 15
    }

    return porcentaje > 0 ? 
        `Tienes un descuento del ${porcentaje}%` : 
        `No aplica descuento`
}

console.log(calculateDiscount('Ciudad de Palma', 'Puerto del Trinfo'))
