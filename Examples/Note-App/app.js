const fs = require('fs')
 

fs.writeFileSync('notes.txt','This file was created by NODE JS')

/* Task
to append a text to the file using fileAppendSync
Run the script and check the file */

fs.appendFileSync('notes.txt','\nThis is a newline')
