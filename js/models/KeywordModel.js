export default {
  data: [
    { keyword: '뚜레쥬르' },
    { keyword: '파리바게트' },
    { keyword: '써브웨이' },
    { keyword: '냉면' },
  ],

  list() {
    return new Promise((res) => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    })
  },
}
