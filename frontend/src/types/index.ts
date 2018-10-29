export interface Item {
  id: number
  name
  string
  description: string
  like_count: number
  comment_count: number
  price: number
  is_sold_out: boolean
  shipping_fee: string
  image: string
}

export interface Items {
  data: Array<Item>
}

export interface Category {
  id: number
  name: string
}

export interface Categories {
  data: Array<Category>
}
