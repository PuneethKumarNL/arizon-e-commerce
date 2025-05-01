"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"

const categories = ["All Categories", "Electronics", "Jewelry", "Men's Clothing", "Women's Clothing"]

const priceRanges = ["Under $25", "$25 to $50", "$50 to $100", "$100 to $200", "Over $200"]

export function ProductFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)
  const [categoriesOpen, setCategoriesOpen] = useState(true)
  const [priceOpen, setPriceOpen] = useState(true)

  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-4">
        <h2 className="mb-4 text-lg font-semibold">Filters</h2>

        {/* Categories */}
        <Collapsible open={categoriesOpen} onOpenChange={setCategoriesOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex w-full justify-between p-0 font-medium">
              Categories
              <ChevronDown className={`h-4 w-4 transition-transform ${categoriesOpen ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-2 space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-gray-100"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  {selectedCategory === category && <Check className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator className="my-4" />

        {/* Price Range */}
        <Collapsible open={priceOpen} onOpenChange={setPriceOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex w-full justify-between p-0 font-medium">
              Price Range
              <ChevronDown className={`h-4 w-4 transition-transform ${priceOpen ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-2 space-y-1">
              {priceRanges.map((range) => (
                <button
                  key={range}
                  className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-gray-100"
                  onClick={() => setSelectedPriceRange(range)}
                >
                  {range}
                  {selectedPriceRange === range && <Check className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator className="my-4" />

        <Button className="w-full" variant="outline">
          Clear Filters
        </Button>
      </div>
    </div>
  )
}
