const ChapterOverviewCard = ({ chapter }) => {
  const { chapter_number, translation, verses_count, meaning, summary } =
    chapter;

  return (
    <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-orange-50 max-w-4xl mx-auto mt-4 ">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h2 className="text-4xl text-orange-900">{translation}</h2>
        <p className="text-xl text-orange-700 mt-2">Chapter {chapter_number}</p>
      </div>

      {/* Divider Section */}
      <div className="border-t border-orange-300 my-4"></div>

      {/* Details Section */}
      <div className="space-y-4 text-gray-800">
        <div className="text-xl">
          <span className="font-semibold text-orange-800">Verses: </span>
          {verses_count}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-800 mb-2">
            Meaning:
          </h3>
          <p className="text-lg leading-relaxed">{meaning.en}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-800 mb-2">
            Summary:
          </h3>
          <p className="text-lg leading-relaxed">{summary.en}</p>
        </div>
      </div>
    </div>
  );
};

export default ChapterOverviewCard;
