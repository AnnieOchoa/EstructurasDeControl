/* Se cuenta con la siguiente información: • Las edades de 5 estudiantes del turno mañana. • Las edades de 6 estudiantes del turno tarde. • Las edades de 11 estudiantes del turno noche. Nota: Las edades de cada estudiante se deberán ingresar por la web. Lo que queremos devolver: • Obtener el promedio de las edades de cada turno (tres promedios). • Imprimir dichos promedios (promedio de cada turno). • Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor. */

const ages = {
    dayShift:  [23,56,43,34,31],
    afternoonShift: [30,23,43,53,33,21],
    nightShift: [34,54,23,33,22,21,23,34,55,43,42]
 }

 const ageAverage = ({dayShift, afternoonShift, nightShift}) => {

    const dayShiftAverage = parseInt(dayShift.reduce((a,b) => a +b) / dayShift.length)
    const afternoonShiftAverage = parseInt(afternoonShift.reduce((a,b) => a +b) / afternoonShift.length)
    const nightShiftAverage = parseInt(nightShift.reduce((a,b) => a +b) / nightShift.length)
    const ages = [dayShiftAverage, afternoonShiftAverage, nightShiftAverage]
    const greaterAverage = ages.toSorted()[ages.length - 1]
    
    console.log(`Promedio de edades del dia: ${dayShiftAverage}.\nPromedio de edades de la tarde: ${afternoonShiftAverage}.\nPromedio de edades de la noche: ${nightShiftAverage}.\nEl promedio mayor es de: ${greaterAverage}`)

 }

 ageAverage(ages)