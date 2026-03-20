export type ProductCategory = 'single' | 'set'

export type SkinConcern = '乾燥' | '毛穴' | 'シミ・くすみ' | 'ハリ・たるみ' | '敏感肌' | 'その他'

export interface Product {
  id: string
  slug: string
  name: string
  subtitle: string
  description: string
  category: ProductCategory
  price: number
  subscriptionPrice: number
  subscriptionDiscountPct: number
  volume: string
  usageDuration?: string
  ingredients: string
  features: string[]
  skinConcerns: SkinConcern[]
  image: string
  images: string[]
  sortOrder: number
  isActive: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  subtotal: number
  shippingFee: number
  total: number
}

export interface SampleRequestForm {
  lastName: string
  firstName: string
  lastNameKana: string
  firstNameKana: string
  postalCode: string
  prefecture: string
  city: string
  addressLine1: string
  addressLine2: string
  phone: string
  email: string
  lineDisplayName: string
  skinConcerns: SkinConcern[]
  birthDate: string
}

export interface Testimonial {
  id: string
  name: string
  age: number
  skinConcern: string
  content: string
  rating: number
  productName: string
}
