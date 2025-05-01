"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/types"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product)
    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-sm font-medium text-gray-700">
          <Link href={`/products/${product.id}`}>
            {product.title.length > 40 ? `${product.title.substring(0, 40)}...` : product.title}
          </Link>
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={isAdding}
            className={cn("transition-all", isAdding && "bg-green-600")}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {isAdding ? "Added" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  )
}
