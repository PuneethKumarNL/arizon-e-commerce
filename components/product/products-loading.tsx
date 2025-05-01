export default function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="aspect-square animate-pulse bg-gray-200" />
          <div className="p-4">
            <div className="mb-2 h-4 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="mb-4 h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            <div className="mt-auto flex items-center justify-between">
              <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
              <div className="h-8 w-20 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
