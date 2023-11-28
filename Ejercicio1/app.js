/* Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario. */

//Con ternario
const ageCalculator = age => {
   return age >= 18 ?
        `Tu edad es ${age}. Eres mayor de edad` :
        `Tu edad es ${age}. Eres menor de edad`
}

const resultado = ageCalculator(20)

//opcion 2 sin ternario
/*const edad = (num) => {
    if (edad >= 18) {
       return 'Tu edad es ' + num + '. Eres mayor de edad'
    } else {
       return 'Tu edad es ' + num + '. Eres menor de edad'
    }
} 

const resultado = edad(20)

*/

