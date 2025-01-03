import { getChapter, getVerses } from "@/lib/data";
import ChCard from "@/components/ChCard";
import VersesCard from "@/components/VersesCard";

import { Suspense } from "react";
import VersesCardSkeleton from "@/components/skeleton/VersesCardSkeleton";

const ChapterPage = async ({ params }) => {
  const { chapterNumber } = await params;

  const chapter = await getChapter(chapterNumber);

  return (
    <div>
      <ChCard chapter={chapter} />

      <Suspense fallback={<VersesCardSkeleton />}>
        <VersesCard chapterNumber={chapterNumber} />
      </Suspense>
    </div>
  );
};

export default ChapterPage;
