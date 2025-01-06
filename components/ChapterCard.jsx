import Link from "next/link";

const ChapterCard = ({ chapter }) => {
  const { chapter_number, verses_count, translation, summary } = chapter;

  return (
    <div className="border border-orange-100 bg-orange-50 rounded-lg shadow-lg p-4 sm:p-6 m-2 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="flex-grow">
        <h2 className="text-xl sm:text-2xl mb-2 text-orange-900">
          Chapter {chapter_number}: {translation}
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          Verses:{" "}
          <span className="font-medium text-gray-900">{verses_count}</span>
        </p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {summary.en.length > 150
            ? `${summary.en.slice(0, 150)}...`
            : summary.en}
        </p>
      </div>
      <div className="mt-auto">
        <Link
          href={`/chapters/${chapter_number}`}
          className="inline-block w-full text-center px-4 py-2 text-white bg-orange-600 border border-orange-700 rounded-lg hover:bg-orange-700 hover:border-orange-800 transition-colors duration-300"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ChapterCard;
