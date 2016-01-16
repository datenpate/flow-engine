'use strict'
var Logger = require('./Logger')
var Rules = require('./Rules')
var Rule = require('./Rule')

module.exports = class FlowEngine {
  constructor(rulesJSON = '[]') {
    this.rules = this.initRules(rulesJSON)
  }

  initRules(rulesJSON) {
    let parsedRules = this.parseJSON(rulesJSON)
    let rules = new Rules()

    for (let rule of parsedRules) {
      let ruleFunction = new Function('data', rule.body)
      rules.addRule(new Rule(rule.id, rule.name, ruleFunction, rule.true_id, rule.false_id))
    }

    return rules
  }

  parseJSON(json = '') {
    let parsedJSON = []

    try {
      parsedJSON = JSON.parse(json)
    } catch (error) {
      Logger.error(error)
    }

    return parsedJSON
  }

  process(dataJSON) {
    let data = this.parseJSON(dataJSON)
    let next = (rule) => {
      let result = rule.execute(data)
      result.pass ? Logger.pass(result.message) : Logger.fail(result.message)
      result.next === null ? Logger.info('End') : next(this.rules.getRuleById(result.next))
    }
    next(this.rules.getFirstRule())
  }
}
