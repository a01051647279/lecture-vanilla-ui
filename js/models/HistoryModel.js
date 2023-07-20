import { formatDate } from '../utils/date.js'

export default {
  data: [
    { keyword: '카레우동', date: '12.03' },
    { keyword: '계란찜', date: '12.02' },
    { keyword: '연어샐러드', date: '12.01' },
  ],

  list() {
    return Promise.resolve(this.data)
  },

  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return
    if (this.data.some((item) => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = formatDate()
    this.data = [{ keyword, date }, ...this.data]
  },

  remove(keyword) {
    this.data = this.data.filter((item) => item.keyword !== keyword)
  },
}
