import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.inputEl = this.el[0]
  this.resetEl = this.el[1]

  this.showResetBtn(false)
  this.bindEvents()
}

FormView.showResetBtn = function (show) {
  this.resetEl.style.display = show ? '' : 'none'
}

FormView.bindEvents = function () {
  this.inputEl.addEventListener('keyup', (e) => this.handleKeyup(e))
}

FormView.handleKeyup = function (e) {
  this.showResetBtn(e.target.value)
}

export default FormView
