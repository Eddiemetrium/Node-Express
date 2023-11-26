const { create } = require("domain")
const path = require("path")

// basename
console.log(__filename)

// directory
console.log(__dirname) 

// File extension
console.log(path.extname(__filename))

// create path Object
console.log(path.parse(__filename))

//Concatenate
console.log(path.join(__dirname, "test", "hello.html"))

