const data = [
  {
    id: 1,
    name: '[카테고리] 상품 이름1',
    image: 'https://i.pravatar.cc/300',
  },
  {
    id: 2,
    name: '[카테고리] 상품 이름2',
    image: 'https://i.pravatar.cc/300',
  },
]

export default {
  list(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 200)
    })
  },
}
