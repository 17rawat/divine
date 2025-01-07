const ChapterCardSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 sm:p-6 m-2 animate-pulse">
      {/* Skeleton for Chapter Title */}
      <div className="h-6 bg-gray-200 rounded mb-2"></div>

      {/* Skeleton for Verses Count */}
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>

      {/* Skeleton for Summary - Three lines of text */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      </div>

      {/* Skeleton for the Explore Button */}
      <div className="mt-4 h-8 bg-gray-200 rounded w-20"></div>
    </div>
  );
};

export default ChapterCardSkeleton;
