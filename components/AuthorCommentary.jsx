"use client";

import { useState } from "react";
import AuthoredData from "@/components/AuthoredData";

const AuthorCommentary = ({ verse }) => {
  const [author, setAuthor] = useState("");

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const authorData = verse.commentaries.find(
    (commentary) => commentary.author_name === author
  );

  return (
    <div className="m-5 sm:m-10">
      <select
        className="w-full p-2 mb-4 rounded-lg text-black"
        onChange={handleAuthorChange}
        value={author}
      >
        <option value="" disabled>
          Select an author for commentary
        </option>
        {verse.commentaries.map((commentary) => (
          <option key={commentary.id} value={commentary.author_name}>
            {commentary.author_name}
          </option>
        ))}
      </select>

      <AuthoredData authorData={authorData} />
    </div>
  );
};

export default AuthorCommentary;
