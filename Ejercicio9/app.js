/* Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

const temperatureConverter = (temp) => {
    const result = (temp * 9/5) + 32
    if (result >= 14 && result <= 32) return 'Temperatura Baja ' + result
    else if (result >= 32 && result <= 68 ) return 'Temperatura Adecuada ' + result
    else if(result > 68 && result <= 96) return 'Temperatura Alta ' + result
    else return `Temperatura Desconocida ${result}`
 }

 console.log(temperatureConverter(20))