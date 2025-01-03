const VersesCard = async ({ verses }) => {
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

  return (
    <div className="min-h-screen flex justify-center items-center p-6 mt-20">
      <div className="w-full max-w-6xl">
        {final.map((item) => (
          <div
            key={item.verse}
            className="mb-6 border-b border-gray-800 pb-4 transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-lg font-semibold sm:w-1/4">
                Verse {item.verse}
              </p>
              <p className="text-lg sm:text-lg sm:w-3/4">{item.translation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VersesCard;
