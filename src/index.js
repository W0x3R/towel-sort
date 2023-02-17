
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
 let concOne; 
 let concTwo;
 let concThree;
 let concFour;
 if (matrix == undefined || matrix.length == 0) {
  return []
 }
 else if (matrix.length == 2) {
  concOne = matrix[0].sort((a, b) => a - b);
  concTwo = matrix[1].sort((a, b) => b - a);
  return concOne.concat(concTwo);
 }
 else if (matrix.length == 3) {
  concOne = matrix[0].sort((a, b) => a - b);
  concTwo = matrix[1].sort((a, b) => b - a);
  concThree = matrix[2].sort((a, b) => a - b)
  return concOne.concat(concTwo, concThree)
 }
 else if (matrix.length == 4) {
  concOne = matrix[0].sort((a, b) => a - b);
  concTwo = matrix[1].sort((a, b) => b - a);
  concThree = matrix[2].sort((a, b) => a - b);
  concFour = matrix[3].sort ((a,b) => b - a);
  return concOne.concat(concTwo, concThree, concFour)
 }
}
 
// ONE MORE decision :
module.exports = function towelSort(arr) {
    if (arr === undefined || arr.length === 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            result.push(arr[i].reverse());
        } else {
            result.push(arr[i]);
        }
    }
    return result.flat();
};
