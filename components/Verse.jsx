import { getVerse } from "@/lib/data";
import AuthorCommentary from "@/components/AuthorCommentary";
import AuthorTranslation from "@/components/AuthorTranslation";

const Verse = async ({ chapterNumber, verseNumber }) => {
  const verse = await getVerse(chapterNumber, verseNumber[1]);

  const meanings = verse.word_meanings.replace(/;\s*/g, ";     ");

  return (
    <div className="min-h-screen p-4 mt-4">
      <div className="container mx-auto text-center">
        <h1 className="text-xl md:text-5xl lg:text-4xl text-orange-900 mb-8">
          Bhagavad Gita {verse.chapter_number}.{verse.verse_number}
        </h1>
        <div className="mb-6">
          <p className="text-xl md:text-2xl italic text-gray-800 leading-relaxed">
            {verse.text}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-xl md:text-2xl italic text-gray-800 leading-relaxed">
            {verse.transliteration}
          </p>
        </div>

        <div className="mt-8 p-6 bg-orange-50 rounded-xl shadow-lg text-left max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-orange-800">
            Meaning:
          </h2>
          <p className="text-lg leading-relaxed whitespace-pre-wrap text-gray-800">
            {meanings}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-12">
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
