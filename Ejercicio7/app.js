/* Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */

const numberExtractor = (numbers) => {

    let negativos = []
    let positivos = []
    let multiplos15 = []
    let pares = []

    numbers.forEach((num) => {
        if(num < 0) negativos.push(num)
        if(num >= 0) positivos.push(num)
        if(num % 15 === 0) multiplos15.push(num)
        if(num % 2 === 0) pares.push(num)
    }) 

    return {negativos, positivos, multiplos15, pares}
}

console.log(numberExtractor([-1, 20, 30, 15, 45, 2, 7, 1, 14, 22])) 