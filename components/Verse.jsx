import { getVerse } from "@/lib/data";
import AuthorCommentary from "@/components/AuthorCommentary";
import AuthorTranslation from "@/components/AuthorTranslation";

const Verse = async ({ chapterNumber, verseNumber }) => {
  const verse = await getVerse(chapterNumber, verseNumber[1]);

  const meanings = verse.word_meanings.replace(/;\s*/g, ";     ");

  return (
    <div className="min-h-screen p-4 mt-8">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
          Bhagavad Gita {verse.chapter_number}.{verse.verse_number}
        </h1>
        <div className="mb-4">
          <p className="text-xl md:text-2xl italic text-orange-400">
            {verse.text}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xl md:text-2xl italic text-orange-400">
            {verse.transliteration}
          </p>
        </div>

        <div className="mt-6 p-4 rounded-lg shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-2">Meaning:</h2>
          <p className="text-lg leading-relaxed whitespace-pre-wrap">
            {meanings}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="w-full md:w-1/2">
          <AuthorTranslation verse={verse} />
        </div>
        <div className="w-full md:w-1/2">
          <AuthorCommentary verse={verse} />
        </div>
      </div>
    </div>
  );
};

export default Verse;
