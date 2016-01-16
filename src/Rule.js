'use strict'
var Logger = require('./Logger')

module.exports = class Rule {
  constructor(id, name, rule, true_id, false_id) {
    this.id = id
    this.name = name
    this.rule = rule
    this.true_id = true_id
    this.false_id = false_id
  }

  execute(data) {
    if(this.rule(data)) {
      return {pass: true, next: this.true_id, message: this.name}
    } else {
      return {pass: false, next: this.false_id, message: this.name}
    }
  }
}
