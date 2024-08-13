export default function getStudentsByLocation(arr, city) {
  if (arr instanceof Array) {
    return arr.filter(arr => arr.location === city);
  }
  return [];
}
