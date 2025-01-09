import { verseOfTheDay } from "@/lib/data";

const VerseOfTheDay = async () => {
  const verse = await verseOfTheDay();

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="max-w-3xl mx-auto">
        <p className="text-2xl text-orange-900 text-center mb-8 font-medium leading-relaxed">
          {verse.sanskrit}
        </p>
        <p className="text-xl text-orange-800 text-center mb-8 italic">
          {verse.transliteration}
        </p>
        <p className="text-lg text-gray-700 text-center mb-8">
          {verse.translation}
        </p>
        <p className="text-sm text-orange-600 text-center font-medium">
          Bhagavad Gita - Chapter {verse.chapter}, Verse {verse.verse}
        </p>
      </div>
    </div>
  );
};

export default VerseOfTheDay;
