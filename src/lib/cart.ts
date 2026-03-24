'use client'

import { createContext, useContext } from 'react'
import type { Product, CartItem } from '@/types'
import { calculateShippingFee } from '@/lib/utils'

export interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
  shippingFee: number
  total: number
  // カートドロワー
  isDrawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

export const CartContext = createContext<CartContextType | null>(null)

export function useCart(): CartContextType {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export function getCartFromStorage(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem('akinorio-cart')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function saveCartToStorage(items: CartItem[]): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem('akinorio-cart', JSON.stringify(items))
  } catch {
    // ignore storage errors
  }
}

export function calculateCartTotals(items: CartItem[]) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
  const shippingFee = calculateShippingFee(subtotal)
  const total = subtotal + shippingFee

  return { totalItems, subtotal, shippingFee, total }
}
