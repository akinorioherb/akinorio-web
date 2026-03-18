'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Product, CartItem } from '@/types'
import {
  CartContext,
  getCartFromStorage,
  saveCartToStorage,
  calculateCartTotals,
} from '@/lib/cart'

export default function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setItems(getCartFromStorage())
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      saveCartToStorage(items)
    }
  }, [items, isHydrated])

  const addItem = useCallback((product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, quantity }]
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId))
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const { totalItems, subtotal, shippingFee, total } =
    calculateCartTotals(items)

  return (
    <CartContext value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      shippingFee,
      total,
    }}>
      {children}
    </CartContext>
  )
}
