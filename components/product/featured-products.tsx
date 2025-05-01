import type { Product } from "@/lib/types"
import ProductCard from "./product-card"

async function getFeaturedProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products?limit=4", { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error("Failed to fetch featured products")
  }

  return res.json()
}

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
