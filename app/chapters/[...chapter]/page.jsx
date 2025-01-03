import { getChapter, getVerses } from "@/lib/data";
import ChCard from "@/components/ChCard";
import VersesCard from "@/components/VersesCard";

const Chapter = async ({ params }) => {
  // console.log("params", params);
  const { chapter } = await params;

  const ch = await getChapter(chapter[0]);
  const verses = await getVerses(parseInt(chapter[0]));
  // console.log(verses);

  return (
    <div>
      <ChCard ch={ch} />
      <VersesCard verses={verses} />
    </div>
  );
};

export default Chapter;
