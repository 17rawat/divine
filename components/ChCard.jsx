const ChCard = ({ ch }) => {
  const { chapter_number, translation, verses_count, meaning, summary } = ch;

  return (
    <div className="p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl min-w-[90%] md:max-w-4xl mx-auto mt-10 border border-gray-800">
      <div className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
        {translation}
      </div>
      <div className="text-gray-400 text-xl sm:text-2xl mb-4 text-center">
        Chapter {chapter_number}
      </div>
      <div className="text-xl sm:text-2xl mb-6">
        <strong className="font-semibold">Verses:</strong> {verses_count}
      </div>
      <div className="text-lg sm:text-xl mb-6 leading-relaxed">
        <strong className="font-semibold">Meaning:</strong> {meaning.en}
      </div>
      <div className="text-lg sm:text-xl mb-6 leading-relaxed">
        <strong className="font-semibold">Summary:</strong> {summary.en}
      </div>
    </div>
  );
};

export default ChCard;
