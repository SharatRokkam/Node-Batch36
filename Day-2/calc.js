// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// function division(x, y) {
//   return x / y;
// }

// function multiplication(x, y) {
//   return x * y;
// }

// module.exports = { add, subtract, division, multiplication };

// IMPORT and EXPORT
// module.exports can be used to send single or multiple file
//exports should be used to send just one file which can be changed overtime

// module.exports = {
//   add: (x, y) => x + y,
//   subtract: (x, y) => x - y,
//   divide: (x, y) => x / y,
//   multiplication: (x, y) => x * y,
// };

exports.add = (x, y) => x + y;
exports.subtract = (x, y) => x - y;
exports.divide = (x, y) => x / y;
exports.multiplication = (x, y) => x * y;
