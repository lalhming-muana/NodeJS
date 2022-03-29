const validator = require('validator')
const  getNotes = require('./notes.js') // Here display can have a name different from the one in utils.js.

const msg = getNotes()

console.log(msg)
console.log(validator.isEmail('andrew@gmail.com'))
console.log(validator.isURL('https://stackoverflow.com/questions/45559269/display-flex-creating-extra-space-why'))