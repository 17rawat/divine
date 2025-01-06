import React from "react";
import ChapterCardSkeleton from "@/components/skeleton/ChapterCardSkeleton";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(12)].map((_, index) => (
        <ChapterCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Loading;
