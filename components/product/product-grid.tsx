import type { Product } from "@/lib/types"
import ProductCard from "./product-card"

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export default async function ProductGrid() {
  const products = await getProducts()

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
