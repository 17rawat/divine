import React from "react";

import Verse from "@/components/Verse";
import { Suspense } from "react";
import { getAllChapters } from "@/lib/data";

import VerseSkeleton from "@/components/skeleton/VerseSkeleton";

export async function generateMetadata({ params }) {
  const { chapterNumber, verseNumber } = await params;

  return {
    title: `Chapter ${chapterNumber} - Verse ${verseNumber[1]}`,
  };
}

export async function generateStaticParams() {
  const chapters = await getAllChapters();

  return chapters.map((chapter) => ({
    chapterNumber: String(chapter.chapter_number),
    verseNumber: Array.from({ length: chapter.verses_count }, (_, i) =>
      String(i + 1)
    ),
  }));
}

const VersePage = async ({ params }) => {
  const { chapterNumber, verseNumber } = await params;

  return (
    <div>
      <Suspense fallback={<VerseSkeleton />}>
        <Verse chapterNumber={chapterNumber} verseNumber={verseNumber} />
      </Suspense>
    </div>
  );
};

export default VersePage;
