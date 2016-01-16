'use strict'
let fs = require('fs')
let FlowEngine = require('./FlowEngine')

let exampleRules = fs.readFileSync('rules.json',{ encoding: 'utf8' })
let exampleData = fs.readFileSync('example-data.json',{ encoding: 'utf8' })
let flowEngine = new FlowEngine(exampleRules)
flowEngine.process(exampleData)
