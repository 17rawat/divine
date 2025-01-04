"use client";

import React, { useState } from "react";
import AuthoredData from "@/components/AuthoredData";

const AuthorTranslation = ({ verse }) => {
  const [author, setAuthor] = useState("");

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const authorData = verse.translations.find(
    (translation) => translation.author_name === author
  );

  return (
    <div className="m-5 sm:m-10">
      <select
        className="w-full p-2 mb-4 rounded-lg text-black"
        onChange={handleAuthorChange}
        value={author}
      >
        <option value="" disabled>
          Select an author for translation
        </option>
        {verse.translations.map((translation) => (
          <option key={translation.id} value={translation.author_name}>
            {translation.author_name}
          </option>
        ))}
      </select>

      <AuthoredData authorData={authorData} />
    </div>
  );
};

export default AuthorTranslation;
