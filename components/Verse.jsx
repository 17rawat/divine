import { getVerse } from "@/lib/data";

const Verse = async ({ chapterNumber, verseNumber }) => {
  const verse = await getVerse(chapterNumber, verseNumber[1]);

  const transliterationLines = verse.transliteration.split(".");

  return (
    <div className="min-h-screen p-4 mt-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl mb-4">
          Bhagavad Gita {verse.chapter}.{verse.verse}
        </h1>
        <div className="mb-2">
          <p className="text-2xl italic">{verse.slok}</p>
        </div>
        <div>
          {transliterationLines.map((line, index) => (
            <p key={index} className="text-2xl italic">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Commentry by Authors */}
    </div>
  );
};

export default Verse;
