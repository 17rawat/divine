export const getAllChapters = async () => {
  const data = await fetch("https://vedicscriptures.github.io/chapters/", {
    cache: "force-cache",
  });

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

export const verseOfTheDay = async () => {
  const data = await fetch(
    "https://677cd9ba4496848554c7e7cf.mockapi.io/verse",
    { cache: "force-cache" }
  );
  const verses = await data.json();
  const currentDay = new Date().getDate();
  const selectedVerse = verses[currentDay - 1];
  // console.log(selectedVerse);

  return selectedVerse;
};

export const spiritualPractices = [
  {
    title: "Karma Yoga",
    description: "The path of selfless action",
    details:
      "Learn how to perform actions without attachment to results, dedicating all work as service to the Divine.",
    urls: [
      {
        videotitle: "Karma Yoga: The Path of Action (Part 1)",
        source: "https://www.youtube.com/watch?v=-rgNWIeF9Qo",
        orator: "Swami Sarvapriyananda",
      },

      {
        videotitle: "Karma Yoga: The Path of Action (Part 2)",
        source: "https://www.youtube.com/watch?v=n-SUJ0Vwelk&t=1432s",
        orator: "Swami Sarvapriyananda",
      },

      {
        videotitle: "Introduction to Karma Yoga: Art of Effective Leadership",
        source:
          "https://www.youtube.com/playlist?list=PLFmQ3Upk_iK55JLEWyzFagPLbDAv_bpDY",

        orator: "Pravrajika Divyanandaprana",
      },
    ],
  },

  {
    title: "Bhakti Yoga",
    description: "The path of devotion",
    details:
      "Discover the practice of divine love and devotional service through worship, chanting, and remembrance.",
    urls: [
      {
        videotitle: "Bhakti Yoga: The Path of Devotion",
        source: "https://www.youtube.com/watch?v=dDIdHh2-mF8&t=2749s",
        orator: "Swami Sarvapriyananda",
      },

      {
        videotitle: "Bhakti Yoga: Is Bhagavan Real or Unreal?",
        source: "https://www.youtube.com/watch?v=I1PXs3pNtVM&t=2093s",
        orator: "Prof. Edwin Bryant",
      },
    ],
  },
  {
    title: "Jnana Yoga",
    description: "The path of knowledge",
    details:
      "Explore the philosophical aspects of self-realization through study, contemplation, and discrimination.",
    urls: [
      {
        videotitle: "Swami Vivekananda's Jnana Yoga",
        source:
          "https://www.youtube.com/playlist?list=PLWjpkY4mU2RDYLw576U41iMRofigx5sID",
        orator: "Swami Sarvapriyananda",
      },
    ],
  },
  {
    title: "Raja Yoga",
    description: "The path of meditation",
    details:
      "Master the science of mind control through concentration, meditation, and systematic spiritual practice.",
    urls: [
      {
        videotitle: "Raja Yoga: The Path of Meditation (Part 1)",
        source: "https://www.youtube.com/watch?v=Bj5_lNQdJPw&t=195s",
        orator: "Swami Sarvapriyananda",
      },

      {
        videotitle: "Raja Yoga: The Path of Meditation (Part 2)",
        source: "https://www.youtube.com/watch?v=e9uBaJEKgOw&t=15s",
        orator: "Swami Sarvapriyananda",
      },
    ],
  },
];
