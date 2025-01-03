import React from "react";

const VerseSkeleton = () => {
  return (
    <div className="min-h-screen p-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="h-8 w-2/3 mx-auto mb-4 bg-gray-200 animate-pulse rounded"></div>
        <div className="h-6 w-3/4 mx-auto mb-2 bg-gray-200 animate-pulse rounded"></div>
        <div className="h-6 w-2/3 mx-auto mb-2 bg-gray-200 animate-pulse rounded"></div>
      </div>
    </div>
  );
};

export default VerseSkeleton;
