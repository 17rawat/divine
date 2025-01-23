import { getVerses } from "@/lib/data";
import Link from "next/link";

const VersesCard = async ({ chapterNumber }) => {
  const verses = await getVerses(chapterNumber);

  const final = [];

  verses.forEach((verse) => {
    const authoredBy = verse.translations.filter(
      (translation) => translation.author_name === "Dr. S. Sankaranarayan"
    );

    authoredBy.forEach((translation) => {
      final.push({
        verse: verse.verse_number,
        translation: translation.description,
      });
    });
  });
  // console.log(final);

  return (
    <div className="min-h-screen flex justify-center items-center p-6 mt-10 text-gray-800">
      <div className="w-full max-w-6xl">
        {final.map((item) => (
          <div key={item.verse} className="mb-6 pb-4">
            <Link href={`/chapters/${chapterNumber}/verse/${item.verse}`}>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 hover:bg-orange-100 rounded-lg p-4 transition-all duration-300 ease-in-out">
                <p className="text-xl font-semibold sm:w-1/4 text-orange-800">
                  Verse {item.verse}
                </p>
                <p className="text-lg sm:text-lg sm:w-3/4">
                  {item.translation}
                </p>
              </div>
            </Link>

            {/* Divider after each verse heading */}
            <div className="border-t border-orange-300 mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VersesCard;
