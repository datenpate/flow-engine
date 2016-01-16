'use strict'
module.exports = class Rules {
  constructor(rules = []) {
    this.rules = rules
  }

  addRule(rule) {
    this.rules.push(rule)
  }

  getRuleById(id) {
    let ruleArray = this.rules.filter((rule, index) => {
      if(rule.id == id) {
        return true
      } else {
        return false
      }
    })
    return ruleArray[0]
  }

  getFirstRule() {
    return this.rules[0]
  }
}
