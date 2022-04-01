const validator = require('validator')
const chalk = require('chalk')
const  getNotes = require('./notes.js') // Here display can have a name different from the one in utils.js.

const msg = getNotes()

console.log(msg)
console.log(validator.isEmail('andrew@gmail.com'))
console.log(validator.isURL('https://stackoverflow.com/questions/45559269/display-flex-creating-extra-space-why'))
console.log(chalk.green.bold('Success'))
console.log(chalk.blue.bold('ERROR'))

// 1st april friday.
// Comment dan a comment type phawt a, Ctrl +K+C hmeh

console.log(process.argv[2])

const command = process.argv[2]

if(command === 'add'){
    console.log('Adding note to the database!')
}

if(command === 'remove'){
    console.log('Removing note to the database!')
}

// Adding another argument. Title in the argument list  and see the argv dump

console.log(process.argv)

