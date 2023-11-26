const { isUtf8 } = require('buffer');
const { create } = require('domain')
const fs = require('fs')
const path = require('path') 

// make directory or create folder
// fs.mkdir(path.join(__dirname, "/test"), {},  err => {
//     if (err) throw err
//     console.log("Folder Created...")
// })

// create & write to file
// fs.writeFile(path.join(__dirname, "/test", "hello.txt", ),"Hello world.*.",{}, (err) => {
//   if (err) throw err;
//   console.log("File Written To...");
  // file append

//   fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     " I love nodejs.",
//     {},
//     (err) => {
//       if (err) throw err;
//       console.log("File Written To...");
//     }
//   );
// });

// // read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8",  (err,data) => {
//     if (err) throw err
//     console.log(data)
// })
// rename file
fs.rename(
  path.join(__dirname, "/test", "helloWorld.txt"),
  path.join(__dirname, "/test", "helloWorldv1.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);