'use strict'
class Logger {
  constructor() {
    this.reset = "\x1b[0m"
    this.redColor = "\x1b[31m"
    this.greenColor = "\x1b[32m"
    this.blueColor = "\x1b[34m"
    this.underscore = "\x1b[4m"
  }

  error(message = '') {
    console.log(this.format(this.redColor, 'Error', message))
  }

  info(message = '') {
    console.log(this.format(this.blueColor, 'Info', message))
  }

  pass(message = '') {
    console.log(this.format(this.greenColor, 'Pass', message))
  }

  fail(message = '') {
    console.log(this.format(this.redColor, 'Fail', message))
  }

  format(color, title, message) {
    return `${color}${this.underscore}${title}:${this.reset} ${JSON.stringify(message)}`
  }
}

module.exports = new Logger()
