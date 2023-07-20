import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'
import HistoryView from '../views/HistoryView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.js'

const tag = '[MainController]'

export default {
  async init() {
    FormView.setup(document.querySelector('form')) //
      .on('@submit', (e) => this.onSubmitForm(e.detail.input))
      .on('@reset', () => this.onResetForm())

    ResultView.setup(document.querySelector('#search-result'))

    KeywordView.setup(document.querySelector('#search-keyword')) //
      .render(await this.onSearchKeyword())
      .on('@click', (e) => this.onClickKeyword(e.detail.keyword))

    HistoryView.setup(document.querySelector('#search-history')) //
      .on('@click', (e) => this.onClickHistory(e.detail.keyword))
      .on('@remove', (e) => this.onRemoveHistory(e.detail.keyword))

    TabView.setup(document.querySelector('#tabs')) //
      .on('@change', (e) => this.onChangeTab(e.detail.tabName))
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

  async onSearchKeyword() {
    console.log('onSearchKeyword()')
    const data = await KeywordModel.list()
    return data
  },

  onSearchHistory() {
    console.log('onSearchHistory()')
    HistoryModel.list() //
      .then((data) => HistoryView.render(data))
  },

  onSubmitForm(input) {
    this.search(input)
    if (TabView.tabName === '추천 검색어') {
      KeywordView.hide()
    }
    if (TabView.tabName === '최근 검색어') {
      HistoryView.hide()
    }
    HistoryModel.add(input)
  },

  onResetForm() {
    ResultView.hide()
    if (TabView.tabName === '추천 검색어') {
      KeywordView.show()
    }
    if (TabView.tabName === '최근 검색어') {
      this.onSearchHistory()
      HistoryView.show()
    }
  },

  onChangeTab(tabName) {
    if (tabName === '추천 검색어') {
      this.onSearchKeyword()
      HistoryView.hide()
      KeywordView.show()
      ResultView.hide()
    }
    if (tabName === '최근 검색어') {
      this.onSearchHistory()
      KeywordView.hide()
      HistoryView.show()
      ResultView.hide()
    }
  },

  onClickKeyword(keyword) {
    this.search(keyword)
    KeywordView.hide()
    FormView.inputEl.value = keyword
    FormView.showResetBtn(true)
  },

  onClickHistory(keyword) {
    this.search(keyword)
    HistoryView.hide()
    FormView.inputEl.value = keyword
    FormView.showResetBtn(true)
  },

  onRemoveHistory(keyword) {
    HistoryModel.remove(keyword)
    this.onSearchHistory()
  },
}
