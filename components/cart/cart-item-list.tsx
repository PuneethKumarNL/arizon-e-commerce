"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

export default function CartItemList() {
  const { items, removeItem, updateItemQuantity } = useCart()

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col rounded-lg border p-4 sm:flex-row sm:items-center">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
          </div>

          <div className="mt-4 flex-1 sm:mt-0 sm:ml-6">
            <h3 className="text-base font-medium">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)}</p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Remove
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
