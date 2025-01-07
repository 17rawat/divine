import Link from "next/link";

const YogaCard = ({ practice }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl bg-orange-50 max-w-4xl mx-auto mt-4">
      {/* Title Section */}
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-orange-900 font-bold">
          {practice.title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-orange-700 mt-2">
          {practice.description}
        </p>
      </div>

      {/* Simple Divider */}
      <div className="w-full h-px bg-orange-300 my-4"></div>

      {/* Details Section */}
      <div className="space-y-4 text-gray-800">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          {practice.details}
        </p>

        {/* Links Section */}
        <div>
          <div className="space-y-4">
            {[...new Set(practice.urls.map((item) => item.orator))].map(
              (orator) => (
                <div key={orator} className="p-2 sm:p-3 rounded-lg">
                  <h4 className="text-base sm:text-lg font-semibold text-orange-800 mb-1 sm:mb-2">
                    Teachings of {orator}:
                  </h4>
                  <div className="space-y-1 sm:space-y-2 ml-2 sm:ml-4">
                    {practice.urls
                      .filter((item) => item.orator === orator)
                      .map((item, index) => (
                        <Link
                          target="_blank"
                          key={index}
                          href={item.source}
                          className="block text-sm sm:text-base text-orange-700 hover:text-orange-900"
                        >
                          {item.videotitle || `Link ${index + 1}`}
                        </Link>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaCard;
