const Loading = () =>
  <main className="min-h-screen p-8">
    <div className="max-w-6xl mx-auto">
      <div className="h-10 w-64 bg-gray-200 rounded mb-8 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border rounded-lg p-6">
            <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded mb-10 animate-pulse" />
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>

export default Loading;