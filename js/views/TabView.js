import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.setup = function (el) {
  this.init(el)

  this.setActiveTab()
}

TabView.setActiveTab = function () {
  this.el.children[0].classList.add('active')
}

export default TabView
