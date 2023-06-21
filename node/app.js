// const fs = require("fs")
import fs from "fs"

// fs.writeFile("test.txt", "hello node js", (err) => {
//     if(err) console.log(err)
// })

fs.readFile("test.txt", "utf8", (err, data) => {
    if(err) console.log(err)
    console.log(data)
})