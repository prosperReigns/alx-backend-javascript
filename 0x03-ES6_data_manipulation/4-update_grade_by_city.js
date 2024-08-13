export default function updateStudentGradeByCity(arr, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (arr instanceof Array) {
    return arr
      .filter((arr) => arr.location === city)
      .map((arr) => ({
        id: arr.id,
        firstName: arr.firstName,
        location: arr.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === arr.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
