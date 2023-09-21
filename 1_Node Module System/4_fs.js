
//files
const fs = require('fs')

// reading a file 
//let fileContent = fs.readFileSync('f1.txt')

//console.log('data of file 1-> ' + fileContent)

//writing in a file

//fs.writeFileSync('f2.txt' , 'This is file 2')
//console.log('File has been written')







fs.mkdirSync('myDirectory')


let folderPath =  'D:\vs code\node js\1_Node Module System\myDirectory'


let folderContent = fs.readdirSync(folderPath)

console.log("Folder Content", folderContent)