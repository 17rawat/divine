const VerseCardSkeleton = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-6xl">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="mb-6 border-b border-gray-800 pb-4">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="bg-gray-300 h-6 w-24 rounded animate-pulse sm:w-1/4"></div>
              <div className="bg-gray-300 h-6 w-full rounded animate-pulse sm:w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerseCardSkeleton;
