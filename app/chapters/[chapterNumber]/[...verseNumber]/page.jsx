import React from "react";
import { getVerse } from "@/lib/data";
import Verse from "@/components/Verse";
import { Suspense } from "react";

import VerseSkeleton from "@/components/skeleton/VerseSkeleton";

const VersePage = async ({ params }) => {
  const { verseNumber, chapterNumber } = await params;
  // console.log(verseNumber, chapterNumber);

  // const verse = await getVerse(chapterNumber, verseNumber[1]);
  // sconsole.log(verse);

  return (
    <div>
      <Suspense fallback={<VerseSkeleton />}>
        {/* <Verse verse={verse} /> */}
        <Verse chapterNumber={chapterNumber} verseNumber={verseNumber} />
      </Suspense>
    </div>
  );
};

export default VersePage;
