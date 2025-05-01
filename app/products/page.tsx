import { Suspense } from "react"

import ProductGrid from "@/components/product/product-grid"
import ProductsLoading from "@/components/product/products-loading"
import { ProductFilters } from "@/components/product/product-filters"

export const metadata = {
  title: "Products | Mellow",
  description: "Browse our collection of products",
}

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">All Products</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <ProductFilters />
        </div>
        <div className="md:col-span-3">
          <Suspense fallback={<ProductsLoading />}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
