import View from './View.js' // Object.create(KeywordView)로 원형 복사하여 확장 가능

const tag = '[HistoryView]'

const HistoryView = Object.create(View)

HistoryView.messages = {
  NO_HISTORY: '최근 검색어가 없습니다',
}

HistoryView.setup = function (el) {
  this.init(el)
}

HistoryView.render = function (data = []) {
  this.el.innerHTML = data.length
    ? this.createHTMLString(data)
    : this.messages.NO_HISTORY
}

HistoryView.createHTMLString = function (items) {
  return (
    `<ul class="list">` +
    items
      .map((item) => {
        return `<li data-keyword="${item.keyword}">
            ${item.keyword}
            <span class="date">${item.date}</span>
            <button class="btn-remove"></button>
          </li>`
      })
      .join('') +
    `</ul>`
  )
}

export default HistoryView
