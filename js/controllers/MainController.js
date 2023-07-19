import FormView from '../views/FormView.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form')) //
      .on('@submit', (e) => this.onSubmitForm(e.detail.input))
      .on('@reset', () => this.onResetForm())
  },

  onSubmitForm(e) {
    debugger
  },

  onResetForm() {
    debugger
  },
}
