export const metadata = {
  title: "About the Bhagavad Gita",
  description:
    "Learn about the Bhagavad Gita, its teachings, and its relevance in the modern world.",
};

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-center text-orange-900">
            The Bhagavad Gita
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 text-orange-800">
                Sacred Dialogue
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                The Bhagavad Gita, meaning "The Song of God," is a 700-verse
                Sanskrit scripture that forms part of the Hindu epic
                Mahabharata. This timeless dialogue between Lord Krishna and
                Arjuna takes place on the battlefield of Kurukshetra, just
                before the start of the great war. As Arjuna faces a moral
                dilemma, Krishna imparts profound wisdom that has resonated with
                seekers of truth for millennia.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 text-orange-800">
                Divine Wisdom
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-4">
                The Gita's teachings transcend religious boundaries, offering
                profound insights into:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Dharma (Duty)",
                  "Karma (Action)",
                  "Bhakti (Devotion)",
                  "Jnana (Knowledge)",
                ].map((item, index) => (
                  <li key={index} className="p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl lg:text-2xl text-orange-800 mb-2">
                      {item}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg">
                      {item === "Dharma (Duty)"
                        ? "Understanding one's purpose and responsibilities in life"
                        : item === "Karma (Action)"
                        ? "The law of cause and effect and righteous action"
                        : item === "Bhakti (Devotion)"
                        ? "The path of devotional service and divine love"
                        : "The pursuit of spiritual wisdom and self-realization"}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 text-orange-800">
                Universal Message
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Though spoken over 5000 years ago, the Gita's message remains
                remarkably relevant today. It addresses the eternal human quest
                for meaning, purpose, and happiness. The text provides practical
                guidance for dealing with life's challenges, emotional
                turbulence, and spiritual growth. Its teachings have inspired
                countless individuals across cultures, including philosophers,
                scientists, and leaders like Mahatma Gandhi and Albert Einstein.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 text-orange-800">
                Spiritual Practice
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                The Gita teaches various spiritual practices including
                meditation, selfless service, and the importance of controlling
                the mind. It emphasizes that true happiness comes not from
                external achievements but from inner peace and self-realization.
                The text introduces different forms of yoga, not just as
                physical exercises, but as paths to union with the divine:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li className="text-sm sm:text-base lg:text-lg">
                  Karma Yoga: The path of selfless action
                </li>
                <li className="text-sm sm:text-base lg:text-lg">
                  Bhakti Yoga: The path of devotion
                </li>
                <li className="text-sm sm:text-base lg:text-lg">
                  Jnana Yoga: The path of knowledge
                </li>
                <li className="text-sm sm:text-base lg:text-lg">
                  Raja Yoga: The path of meditation
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 text-orange-800">
                Structure and Content
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-4">
                The Bhagavad Gita is structured into 18 chapters, each focusing
                on different aspects of spiritual life:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Chapters 1-6", "Chapters 7-12", "Chapters 13-18"].map(
                  (chapter, index) => (
                    <div key={index} className="p-4 rounded-lg">
                      <h3 className="text-lg sm:text-xl lg:text-2xl text-orange-800 mb-2">
                        {chapter}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg">
                        {chapter === "Chapters 1-6"
                          ? "Focus on Karma Yoga and the nature of the self"
                          : chapter === "Chapters 7-12"
                          ? "Explore Bhakti Yoga and the nature of the divine"
                          : "Delve into Jnana Yoga and the relationship between the individual and the cosmos"}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 text-orange-800">
                Key Teachings
              </h2>
              <ul className="space-y-4">
                {[
                  "Immortality of the Soul",
                  "Detachment",
                  "Equanimity",
                  "Self-Realization",
                ].map((teaching, index) => (
                  <li key={index} className="p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl lg:text-2xl text-orange-800 mb-2">
                      {teaching}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg">
                      {teaching === "Immortality of the Soul"
                        ? "The Gita teaches that the soul (Atman) is eternal and indestructible."
                        : teaching === "Detachment"
                        ? "It emphasizes the importance of performing one's duties without attachment to the results."
                        : teaching === "Equanimity"
                        ? "The text encourages maintaining balance in both success and failure."
                        : "Ultimate liberation (Moksha) is achieved through realizing one's true nature."}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 text-orange-800">
                Conclusion
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                The Bhagavad Gita continues to be a source of inspiration and
                guidance for millions around the world. Its timeless wisdom
                offers practical solutions to the complexities of modern life,
                encouraging individuals to live with purpose, compassion, and
                spiritual awareness. Whether approached as a religious text, a
                philosophical treatise, or a guide to ethical living, the Gita
                has something profound to offer to every sincere seeker.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
