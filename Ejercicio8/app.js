//Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.

const multiplicationTable = (num1) => {
    for (let i = 0; i <= 10; i++){
        console.log(num1 + 'x' + i + '=' + num1 * i);
    }
}

multiplicationTable(2)