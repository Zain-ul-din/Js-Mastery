#! /usr/bin/env node

// creating CLI in node-js

// put bin : { "name" : "scriptref"}
// npm i -g | npm i cli-name -g

console.log('CLI app')

// open , node-fetch , yargs : packages

import fetch from "node-fetch"
import open from 'open'
import yargs from "yargs"

//console.log(process.argv) .. argv of flags

const {argv} = yargs(process.argv)

// const res fetch = await ()

// console.log(argv)