import { verseOfTheDay } from "@/lib/data";

const VerseOfTheDay = async () => {
  const verse = await verseOfTheDay();

  return (
    <section className="bg-orange-50 max-w-7xl mx-auto my-8 px-6 py-2">
      <h2 className="text-3xl text-orange-900 text-center mb-4">
        📖 Verse of the Day
      </h2>

      <div className="min-h-[300px] ">
        {" "}
        {/* Add a minimum height to prevent layout shift */}
        <p className="text-lg text-orange-800 italic text-center mb-6">
          {verse.sanskrit}
        </p>
        <p className="text-lg text-orange-800 italic text-center mb-6">
          {verse.transliteration}
        </p>
        <p className="text-lg text-gray-800 italic text-center mb-6">
          {verse.translation}
        </p>
        <p className="text-lg text-gray-800 italic text-center mb-6">
          Bhagavad Gita - Chapter {verse.chapter} Verse {verse.verse}
        </p>
      </div>
    </section>
  );
};

export default VerseOfTheDay;
