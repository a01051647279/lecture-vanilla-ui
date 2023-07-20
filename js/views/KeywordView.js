import View from './View.js'

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.messages = {
  NO_KEYWORD: '추천 검색어가 없습니다',
}

KeywordView.setup = function (el) {
  this.init(el)

  return this
}

KeywordView.render = function (data = []) {
  this.el.innerHTML = data.length
    ? this.createHTMLString(data)
    : this.messages.NO_KEYWORD

  this.bindEvents()
  return this
}

KeywordView.createHTMLString = function (items) {
  return (
    `<ul class="list">` +
    items
      .map((item, index) => {
        return `<li data-keyword="${item.keyword}">
        <span class="number">${index + 1}</span>
        ${item.keyword}
      </li>`
      })
      .join('') +
    `</ul>`
  )
}

KeywordView.bindEvents = function () {
  this.el
    .querySelector('.list')
    .addEventListener('click', (e) =>
      this.handleClick(e.target.dataset.keyword)
    )
}

KeywordView.handleClick = function (keyword) {
  this.emit('@click', { keyword })
}

export default KeywordView
