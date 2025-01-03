export const getAllChapters = async () => {
  const data = await fetch("https://vedicscriptures.github.io/chapters/");
  const chapters = await data.json();
  return chapters;
};

export const getChapter = async (chapter_number) => {
  const data = await fetch(
    `https://vedicscriptures.github.io/chapter/${chapter_number}/`
  );
  const chapter = await data.json();
  return chapter;
};

export const getVerses = async (chapter_number) => {
  // console.log(typeof chapter_number);

  const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter_number}/verses/`;

  // console.log(process.env.API_KEY);

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": process.env.API_HOST,
    },
  };

  const data = await fetch(url, options);
  const verses = await data.json();
  // console.log(verses);
  return verses;
};
