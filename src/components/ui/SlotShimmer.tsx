interface SlotShimmerProps {
  rowCount?: number;
}

const SlotShimmer = ({ rowCount = 15 }: SlotShimmerProps) =>
  <div className="space-y-2">
    {[...Array(rowCount)].map((_, i) => (
      <div key={i} className="h-12 bg-gray-200 rounded animate-pulse" />
    ))}
  </div>

export default SlotShimmer;