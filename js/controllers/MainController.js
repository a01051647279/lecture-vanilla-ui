import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'

import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form')) //
      .on('@submit', (e) => this.onSubmitForm(e.detail.input))
      .on('@reset', () => this.onResetForm())

    ResultView.setup(document.querySelector('#search-result'))

    TabView.setup(document.querySelector('#tabs'))
  },

  search(value) {
    this.onSearchResult(value)
  },

  onSearchResult(query) {
    SearchModel.list(query) //
      .then((res) => {
        ResultView.show()
        ResultView.render(res)
      })
  },

  onSubmitForm(input) {
    this.search(input)
  },

  onResetForm() {
    ResultView.hide()
  },
}
