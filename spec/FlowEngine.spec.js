'use strict'
var expect = require('chai').expect
var FlowEngine = require('../src/FlowEngine')
var fs = require('fs')

describe('FlowEngine', () => {
  it('should init with empty rules', () => {
    let flowEngine = new FlowEngine()
    expect(flowEngine.rules.rules).to.be.a('array')
    expect(flowEngine.rules.rules).to.have.length(0)
  })

  describe('with rules', () => {
    let flowEngine

    beforeEach(() => {
      let exampleRules = fs.readFileSync('rules.json',{ encoding: 'utf8' })
      flowEngine = new FlowEngine(exampleRules)
    })

    describe('Rules', () => {
      let rules

      beforeEach(() => {
        rules = flowEngine.rules
      })

      it('should init with a set of given rules from json', () => {
        expect(rules.rules).to.be.a('array')
        expect(rules.rules).to.have.length(5)
      })

      it('should return a rule by id', () => {
        let rule = rules.getRuleById(2)
        expect(rule).to.be.a('object')
        expect(rule.name).to.equal('speaks german?')
        expect(rule.rule).to.be.a('function')
      })

      it('should return first rule', () => {
        let rule = rules.getFirstRule()
        expect(rule).to.be.a('object')
        expect(rule.name).to.equal('has language?')
        expect(rule.rule).to.be.a('function')
      })
    })
  })
})
