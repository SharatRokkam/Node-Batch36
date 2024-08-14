const fs = require("fs");
const os = require("os");

//4 workers in thread pool --> 8 {max}
console.log(os.cpus().length);

//Blocking- Synchronous
// fs.readFileSync("test.txt", "utf-8");
// Non-Blocking - Asynchronous
// fs.readFile("test.txt", "utf-8", (err, result) => {});

console.log("1");
// Asynchronous Operation - Non Blocking
fs.readFile("tst.txt", "utf-8", (err, result) => {
  console.log(result);
});
console.log("2");
console.log("3");
console.log("4");
