export const getAllChapters = async () => {
  const data = await fetch("https://vedicscriptures.github.io/chapters/", {
    cache: "force-cache",
  });

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const chapters = await data.json();
  return chapters;
};

export const getChapter = async (chapter_number) => {
  const data = await fetch(
    `https://vedicscriptures.github.io/chapter/${chapter_number}/`,
    {
      cache: "force-cache",
    }
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

  const data = await fetch(url, options, { cache: "force-cache" });
  const verses = await data.json();
  // console.log(verses);
  return verses;
};

export const getVerse = async (chapterNumber, verseNumber) => {
  const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/${verseNumber}/`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": process.env.API_HOST,
    },
  };

  // const url = `https://vedicscriptures.github.io/slok/${chapterNumber}/${verseNumber}`;
  const data = await fetch(url, options, { cache: "force-cache" });
  const verse = await data.json();

  return verse;
};
