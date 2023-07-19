import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.messages = {
  NO_RESULT: '검색 결과가 없습니다',
}

ResultView.setup = function (el) {
  this.init(el)
}

ResultView.render = function (data) {
  this.el.innerHTML = data.length
    ? this.createHTMLString(data)
    : this.messages.NO_RESULT
}

ResultView.createHTMLString = function (items) {
  return (
    `<ul>` +
    items
      .map((item) => {
        return `<li>
      <img src="${item.image}" alt="${item.name}"/>
      <p>${item.name}</p>
    </li>`
      })
      .join('') +
    `</ul>`
  )
}

export default ResultView
