const cp = require ('child_process')

//cp.execSync('start chrome https://www.sclaer.com/topics/')

console.log('output ' + cp.execSync('node demo.js'))
