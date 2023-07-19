import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.inputEl = this.el[0]
  this.resetEl = this.el[1]

  this.showResetBtn(false)
}

FormView.showResetBtn = function (show) {
  if (!show) this.resetEl.style.display = 'none'
}

export default FormView
