import {readFile} from 'fs/promises'

const fileContent = await readFile ('./src/index.cpp', "utf-8")


// const datatypes = fileContent.match(/[a-zA-Z0-9_]+\s+[a-zA-Z0-9_]+/g)

const tokens = fileContent.split ('\n', fileContent.length)

console.log (tokens)
