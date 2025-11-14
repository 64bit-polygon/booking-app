import SlotShimmer from '@/components/ui/SlotShimmer';

const Loading = () =>
  <main className="min-h-screen p-8 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <div className="h-10 w-64 bg-gray-200 rounded mb-2 animate-pulse" />
      <div className="h-6 w-96 bg-gray-200 rounded mb-8 animate-pulse" />
      
      <div className="bg-white rounded-lg p-6 shadow">
        <div className="h-8 w-48 bg-gray-200 rounded mb-4 animate-pulse" />
        <SlotShimmer />
      </div>
    </div>
  </main>

export default Loading;