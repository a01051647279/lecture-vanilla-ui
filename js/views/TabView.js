import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.setup = function (el) {
  this.init(el)

  this.setActiveTab('추천 검색어')
  this.bindEvents()

  return this
}

TabView.setActiveTab = function (tabName) {
  Array.from(this.el.children).forEach((li) => {
    li.className = li.textContent === tabName ? 'active' : ''
  })
}

TabView.bindEvents = function () {
  Array.from(this.el.children).forEach((li) => {
    li.addEventListener('click', (e) => this.handleClick(e.target.textContent))
  })
}

TabView.handleClick = function (content) {
  this.setActiveTab(content)
  this.emit('@change', { tabName: content })
}

export default TabView
