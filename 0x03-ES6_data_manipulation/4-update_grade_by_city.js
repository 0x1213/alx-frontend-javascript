export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const studentsWithGrades = studentsByCity.map((student) => {
    const newStudent = student;
    const studentGrade = newGrades.filter((elem) => elem.studentId === student.id);
    if (studentGrade.length > 0) {
      newStudent.grade = studentGrade[0].grade;
    } else {
      newStudent.grade = 'N/A';
    }
    return newStudent;
  });
  return studentsWithGrades;
}
