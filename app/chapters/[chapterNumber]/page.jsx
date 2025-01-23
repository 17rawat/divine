import { getChapter, getAllChapters } from "@/lib/data";
import ChapterOverviewCard from "@/components/ChapterOverviewCard";
import VersesCard from "@/components/VersesCard";

import { Suspense } from "react";
import VersesCardSkeleton from "@/components/skeleton/VersesCardSkeleton";

export async function generateMetadata({ params }) {
  const { chapterNumber } = await params;
  const chapter = await getChapter(chapterNumber);

  return {
    title: `${chapter.translation} - Chapter ${chapter.chapter_number}`,
  };
}

export async function generateStaticParams() {
  const chapters = await getAllChapters();

  return chapters.map((chapter) => ({
    chapterNumber: String(chapter.chapter_number),
  }));
}

const ChapterPage = async ({ params }) => {
  const { chapterNumber } = await params;

  const chapter = await getChapter(chapterNumber);

  return (
    <div>
      <ChapterOverviewCard chapter={chapter} />

      <Suspense fallback={<VersesCardSkeleton />}>
        <VersesCard chapterNumber={chapterNumber} />
      </Suspense>
    </div>
  );
};

export default ChapterPage;
