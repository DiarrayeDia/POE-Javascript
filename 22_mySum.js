// function main(array) {
//     let sum = 0;
//     for (num = 0; num < array.length; num++) {
//         sum += array[num]
//     }
//     return sum;
// }

// function main(array) {
//     let sum = 0;
//     array.map(num => sum += num);
//     return sum;
// }

function main(array) {
    return array.reduce((sum, num) => sum + num, 0);
}
module.exports = main;