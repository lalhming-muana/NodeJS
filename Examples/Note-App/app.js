const validator = require('validator')
const chalk = require('chalk')
const  getNotes = require('./notes.js') // Here display can have a name different from the one in utils.js.

const msg = getNotes()

console.log(msg)
console.log(validator.isEmail('andrew@gmail.com'))
console.log(validator.isURL('https://stackoverflow.com/questions/45559269/display-flex-creating-extra-space-why'))
console.log(chalk.green.bold('Success'))
console.log(chalk.blue.bold('ERROR'))