import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form')) //
      .on('@submit', (e) => this.onSubmitForm(e.detail.input))
      .on('@reset', () => this.onResetForm())

    ResultView.setup(document.querySelector('#search-result'))
  },

  search(value) {
    this.onSearchResult(value)
  },

  onSearchResult(query) {
    SearchModel.list(query) //
      .then((res) => {
        ResultView.render(res)
      })
  },

  onSubmitForm(input) {
    this.search(input)
  },

  onResetForm() {
    debugger
  },
}
