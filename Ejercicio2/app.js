/* Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

const student = {
    name: 'Annie',
    id: '23',
    exam: false,
    homework: false,
    attendance: true,
    research: true
}

const calculateFinalGrade = ({exam, homework, attendance, research}) => {
    const grades = {
        exam: 20,
        homework: 40,
        attendance: 10,
        research: 30
    }
    let finalGrade = 0
    const studentGrades = [exam, homework, attendance, research]
        .forEach
    if (exam){
        finalGrade += grades.exam
    }
    if(homework){
        finalGrade += grades.homework
    }
    if(attendance){
        finalGrade += grades.attendance
    }
    if (research){
        finalGrade += grades.research
    }

    return {name: student.name, carnet: student.id, finalGrade }
}

console.log(calculateFinalGrade(student))