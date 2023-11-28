/* Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial. 

CATEGORIA:      AUMENTO
A               15%
B               30%
C               10%
D               20%

*/

const calculateSalaryIncrease = ({ nombre, salario, categoria, aumento }) => {

    const increasePerCategory = {
        'A': 0.15,
        'B': 0.30,
        'C': 0.10,
        'D': 0.20
    }

    salario = (salario * increasePerCategory[aumento]) + salario


    return `El empleado ${nombre} tiene un nuevo salario de ${salario} y queda en categoria: ${aumento}`
}

const empleado = {nombre: 'juliana', salario: 2500, categoria: 'A', aumento: 'B'}

console.log(calculateSalaryIncrease(empleado));
