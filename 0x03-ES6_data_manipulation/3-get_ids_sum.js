export default function getStudentIdsSum(arr) {
  if (arr instanceof Array) {
    return arr.reduce(
      (firstArr, nextArr) => firstArr.id || firstArr + nextArr.id,
      0,
    );
  }
  return 0;
}
