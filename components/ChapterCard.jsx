import Link from "next/link";

const ChapterCard = ({ chapter }) => {
  const { chapter_number, verses_count, translation, summary } = chapter;

  return (
    <div className="border border-gray-800 rounded-lg shadow-md p-4 sm:p-6 m-2">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-orange-400">
        Chapter {chapter_number}: {translation}
      </h2>
      <p className="text-sm  mb-2">
        Verses: <span className="font-medium">{verses_count}</span>
      </p>
      <p className=" text-sm mb-4 line-clamp-3">
        {summary.en.length > 150
          ? `${summary.en.slice(0, 150)}...`
          : summary.en}
      </p>
      <Link
        href={`/chapters/${chapter_number}`}
        className="inline-block px-4 py-2 text-orange-400 border border-gray-600 rounded-lg hover:bg-gray-300 hover:text-black transition duration-300"
      >
        Explore
      </Link>
    </div>
  );
};

export default ChapterCard;
