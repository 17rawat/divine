import React from "react";

const AuthoredData = ({ authorData }) => {
  return (
    <div>
      {authorData && (
        <div className="shadow-md rounded-lg p-4 text-gray-100">
          <h2 className="text-2xl font-bold mb-2 text-gray-100">
            {authorData.author_name}
          </h2>
          <p className="text-lg italic text-orange-400 mb-2">
            {authorData.description}
          </p>
          <p className="text-gray-300">Authored in {authorData.language}</p>
        </div>
      )}
    </div>
  );
};

export default AuthoredData;
