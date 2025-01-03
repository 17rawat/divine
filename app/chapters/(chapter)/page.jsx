import ChapterCard from "@/components/ChapterCard";
import { getAllChapters } from "@/lib/data";
import { Suspense } from "react";

const ChaptersPage = async () => {
  const chapters = await getAllChapters();
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {chapters.map((chapter) => (
        <ChapterCard key={chapter.chapter_number} chapter={chapter} />
      ))}
    </div>
  );
};

export default ChaptersPage;
